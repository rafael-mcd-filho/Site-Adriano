import { ArrowLeft, Compass, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-visual" aria-hidden="true">
        <Compass />
        <span>404</span>
      </div>
      <span className="eyebrow">Caminho não encontrado</span>
      <h1>Esta página não faz parte do nosso planejamento.</h1>
      <p>
        O endereço pode ter mudado. Volte ao início ou escolha uma área de
        atuação pelo menu.
      </p>
      <div className="hero-actions">
        <Link className="button" href="/">
          <Home size={18} aria-hidden="true" />
          Voltar ao início
        </Link>
        <Link className="button button-secondary" href="/#areas">
          <ArrowLeft size={18} aria-hidden="true" />
          Ver áreas de atuação
        </Link>
      </div>
    </main>
  );
}

