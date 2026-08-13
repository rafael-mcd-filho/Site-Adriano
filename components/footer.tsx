import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin, ShieldCheck } from "lucide-react";
import { areaNavigation, schemaName, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand brand-light" href="/">
            <span className="brand-mark" aria-hidden="true">
              A
            </span>
            <span className="brand-copy">
              <strong>Dr. Adriano</strong>
              <small>Buco-Maxilo-Facial</small>
            </span>
          </Link>
          <p>
            Informação clara, diagnóstico cuidadoso e planejamento para decisões
            construídas com segurança.
          </p>
          {siteConfig.isDemo && (
            <span className="demo-badge">
              <ShieldCheck size={15} aria-hidden="true" />
              Site em modo demonstração
            </span>
          )}
        </div>

        <div>
          <h2 className="footer-title">Áreas de atuação</h2>
          <ul className="footer-links">
            {areaNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Informações</h2>
          <ul className="footer-links">
            <li>
              <Link href="/para-dentistas">Para dentistas</Link>
            </li>
            <li>
              <Link href="/politica-de-privacidade">Política de privacidade</Link>
            </li>
            <li>
              <Link href="/#duvidas">Dúvidas frequentes</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Atendimento</h2>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} aria-hidden="true" />
              <span>{siteConfig.city}</span>
            </li>
            <li>
              <Clock3 size={18} aria-hidden="true" />
              <span>{siteConfig.hours}</span>
            </li>
          </ul>
          <Link className="footer-action" href="/#contato">
            Solicitar contato <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          {schemaName} · {siteConfig.specialty} · {siteConfig.registry}
        </p>
        <p>
          Conteúdo informativo. Diagnóstico e indicação dependem de avaliação
          individual.
        </p>
      </div>
    </footer>
  );
}

