import { SectionWave } from "@/components/section-wave";
import { TrustMarquee } from "@/components/trust-marquee";
import { TreatmentConsultation } from "@/components/treatment/treatment-consultation";
import { TreatmentContact } from "@/components/treatment/treatment-contact";
import { TreatmentDecision } from "@/components/treatment/treatment-decision";
import { TreatmentHero } from "@/components/treatment/treatment-hero";
import { TreatmentJourney } from "@/components/treatment/treatment-journey";
import { TreatmentPain } from "@/components/treatment/treatment-pain";
import { TreatmentShell } from "@/components/treatment/treatment-shell";
import { TreatmentTrust } from "@/components/treatment/treatment-trust";
import { treatments } from "@/lib/content";
import { treatmentMetadata } from "@/lib/metadata";
import { credentialFacts } from "@/lib/site";

const content = treatments["cirurgia-ortognatica"];

export const metadata = treatmentMetadata(content);

/**
 * Sete blocos. Aqui as objeções são sobre aparelho, mudança no rosto e
 * afastamento do trabalho — perguntas de processo. Elas continuam depois do
 * critério de indicação, dentro da mesma seção, e a trilha de etapas vem logo
 * a seguir para responder o resto.
 *
 * A ordem das seções é decidida NESTE arquivo.
 */
export default function OrtognaticaPage() {
  return (
    <TreatmentShell content={content}>
      <TreatmentHero content={content} />
      <TrustMarquee items={credentialFacts} />
      <TreatmentPain content={content} />
      <SectionWave to="var(--navy-800)" />
      <TreatmentDecision content={content} />
      <SectionWave from="var(--surface)" to="var(--sand-100)" flip />
      <TreatmentJourney content={content} />
      <TreatmentTrust content={content} />
      <TreatmentConsultation content={content} />
      <TreatmentContact content={content} />
    </TreatmentShell>
  );
}
