import Image from "next/image";

const heroImages: Record<string, string> = {
  home: "/images/heroes/hero-home-v1.webp",
  "apneia-do-sono": "/images/heroes/hero-apneia-v1.webp",
  "implantes-dentarios": "/images/heroes/hero-implantes-v1.webp",
  "reconstrucao-ossea": "/images/heroes/hero-reconstrucao-v1.webp",
  "cirurgia-atm": "/images/heroes/hero-atm-v1.webp",
  "cirurgia-ortognatica": "/images/heroes/hero-ortognatica-v1.webp",
  "para-dentistas": "/images/heroes/hero-dentistas-v1.webp",
};

/** Fotografia decorativa: pessoas e ambientes não representam o profissional. */
export function HeroBackdrop({ page }: { page: string }) {
  const src = heroImages[page];
  if (!src) return null;

  return (
    <>
      <div className="hero-photo-backdrop" aria-hidden="true">
        <Image
          src={src}
          alt=""
          fill
          sizes="100vw"
          preload
          className="hero-photo-image"
        />
      </div>
      <span className="hero-photo-caption">Imagem ilustrativa</span>
    </>
  );
}
