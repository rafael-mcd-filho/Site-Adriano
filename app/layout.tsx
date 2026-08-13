import type { Metadata, Viewport } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { ogImage, siteName } from "@/lib/metadata";
import { areaNavigation, schemaName, siteConfig } from "@/lib/site";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Cirurgião Buco-Maxilo-Facial em João Pessoa | Dr. Adriano",
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
    title: "Cirurgião Buco-Maxilo-Facial em João Pessoa | Dr. Adriano",
    description: siteConfig.description,
    url: "/",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cirurgião Buco-Maxilo-Facial em João Pessoa | Dr. Adriano",
    description: siteConfig.description,
    images: [ogImage.url],
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
      },
};

export const viewport: Viewport = {
  themeColor: "#103246",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={manrope.variable + " " + sourceSans.variable}>
      <body>
        <JsonLd
          data={{
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
              },
              {
                "@type": "Dentist",
                "@id": siteConfig.url + "/#practice",
                name: schemaName,
                description: siteConfig.description,
                url: siteConfig.url,
                image: siteConfig.url + ogImage.url,
                inLanguage: "pt-BR",
                areaServed: {
                  "@type": "City",
                  name: "João Pessoa",
                  addressRegion: "PB",
                  addressCountry: "BR",
                },
                employee: { "@id": siteConfig.url + "/#person" },
                ...(siteConfig.whatsappNumber
                  ? { telephone: "+" + siteConfig.whatsappNumber.replace(/\D/g, "") }
                  : {}),
                availableService: areaNavigation.map((area) => ({
                  "@type": "MedicalProcedure",
                  name: area.label,
                  url: siteConfig.url + area.href,
                })),
              },
            ],
          }}
        />
        <a className="skip-link" href="#conteudo">
          Ir para o conteúdo
        </a>
        <Header />
        <div id="conteudo">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
