import { TreatmentPage } from "@/components/treatment-page";
import { treatments } from "@/lib/content";
import { treatmentMetadata } from "@/lib/metadata";

const content = treatments["apneia-do-sono"];

export const metadata = treatmentMetadata(content);

export default function ApneiaPage() {
  return <TreatmentPage content={content} />;
}

