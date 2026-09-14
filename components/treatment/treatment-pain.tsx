import Image from "next/image";
import { PainList } from "@/components/pain-list";
import type { TreatmentContent } from "@/lib/content";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { AnatomyIllustration } from "@/components/anatomy-illustration";

/**
 * "Isso parece com o seu caso?" — sintomas e consequência na mesma seção.
 *
 * Eram duas seções seguidas, e as duas respondiam à mesma pergunta do
 * visitante: reconhecimento. Somadas, ocupavam uma tela e meia no celular
 * dizendo à pessoa o que ela já sabe, antes de a página oferecer qualquer
 * resposta. Reconhecimento tem rendimento decrescente rápido: a primeira frase
 * faz a pessoa continuar, a quinta faz ela sair.
 *
 * A fotografia editorial continua — ela era o único respiro visual entre dois
 * blocos de texto —, mas agora ao lado do fecho, dentro da própria seção, em
 * vez de abrir uma faixa própria de tela inteira.
 */
export function TreatmentPain({ content }: { content: TreatmentContent }) {
  const imageSrc =
    content.painImage === "sleep"
      ? "/images/editorial/sono-rotina.webp"
      : "/images/editorial/consulta-contexto.webp";

  return (
    <section className="section section-white pain-section" id="sintomas">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">
            {content.painKicker ?? "Você reconhece isso?"}
          </span>
          <h2>{content.painTitle}</h2>
        </div>

        <PainList items={content.painItems} icons={content.painIcons} />

        <div className="pain-consequence">
          {content.slug === "cirurgia-de-siso" ? <AnatomyIllustration type="wisdom-positions" />
            : content.slug === "cirurgia-ortognatica" ? <MediaPlaceholder kind="doctor-planning" caption="Foto real do planejamento entre cirurgião e ortodontista a inserir." />
            : content.slug === "cirurgia-atm" ? <MediaPlaceholder kind="doctor-examination" />
            : content.slug === "reconstrucao-ossea" ? <MediaPlaceholder kind="doctor-consultation" />
            : <figure className="pain-consequence-photo">
            <Image
              src={imageSrc}
              alt=""
              width={640}
              height={480}
              loading="lazy"
              sizes="(max-width: 900px) 100vw, 420px"
            />
            <figcaption>Imagem ilustrativa</figcaption>
          </figure>}

          <div className="pain-consequence-copy">
            <span className="section-kicker">
              {content.storyEyebrow ?? "O que importa para você"}
            </span>
            <h3>{content.consequenceTitle}</h3>
            <p>{content.consequenceText}</p>
            <p className="pain-consequence-note">
              Esses sinais não significam, por si só, que você precise de
              cirurgia. A avaliação reúne suas queixas, o exame e os fatores
              associados para discutir as opções de cuidado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
