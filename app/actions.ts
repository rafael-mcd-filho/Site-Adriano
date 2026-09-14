"use server";

import { redirect } from "next/navigation";
import { getContactPage, parseContactAttribution } from "@/lib/contact-attribution";
import { siteConfig } from "@/lib/site";

export type ContactFormState = {
  status: "idle" | "success" | "error" | "configuration";
  message: string;
  errors?: {
    name?: string;
    whatsapp?: string;
    message?: string;
    consent?: string;
    professionalRole?: string;
  };
};

export const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
};

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContact(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = clean(formData.get("name"));
  const whatsapp = clean(formData.get("whatsapp"));
  const objective = clean(formData.get("message")).replace(/\r\n?/g, "\n");
  const consent = clean(formData.get("consent"));
  const company = clean(formData.get("company"));
  const page = clean(formData.get("page"));
  const professional = page === "para-dentistas";
  const professionalRole = professional ? clean(formData.get("professionalRole")) : "";
  // Mantém o contrato do webhook e funciona também antes da hidratação do formulário.
  const message = professional
    ? [professionalRole ? "Profissão / especialidade: " + professionalRole : "", objective ? "Objetivo do contato: " + objective : ""].filter(Boolean).join("\n")
    : objective;
  const originPage = getContactPage(page);

  if (company) {
    return {
      status: "error",
      message: "Não foi possível enviar esta solicitação. Atualize a página e tente novamente.",
    };
  }

  const errors: ContactFormState["errors"] = {};
  const digits = whatsapp.replace(/\D/g, "");
  const phoneDigits = digits.length > 11 && digits.startsWith("55") ? digits.slice(2) : digits;

  if (name.length < 2 || name.length > 100 || /[\u0000-\u001f\u007f]/.test(name)) {
    errors.name = "Informe seu nome, com 2 a 100 caracteres.";
  }

  if (
    whatsapp.length > 25 ||
    !/^[\d\s()+.-]+$/.test(whatsapp) ||
    !/^[1-9]{2}(?:[2-9]\d{7}|9\d{8})$/.test(phoneDigits) ||
    /^(\d)\1+$/.test(phoneDigits)
  ) {
    errors.whatsapp = "Informe um WhatsApp com DDD.";
  }

  if (message.length > 1000 || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(message)) {
    errors.message = "Escreva uma mensagem com até 1.000 caracteres.";
  }
  if (professional && objective.length > 800) {
    errors.message = "Descreva o objetivo do contato em até 800 caracteres.";
  }
  if (professionalRole.length > 100 || /[\u0000-\u001f\u007f]/.test(professionalRole)) {
    errors.professionalRole = "Informe a profissão ou especialidade em até 100 caracteres.";
  }

  if (consent !== "yes") {
    errors.consent = "Autorize o contato para enviar a solicitação.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Revise os campos indicados.",
      errors,
    };
  }

  if (!originPage) {
    return {
      status: "error",
      message: "Não foi possível identificar este formulário. Atualize a página e tente novamente.",
    };
  }

  const webhook = process.env.FORM_WEBHOOK_URL;

  /**
   * Sem destino configurado, o envio não pode terminar em "recebemos sua
   * solicitação": ninguém receberia. Não há conversão sem entrega confirmada.
   */
  if (!webhook) {
    return {
      status: "configuration",
      message:
        "O formulário está temporariamente indisponível. Tente novamente mais tarde.",
    };
  }

  const attribution = parseContactAttribution(clean(formData.get("attribution")));
  const payload = {
    schemaVersion: 2,
    submissionId: crypto.randomUUID(),
    name,
    whatsapp: phoneDigits,
    message,
    // Compatibilidade com automações anteriores; migrar para `message`.
    reason: message,
    page,
    source: "site",
    formId: "contato-" + page,
    pageTitle: originPage.label,
    pagePath: originPage.path,
    pageUrl: new URL(originPage.path, siteConfig.url).href,
    attribution,
    consent: { granted: true, purpose: "responder-solicitacao-pelo-whatsapp", policyPath: "/politica-de-privacidade" },
    submittedAt: new Date().toISOString(),
  };

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      redirect: "error",
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      throw new Error("Webhook rejected the submission.");
    }
  } catch {
    // Não registrar conteúdo do lead nem URL privada do webhook nos logs.
    console.error("Contact form delivery failed");
    return {
      status: "error",
      message:
        "Não foi possível enviar agora. Tente novamente ou fale com a equipe pelo WhatsApp.",
    };
  }

  /**
   * Fora do try: `redirect` sinaliza por exceção e seria engolido pelo catch.
   * A URL própria é o que permite marcar a conversão no GTM e no Google Ads —
   * um estado de sucesso desenhado na mesma página não gera evento de rota e
   * não pode virar conversão.
   */
  redirect("/obrigado?origem=" + encodeURIComponent(page || "site"));
}
