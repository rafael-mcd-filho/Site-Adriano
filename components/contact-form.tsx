"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useActionState, useEffect, useRef, useState } from "react";
import {
  initialContactFormState,
  submitContact,
} from "@/app/actions";
import { ButtonContent } from "@/components/button-content";
import { captureContactAttribution } from "@/lib/contact-attribution";

type ContactFormProps = {
  page: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  available?: boolean;
};

/** Empilha no dataLayer mesmo sem GTM: quando ele entrar, a fila já existe. */
function track(event: string, details: Record<string, string>) {
  const dataLayer = ((window as Window & {
    dataLayer?: Array<Record<string, string>>;
  }).dataLayer ||= []);
  dataLayer.push({ event, ...details });
}

/**
 * Máscara de telefone brasileiro. Aceita fixo (10 dígitos) e celular (11),
 * formatando enquanto a pessoa digita. O valor enviado continua sendo tratado
 * no servidor — a máscara é conveniência de digitação, não validação.
 */
function maskPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) return digits.replace(/^(\d{0,2})/, "($1");
  if (digits.length <= 6) return digits.replace(/^(\d{2})(\d{0,4})/, "($1) $2");
  if (digits.length <= 10) {
    return digits.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  }
  return digits.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
}

export function ContactForm({
  page,
  eyebrow = "Próximo passo",
  title = "Solicite uma avaliação.",
  description = "Preencha os dados abaixo. A equipe responderá pelo WhatsApp em horário comercial.",
  available = true,
}: ContactFormProps) {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialContactFormState,
  );
  const [whatsapp, setWhatsapp] = useState("");
  const attributionInput = useRef<HTMLInputElement>(null);

  // O funil do formulário precisa dos dois lados: quantos viram e quantos
  // enviaram. A conversão em si é marcada na /obrigado, que tem URL própria.
  useEffect(() => {
    track("form_view", { form_page: page });
    if (attributionInput.current) {
      attributionInput.current.value = JSON.stringify(
        captureContactAttribution(window.location.href, document.referrer),
      );
    }
  }, [page]);

  useEffect(() => {
    if (state.status === "error") {
      track("form_error", { form_page: page, form_message: state.message });
    }
  }, [state, page]);

  if (state.status === "success") {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <CheckCircle2 size={34} aria-hidden="true" />
        <span className="section-kicker">Solicitação recebida</span>
        <h2>Obrigado pelo contato.</h2>
        <p>{state.message}</p>
        <small>O envio deste formulário não confirma um agendamento.</small>
      </div>
    );
  }

  return (
    <div className="contact-card">
      <div className="contact-card-heading">
        <span className="section-kicker">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        {!available && (
          <p className="form-message notice" role="note">
            O contato por este formulário está temporariamente indisponível.
            O preenchimento será liberado quando o canal estiver disponível.
          </p>
        )}
      </div>

      <form action={formAction} className="contact-form" noValidate>
        <fieldset className="contact-fields" disabled={!available || pending}>
        <input type="hidden" name="page" value={page} />
        <input type="hidden" name="attribution" ref={attributionInput} defaultValue="" />
        <div className="honeypot" aria-hidden="true">
          <label htmlFor={"company-" + page}>Empresa</label>
          <input id={"company-" + page} name="company" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="field-grid">
          <div className="field">
            <label htmlFor={"name-" + page}>Como podemos chamar você?</label>
            <input
              id={"name-" + page}
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Seu nome"
              maxLength={100}
              aria-invalid={Boolean(state.errors?.name)}
              aria-describedby={state.errors?.name ? "name-error-" + page : undefined}
              required
            />
            {state.errors?.name && (
              <span className="field-error" id={"name-error-" + page}>
                {state.errors.name}
              </span>
            )}
          </div>

          <div className="field">
            <label htmlFor={"whatsapp-" + page}>Qual é o seu WhatsApp?</label>
            <input
              id={"whatsapp-" + page}
              name="whatsapp"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(83) 99999-9999"
              maxLength={15}
              value={whatsapp}
              onChange={(event) => setWhatsapp(maskPhone(event.target.value))}
              aria-invalid={Boolean(state.errors?.whatsapp)}
              aria-describedby={
                state.errors?.whatsapp ? "whatsapp-error-" + page : undefined
              }
              required
            />
            {state.errors?.whatsapp && (
              <span className="field-error" id={"whatsapp-error-" + page}>
                {state.errors.whatsapp}
              </span>
            )}
          </div>
        </div>

        <div className="field">
          <label htmlFor={"message-" + page}>Como podemos ajudar? <span>(opcional)</span></label>
          <textarea
            id={"message-" + page}
            name="message"
            rows={3}
            maxLength={1000}
            placeholder="Ex.: gostaria de saber os horários para uma consulta."
            aria-invalid={Boolean(state.errors?.message)}
            aria-describedby={
              "message-help-" + page + (state.errors?.message ? " message-error-" + page : "")
            }
          />
          <small id={"message-help-" + page}>Escreva apenas sua dúvida sobre o atendimento, sem informações clínicas.</small>
          {state.errors?.message && (
            <span className="field-error" id={"message-error-" + page}>{state.errors.message}</span>
          )}
        </div>

        <label className="consent-field">
          <input type="checkbox" name="consent" value="yes" required />
          <span>
            Autorizo o contato da equipe pelo WhatsApp para responder a esta
            solicitação. Consulte a{" "}
            <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
          </span>
        </label>
        {state.errors?.consent && (
          <span className="field-error">{state.errors.consent}</span>
        )}

        {state.status === "error" && (
          <p className="form-message error" role="alert">
            {state.message}
          </p>
        )}

        {/* Sem destino configurado o envio não pode fingir sucesso: a pessoa
            precisa saber que ninguém recebeu e para onde ir. */}
        {state.status === "configuration" && (
          <p className="form-message notice" role="alert">
            {state.message}
          </p>
        )}

        <button
          id={"cta-formulario-" + page}
          data-cta="cta-formulario"
          data-cta-page={page}
          className={
            pending ? "button form-submit" : "button button-motion form-submit"
          }
          type="submit"
          disabled={!available || pending}
        >
          {pending ? (
            "Enviando..."
          ) : (
            <ButtonContent>Solicitar contato</ButtonContent>
          )}
        </button>

        </fieldset>
      </form>
    </div>
  );
}
