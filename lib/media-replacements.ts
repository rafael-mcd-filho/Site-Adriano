/**
 * Substitua os espaços reservados sem procurar cada ocorrência nas páginas.
 * Copie a foto para public/images/reais/ e adicione a chave correspondente.
 * Exemplo: "doctor-portrait": { src: "/images/reais/doutor.webp", alt: "Dr. Adriano Rocha Germano", caption: "" }
 * A lista de chaves fica em components/media-placeholder.tsx.
 */
export const mediaReplacements: Record<string, { src: string; alt: string; caption?: string }> = {};
