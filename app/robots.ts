import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!siteConfig.isIndexable) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      /**
       * Distinção deliberada: `OAI-SearchBot` alimenta a busca do ChatGPT e
       * traz visitante; `GPTBot` coleta para treinamento e não devolve nada.
       */
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "GPTBot", disallow: "/" },
    ],
    sitemap: siteConfig.url + "/sitemap.xml",
    host: siteConfig.url,
  };
}
