import { TreatmentPage } from "@/components/treatment-page";
import { treatments } from "@/lib/content";
import { treatmentMetadata } from "@/lib/metadata";

const content = treatments["reconstrucao-ossea"];

export const metadata = treatmentMetadata(content);

export default function ReconstrucaoPage() {
  return <TreatmentPage content={content} />;
}

