import { EditorialStory } from "@/components/editorial-story";
import type { TreatmentContent } from "@/lib/content";

/** Sintomas cotidianos seguidos da mensagem sobre o que o paciente deseja retomar. */
export function TreatmentPain({ content }: { content: TreatmentContent }) {
  return (
    <>
      <section className="section section-white pain-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">Você reconhece isso?</span>
            <h2>{content.painTitle}</h2>
          </div>

          <ul className="pain-list">
            {content.painItems.map((item) => (
              <li className="pain-item stagger-card" key={item}>
                <span className="pain-mark" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <EditorialStory
        id="sua-rotina"
        image={content.motif === "air" ? "sleep" : "consultation"}
        title={content.consequenceTitle}
        description={content.consequenceText}
        href="#consulta"
      />
    </>
  );
}
