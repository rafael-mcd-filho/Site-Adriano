import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionWave } from "@/components/section-wave";

type EditorialStoryProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  image?: "consultation" | "sleep";
  href?: string;
  linkLabel?: string;
  waveTo?: string;
};

export function EditorialStory({
  id,
  eyebrow = "O que importa para você",
  title,
  description,
  image = "consultation",
  href,
  linkLabel = "Como funciona a consulta",
  waveTo,
}: EditorialStoryProps) {
  const imageSrc =
    image === "sleep"
      ? "/images/editorial/sono-rotina.webp"
      : "/images/editorial/consulta-contexto.webp";

  return (
    <section className={`editorial-story${waveTo ? " section-with-wave" : ""}`} id={id}>
      <div className="editorial-photo" aria-hidden="true">
        <Image
          src={imageSrc}
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
        />
      </div>
      <div className="container">
        <div className="editorial-copy">
          <span className="section-kicker">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{description}</p>
          {href && (
            <Link className="text-link" href={href}>
              {linkLabel}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          )}
        </div>
        <small className="editorial-caption">Imagem ilustrativa</small>
      </div>
      {waveTo && <SectionWave from="transparent" to={waveTo} />}
    </section>
  );
}
