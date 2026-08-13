import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. Adriano — Cirurgia Buco-Maxilo-Facial",
    short_name: "Dr. Adriano",
    description:
      "Avaliação e planejamento em cirurgia buco-maxilo-facial em João Pessoa.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F5F0",
    theme_color: "#103246",
    lang: "pt-BR",
  };
}

