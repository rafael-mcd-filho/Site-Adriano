"use client";

import Link from "next/link";
import { CheckCircle2, LockKeyhole } from "lucide-react";
import { useActionState, useState } from "react";
import {
  initialContactFormState,
  submitContact,
} from "@/app/actions";
import { ButtonContent } from "@/components/button-content";

type ContactFormProps = {
  page: string;
  question: string;
  options: string[];
  eyebrow?: string;
  title?: string;
  description?: string;
};

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
  question,
  options,
  eyebrow = "Próximo passo",
  title = "Solicite uma avaliação.",
  description = "Preencha os dados abaixo. A equipe responderá pelo WhatsApp em horário comercial.",
}: ContactFormProps) {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialContactFormState,
  );
  const [whatsapp, setWhatsapp] = useState("");

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
      </div>

      <form action={formAction} className="contact-form" noValidate>
        <input type="hidden" name="page" value={page} />
        <input type="hidden" name="source" value="site" />
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

        <fieldset className="reason-fieldset">
          <legend>{question}</legend>
          <div className="reason-options">
            {options.map((option, index) => (
              <label className="reason-option" key={option}>
                <input
                  type="radio"
                  name="reason"
                  value={option}
                  required={index === 0}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
          {state.errors?.reason && (
            <span className="field-error">{state.errors.reason}</span>
          )}
        </fieldset>

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

        <button
          id={"cta-formulario-" + page}
          data-cta="cta-formulario"
          data-cta-page={page}
          className={
            pending ? "button form-submit" : "button button-motion form-submit"
          }
          type="submit"
          disabled={pending}
        >
          {pending ? (
            "Enviando..."
          ) : (
            <ButtonContent>Solicitar contato</ButtonContent>
          )}
        </button>

        <p className="form-privacy">
          <LockKeyhole size={15} aria-hidden="true" />
          Não envie exames, diagnósticos ou informações clínicas por este formulário.
        </p>
      </form>
    </div>
  );
}

