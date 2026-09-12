import { ImageResponse } from "next/og";

/**
 * 180×180 é o tamanho que o iOS pede para a tela de início. Sem este arquivo,
 * o atalho salvo no iPhone vira uma captura da página em vez do ícone.
 * Fundo chapado de propósito: o iOS não respeita transparência aqui.
 */
export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "#223853",
          color: "#f8f6f4",
          fontSize: 104,
          fontWeight: 800,
          letterSpacing: "-0.08em",
        }}
      >
        A
      </div>
    ),
    size,
  );
}
