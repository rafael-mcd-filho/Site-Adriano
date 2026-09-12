import type { TreatmentContent } from "@/lib/content";

/** Uma trilha mantém a sequência de cuidado visível no desktop e no celular. */
export function TreatmentJourney({ content }: { content: TreatmentContent }) {
  if (!content.journey) return null;

  return (
    <section className="section journey-section" id="etapas">
      <div className="container">
        <div className="section-heading centered-heading">
          <span className="pill-badge">Etapas do tratamento</span>
          <h2>{content.journey.title}</h2>
          <p>{content.journey.intro}</p>
        </div>
        <ol className="journey-track">
          {content.journey.steps.map((step, index) => (
            <li key={step.title}>
              <span className="journey-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title.replace(/^\d+\.\s*/, "")}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
