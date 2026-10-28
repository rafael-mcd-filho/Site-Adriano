import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { Clock3, MapPin, ShieldCheck } from "lucide-react";
import { FooterAction } from "@/components/footer-action";
import {
  areaNavigation,
  contactLocation,
  getWhatsAppHref,
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
            <BrandLogo light large />
          </Link>
          <p>
            Antes de falar em cirurgia, precisamos entender o seu caso.
            Atendimento em cirurgia buco-maxilo-facial em Natal e João Pessoa.
          </p>
          <a className="footer-instagram" href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram do Dr. Adriano: @dr.adrianorgermano (abre em nova aba)">
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            <span><strong>Acompanhe no Instagram</strong><span>@dr.adrianorgermano</span></span>
          </a>
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
              <Link href="/sobre">Dr. Adriano Rocha Germano</Link>
            </li>
            <li>
              <Link href="/profissionais-da-saude">Profissionais da saúde</Link>
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
            <li>
              <MapPin size={18} aria-hidden="true" />
              <span>
                <strong>Contato · {contactLocation.city}</strong>
                <br />
                <a href={getWhatsAppHref("Olá, vim pelo site e gostaria de falar com a equipe.")}
                  data-cta="cta-rodape-whatsapp"
                  data-cta-channel="whatsapp"
                  data-cta-location="rodape"
                  data-cta-city={contactLocation.id}
                  target="_blank" rel="noopener noreferrer">
                  WhatsApp {contactLocation.whatsappDisplay}
                </a>
              </span>
            </li>
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
