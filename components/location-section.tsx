import { Clock3, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { siteConfig } from "@/lib/site";

function InfoBlock({
  icon,
  label,
  lines,
}: {
  icon: ReactNode;
  label: string;
  lines: string[];
}) {
  return (
    <div className="info-block">
      <span className="info-icon" aria-hidden="true">
        {icon}
      </span>
      <div>
        <span className="info-label">{label}</span>
        {lines.map((line) => (
          <span className="info-line" key={line}>
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}

export function LocationSection() {
  const hasMap = Boolean(siteConfig.mapEmbedUrl);

  return (
    <section className="section location-section" id="local">
      <div className="container location-grid">
        {hasMap ? (
          <div className="location-map">
            <iframe
              src={siteConfig.mapEmbedUrl}
              title={(siteConfig.isDemo ? "Mapa da região em " : "Localização do consultório em ") + siteConfig.city}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        ) : (
          /* O mapa só entra quando o endereço definitivo for confirmado.
             Apontar para o lugar errado é pior do que não ter mapa. */
          <div className="location-map location-map-pending" aria-hidden="true">
            <MapPin size={30} />
            <strong>Orientações para chegar</strong>
            <span>
              Confirme o local da consulta com a equipe ao agendar.
            </span>
          </div>
        )}

        <div className="location-copy">
          <span className="pill-badge">
            <MapPin size={13} aria-hidden="true" />
            Sua consulta
          </span>
          <h2>Atendimento em João Pessoa.</h2>
          <p>
            Antes de sair de casa, confirme com a equipe o local, o horário
            e os documentos ou exames que deve levar.
          </p>

          <div className="info-blocks">
            <InfoBlock
              icon={<MapPin size={18} />}
              label="Endereço"
              lines={siteConfig.addressLines}
            />
            <InfoBlock
              icon={<Phone size={18} />}
              label="Contato"
              lines={[siteConfig.phoneDisplay]}
            />
            <InfoBlock
              icon={<Clock3 size={18} />}
              label="Horário de atendimento"
              lines={siteConfig.hoursLines}
            />
          </div>

          <WhatsAppButton
            ctaId="cta-local-whatsapp"
            className="location-cta"
            message="Olá, gostaria de saber como chegar e como funciona o agendamento."
            label="Consultar local e horários"
          />

          {siteConfig.isDemo && (
            <small className="demo-note">
              Endereço, telefone e horários são dados de demonstração.
            </small>
          )}
        </div>
      </div>
    </section>
  );
}
