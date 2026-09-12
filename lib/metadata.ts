import type { Metadata } from "next";
import type { TreatmentContent } from "@/lib/content";
import { ogImageFor, type OgSlug } from "@/lib/og";
import { siteConfig } from "@/lib/site";

export const siteName = "Dr. Adriano BMF";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  /** Cartão social da página. Sem ele, cai no cartão da home. */
  ogSlug?: OgSlug;
  socialTitle?: string;
  /** Páginas de confirmação existem para medir conversão, não para ranquear. */
  index?: boolean;
  /**
   * Ignora o sufixo " | Dr. Adriano" do layout. Serve às páginas cujo título
   * já traz o nome: sem isto, `/sobre` saía como "Dr. Adriano Rocha Germano |
   * Cirurgião Bucomaxilofacial | Dr. Adriano".
   */
  absoluteTitle?: boolean;
};

/**
 * Robots explícito em vez do padrão: `max-image-preview: large` é o que
 * autoriza o Google a exibir a miniatura grande na busca e no Discover, e
 * `max-snippet: -1` tira o limite de caracteres do resumo.
 */
const indexableRobots: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

const noIndexRobots: Metadata["robots"] = {
  index: false,
  follow: false,
  noarchive: true,
  googleBot: { index: false, follow: false, noimageindex: true },
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
  ogSlug = "home",
  socialTitle,
  index = true,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const image = ogImageFor(ogSlug);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    /*
     * A trava global vem primeiro.
     *
     * Sem ela, `pageMetadata` devolvia `index, follow` sempre — e como o
     * `noindex` do modo demo vivia só no layout, as rotas filhas o
     * SOBRESCREVIAM. O resultado era a home fora do índice e as páginas de
     * tratamento dentro: exatamente ao contrário do que se queria, e sem que
     * ninguém percebesse, porque o robots.txt bloqueava tudo antes.
     */
    robots: index && siteConfig.isIndexable ? indexableRobots : noIndexRobots,
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName,
      title: socialTitle ?? title,
      description,
      url: path,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle ?? title,
      description,
      images: [image.url],
    },
  };
}

export function treatmentMetadata(content: TreatmentContent): Metadata {
  return pageMetadata({
    title: content.metadata.title,
    description: content.metadata.description,
    path: "/" + content.slug,
    ogSlug: content.slug as OgSlug,
  });
}
