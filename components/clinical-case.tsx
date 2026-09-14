import { FileText } from "lucide-react";
import type { ClinicalCase } from "@/lib/content";
import { MediaPlaceholder, type MediaPlaceholderKind } from "@/components/media-placeholder";

const reservedContext: Partial<Record<MediaPlaceholderKind, { title: string; text: string }>> = {
  "case-implants": { title: "Do planejamento à prótese", text: "Espaço para um caso real com imagem do planejamento, implante e reabilitação protética. Inserir a situação inicial, a decisão e o acompanhamento autorizado." },
  "case-bone": { title: "Tomografia e planejamento em 3D", text: "Espaço para imagens reais e anonimizadas da avaliação do volume ósseo e da reconstrução planejada, com contexto clínico e acompanhamento." },
  "case-orthognathic": { title: "Planejamento facial e etapas do cuidado", text: "Espaço para um caso real que mostre o planejamento conjunto, a preparação ortodôntica e o acompanhamento após a cirurgia, com autorização." },
  "case-wisdom": { title: "O que a imagem ajuda a avaliar", text: "Espaço para panorâmica real, anonimizada e anotada pelo doutor: posição do siso, dente vizinho e estruturas próximas. A legenda explicará os critérios da indicação." },
  "case-sleep": { title: "Avaliação do sono e cuidado integrado", text: "Espaço para um relato real com exame do sono anonimizado, participação dos profissionais e acompanhamento. O material deve explicar as decisões, sem prometer o mesmo resultado." },
  "case-atm": { title: "Da avaliação ao acompanhamento", text: "Espaço para um relato real sobre as queixas, os fatores considerados, as opções de cuidado e a evolução acompanhada. Usar apenas material revisado e autorizado." },
};

/** Caso real quando fornecido; reserva visual explícita enquanto o material está pendente. */
export function ClinicalCaseCard({ item, placeholderKind }: { item?: ClinicalCase; placeholderKind?: MediaPlaceholderKind }) {
  if (!item) return placeholderKind ? (
    <div className="clinical-case-reserved">
      <MediaPlaceholder kind={placeholderKind} />
      <div>
        <span className="section-kicker">Material a inserir</span>
        <h3>{reservedContext[placeholderKind]?.title ?? "Espaço para um caso real deste tratamento"}</h3>
        <p>{reservedContext[placeholderKind]?.text ?? "Material real a inserir, acompanhado do contexto da avaliação, do planejamento e do acompanhamento."}</p>
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
