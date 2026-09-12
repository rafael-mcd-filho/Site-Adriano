/**
 * Mesmo conjunto do `VisualMotif` — inclui `planning`, que não pertence a
 * nenhum tratamento e só existe nas composições de página.
 */
export type MotifType =
  | "air"
  | "implant"
  | "layers"
  | "joint"
  | "alignment"
  | "planning"
  | "wisdom";

/**
 * Marca compacta para o topo dos cards de área.
 *
 * Existe separada do `VisualMotif` de propósito: aquele é uma composição
 * absoluta dimensionada para ocupar meia dobra, e reduzi-la por `transform`
 * quebraria os posicionamentos. Aqui cada motivo é redesenhado em um viewBox
 * único de 96×96, em traço, herdando a cor por `currentColor`.
 *
 * Desenho próprio em vez de foto de banco: não custa requisição de rede, não
 * depende de licença de terceiro e não entra no LCP com imagem remota.
 */
export function MotifThumb({ type }: { type: MotifType }) {
  return (
    <svg
      className="motif-thumb"
      viewBox="0 0 96 96"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {type === "air" && (
        <>
          <path d="M18 34c8-7 16-7 24 0s16 7 24 0" opacity="0.45" />
          <path d="M14 48c10-9 20-9 30 0s20 9 30 0" />
          <path d="M18 62c8-7 16-7 24 0s16 7 24 0" opacity="0.45" />
          <circle cx="74" cy="26" r="7" strokeWidth="2.4" />
          <circle cx="74" cy="26" r="2.4" fill="currentColor" stroke="none" />
        </>
      )}

      {type === "implant" && (
        <>
          <path d="M38 26h20l-3 11H41z" strokeWidth="2.4" />
          <path d="M44 37h8v6h-8z" />
          <path d="M42 47h12M41 55h14M42 63h12M44 71h8" />
          <path d="M48 43v32" opacity="0.4" />
          <path d="M24 44c6 4 6 22 0 26M72 44c-6 4-6 22 0 26" opacity="0.35" />
        </>
      )}

      {type === "layers" && (
        <>
          <path d="M30 28h36" opacity="0.35" />
          <path d="M24 40h48" opacity="0.55" />
          <path d="M18 52h60" strokeWidth="2.6" />
          <path d="M22 64h52" opacity="0.55" />
          <path d="M28 76h40" opacity="0.35" />
          <path d="M84 40v24" opacity="0.5" />
          <path d="M81 43l3-3 3 3M81 61l3 3 3-3" opacity="0.5" />
        </>
      )}

      {type === "joint" && (
        <>
          <path d="M22 32c14-6 30-4 40 6" strokeWidth="2.4" />
          <circle cx="60" cy="46" r="12" />
          <circle cx="60" cy="46" r="3.5" fill="currentColor" stroke="none" />
          <path d="M28 66c10 8 24 9 36 3" opacity="0.5" />
          <path d="M74 34a18 18 0 0 1 0 24" opacity="0.45" />
        </>
      )}

      {type === "alignment" && (
        <>
          <path d="M48 18v60" opacity="0.35" />
          <rect x="24" y="34" width="10" height="12" rx="3" />
          <rect x="38" y="34" width="10" height="12" rx="3" />
          <rect x="52" y="34" width="10" height="12" rx="3" />
          <rect x="66" y="34" width="6" height="12" rx="3" opacity="0.5" />
          <rect x="28" y="54" width="10" height="12" rx="3" opacity="0.75" />
          <rect x="42" y="54" width="10" height="12" rx="3" opacity="0.75" />
          <rect x="56" y="54" width="10" height="12" rx="3" opacity="0.75" />
          <path d="M18 50h60" strokeDasharray="4 5" opacity="0.55" />
        </>
      )}

      {/* Siso usa o motivo de camadas na própria página (o mapa de volume
          ósseo serve à imagem de um dente incluso), mas na grade da home ele
          ficava idêntico ao card de reconstrução, lado a lado. Aqui ganha
          desenho próprio: o molar inclinado abaixo da linha do osso e o canal
          da mandíbula embaixo — as duas coisas que decidem a indicação. */}
      {type === "wisdom" && (
        <>
          <path d="M12 36h72" strokeDasharray="4 5" opacity="0.5" />
          <g transform="rotate(-26 48 52)">
            <path
              d="M34 44c0-9 6-10 7-10 5 0 7 4 7 5 0-1 2-5 7-5 1 0 7 1 7 10v6c0 4-3 5-5 5H39c-2 0-5-1-5-5z"
              strokeWidth="2.4"
            />
            <path d="M39 55c0 7-1 12-3 16M57 55c0 7 1 12 3 16" />
          </g>
          <path d="M10 80c22-7 54-7 76 0" opacity="0.45" />
          <circle cx="70" cy="76.6" r="2.6" fill="currentColor" stroke="none" opacity="0.6" />
        </>
      )}

      {type === "planning" && (
        <>
          <circle cx="48" cy="48" r="26" opacity="0.35" />
          <circle cx="48" cy="48" r="14" opacity="0.55" />
          <circle cx="48" cy="22" r="5" fill="currentColor" stroke="none" />
          <circle cx="26" cy="62" r="5" fill="currentColor" stroke="none" />
          <circle cx="70" cy="62" r="5" fill="currentColor" stroke="none" />
        </>
      )}
    </svg>
  );
}
