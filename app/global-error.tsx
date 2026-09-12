"use client";

import { Manrope, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Substitui o `layout.tsx` inteiro quando o erro acontece no próprio layout —
 * por isso precisa declarar `html` e `body` e importar as fontes de novo. Sem
 * este arquivo, uma falha no layout cai na tela padrão do Next, em inglês e
 * sem nenhuma saída para o visitante.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pt-BR" className={manrope.variable + " " + sourceSans.variable}>
      <body>
        <main className="not-found">
          <span className="eyebrow">Erro inesperado</span>
          <h1>Não foi possível carregar esta página.</h1>
          <p>
            Tente novamente. Se o problema continuar, volte ao início para
            acessar as informações de atendimento.
          </p>

          <div className="hero-actions">
            <button className="button" type="button" onClick={reset}>
              Tentar novamente
            </button>
            {/* `<a>` em vez de `<Link>` de propósito: aqui o erro pode estar
                justamente no shell da aplicação, e uma navegação pelo roteador
                do cliente reaproveitaria o estado quebrado. O recarregamento
                completo é a saída confiável. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a className="button button-secondary" href="/">
              Voltar ao início
            </a>
          </div>

          {error.digest && (
            <p className="error-digest">
              Código da ocorrência: <code>{error.digest}</code>
            </p>
          )}
        </main>
      </body>
    </html>
  );
}
