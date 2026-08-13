import { TreatmentPage } from "@/components/treatment-page";
import { treatments } from "@/lib/content";
import { treatmentMetadata } from "@/lib/metadata";

const content = treatments["cirurgia-ortognatica"];

export const metadata = treatmentMetadata(content);

export default function OrtognaticaPage() {
  return <TreatmentPage content={content} />;
}

