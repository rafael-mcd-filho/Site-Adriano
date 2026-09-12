import type { ReactNode } from "react";

/**
 * Destaca um trecho dentro de um texto que vem do conteúdo estruturado.
 *
 * O conteúdo permanece string em `lib/content.ts` — quem decide o que merece
 * destaque é o dado (`titleHighlight`, `educationTitleHighlight`), não a
 * marcação. Se a frase não existir no texto, devolve o texto intacto: nunca
 * falha, no máximo não destaca.
 *
 * `accent` é o traço que varre da esquerda para a direita e serve ao H1;
 * `soft` é o marca-texto estático dos H2 e dos parágrafos. Um por seção — dois
 * destaques na mesma tela anulam um ao outro.
 */
export function Highlight({
  text,
  phrase,
  variant = "soft",
}: {
  text: string;
  phrase?: string;
  variant?: "soft" | "accent";
}): ReactNode {
  if (!phrase) return text;

  const at = text.indexOf(phrase);
  if (at === -1) return text;

  return (
    <>
      {text.slice(0, at)}
      <span className={variant === "accent" ? "mark-accent" : "mark-soft"}>
        {phrase}
      </span>
      {text.slice(at + phrase.length)}
    </>
  );
}
