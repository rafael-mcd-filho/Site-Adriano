import { TrustMarquee } from "@/components/trust-marquee";
import { TreatmentConsultation } from "@/components/treatment/treatment-consultation";
import { TreatmentContact } from "@/components/treatment/treatment-contact";
import { TreatmentPlan } from "@/components/treatment/treatment-plan";
import { TreatmentHero } from "@/components/treatment/treatment-hero";
import { TreatmentPain } from "@/components/treatment/treatment-pain";
import { TreatmentShell } from "@/components/treatment/treatment-shell";
import { TreatmentTrust } from "@/components/treatment/treatment-trust";
import { treatments } from "@/lib/content";
import { treatmentMetadata } from "@/lib/metadata";
import { credentialFacts } from "@/lib/site";

const content = treatments["implantes-dentarios"];

export const metadata = treatmentMetadata(content);

/** Planejamento e etapas compartilham uma seção; os demais blocos são preservados. */
export default function ImplantesPage() {
  return (
    <TreatmentShell content={content}>
      <TreatmentHero content={content} />
      <TrustMarquee items={credentialFacts} />
      <TreatmentPain content={content} />
      <TreatmentPlan content={content} />
      <section className="section section-white" id="implantes-extra-orais">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">Reabilitação facial</span>
            <h2>Quando a reabilitação envolve a face, o plano é individual.</h2>
            <p>Além dos dentes, próteses extra-orais podem fazer parte da conversa em situações que envolvem a estética e a função da face. A avaliação considera o que precisa ser reabilitado, as condições da região e a participação dos profissionais envolvidos para discutir as possibilidades do seu caso.</p>
          </div>
        </div>
      </section>
      <TreatmentTrust content={content} />
      <TreatmentConsultation content={content} />
      <TreatmentContact content={content} />
    </TreatmentShell>
  );
}
