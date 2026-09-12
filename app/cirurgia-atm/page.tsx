import { TreatmentPage } from "@/components/treatment-page";
import { treatments } from "@/lib/content";
import { treatmentMetadata } from "@/lib/metadata";

const content = treatments["cirurgia-atm"];

export const metadata = treatmentMetadata(content);

export default function DtmAtmPage() {
  return <TreatmentPage content={content} />;
}

