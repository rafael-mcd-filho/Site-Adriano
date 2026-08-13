import { TreatmentPage } from "@/components/treatment-page";
import { treatments } from "@/lib/content";
import { treatmentMetadata } from "@/lib/metadata";

const content = treatments["implantes-dentarios"];

export const metadata = treatmentMetadata(content);

export default function ImplantesPage() {
  return <TreatmentPage content={content} />;
}

