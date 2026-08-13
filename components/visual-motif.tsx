import {
  Activity,
  AlignCenter,
  Bone,
  CircleDot,
  Layers3,
  MoonStar,
  MoveHorizontal,
  ScanLine,
  ScanSearch,
  Waypoints,
  Wind,
} from "lucide-react";

type VisualMotifProps = {
  type: "air" | "implant" | "layers" | "joint" | "alignment" | "planning";
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

function AirVisual() {
  return (
    <div className="air-visual" aria-hidden="true">
      <div className="air-night"><MoonStar size={22} /></div>
      <div className="airway-map">
        <span className="airway-head" />
        <span className="airway-channel" />
        <span className="airway-focus" />
      </div>
      <div className="airflow-lines">
        <span />
        <span />
        <span />
      </div>
      <div className="air-monitor">
        <Activity size={16} />
        <span />
        <span />
        <span />
        <Wind size={16} />
      </div>
    </div>
  );
}

function ImplantVisual() {
  return (
    <div className="implant-visual" aria-hidden="true">
      <div className="implant-axis" />
      <div className="implant-crown" />
      <div className="implant-abutment" />
      <div className="implant-screw">
        <span /><span /><span /><span /><span /><span />
      </div>
      <div className="implant-bone-bed">
        <span /><span /><span /><span />
      </div>
      <div className="implant-callout callout-position"><ScanLine size={15} /> Posição 3D</div>
      <div className="implant-callout callout-support"><Bone size={15} /> Suporte ósseo</div>
    </div>
  );
}

function LayersVisual() {
  return (
    <div className="layers-visual" aria-hidden="true">
      <div className="layers-scan-label"><Layers3 size={16} /> Mapa de volume</div>
      <div className="bone-layers">
        <span /><span /><span /><span /><span />
      </div>
      <div className="volume-before"><small>antes</small><span /></div>
      <div className="volume-arrow">+</div>
      <div className="volume-after"><small>planejado</small><span /></div>
      <div className="volume-measure"><i /><b>volume a reconstruir</b><i /></div>
    </div>
  );
}

function JointVisual() {
  return (
    <div className="joint-visual" aria-hidden="true">
      <div className="joint-temporal" />
      <div className="joint-disc" />
      <div className="joint-condyle" />
      <div className="joint-jaw" />
      <div className="joint-focus"><CircleDot size={28} /></div>
      <div className="movement-arc"><MoveHorizontal size={17} /> movimento</div>
      <div className="joint-scale"><span>0</span><i /><i /><i /><span>abertura</span></div>
    </div>
  );
}

function AlignmentVisual() {
  return (
    <div className="alignment-visual" aria-hidden="true">
      <div className="alignment-grid" />
      <div className="face-frame" />
      <div className="center-axis"><AlignCenter size={18} /></div>
      <div className="upper-jaw"><span /><span /><span /><span /><span /></div>
      <div className="lower-jaw"><span /><span /><span /><span /><span /></div>
      <div className="alignment-plane"><i /> plano funcional <i /></div>
      <div className="alignment-target target-left" />
      <div className="alignment-target target-right" />
    </div>
  );
}

function PlanningVisual() {
  return (
    <div className="planning-visual" aria-hidden="true">
      <div className="planning-orbit orbit-a" />
      <div className="planning-orbit orbit-b" />
      <div className="planning-node node-diagnosis"><ScanSearch size={22} /><span>Diagnóstico</span></div>
      <div className="planning-node node-plan"><Waypoints size={22} /><span>Plano</span></div>
      <div className="planning-node node-decision"><CircleDot size={22} /><span>Decisão</span></div>
      <div className="planning-center">A</div>
    </div>
  );
}

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

      <div className="visual-stage">
        {type === "air" && <AirVisual />}
        {type === "implant" && <ImplantVisual />}
        {type === "layers" && <LayersVisual />}
        {type === "joint" && <JointVisual />}
        {type === "alignment" && <AlignmentVisual />}
        {type === "planning" && <PlanningVisual />}
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
