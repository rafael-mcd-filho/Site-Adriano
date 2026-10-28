import { WhatsAppButton } from "@/components/whatsapp-button";
import type { TreatmentContent } from "@/lib/content";
import styles from "./treatment-refinement.module.css";

/**
 * Bloco 8 — fechamento e ação.
 *
 * O fecho é o único momento emocional puro da página: ele fala do objetivo de
 * vida, não do procedimento. No meio da leitura esse tom soaria vago perto dos
 * blocos técnicos; aqui ele é o que faz decidir.
 *
 * Contato exclusivamente pelo WhatsApp, como no hero. O rótulo é o
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
            label="Falar com a equipe pelo WhatsApp"
            className="button-whatsapp-solid"
          />
          <p className={styles.contactNote}>A equipe informa horários, valor da consulta e o que levar. A indicação de qualquer procedimento depende da avaliação.</p>
        </div>
      </div>
    </section>
  );
}
