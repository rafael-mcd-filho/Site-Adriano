import { FaqSection } from "@/components/faq-section";
import { SectionWave } from "@/components/section-wave";
import { TrustMarquee } from "@/components/trust-marquee";
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
import { treatments } from "@/lib/content";
import { treatmentMetadata } from "@/lib/metadata";

const content = treatments["cirurgia-ortognatica"];

export const metadata = treatmentMetadata(content);

/**
 * Objeções depois da jornada: aqui elas são sobre aparelho, mudança no rosto e
 * afastamento do trabalho — perguntas que só fazem sentido depois que a pessoa
 * viu as etapas. Antecipá-las assustaria sem dar contexto.
 *
 * Por isso a curva sai do bloco editorial direto para o método escuro, sem a
 * seção de objeções no meio.
 */
export default function OrtognaticaPage() {
  return (
    <TreatmentShell content={content}>
      <TreatmentHero content={content} />
      <TrustMarquee items={content.highlights} />
      <TreatmentPain content={content} waveTo="var(--navy-800)" />
      <TreatmentMethod content={content} />
      <SectionWave from="var(--navy-800)" to="var(--sand-100)" flip />
      <TreatmentJourney content={content} />
      <TreatmentObjections content={content} />
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
