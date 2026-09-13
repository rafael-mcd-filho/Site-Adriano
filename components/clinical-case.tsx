import { FileText } from "lucide-react";
import type { ClinicalCase } from "@/lib/content";
import { MediaPlaceholder, type MediaPlaceholderKind } from "@/components/media-placeholder";

/** Caso real quando fornecido; reserva visual explícita enquanto o material está pendente. */
export function ClinicalCaseCard({ item, placeholderKind }: { item?: ClinicalCase; placeholderKind?: MediaPlaceholderKind }) {
  if (!item) return placeholderKind ? (
    <div className="clinical-case-reserved">
      <MediaPlaceholder kind={placeholderKind} />
      <div>
        <span className="section-kicker">Material a inserir</span>
        <h3>Espaço para um caso real deste tratamento</h3>
        <p>A imagem definitiva será acompanhada do contexto da avaliação, do planejamento e do acompanhamento. Este espaço ainda não apresenta um caso clínico.</p>
      </div>
    </div>
  ) : null;

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
