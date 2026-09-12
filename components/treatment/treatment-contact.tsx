import { ContactForm } from "@/components/contact-form";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ctaLadder, type TreatmentContent } from "@/lib/content";

/**
 * Bloco 8 — fechamento e ação.
 *
 * O fecho é o único momento emocional puro da página: ele fala do objetivo de
 * vida, não do procedimento. No meio da leitura esse tom soaria vago perto dos
 * blocos técnicos; aqui ele é o que faz decidir.
 *
 * WhatsApp primeiro, formulário depois — a mesma ordem do hero. O rótulo é o
 * último degrau da escada: a esta altura a pessoa já sabe o que a avaliação é,
 * então o botão pode dizer o que ela faz.
 */
export function TreatmentContact({ content }: { content: TreatmentContent }) {
  return (
    <section className="section contact-section" id="contato">
      <div className="container">
        <div className="closing-copy">
          <h2>{content.closingTitle}</h2>
          <p>{content.closingText}</p>
          <WhatsAppButton
            ctaId="cta-final-whatsapp"
            message={content.whatsappMessage}
            label={ctaLadder.consultation}
            className="button-whatsapp-solid"
          />
        </div>

        <ContactForm
          available={Boolean(process.env.FORM_WEBHOOK_URL)}
          page={content.slug}
          eyebrow={
            content.contactForm?.eyebrow ??
            "Prefere que a equipe entre em contato?"
          }
          title={content.contactForm?.title ?? "Converse sobre a avaliação."}
          description={
            content.contactForm?.description ??
            "Deixe seu nome e WhatsApp para conversar sobre horários e funcionamento da consulta."
          }
        />
      </div>
    </section>
  );
}
