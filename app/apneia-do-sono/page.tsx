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

const content = treatments["apneia-do-sono"];

export const metadata = treatmentMetadata(content);

/**
 * Sete blocos, e cada um responde a uma pergunta diferente do visitante. Quem
 * chega aqui costuma trazer uma ideia formada sobre CPAP e cirurgia: por isso
 * as objeções ficam na mesma seção do método, logo depois do critério que as
 * desfaz, e não numa faixa própria antes dele.
 *
 * A ordem das seções é decidida NESTE arquivo. Reordenar, remover ou inserir
 * uma seção própria aqui não afeta nenhuma outra página.
 */
export default function ApneiaPage() {
  return (
    <TreatmentShell content={content}>
      <TreatmentHero content={content} />
      <TrustMarquee items={credentialFacts} />
      <TreatmentPain content={content} />
      <SectionWave to="var(--navy-800)" />
      <TreatmentDecision content={content} />
      <SectionWave from="var(--navy-800)" to="var(--sand-100)" flip />
      <TreatmentJourney content={content} />
      <TreatmentTrust content={content} />
      <TreatmentConsultation content={content} />
      <TreatmentContact content={content} />
    </TreatmentShell>
  );
}
