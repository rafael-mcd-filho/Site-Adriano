"use client";

import { useRef } from "react";
import { MapPin, X, ArrowUpRight } from "lucide-react";
import { ButtonContent } from "@/components/button-content";
import { getWhatsAppHref, practiceLocations, whatsappMessageWithSource } from "@/lib/site";
import styles from "./consultorio-chooser.module.css";

/** A escolha explícita evita encaminhar o visitante de Natal para outra equipe. */
export function ConsultorioChooser({ label, message, ctaId, source, className }: { label: string; message: string; ctaId: string; source: string; className: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button type="button" id={ctaId} data-cta={ctaId} data-cta-channel="location" className={className} aria-haspopup="dialog" onClick={() => dialogRef.current?.showModal()}>
        <ButtonContent icon={MapPin}>{label}</ButtonContent>
      </button>
      <dialog ref={dialogRef} className={styles.dialog} aria-labelledby={ctaId + "-title"} aria-describedby={ctaId + "-description"} onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}>
        <div className={styles.content}>
          <button className={styles.close} type="button" onClick={() => dialogRef.current?.close()} aria-label="Fechar escolha de consultório"><X size={22} /></button>
          <span className="section-kicker">Fale com a equipe</span>
          <h2 id={ctaId + "-title"}>Em qual cidade você quer ser atendido?</h2>
          <p id={ctaId + "-description"}>Escolha o consultório para conversar pelo WhatsApp sobre horários, valor e preparação para a consulta.</p>
          <div className={styles.locations}>
            {practiceLocations.map(location => (
              <a key={location.id} href={getWhatsAppHref(whatsappMessageWithSource(message + " Prefiro o consultório de " + location.city + ".", source), location.whatsapp)} target="_blank" rel="noopener noreferrer" data-cta={ctaId + "__" + location.id} data-cta-location="escolha-consultorio" data-cta-city={location.id}>
                <MapPin size={22} aria-hidden="true" />
                <span><strong>{location.city}</strong><small>{location.building}</small><small>{location.whatsappDisplay}</small></span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}
