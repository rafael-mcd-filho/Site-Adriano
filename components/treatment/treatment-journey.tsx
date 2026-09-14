import { HeartPulse, Search, Waypoints } from "lucide-react";
import { ClinicalCaseCard } from "@/components/clinical-case";
import type { TreatmentContent } from "@/lib/content";
import type { MediaPlaceholderKind } from "@/components/media-placeholder";
import styles from "./treatment-refinement.module.css";

const casePlaceholders: Record<string, MediaPlaceholderKind> = {
  "apneia-do-sono": "case-sleep",
  "implantes-dentarios": "case-implants",
  "reconstrucao-ossea": "case-bone",
  "cirurgia-atm": "case-atm",
  "cirurgia-ortognatica": "case-orthognathic",
  "cirurgia-de-siso": "case-wisdom",
};

/**
 * As três etapas seguem sempre a mesma lógica — entender, executar,
 * acompanhar —, então o ícone vem da posição e não do conteúdo: não há o que
 * decidir por página, e um campo a mais em `content` só daria margem a erro.
 */
const stepIcons = [Search, Waypoints, HeartPulse];

/**
 * "Como funciona o tratamento" — a trilha de etapas, agora nas cinco rotas.
 *
 * Existia só em implantes e ortognática. As três que não tinham eram
 * justamente aquelas em que o desfecho é incerto por natureza — apneia, DTM e
 * reconstrução —, e é nelas que "o que acontece depois que eu marco?" mais
 * adia o contato.
 *
 * Quando há caso aprovado, ele entra como cartão AQUI, ao fim da trilha: é a
 * mesma pergunta que as etapas respondem, só que na prática. Um bloco de
 * portfólio à parte responderia duas vezes.
 */
export function TreatmentJourney({ content }: { content: TreatmentContent }) {
  return (
    <section className="section journey-section" id="etapas">
      <div className="container">
        <div className="section-heading centered-heading">
          <span className="pill-badge">
            {content.journey.kicker ?? "Etapas do tratamento"}
          </span>
          <h2>{content.journey.title}</h2>
          <p>{content.journey.intro}</p>
        </div>

        {/*
          A linha que liga as etapas é desenhada pelo CSS, atrás dos marcos.
          Ela é decoração: quem usa leitor de tela recebe uma lista ordenada,
          que já carrega a ideia de sequência sem precisar enxergar o traço.
        */}
        <ol className={"journey-track " + styles.journeyTrack}>
          {content.journey.steps.map((step, index) => {
            const Icon = stepIcons[index] ?? Search;

            return (
              <li className="reveal" key={step.title}>
                <span className="journey-marker" aria-hidden="true">
                  <Icon size={17} />
                </span>
                <span className="journey-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{step.title.replace(/^\d+\.\s*/, "")}</h3>
                <p>{step.text}</p>
              </li>
            );
          })}
        </ol>

        <ClinicalCaseCard item={content.clinicalCase} placeholderKind={casePlaceholders[content.slug]} />
      </div>
    </section>
  );
}
