import type { NextConfig } from "next";

/**
 * Cabeçalhos de segurança aplicados a todas as rotas. Sem CSP por enquanto: o
 * JSON-LD e o carregador do GTM são scripts inline, e uma política estrita
 * exigiria nonce por requisição — o que tiraria as páginas do cache estático.
 *
 * O HSTS vai sem `includeSubDomains` de propósito: é uma decisão de um ano no
 * cache do navegador e o consultório pode vir a usar subdomínios fora daqui.
 */
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  agentRules: false,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/dtm-atm",
        destination: "/cirurgia-atm",
        permanent: true,
      },
    ];
  },
  images: {
    // Os desenhos e cartões sociais do site são estáveis: TTL longo evita
    // reotimizações repetidas a cada 4 horas, que é o padrão.
    minimumCacheTTL: 2678400, // 31 dias
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
