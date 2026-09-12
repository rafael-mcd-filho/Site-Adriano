import type { MetadataRoute } from "next";
import { contentLastReviewed } from "@/lib/content";
import { siteConfig } from "@/lib/site";

const lastModified = new Date(contentLastReviewed);

const routes: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/apneia-do-sono", priority: 0.8, changeFrequency: "yearly" },
  { path: "/implantes-dentarios", priority: 0.8, changeFrequency: "yearly" },
  { path: "/reconstrucao-ossea", priority: 0.8, changeFrequency: "yearly" },
  { path: "/cirurgia-atm", priority: 0.8, changeFrequency: "yearly" },
  { path: "/cirurgia-ortognatica", priority: 0.8, changeFrequency: "yearly" },
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
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
