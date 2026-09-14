import Image from "next/image";

const heroImages: Record<string, string> = {
  home: "/images/heroes/hero-home-v1.webp",
  "apneia-do-sono": "/images/heroes/hero-apneia-v1.webp",
  "implantes-dentarios": "/images/heroes/hero-implantes-v1.webp",
  "reconstrucao-ossea": "/images/heroes/hero-reconstrucao-v1.webp",
  "cirurgia-atm": "/images/heroes/hero-atm-v1.webp",
  "cirurgia-ortognatica": "/images/heroes/hero-ortognatica-v1.webp",
  "para-dentistas": "/images/heroes/hero-dentistas-v1.webp",
  "cirurgia-de-siso": "/images/heroes/hero-siso-v1.webp",
};

/** Fotografia decorativa: pessoas e ambientes não representam o profissional. */
export function HeroBackdrop({ page }: { page: string }) {
  const src = heroImages[page];
  if (!src) return null;

  return (
    <>
      <div className="hero-photo-backdrop" aria-hidden="true">
        {/*
          `preload` é a prop atual do next/image no Next 16; `priority` está
          deprecada e apenas delega para ela. Esta imagem cobre o hero inteiro,
          então é o elemento de maior renderização (LCP) de todas as rotas, e
          LCP é uma das métricas que o Google pondera — vale manter marcada.
        */}
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
