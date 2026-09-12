import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type EditorialStoryProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  image?: "consultation" | "sleep";
  href?: string;
  linkLabel?: string;
};

export function EditorialStory({
  id,
  eyebrow = "O que importa para você",
  title,
  description,
  image = "consultation",
  href,
  linkLabel = "Como funciona a consulta",
}: EditorialStoryProps) {
  const imageSrc =
    image === "sleep"
      ? "/images/editorial/sono-rotina.webp"
      : "/images/editorial/consulta-contexto.webp";

  return (
    <section className="editorial-story" id={id}>
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
    </section>
  );
}
