import { AnatomyIllustration } from "@/components/anatomy-illustration";

type VisualMotifProps = {
  type: "air" | "implant" | "layers" | "joint" | "alignment" | "wisdom" | "planning";
  label?: string;
  summary?: {
    kicker: string;
    title: string;
    cues: [string, string, string];
  };
};

const fallbackSummary = {
  kicker: "Planejamento clínico",
  title: "Entender o caso antes de decidir.",
  cues: ["Diagnóstico", "Planejamento", "Acompanhamento"] as [string, string, string],
};

export function VisualMotif({ type, label, summary = fallbackSummary }: VisualMotifProps) {
  return (
    <figure
      className={"visual-motif motif-" + type}
      aria-label={(label || "Tratamento") + ": " + summary.title}
    >
      <figcaption className="visual-caption">
        <span>{summary.kicker}</span>
        <strong>{summary.title}</strong>
      </figcaption>

      <div className="visual-stage anatomy-stage">
        {type === "planning" ? <div className="planning-diagram"><span>Diagnóstico</span><span>Planejamento</span><span>Decisão</span></div> : <AnatomyIllustration type={type} />}
      </div>

      <div className="visual-cues" aria-label="Pontos considerados na avaliação">
        {summary.cues.map((cue, index) => (
          <span key={cue}>
            <small>{String(index + 1).padStart(2, "0")}</small>
            {cue}
          </span>
        ))}
      </div>
    </figure>
  );
}
