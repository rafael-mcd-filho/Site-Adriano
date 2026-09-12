import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (siteConfig.isDemo) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: [
      /**
       * `/obrigado` fica fora do índice por `noindex` na própria página — não
       * por `disallow`: um robô bloqueado no robots.txt nunca lê a meta tag e
       * a URL pode acabar listada mesmo assim.
       */
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
