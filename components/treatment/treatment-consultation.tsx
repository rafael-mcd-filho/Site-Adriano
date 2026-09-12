import { Check, Clock3, ClipboardList, MessageSquareText, ChevronDown } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import type { TreatmentContent } from "@/lib/content";

/**
 * Bloco 6 — reversão de risco.
 *
 * Numa página de venda comum este é o lugar da garantia. Em saúde não existe
 * garantia de resultado, e prometer uma seria infração — então o que reduz
 * risco aqui é a previsibilidade: duração, o que levar e o que a pessoa sai
 * sabendo. Medo do desconhecido trocado por agenda.
 *
 * A frase de que a indicação pode não ser cirúrgica é o antiupsell, e é o
 * elemento que mais desarma este público específico.
 */
export function TreatmentConsultation({ content }: { content: TreatmentContent }) {
  return (
    <section className="section consultation-section" id="consulta">
      <div className="container">
        <div className="section-heading centered-heading">
          <span className="pill-badge">
            {content.consultationKicker ?? "A primeira consulta"}
          </span>
          <h2>{content.consultationTitle}</h2>
        </div>

        <div className="consultation-grid consultation-overview">
          <article className="consultation-card">
            <span className="consultation-icon" aria-hidden="true">
              <Clock3 size={22} />
            </span>
            <h3>Como funciona</h3>
            <p>{content.consultationIntro}</p>
          </article>

          <article className="consultation-card">
            <span className="consultation-icon" aria-hidden="true">
              <MessageSquareText size={22} />
            </span>
            <h3>O que vamos esclarecer</h3>
            <p>{content.consultationOutcome}</p>
          </article>
        </div>

        <details className="consultation-preparation">
          <summary>
            <ClipboardList size={20} aria-hidden="true" />
            O que levar à primeira consulta
            <ChevronDown size={18} aria-hidden="true" />
          </summary>
          <ul>
            {content.whatToBring.map((item) => (
              <li key={item}><Check size={15} aria-hidden="true" />{item}</li>
            ))}
          </ul>
        </details>

        <div className="consultation-note">
          <p>{content.consultationNote}</p>
          <WhatsAppButton
            ctaId="cta-consulta-whatsapp"
            message={content.whatsappMessage}
            label={content.primaryCta}
            className="button-whatsapp-solid"
          />
        </div>
      </div>
    </section>
  );
}
