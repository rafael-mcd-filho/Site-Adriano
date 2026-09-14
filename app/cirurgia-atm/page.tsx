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

const content = treatments["cirurgia-atm"];

export const metadata = treatmentMetadata(content);

/**
 * Sete blocos. O público desta página quase sempre já usou placa e já ouviu
 * que "é bruxismo". A seção de decisão explica a investigação da origem e, na
 * sequência imediata, desfaz essas conclusões: eram duas seções dizendo o
 * mesmo de dois jeitos.
 *
 * A ordem das seções é decidida NESTE arquivo.
 */
export default function DtmAtmPage() {
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
