"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ButtonContent } from "@/components/button-content";
import { WhatsAppIcon } from "@/components/whatsapp-button";
import { areaNavigation, getWhatsAppHref, mainNavigation, siteConfig } from "@/lib/site";

const headerWhatsAppMessage =
  "Olá, gostaria de agendar uma avaliação com o Dr. Adriano.";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isWhatsAppConfigured = Boolean(siteConfig.whatsappNumber);

  const closeMenu = () => setIsOpen(false);

  // O menu cobre a viewport inteira: sem Escape, quem navega por teclado fica
  // preso a rolar até o fim da lista para voltar ao conteúdo.
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" onClick={closeMenu} aria-label="Dr. Adriano — Início">
          <span className="brand-mark" aria-hidden="true">
            A
          </span>
          <span className="brand-copy">
            <strong>Dr. Adriano</strong>
            <small>Buco-Maxilo-Facial</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {mainNavigation.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              className={pathname === item.href ? "nav-link active" : "nav-link"}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}

          <details className="areas-menu">
            <summary className="nav-link">
              Áreas de atuação <ChevronDown size={15} aria-hidden="true" />
            </summary>
            <div className="areas-popover">
              <span className="popover-label">Avaliação especializada</span>
              {areaNavigation.map((item) => (
                <Link
                  key={item.href}
                  className={pathname === item.href ? "active" : ""}
                  href={item.href}
                >
                  {item.label}
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </details>

          {mainNavigation.slice(2).map((item) => (
            <Link
              key={item.href}
              className={pathname === item.href ? "nav-link active" : "nav-link"}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          id="cta-header-whatsapp"
          data-cta="cta-header-whatsapp"
          data-cta-channel="whatsapp"
          className="button button-small button-motion header-cta"
          href={getWhatsAppHref(headerWhatsAppMessage)}
          target={isWhatsAppConfigured ? "_blank" : undefined}
          rel={isWhatsAppConfigured ? "noopener noreferrer" : undefined}
          title={
            isWhatsAppConfigured
              ? undefined
              : "Número de demonstração ainda não configurado"
          }
        >
          <ButtonContent icon={WhatsAppIcon}>Agendar avaliação</ButtonContent>
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={isOpen ? "mobile-menu open" : "mobile-menu"}
        aria-hidden={!isOpen}
      >
        <nav className="container mobile-menu-inner" aria-label="Navegação mobile">
          {mainNavigation.slice(0, 2).map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}

          <div className="mobile-area-group">
            <span>Áreas de atuação</span>
            {areaNavigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
          </div>

          {mainNavigation.slice(2).map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}

          <Link
            id="cta-menu-mobile-formulario"
            data-cta="cta-menu-mobile-formulario"
            className="button mobile-whatsapp"
            href="#contato"
            onClick={closeMenu}
          >
            <MessageCircle size={18} aria-hidden="true" />
            Solicitar uma avaliação
          </Link>

          <p className="mobile-credentials">
            Cirurgia e Traumatologia Buco-Maxilo-Facial
            <br />
            CRO-PB 00000 · dados de demonstração
          </p>
        </nav>
      </div>
    </header>
  );
}

