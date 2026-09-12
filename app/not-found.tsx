import { ArrowLeft, Compass, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-visual" aria-hidden="true">
        <Compass />
        <span>404</span>
      </div>
      <span className="eyebrow">Página não encontrada</span>
      <h1>Não encontramos a página que você procurou.</h1>
      <p>
        O endereço pode ter mudado ou estar incompleto. Você pode voltar ao
        início ou encontrar abaixo as áreas de atendimento.
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
