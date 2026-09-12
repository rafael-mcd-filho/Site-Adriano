"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  ArrowRight,
  ChevronDown,
  Handshake,
  Home,
  MessageCircle,
  Stethoscope,
  User,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ButtonContent } from "@/components/button-content";
import { WhatsAppIcon } from "@/components/whatsapp-button";
import {
  areaNavigation,
  getWhatsAppHref,
  siteConfig,
  whatsappMessageWithSource,
} from "@/lib/site";

const headerWhatsAppMessage =
  "Olá, gostaria de entender como funciona uma avaliação com o Dr. Adriano.";

/** Ícones ficam aqui, não em `lib/site.ts`: navegação é dado, ícone é interface. */
const navIcons: Record<string, LucideIcon> = {
  "/": Home,
  "/sobre": User,
  "/#processo": Stethoscope,
  "/para-dentistas": Handshake,
};

/**
 * A pílula do desktop guarda só o que o PACIENTE usa.
 *
 * "Dúvidas" saiu: depois que o FAQ passou a viver dentro da seção de contato,
 * ele apontava para o mesmo lugar que o botão do cabeçalho — dois alvos, um
 * destino. O link continua no rodapé, onde quem procura por ele olha.
 *
 * "Para dentistas" saiu da pílula e virou um link menor ao lado do CTA: é
 * outro público, e disputar espaço com os itens do paciente não ajudava
 * nenhum dos dois. O colega procura ativamente; ele acha.
 */
const navBefore = [
  { label: "Início", href: "/" },
  { label: "Dr. Adriano", href: "/sobre" },
];

const mobileLinks = [
  { label: "Início", href: "/" },
  { label: "Dr. Adriano", href: "/sobre" },
  { label: "Como funciona", href: "/#processo" },
  { label: "Para dentistas", href: "/para-dentistas" },
];

const focusableSelector =
  "a[href], button:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const areasRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const isWhatsAppConfigured = Boolean(siteConfig.whatsappNumber);
  const currentArea = areaNavigation.find((item) => item.href === pathname);
  const inArea = Boolean(currentArea);
  const contactHref = pathname === "/" || pathname === "/para-dentistas" || pathname === "/sobre" || inArea
    ? "#contato"
    : "/#contato";

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1081px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsOpen(false);
      else setAreasOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Voltar/avançar é evento externo: os links já fecham o menu no clique.
  useEffect(() => {
    const closeAll = () => {
      setIsOpen(false);
      setAreasOpen(false);
    };
    window.addEventListener("popstate", closeAll);
    return () => window.removeEventListener("popstate", closeAll);
  }, []);

  // O popover fecha ao clicar fora ou no Escape. Sem isso ele fica aberto
  // atrás do conteúdo depois de qualquer navegação por âncora.
  useEffect(() => {
    if (!areasOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!areasRef.current?.contains(event.target as Node)) setAreasOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setAreasOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [areasOpen]);

  /**
   * Menu mobile aberto: trava a rolagem compensando a largura da barra de
   * rolagem (senão a página inteira salta ~15px), tira conteúdo e rodapé da
   * árvore de acessibilidade e prende o Tab dentro do overlay.
   */
  useEffect(() => {
    if (!isOpen) return;

    const menu = menuRef.current;
    const toggle = toggleRef.current;
    const content = document.getElementById("conteudo");
    const footer = document.querySelector<HTMLElement>(".site-footer");
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    const previousContentInert = content?.inert;
    const previousFooterInert = footer?.inert;

    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = scrollbar + "px";
    if (content) content.inert = true;
    if (footer) footer.inert = true;

    const focusFrame = requestAnimationFrame(() => {
      menu?.querySelector<HTMLElement>("a[href], button:not([disabled])")?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !menu) return;

      const focusable = Array.from(
        menu.querySelectorAll<HTMLElement>(focusableSelector),
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
      if (content) content.inert = previousContentInert ?? false;
      if (footer) footer.inert = previousFooterInert ?? false;
      document.removeEventListener("keydown", onKeyDown);
      toggle?.focus();
    };
  }, [isOpen]);

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const Icon = navIcons[href];
    const isActive = pathname === href;

    return (
      <Link
        className={isActive ? "nav-link active" : "nav-link"}
        href={href}
        aria-current={isActive ? "page" : undefined}
      >
        {Icon && <Icon size={13} aria-hidden="true" />}
        {label}
      </Link>
    );
  };

  return (
    <>
      <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
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
            <div className="nav-pill">
              {navBefore.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} />
              ))}

              <div className="nav-group" ref={areasRef}>
                <button
                  type="button"
                  className={inArea ? "nav-link active" : "nav-link"}
                  aria-expanded={areasOpen}
                  aria-controls="nav-areas"
                  aria-current={inArea ? "page" : undefined}
                  onClick={() => setAreasOpen((value) => !value)}
                >
                  <Activity size={13} aria-hidden="true" />
                  Áreas de atuação
                  {/* Dentro de uma rota de tratamento, o gatilho ficava aceso
                      sem dizer qual. Nomear a área economiza um clique para
                      quem só quer saber onde está. */}
                  {currentArea && (
                    <span className="nav-current">· {currentArea.label}</span>
                  )}
                  <ChevronDown size={12} aria-hidden="true" className="nav-chevron" />
                </button>

                <div
                  id="nav-areas"
                  className={areasOpen ? "areas-popover is-open" : "areas-popover"}
                  hidden={!areasOpen}
                >
                  <span className="popover-label">Comece pelo que incomoda</span>
                  {areaNavigation.map((item) => (
                    <Link
                      key={item.href}
                      className={pathname === item.href ? "active" : ""}
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      onClick={() => setAreasOpen(false)}
                    >
                      <span className="popover-item">
                        <strong>{item.label}</strong>
                        <small>{item.hint}</small>
                      </span>
                      {/* A seta era ↗, que em qualquer interface significa
                          "abre fora do site". São cinco links internos. */}
                      <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              className={
                pathname === "/para-dentistas"
                  ? "header-dentist active"
                  : "header-dentist"
              }
              href="/para-dentistas"
              aria-current={pathname === "/para-dentistas" ? "page" : undefined}
            >
              <Handshake size={14} aria-hidden="true" />
              Para dentistas
            </Link>
          </nav>

          <a
            id="cta-header-whatsapp"
            data-cta="cta-header-whatsapp"
            data-cta-channel={isWhatsAppConfigured ? "whatsapp" : "form"}
            className="button button-small button-motion header-cta"
            href={isWhatsAppConfigured ? getWhatsAppHref(
              whatsappMessageWithSource(headerWhatsAppMessage, "cabeçalho do site"),
            ) : contactHref}
            target={isWhatsAppConfigured ? "_blank" : undefined}
            rel={isWhatsAppConfigured ? "noopener noreferrer" : undefined}
            aria-label={isWhatsAppConfigured
              ? "Entender meu caso — falar com a equipe pelo WhatsApp"
              : "Entender meu caso — ir para o formulário de contato"}
          >
            <ButtonContent icon={WhatsAppIcon} seal="whatsapp">
              Entender meu caso
            </ButtonContent>
          </a>

          <button
            ref={toggleRef}
            className="mobile-menu-button"
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsOpen((value) => !value)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>
        </div>
      </header>

      {/* Fora do <header>: o `backdrop-filter` dele cria bloco contentor para
          `position: fixed` e prenderia o overlay à altura da barra. */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={isOpen ? "mobile-menu open" : "mobile-menu"}
        aria-hidden={!isOpen}
        role={isOpen ? "dialog" : undefined}
        aria-modal={isOpen ? true : undefined}
        aria-label="Menu de navegação"
      >
        <div className="mobile-menu-top">
          <span className="brand brand-light">
            <span className="brand-mark" aria-hidden="true">
              A
            </span>
            <span className="brand-copy">
              <strong>Dr. Adriano</strong>
              <small>Buco-Maxilo-Facial</small>
            </span>
          </span>
          <button
            type="button"
            className="mobile-menu-close"
            onClick={closeMenu}
            aria-label="Fechar menu"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <nav className="mobile-menu-inner" aria-label="Navegação mobile">
          <div className="mobile-primary-links">
          {mobileLinks.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
          </div>

          <p className="mobile-area-label">Comece pelo que incomoda</p>
          {areaNavigation.map((item) => (
            <Link
              className="mobile-area-link"
              key={item.href}
              href={item.href}
              onClick={closeMenu}
            >
              <span className="popover-item">
                <strong>{item.label}</strong>
                <small>{item.hint}</small>
              </span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          ))}
        </nav>

        <div className="mobile-menu-foot">
          <Link
            id="cta-menu-mobile-formulario"
            data-cta="cta-menu-mobile-formulario"
            className="button button-motion mobile-whatsapp"
            href={contactHref}
            onClick={closeMenu}
          >
            <ButtonContent icon={MessageCircle}>Quero entender meu caso</ButtonContent>
          </Link>

          <p className="mobile-credentials">
            {siteConfig.specialty}
            <br />
            {siteConfig.registry}
          </p>
        </div>
      </div>
    </>
  );
}
