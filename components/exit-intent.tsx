"use client";

import { X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { WhatsAppIcon } from "@/components/whatsapp-button";
import {
  getWhatsAppHref,
  siteConfig,
  whatsappMessageWithSource,
} from "@/lib/site";

const STORAGE_KEY = "adriano-exit-intent-visto";

/**
 * Última oferta de contato quando a pessoa demonstra intenção de sair.
 *
 * Regras deliberadas: aparece uma vez por sessão, só depois de 20s na página,
 * e só quando o cursor sai pelo topo (gesto de fechar aba). No celular não há
 * equivalente honesto para esse gesto — interceptar o botão voltar sequestra a
 * navegação —, então lá ele simplesmente não aparece.
 */
export function ExitIntent({ message }: { message: string }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const dismiss = useCallback(() => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // navegação privada pode bloquear sessionStorage; não é motivo de erro
    }
  }, []);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      return;
    }

    if (window.matchMedia("(hover: none)").matches) return;

    let armed = false;
    const arm = window.setTimeout(() => {
      armed = true;
    }, 20000);

    const onLeave = (event: MouseEvent) => {
      if (!armed || event.clientY > 0 || event.relatedTarget) return;
      armed = false;
      setOpen(true);
    };

    document.addEventListener("mouseout", onLeave);

    return () => {
      window.clearTimeout(arm);
      document.removeEventListener("mouseout", onLeave);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
      if (event.key !== "Tab") return;

      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        "a[href], button",
      );
      if (!focusables?.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, dismiss]);

  if (!open) return null;

  return (
    <div className="exit-overlay" onClick={dismiss}>
      <div
        className="exit-card"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-intent-titulo"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="exit-close"
          type="button"
          onClick={dismiss}
          ref={closeRef}
          aria-label="Fechar"
        >
          <X size={18} aria-hidden="true" />
        </button>

        <span className="section-kicker">Antes de sair</span>
        <h2 id="exit-intent-titulo">Ficou alguma dúvida sobre o seu caso?</h2>
        <p>
          A equipe responde pelo WhatsApp em horário comercial e explica como
          funciona a avaliação. Sem compromisso de agendamento.
        </p>

        <div className="exit-actions">
          <a
            id="cta-saida-whatsapp"
            data-cta="cta-saida-whatsapp"
            data-cta-channel="whatsapp"
            className="button button-motion"
            href={getWhatsAppHref(
              whatsappMessageWithSource(message, "aviso de saída da página"),
            )}
            target={siteConfig.whatsappNumber ? "_blank" : undefined}
            rel={siteConfig.whatsappNumber ? "noopener noreferrer" : undefined}
            onClick={dismiss}
          >
            <span className="button-label">Tirar uma dúvida</span>
            <span className="button-circle" aria-hidden="true">
              <WhatsAppIcon size={15} />
            </span>
          </a>
          <button className="exit-dismiss" type="button" onClick={dismiss}>
            Continuar lendo
          </button>
        </div>

        <small>
          Este contato não substitui uma avaliação clínica individual.
        </small>
      </div>
    </div>
  );
}
