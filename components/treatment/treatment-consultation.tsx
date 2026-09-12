import { Clock3, ClipboardList, MessageSquareText } from "lucide-react";
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

        {/*
          Este bloco já foi uma lista do que levar, escondida num acordeão
          logo acima do botão. Quem não tinha os exames em mãos lia uma lista
          de pendências no momento de decidir. Agora ele desobriga, e está
          aberto: a mensagem só serve se for lida.
        */}
        <div className="consultation-preparation">
          <span className="consultation-icon" aria-hidden="true">
            <ClipboardList size={22} />
          </span>
          <div>
            <h3>{content.preparation.title}</h3>
            <p>{content.preparation.text}</p>
          </div>
        </div>

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
