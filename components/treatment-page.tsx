import { FaqSection } from "@/components/faq-section";
import { SectionWave } from "@/components/section-wave";
import { TreatmentAuthority } from "@/components/treatment/treatment-authority";
import { TreatmentConsultation } from "@/components/treatment/treatment-consultation";
import { TreatmentContact } from "@/components/treatment/treatment-contact";
import { TreatmentHero } from "@/components/treatment/treatment-hero";
import { TreatmentJourney } from "@/components/treatment/treatment-journey";
import { TreatmentMethod } from "@/components/treatment/treatment-method";
import { TreatmentObjections } from "@/components/treatment/treatment-objections";
import { TreatmentPain } from "@/components/treatment/treatment-pain";
import { TreatmentProof } from "@/components/treatment/treatment-proof";
import { TreatmentShell } from "@/components/treatment/treatment-shell";
import type { TreatmentContent } from "@/lib/content";

/** A narrativa e as etapas variam por serviço, preservando as seções visuais. */
export function TreatmentPage({ content }: { content: TreatmentContent }) {
  return (
    <TreatmentShell content={content}>
      <TreatmentHero content={content} />
      <TreatmentPain content={content} />
      {content.objectionsPosition !== "after-journey" && (
        <TreatmentObjections content={content} />
      )}
      <SectionWave />
      <TreatmentMethod content={content} />
      <SectionWave from="var(--navy-800)" to="var(--white)" flip />
      <TreatmentJourney content={content} />
      {content.objectionsPosition === "after-journey" && (
        <TreatmentObjections content={content} />
      )}
      <TreatmentAuthority />
      <TreatmentProof content={content} />
      <TreatmentConsultation content={content} />
      <FaqSection
        items={content.faqs}
        title={content.faqTitle}
        ctaId="cta-duvidas-whatsapp"
        whatsappMessage={content.whatsappMessage}
      />
      <SectionWave to="var(--navy-950)" />
      <TreatmentContact content={content} />
    </TreatmentShell>
  );
}
