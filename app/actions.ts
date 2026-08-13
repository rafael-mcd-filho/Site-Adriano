"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: {
    name?: string;
    whatsapp?: string;
    reason?: string;
    consent?: string;
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
  const reason = clean(formData.get("reason"));
  const consent = clean(formData.get("consent"));
  const company = clean(formData.get("company"));
  const page = clean(formData.get("page"));
  const source = clean(formData.get("source"));

  if (company) {
    return {
      status: "success",
      message:
        "Recebemos sua solicitação. A equipe entrará em contato pelo WhatsApp em horário comercial.",
    };
  }

  const errors: ContactFormState["errors"] = {};
  const phoneDigits = whatsapp.replace(/\D/g, "");

  if (name.length < 2) {
    errors.name = "Informe seu nome.";
  }

  if (phoneDigits.length < 10 || phoneDigits.length > 13) {
    errors.whatsapp = "Informe um WhatsApp com DDD.";
  }

  if (!reason) {
    errors.reason = "Escolha uma opção.";
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

  const payload = {
    name,
    whatsapp: phoneDigits,
    reason,
    page,
    source,
    submittedAt: new Date().toISOString(),
  };

  const webhook = process.env.FORM_WEBHOOK_URL;

  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Webhook rejected the submission.");
      }
    } catch {
      return {
        status: "error",
        message:
          "Não foi possível enviar agora. Tente novamente ou fale com a equipe pelo WhatsApp.",
      };
    }
  }

  return {
    status: "success",
    message:
      "Recebemos sua solicitação. A equipe entrará em contato pelo WhatsApp em horário comercial.",
  };
}

