"use client";

import {
  BadgeCheck,
  Handshake,
  MapPin,
  Pause,
  Play,
  ScanSearch,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { siteConfig } from "@/lib/site";

type TrustItem = { icon: LucideIcon; label: string };

/** Um único conjunto acessível; a cópia visual fecha o ciclo da animação. */
const items: TrustItem[] = [
  { icon: BadgeCheck, label: siteConfig.specialty },
  {
    icon: ShieldCheck,
    label: siteConfig.registry,
  },
  { icon: ScanSearch, label: "Exames de imagem quando necessários" },
  { icon: Handshake, label: "Encaminhamento integrado com seu dentista" },
  { icon: MapPin, label: "Atendimento em " + siteConfig.city },
];

function Track({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="trust-set" aria-hidden={duplicate || undefined}>
      {items.map(({ icon: Icon, label }) => (
        <span className="trust-item" key={label}>
          <Icon size={22} aria-hidden="true" />
          {label}
        </span>
      ))}
    </div>
  );
}

export function TrustMarquee() {
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const barRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(bar);
    return () => observer.disconnect();
  }, []);

  return (
    <aside
      ref={barRef}
      id="credenciais"
      className="trust-bar"
      aria-label="Como funciona o atendimento"
      data-paused={paused}
      data-running={visible}
    >
      <div className="trust-window">
        <div className="trust-track" id="trust-track">
          <Track />
          <Track duplicate />
        </div>
      </div>
      <button
        type="button"
        className="trust-toggle"
        onClick={() => setPaused(value => !value)}
        aria-controls="trust-track"
        aria-label={paused ? "Retomar movimento da faixa" : "Pausar movimento da faixa"}
      >
        {paused ? <Play size={18} aria-hidden="true" /> : <Pause size={18} aria-hidden="true" />}
        <span>{paused ? "Retomar" : "Pausar"}</span>
      </button>
    </aside>
  );
}
