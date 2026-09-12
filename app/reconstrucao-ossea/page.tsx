import { FaqSection } from "@/components/faq-section";
import { SectionWave } from "@/components/section-wave";
import { TrustMarquee } from "@/components/trust-marquee";
import { TreatmentAuthority } from "@/components/treatment/treatment-authority";
import { TreatmentConsultation } from "@/components/treatment/treatment-consultation";
import { TreatmentContact } from "@/components/treatment/treatment-contact";
import { TreatmentHero } from "@/components/treatment/treatment-hero";
import { TreatmentMethod } from "@/components/treatment/treatment-method";
import { TreatmentObjections } from "@/components/treatment/treatment-objections";
import { TreatmentPain } from "@/components/treatment/treatment-pain";
import { TreatmentProof } from "@/components/treatment/treatment-proof";
import { TreatmentShell } from "@/components/treatment/treatment-shell";
import { treatments } from "@/lib/content";
import { treatmentMetadata } from "@/lib/metadata";

const content = treatments["reconstrucao-ossea"];

export const metadata = treatmentMetadata(content);

/**
 * Objeções antes do método: a pessoa chega com um "não tem osso" já dito por
 * outro profissional. Enquanto essa frase não for esclarecida, nenhuma
 * explicação sobre planejamento é ouvida.
 *
 * A ordem das seções é decidida NESTE arquivo.
 */
export default function ReconstrucaoPage() {
  return (
    <TreatmentShell content={content}>
      <TreatmentHero content={content} />
      <TrustMarquee items={content.highlights} />
      <TreatmentPain content={content} />
      <TreatmentObjections content={content} />
      <SectionWave />
      <TreatmentMethod content={content} />
      <SectionWave from="var(--navy-800)" to="var(--surface)" flip />
      <TreatmentAuthority content={content} />
      <TreatmentProof content={content} />
      <TreatmentConsultation content={content} />
      <FaqSection
        items={content.faqs}
        title={content.faqTitle}
        ctaId="cta-duvidas-whatsapp"
        whatsappMessage={content.whatsappMessage}
      />
      <TreatmentContact content={content} />
    </TreatmentShell>
  );
}
