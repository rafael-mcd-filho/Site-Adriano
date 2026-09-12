import { EditorialStory } from "@/components/editorial-story";
import { PainList } from "@/components/pain-list";
import type { TreatmentContent } from "@/lib/content";

/**
 * Sintomas cotidianos seguidos da mensagem sobre o que o paciente deseja
 * retomar.
 *
 * `waveTo` é decidido pela página, não deduzido aqui: a curva pertence à
 * transição entre ESTA seção e a próxima, e só o arquivo que monta a ordem
 * sabe qual é a próxima. Quando a seção seguinte tem fundo claro, não passe
 * nada.
 */
export function TreatmentPain({
  content,
  waveTo,
}: {
  content: TreatmentContent;
  waveTo?: string;
}) {
  return (
    <>
      <section className="section section-white pain-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">
              {content.painKicker ?? "Você reconhece isso?"}
            </span>
            <h2>{content.painTitle}</h2>
          </div>

          <PainList items={content.painItems} icons={content.painIcons} />
        </div>
      </section>
      <EditorialStory
        id="sua-rotina"
        eyebrow={content.storyEyebrow}
        image={content.painImage}
        title={content.consequenceTitle}
        description={content.consequenceText}
        href="#consulta"
        waveTo={waveTo}
      />
    </>
  );
}
