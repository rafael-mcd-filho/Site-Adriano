import Link from "next/link";
import { Clock3, MapPin, ShieldCheck } from "lucide-react";
import { FooterAction } from "@/components/footer-action";
import {
  areaNavigation,
  practiceLocations,
  schemaName,
  siteConfig,
} from "@/lib/site";

/**
 * A onda é o recorte da cor da última seção invadindo o rodapé, não um enfeite
 * solto: o `fill` acompanha `--footer-wave-fill`, que a página define conforme
 * a seção que fica logo acima.
 *
 * O `line-height: 0` no invólucro não é decorativo — sem ele o SVG herda a
 * linha de texto do bloco e sobra uma fresta de alguns pixels entre a onda e o
 * rodapé.
 */
function FooterWave() {
  return (
    <div className="footer-wave" aria-hidden="true">
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" focusable="false">
        <path
          d="M0 56L60 46.7C120 37 240 19 360 14C480 9 600 18 720 23.3C840 28 960 28 1080 25.7C1200 23 1320 19 1380 16.7L1440 14V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V56Z"
          style={{ fill: "var(--footer-wave-fill, var(--ivory))" }}
        />
      </svg>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <FooterWave />

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
            Antes de falar em cirurgia, precisamos entender o seu caso.
            Atendimento em cirurgia buco-maxilo-facial em João Pessoa e Natal.
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
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer">
                Instagram do Dr. Adriano
              </a>
            </li>
            <li>
              <Link href="/sobre">Dr. Adriano Rocha Germano</Link>
            </li>
            <li>
              <Link href="/para-dentistas">Para dentistas</Link>
            </li>
            <li>
              <Link href="/politica-de-privacidade">Política de privacidade</Link>
            </li>
            <li>
              <Link href="/#duvidas">Dúvidas frequentes</Link>
            </li>
            <li>
              <Link href="/#local">Como chegar</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Atendimento</h2>
          <ul className="footer-contact">
            {practiceLocations.map((location) => (
              <li key={location.id}>
                <MapPin size={18} aria-hidden="true" />
                <span>
                  <strong>{location.city}</strong>
                  <br />
                  <a href={"https://wa.me/" + location.whatsapp}>
                    WhatsApp {location.whatsappDisplay}
                  </a>
                </span>
              </li>
            ))}
            <li>
              <Clock3 size={18} aria-hidden="true" />
              <span>{siteConfig.hours}</span>
            </li>
          </ul>
          <FooterAction />
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
