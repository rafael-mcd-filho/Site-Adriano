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
  schemaGeo,
  schemaName,
  schemaTelephones,
  siteConfig,
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
  robots: siteConfig.isDemo
    ? {
        index: false,
        follow: false,
        noarchive: true,
      }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      },
};

export const viewport: Viewport = {
  themeColor: "#223853",
  colorScheme: "light",
};

const telephones = schemaTelephones();
const geo = schemaGeo();

/**
 * Um `@graph` só: WebSite, a pessoa que assina a avaliação e o consultório.
 * Campos que dependem de dado ainda não confirmado (telefone, coordenadas,
 * perfil social) entram apenas quando existem — schema com placeholder é pior
 * do que schema incompleto.
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
      publisher: { "@id": siteConfig.url + "/#practice" },
    },
    {
      "@type": "Person",
      "@id": siteConfig.url + "/#person",
      name: schemaName,
      jobTitle: siteConfig.specialty,
      knowsAbout: areaNavigation.map((area) => area.label),
      address: {
        "@type": "PostalAddress",
        addressLocality: "João Pessoa",
        addressRegion: "PB",
        addressCountry: "BR",
      },
      worksFor: { "@id": siteConfig.url + "/#practice" },
      ...(siteConfig.instagram ? { sameAs: [siteConfig.instagram] } : {}),
    },
    {
      "@type": "Dentist",
      "@id": siteConfig.url + "/#practice",
      name: schemaName,
      description: siteConfig.description,
      url: siteConfig.url,
      image: siteConfig.url + homeOgImage.url,
      inLanguage: "pt-BR",
      priceRange: "$$",
      medicalSpecialty: "OralAndMaxillofacialSurgery",
      areaServed: {
        "@type": "City",
        name: "João Pessoa",
        addressRegion: "PB",
        addressCountry: "BR",
      },
      employee: { "@id": siteConfig.url + "/#person" },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "agendamento",
        availableLanguage: "Portuguese",
        areaServed: "BR",
        ...(telephones.length ? { telephone: telephones[0] } : {}),
      },
      ...(telephones.length ? { telephone: telephones } : {}),
      ...(geo ? { geo } : {}),
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
    },
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
