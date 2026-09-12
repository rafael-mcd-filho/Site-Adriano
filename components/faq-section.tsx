import { FaqAccordion, type Faq } from "@/components/faq-accordion";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SectionBackdrop } from "@/components/section-backdrop";
import { SectionWave } from "@/components/section-wave";

type FaqSectionProps = {
  items: Faq[];
  badge?: string;
  title?: string;
  subtitle?: string;
  footText?: string;
  ctaId: string;
  whatsappMessage: string;
  whatsappLabel?: string;
  id?: string;
};

export function FaqSection({
  items,
  badge = "Dúvidas frequentes",
  title = "Informação antes da decisão.",
  subtitle = "Respostas educativas que não substituem uma avaliação individual.",
  footText = "Não encontrou sua dúvida?",
  ctaId,
  whatsappMessage,
  whatsappLabel = "Perguntar pelo WhatsApp",
  id = "duvidas",
}: FaqSectionProps) {
  return (
    <section className="section faq-section section-with-wave" id={id}>
      <SectionBackdrop />
      <div className="container faq-layout">
        <div className="section-heading centered-heading">
          <span className="pill-badge">{badge}</span>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <FaqAccordion items={items} />

        <div className="faq-foot">
          <p>{footText}</p>
          <WhatsAppButton
            ctaId={ctaId}
            message={whatsappMessage}
            label={whatsappLabel}
          />
        </div>
      </div>
      <SectionWave from="transparent" to="var(--navy-950)" />
    </section>
  );
}
