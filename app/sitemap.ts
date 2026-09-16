import type { MetadataRoute } from "next";
import { contentLastReviewed, treatments } from "@/lib/content";
import { siteConfig } from "@/lib/site";

const lastModified = new Date(contentLastReviewed);

type SitemapRoute = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  lastModified?: Date;
};

const treatmentRoutes: SitemapRoute[] = Object.values(treatments).map(
  (content) => ({
    path: "/" + content.slug,
    priority: 0.8,
    changeFrequency: "yearly",
    lastModified: new Date(content.lastReviewed ?? contentLastReviewed),
  }),
);

const routes: SitemapRoute[] = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  /* Destino da busca por nome e do link da bio: ranqueia melhor que a âncora
     que existia na home. */
  { path: "/sobre", priority: 0.9, changeFrequency: "monthly" },
  ...treatmentRoutes,
  { path: "/para-dentistas", priority: 0.6, changeFrequency: "yearly" },
  /**
   * Página de confiança: indexável de propósito, para quem procura a política
   * encontrá-la sem depender de achar o link no rodapé.
   */
  { path: "/politica-de-privacidade", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: siteConfig.url + route.path,
    lastModified: route.lastModified ?? lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
