import { TrustMarquee } from "@/components/trust-marquee";
import { TreatmentConsultation } from "@/components/treatment/treatment-consultation";
import { TreatmentContact } from "@/components/treatment/treatment-contact";
import { TreatmentPlan } from "@/components/treatment/treatment-plan";
import { TreatmentHero } from "@/components/treatment/treatment-hero";
import { TreatmentPain } from "@/components/treatment/treatment-pain";
import { TreatmentShell } from "@/components/treatment/treatment-shell";
import { TreatmentTrust } from "@/components/treatment/treatment-trust";
import { VideoFeature } from "@/components/video-feature";
import { treatments } from "@/lib/content";
import { treatmentMetadata } from "@/lib/metadata";
import { credentialFacts } from "@/lib/site";

const content = treatments["apneia-do-sono"];

export const metadata = treatmentMetadata(content);

/** Planejamento e etapas compartilham uma seção; os demais blocos são preservados. */
export default function ApneiaPage() {
  return (
    <TreatmentShell content={content}>
      <TreatmentHero content={content} />
      <TrustMarquee items={credentialFacts} />
      <TreatmentPain content={content} />
      <TreatmentPlan content={content} />
      <VideoFeature
        id="JTaVaA-75Nc"
        title="Viva Melhor sem Apneia do Sono — Conversa Afinada com o Dr. Adriano"
        eyebrow="APNEIA DO SONO"
        heading="Entender o sono também pede uma conversa entre especialidades."
        description="O Dr. Adriano conversa com um profissional da medicina do sono sobre investigação, planejamento e cuidado conjunto."
        headingId="video-apneia-title"
      />
      <TreatmentTrust content={content} />
      <TreatmentConsultation content={content} />
      <TreatmentContact content={content} />
    </TreatmentShell>
  );
}
