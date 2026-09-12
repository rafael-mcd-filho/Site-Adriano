import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. Adriano — Cirurgia Buco-Maxilo-Facial",
    short_name: "Dr. Adriano",
    description:
      "Avaliação e planejamento em cirurgia buco-maxilo-facial em João Pessoa.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f6f4",
    theme_color: "#223853",
    lang: "pt-BR",
    /**
     * Servido de `public/` em vez das convenções de metadata: o caminho gerado
     * pelo Next carrega hash de cache, e o manifest precisa de URL estável.
     * Sem `icons`, instalar o site na tela inicial resulta em ícone em branco.
     * SVG com `sizes: "any"` cobre todas as densidades sem gerar PNGs.
     */
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
