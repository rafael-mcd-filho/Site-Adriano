import type { Metadata, Viewport } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/gtm";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { WhatsAppTracking } from "@/components/whatsapp-tracking";
import { treatments } from "@/lib/content";
import { siteName } from "@/lib/metadata";
import { ogImageFor } from "@/lib/og";
import {
  areaNavigation,
  locationMapsLink,
  practiceLocations,
  schemaName,
  schemaTelephone,
  siteConfig,
  type PracticeLocation,
} from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const homeOgImage = ogImageFor("home");
const homeTitle = "Cirurgião Buco-Maxilo-Facial em João Pessoa | Dr. Adriano";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: homeTitle,
    template: "%s | Dr. Adriano",
  },
  description: siteConfig.description,
  applicationName: "Dr. Adriano BMF",
  category: "health",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName,
    title: homeTitle,
    description: siteConfig.description,
    url: "/",
    images: [homeOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: siteConfig.description,
    images: [homeOgImage.url],
  },
  robots: siteConfig.isIndexable
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
    : {
        index: false,
        follow: false,
        noarchive: true,
      },
};

export const viewport: Viewport = {
  themeColor: "#223853",
  colorScheme: "light",
};

/**
 * Um consultório como nó próprio do grafo.
 *
 * São dois `Dentist`, um por cidade, cada um com endereço completo e o
 * telefone do WhatsApp daquela equipe. Um nó único com duas cidades em
 * `areaServed` diria ao Google que existe um lugar atendendo duas regiões —
 * quando existem dois lugares, cada um na sua.
 *
 * `openingHoursSpecification` saiu: o "08:00 às 18:00" era dado de
 * demonstração. O material confirma horário comercial, não o horário exato, e
 * schema com hora inventada é pior do que schema sem hora.
 */
function practiceNode(location: PracticeLocation) {
  return {
    "@type": "Dentist",
    "@id": siteConfig.url + "/#practice-" + location.id,
    name: schemaName + " — " + location.city,
    description: siteConfig.description,
    url: siteConfig.url,
    image: siteConfig.url + homeOgImage.url,
    inLanguage: "pt-BR",
    medicalSpecialty: "OralAndMaxillofacialSurgery",
    telephone: schemaTelephone(location),
    address: {
      "@type": "PostalAddress",
      streetAddress: [location.street, location.complement, location.building]
        .filter(Boolean)
        .join(", "),
      ...(location.neighborhood ? { addressNeighborhood: location.neighborhood } : {}),
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: location.postalCode,
      addressCountry: "BR",
    },
    hasMap: locationMapsLink(location),
    employee: { "@id": siteConfig.url + "/#person" },
    ...(siteConfig.instagram ? { sameAs: [siteConfig.instagram] } : {}),
    availableService: areaNavigation.map((area) => ({
      "@type": "MedicalProcedure",
      name: area.label,
      url: siteConfig.url + area.href,
      ...(treatments[area.href.replace("/", "")]
        ? {
            description:
              treatments[area.href.replace("/", "")].metadata.description,
          }
        : {}),
    })),
  };
}

/**
 * Um `@graph` só: o site, a pessoa que assina a avaliação e os dois
 * consultórios. A pessoa carrega a formação e as filiações — é ela, e não o
 * consultório, que tem mestrado, cátedra e presidência de entidade.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": siteConfig.url + "/#website",
      url: siteConfig.url,
      name: siteName,
      inLanguage: "pt-BR",
      publisher: { "@id": siteConfig.url + "/#person" },
    },
    {
      "@type": "Person",
      "@id": siteConfig.url + "/#person",
      name: schemaName,
      jobTitle: siteConfig.specialty,
      knowsAbout: areaNavigation.map((area) => area.label),
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Universidade Federal do Rio Grande do Norte",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "Universidade Estadual de Campinas",
        },
      ],
      affiliation: [
        {
          "@type": "CollegeOrUniversity",
          name: "Universidade Federal do Rio Grande do Norte",
        },
        {
          "@type": "Hospital",
          name: "Hospital Universitário Onofre Lopes",
        },
      ],
      memberOf: {
        "@type": "Organization",
        name: "Colégio Brasileiro de Cirurgia e Traumatologia Buco-Maxilo-Facial",
      },
      hasCredential: siteConfig.credentials.map((credential) => ({
        "@type": "EducationalOccupationalCredential",
        name: credential,
      })),
      worksFor: practiceLocations.map((location) => ({
        "@id": siteConfig.url + "/#practice-" + location.id,
      })),
      ...(siteConfig.instagram ? { sameAs: [siteConfig.instagram] } : {}),
    },
    ...practiceLocations.map(practiceNode),
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={manrope.variable + " " + sourceSans.variable}>
      <body>
        <GoogleTagManagerNoScript />
        <JsonLd data={structuredData} />
        <a className="skip-link" href="#conteudo">
          Ir para o conteúdo
        </a>
        <Header />
        <div id="conteudo">{children}</div>
        <Footer />
        <WhatsAppTracking />
        <GoogleTagManager />
      </body>
    </html>
  );
}
