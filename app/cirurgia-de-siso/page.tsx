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

const content = treatments["cirurgia-de-siso"];

export const metadata = treatmentMetadata(content);

/**
 * A rota mais curta das seis, e de propósito.
 *
 * Siso é a decisão de menor consideração do site: a pessoa resolve em dias, não
 * em meses, e as dúvidas dela são poucas e concretas — dói, quanto tempo, quais
 * riscos. Por isso cada bloco é mais enxuto que o das outras rotas, e o peso do
 * conteúdo está em dois lugares: o que decide a indicação e como é a
 * recuperação.
 *
 * A ordem é a mesma das demais porque as perguntas do visitante são as mesmas,
 * na mesma sequência. O que muda é a densidade, não a arquitetura.
 *
 * Cuidado de posicionamento: esta é a única área do site que é commodity na
 * praça, e o site inteiro se posiciona no oposto disso. O ângulo aqui é a
 * indicação criteriosa — "nem todo siso precisa sair" — e os casos que o
 * clínico geral encaminha. Sem isso, a página contradiz as outras cinco.
 */
export default function CirurgiaDeSisoPage() {
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
