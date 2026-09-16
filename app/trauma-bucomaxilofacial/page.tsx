import { SectionWave } from "@/components/section-wave";
import { TrustMarquee } from "@/components/trust-marquee";
import { TraumaEmergencyNotice } from "@/components/treatment/trauma-emergency-notice";
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

const content = treatments["trauma-bucomaxilofacial"];

export const metadata = treatmentMetadata(content);

/**
 * A triagem aparece antes do conteúdo eletivo para separar uma emergência de
 * um caso estável, de um acompanhamento após o pronto-socorro ou de uma
 * sequela antiga. O restante preserva a jornada das páginas clínicas.
 */
export default function TraumaBucomaxilofacialPage() {
  return (
    <TreatmentShell content={content}>
      <TreatmentHero content={content} notice={<TraumaEmergencyNotice />} />
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
