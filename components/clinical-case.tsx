import { FileText } from "lucide-react";
import type { ClinicalCase } from "@/lib/content";

/** Mostra somente casos com material fornecido. */
export function ClinicalCaseCard({ item }: { item?: ClinicalCase }) {
  if (!item) return null;

  const steps: Array<[string, string]> = [
    ["A situação", item.situation],
    ["O que a avaliação encontrou", item.evaluation],
    ["O que foi discutido", item.options],
    ["A decisão", item.decision],
    ["Como seguiu", item.followUp],
  ];

  return (
    <article className="clinical-case reveal">
      <header className="clinical-case-head">
        <span className="consultation-icon" aria-hidden="true">
          <FileText size={20} />
        </span>
        <div>
          <span className="section-kicker">Um caso conduzido</span>
          <h3>{item.title}</h3>
        </div>
      </header>

      <dl className="clinical-case-steps">
        {steps.map(([label, text]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{text}</dd>
          </div>
        ))}
      </dl>

      <p className="clinical-case-note">
        Relato de um caso individual, sem identificação do paciente. Cada
        situação é avaliada separadamente e desfechos semelhantes não são
        garantidos.
      </p>
    </article>
  );
}
