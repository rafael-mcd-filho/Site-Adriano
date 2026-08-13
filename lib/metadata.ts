import type { Metadata } from "next";
import type { TreatmentContent } from "@/lib/content";

export const siteName = "Dr. Adriano BMF";

export const ogImage = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "Antes de decidir, é preciso entender o caso por inteiro.",
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  socialTitle?: string;
};

/**
 * O Next substitui o objeto `openGraph` do pai inteiro quando o filho declara
 * o seu — não faz merge campo a campo. Toda página precisa repetir imagem,
 * locale e siteName, senão o link compartilhado sai sem preview.
 */
export function pageMetadata({
  title,
  description,
  path,
  socialTitle,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName,
      title: socialTitle ?? title,
      description,
      url: path,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle ?? title,
      description,
      images: [ogImage.url],
    },
  };
}

export function treatmentMetadata(content: TreatmentContent): Metadata {
  return pageMetadata({
    title: content.metadata.title,
    description: content.metadata.description,
    path: "/" + content.slug,
  });
}
