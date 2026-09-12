import { Clock3, MapPin, Navigation } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import {
  locationMapEmbed,
  locationMapsLink,
  practiceLocations,
  siteConfig,
  type PracticeLocation,
} from "@/lib/site";

/**
 * Um consultório por cartão, cada um com o próprio mapa e o próprio WhatsApp.
 *
 * Eram um endereço e um telefone de demonstração. Com os dois consultórios
 * reais, a seção passou a responder a pergunta que a pessoa de fato traz —
 * "qual fica mais perto de mim?" — e o botão de cada cartão fala com a equipe
 * daquela cidade, em vez de mandar quem mora em Natal para o número de João
 * Pessoa.
 */
function LocationCard({ location }: { location: PracticeLocation }) {
  return (
    <article className="location-card">
      <div className="location-card-map">
        <iframe
          src={locationMapEmbed(location)}
          title={"Mapa do consultório em " + location.city}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
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
          message={
            "Olá, gostaria de agendar uma avaliação no consultório de " +
            location.city +
            "."
          }
          label={"WhatsApp " + location.whatsappDisplay}
          number={location.whatsapp}
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
            <h2>Dois consultórios: João Pessoa e Natal.</h2>
          </div>
          <p>
            <Clock3 size={16} aria-hidden="true" /> {siteConfig.hoursLines[0]}.
            Fale com o consultório da sua cidade para combinar o horário e
            saber o que levar.
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
