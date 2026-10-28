import { Clock3, MapPin, Navigation } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { MediaPlaceholder } from "@/components/media-placeholder";
import {
  locationMapsLink,
  practiceLocations,
  siteConfig,
  type PracticeLocation,
} from "@/lib/site";

/**
 * Cada cartão preserva o endereço e a rota do consultório. O contato fica
 * centralizado na equipe de João Pessoa, com a cidade informada na mensagem.
 */
function LocationCard({ location }: { location: PracticeLocation }) {
  return (
    <article className="location-card">
      <div className="location-photo-pair">
        <MediaPlaceholder kind="facade" compact slot={"facade-" + location.id} />
      </div>
      <div className="location-card-body">
        <span className="section-kicker">
          {location.city} · {location.state}
        </span>
        <h3>{location.building}</h3>

        <address className="location-card-address">
          <MapPin size={17} aria-hidden="true" />
          <span>
            {location.street} · {location.complement}
            <br />
            {location.neighborhood ? location.neighborhood + " · " : ""}
            {location.city}/{location.state} · CEP {location.postalCode}
          </span>
        </address>

        <a
          className="text-link location-card-route"
          href={locationMapsLink(location)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Navigation size={15} aria-hidden="true" />
          Abrir rota no mapa
        </a>

        <WhatsAppButton
          ctaId={"cta-local-" + location.id + "-whatsapp"}
          className="location-cta"
          message={"Olá, vim pelo site e gostaria de saber sobre o atendimento em " + location.city + "."}
          label="Falar com a equipe"
        />
      </div>
    </article>
  );
}

export function LocationSection() {
  return (
    <section className="section location-section" id="local">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <span className="pill-badge">
              <MapPin size={13} aria-hidden="true" />
              Onde você será atendido
            </span>
            <h2>Dois consultórios: Natal e João Pessoa.</h2>
          </div>
          <p>
            <Clock3 size={16} aria-hidden="true" /> {siteConfig.hoursLines[0]}.
            Fale com a equipe pelo WhatsApp de João Pessoa para combinar o
            horário e saber o que levar.
          </p>
        </div>

        <div className="locations-grid">
          {practiceLocations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    </section>
  );
}
