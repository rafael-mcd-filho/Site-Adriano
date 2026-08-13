import type { ReactNode } from "react";

/**
 * Destaca um trecho dentro de um texto que vem do conteúdo estruturado.
 *
 * O conteúdo permanece string em `lib/content.ts` — quem decide o que merece
 * destaque é o dado (`introHighlight`), não a marcação. Se a frase não existir
 * no texto, devolve o texto intacto: nunca falha, no máximo não destaca.
 */
export function Highlight({
  text,
  phrase,
}: {
  text: string;
  phrase?: string;
}): ReactNode {
  if (!phrase) return text;

  const at = text.indexOf(phrase);
  if (at === -1) return text;

  return (
    <>
      {text.slice(0, at)}
      <span className="mark-soft">{phrase}</span>
      {text.slice(at + phrase.length)}
    </>
  );
}
