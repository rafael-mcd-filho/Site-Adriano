import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

export type OgCard = {
  eyebrow: string;
  title: string;
  footer: string;
  alt: string;
};

/**
 * Cartões sociais servidos em `/og/<slug>`. Rota explícita em vez do arquivo
 * de convenção `opengraph-image.tsx`: aninhado, ele é construído mas não emite
 * a meta tag nas rotas filhas.
 *
 * Uma imagem única para o site inteiro faz todo link compartilhado — e todo
 * anúncio — parecer a mesma página. Aqui cada rota leva a própria manchete.
 */
export const ogCards = {
  home: {
    eyebrow: "CIRURGIA BUCO-MAXILO-FACIAL",
    title: "Comer, sorrir ou dormir bem deixou de ser simples?",
    footer: "Antes de falar em cirurgia, precisamos entender o seu caso",
    alt: "Dr. Adriano — Cirurgia e Traumatologia Buco-Maxilo-Facial em João Pessoa",
  },
  "apneia-do-sono": {
    eyebrow: "RESPIRAÇÃO E SONO",
    title: "Você dorme várias horas e ainda acorda cansado?",
    footer: "Sono e maxilares: avaliação multidisciplinar",
    alt: "Avaliação buco-maxilo-facial na apneia do sono",
  },
  "implantes-dentarios": {
    eyebrow: "IMPLANTES DENTÁRIOS",
    title: "A falta de dentes mudou seu jeito de comer e sorrir?",
    footer: "Osso · Gengiva · Mordida · Futura prótese",
    alt: "Planejamento de implantes dentários",
  },
  "reconstrucao-ossea": {
    eyebrow: "RECONSTRUÇÃO ÓSSEA",
    title: "Ouviu que não há osso suficiente para implante?",
    footer: "Entenda as possibilidades e os limites do seu caso",
    alt: "Avaliação de reconstrução óssea para futura reabilitação",
  },
  "cirurgia-atm": {
    eyebrow: "DTM E ATM",
    title: "Sua mandíbula estala, dói ou parece travar?",
    footer: "Cirurgia é uma possibilidade, não um destino obrigatório",
    alt: "Avaliação de DTM, ATM e dor na mandíbula em João Pessoa",
  },
  "cirurgia-ortognatica": {
    eyebrow: "CIRURGIA ORTOGNÁTICA",
    title: "Sua mordida não encaixa e mastigar exige esforço?",
    footer: "Entenda a indicação e a jornada com seu ortodontista",
    alt: "Cirurgia ortognática planejada em conjunto com a ortodontia",
  },
  "cirurgia-de-siso": {
    eyebrow: "CIRURGIA DE SISO",
    title: "Precisa mesmo tirar o siso?",
    footer: "Indicação avaliada caso a caso · João Pessoa",
    alt: "Avaliação de cirurgia de siso em João Pessoa",
  },
  sobre: {
    eyebrow: "DR. ADRIANO ROCHA GERMANO",
    title: "Cirurgião bucomaxilofacial em João Pessoa.",
    footer: "Certificação Board FBCOMS · Banca de examinadores · CRO-PB 12753",
    alt: "Formação e credenciais do Dr. Adriano Rocha Germano",
  },
  "para-dentistas": {
    eyebrow: "CANAL PROFISSIONAL",
    title: "A etapa cirúrgica precisa avançar. O cuidado precisa continuar.",
    footer: "Discussão do caso · Conduta · Continuidade do cuidado",
    alt: "Encaminhamento profissional para cirurgia buco-maxilo-facial",
  },
  "politica-de-privacidade": {
    eyebrow: "DR. ADRIANO BMF",
    title: "Política de Privacidade",
    footer: "Tratamento de dados · Direitos do titular · Canais de contato",
    alt: "Política de privacidade do site",
  },
} as const satisfies Record<string, OgCard>;

export type OgSlug = keyof typeof ogCards;

/** Metadados de `openGraph.images` para uma página. */
export function ogImageFor(slug: OgSlug) {
  return {
    url: "/og/" + slug,
    width: ogSize.width,
    height: ogSize.height,
    alt: ogCards[slug].alt,
  };
}

/** Cartão 1200×630 — mesma composição em todas as páginas. */
export function renderOgImage({ eyebrow, title, footer }: OgCard) {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "66px 78px 72px",
          background:
            "linear-gradient(135deg, #f8f6f4 0%, #f5f8ff 58%, #dbe6ff 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 44, height: 4, background: "#3e6598" }} />
          <div
            style={{
              color: "#3e6598",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 6,
            }}
          >
            {eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              maxWidth: 950,
              color: "#18273a",
              fontSize: 68,
              fontWeight: 600,
              letterSpacing: -2,
              lineHeight: 1.1,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              width: 210,
              height: 5,
              marginTop: 28,
              background: "#b8cdff",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              maxWidth: 700,
              color: "#6f6f6f",
              fontSize: 24,
              lineHeight: 1.35,
            }}
          >
            {footer}
          </div>
          <div
            style={{
              paddingLeft: 32,
              color: "#223853",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 3,
              whiteSpace: "nowrap",
            }}
          >
            DR. ADRIANO · BMF
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
