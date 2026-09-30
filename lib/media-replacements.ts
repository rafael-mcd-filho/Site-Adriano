/**
 * Catálogo das fotografias disponíveis. Materiais ausentes não são exibidos.
 * Copie novas fotos para public/images/reais/ e adicione a chave correspondente.
 * A lista de tipos fica em components/media-placeholder.tsx; slots permitem
 * variar a fotografia entre seções. As dimensões preservam o enquadramento.
 */
export const mediaReplacements: Record<string, {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}> = {
  "doctor-portrait": {
    src: "/images/reais/adriano-retrato.webp",
    alt: "Dr. Adriano Rocha Germano, de blazer cinza, sorrindo.",
    width: 1200,
    height: 1500,
  },
  "doctor-authority": {
    src: "/images/reais/adriano-consultorio.webp",
    alt: "Dr. Adriano Rocha Germano sentado no consultório.",
    width: 1122,
    height: 1402,
  },
  "doctor-consultation": {
    src: "/images/reais/adriano-consulta.webp",
    alt: "Dr. Adriano explicando um modelo dentário durante uma consulta.",
    width: 1122,
    height: 1402,
  },
  "doctor-explanation": {
    src: "/images/reais/adriano-explicacao.webp",
    alt: "Dr. Adriano explicando a anatomia da face com uma ilustração no monitor.",
    width: 1200,
    height: 1500,
  },
  "doctor-planning": {
    src: "/images/reais/adriano-colegas.webp",
    alt: "Dr. Adriano com colegas durante o 6º Sulbrabuco.",
    width: 1200,
    height: 1600,
    caption: "Encontro com colegas no 6º Sulbrabuco.",
  },
  "doctor-congress": {
    src: "/images/reais/adriano-congresso.webp",
    alt: "Dr. Adriano em apresentação no púlpito do 6º Sulbrabuco.",
    width: 1200,
    height: 1600,
    caption: "Dr. Adriano em apresentação no 6º Sulbrabuco.",
  },
  "facade-natal": {
    src: "/images/reais/fachada-natal.webp",
    alt: "Fachada do Edifício CTC — Corporate Tower Center, em Natal.",
    width: 1024,
    height: 768,
    caption: "CTC — Corporate Tower Center · Natal",
  },
  "facade-joao-pessoa": {
    src: "/images/reais/fachada-joao-pessoa.webp",
    alt: "Fachada do Eco Medical Center, em João Pessoa.",
    width: 900,
    height: 600,
    caption: "Eco Medical Center · João Pessoa",
  },
};
