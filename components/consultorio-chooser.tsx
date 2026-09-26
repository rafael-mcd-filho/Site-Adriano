"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { MapPin, X, ArrowUpRight } from "lucide-react";
import { ButtonContent } from "@/components/button-content";
import { getWhatsAppHref, practiceLocations } from "@/lib/site";
import { whatsappMessageForPage } from "@/lib/whatsapp-copy";
import styles from "./consultorio-chooser.module.css";

/** A escolha explícita evita encaminhar o visitante de Natal para outra equipe. */
export function ConsultorioChooser({ label, ctaId, className }: { label: string; ctaId: string; className: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  return (
    <>
      <button type="button" id={ctaId} data-cta={ctaId} data-cta-channel="location" className={className} aria-haspopup="dialog" onClick={() => dialogRef.current?.showModal()}>
        <ButtonContent icon={MapPin}>{label}</ButtonContent>
      </button>
      <dialog ref={dialogRef} className={styles.dialog} aria-labelledby={ctaId + "-title"} aria-describedby={ctaId + "-description"} onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}>
        <div className={styles.content}>
          <div className={styles.intro}>
            <button className={styles.close} type="button" onClick={() => dialogRef.current?.close()} aria-label="Fechar escolha de consultório"><X size={20} /></button>
            <span className={styles.eyebrow}>SEU ATENDIMENTO, SUA ESCOLHA</span>
            <h2 id={ctaId + "-title"}>Onde fica melhor <span>para você?</span></h2>
            <p id={ctaId + "-description"}>Escolha a cidade mais conveniente e converse com a equipe pelo WhatsApp.</p>
          </div>
          <div className={styles.locations}>
            {practiceLocations.map(location => (
              <a key={location.id} href={getWhatsAppHref(whatsappMessageForPage(pathname, location.city), location.whatsapp)} target="_blank" rel="noopener noreferrer" data-cta={ctaId + "__" + location.id} data-cta-location="escolha-consultorio" data-cta-city={location.id}>
                <span className={styles.pin}><MapPin size={20} aria-hidden="true" /></span>
                <span className={styles.locationCopy}><strong>{location.city} <small>· {location.state}</small></strong><span>{location.building}</span></span>
                <span className={styles.arrow}><ArrowUpRight size={18} aria-hidden="true" /></span>
              </a>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}
