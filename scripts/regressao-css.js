/*
 * Sonda de regressão de CSS — cole no console do navegador, com `npm run dev`
 * rodando e a rota aberta.
 *
 * Lê o estilo COMPUTADO de cada nó da página, mais a geometria de cada caixa,
 * e guarda no localStorage. Depois de mexer no CSS, compara. Zero diferenças
 * significa que o navegador está pintando exatamente a mesma coisa — não
 * importa como as regras foram reorganizadas no disco.
 *
 *   await medir("antes")        // grava o estado atual desta rota
 *   ... mexa no CSS, espere recarregar ...
 *   await comparar("antes")     // 0 = nada mudou
 *
 * Repita rota a rota: a medição é gravada por caminho.
 *
 * Foi assim que a divisão do globals.css em app/styles/ foi validada:
 * 3.561 nós, 6 rotas, zero diferenças.
 */

const PROPS = [
  "display", "position", "width", "height", "min-height", "max-width",
  "margin-top", "margin-right", "margin-bottom", "margin-left",
  "padding-top", "padding-right", "padding-bottom", "padding-left",
  "background-color", "background-image", "background-size",
  "color", "font-family", "font-size", "font-weight", "line-height",
  "letter-spacing", "text-align", "text-transform", "text-decoration-line",
  "border-top-width", "border-bottom-width", "border-top-color",
  "border-bottom-color", "border-top-left-radius", "box-shadow",
  "outline-color", "outline-width", "outline-style", "outline-offset",
  "flex-direction", "justify-content", "align-items", "row-gap", "column-gap",
  "grid-template-columns", "grid-template-rows", "z-index",
  "overflow-x", "overflow-y", "visibility", "top", "left",
  "fill", "stroke", "animation-name", "animation-duration",
  "transform", "opacity", "content",
  "--mark-color", "--footer-wave-fill", "--page-accent", "--page-dark",
];

/**
 * Lê a página inteira com animações congeladas, para a medição ser estável.
 *
 * Exige estar no topo: o cabeçalho é `position: fixed` e ganha `is-scrolled`
 * ao rolar, então medir em posições diferentes acusa centenas de diferenças
 * que não têm nada a ver com o CSS. Quem chama garante o topo (ver assentar).
 */
function dump() {
  const freeze = document.createElement("style");
  freeze.textContent =
    "*,*::before,*::after{animation:none!important;transition:none!important}";
  document.head.appendChild(freeze);

  const lines = [];
  document.querySelectorAll("body, body *").forEach((el, i) => {
    if (el.tagName === "STYLE" || el.tagName === "SCRIPT") return;

    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    const cn =
      typeof el.className === "string" ? el.className : el.className.baseVal || "";
    const id = i + "|" + el.tagName + "." + cn;

    lines.push(
      id + " " +
      PROPS.map((p) => p + ":" + cs.getPropertyValue(p)).join(";") +
      " @" + Math.round(r.width) + "x" + Math.round(r.height) +
      "+" + Math.round(r.left) + "," + Math.round(r.top + scrollY),
    );

    for (const pe of ["::before", "::after"]) {
      const ps = getComputedStyle(el, pe);
      if (ps.getPropertyValue("content") === "none") continue;
      lines.push(id + pe + " " + PROPS.map((p) => p + ":" + ps.getPropertyValue(p)).join(";"));
    }
  });

  freeze.remove();
  return lines;
}

/**
 * Espera fontes e imagens assentarem: geometria medida cedo demais mente.
 *
 * A espera tem teto. Imagem com `loading="lazy"` fora da viewport fica
 * incompleta para sempre e nunca dispara `onload` — esperar por ela trava a
 * sonda. O teto também cobre imagem que falha em silêncio.
 */
function assentar(tetoMs = 2000) {
  // O topo é parte da condição de medida, não um detalhe: um recarregamento
  // restaura o scroll anterior, e aí o cabeçalho fixo aparece em outro lugar.
  window.scrollTo(0, 0);

  const fontes = document.fonts?.ready ?? Promise.resolve();
  const imagens = [...document.images]
    .filter((i) => !i.complete)
    .map((i) => new Promise((r) => { i.onload = i.onerror = r; }));

  const tudo = Promise.all([fontes, ...imagens]).then(
    () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))),
  );

  return Promise.race([tudo, new Promise((r) => setTimeout(r, tetoMs))]);
}

window.medir = async function medir(rotulo = "antes") {
  await assentar();
  const d = dump();
  localStorage.setItem(
    "css:" + rotulo + ":" + location.pathname,
    JSON.stringify({ largura: innerWidth, linhas: d }),
  );
  return { rotulo, rota: location.pathname, nos: d.length, largura: innerWidth };
};

window.comparar = async function comparar(rotulo = "antes") {
  await assentar();
  const agora = dump();
  const bruto = localStorage.getItem("css:" + rotulo + ":" + location.pathname);
  if (!bruto) return "sem medição '" + rotulo + "' para " + location.pathname;

  const salvo = JSON.parse(bruto);

  // Sem esta trava a sonda vira gerador de falso positivo: uma janela alguns
  // pixels mais larga muda quase todo nó, e o relatório culpa o seu CSS.
  if (salvo.largura !== innerWidth) {
    return (
      "ABORTADO: a janela tinha " + salvo.largura + "px na medição e tem " +
      innerWidth + "px agora. Volte à mesma largura e compare de novo."
    );
  }

  const antes = salvo.linhas;
  const difs = [];
  for (let i = 0; i < Math.max(agora.length, antes.length); i++) {
    if (agora[i] === antes[i]) continue;
    const a = (antes[i] || "").split(";");
    const b = (agora[i] || "").split(";");
    const props = [];
    for (let k = 0; k < Math.max(a.length, b.length); k++) {
      if (a[k] !== b[k]) props.push({ antes: a[k], agora: b[k] });
    }
    difs.push({ no: (agora[i] || antes[i]).split(" ")[0], props: props.slice(0, 6) });
  }

  return {
    rota: location.pathname,
    nos: agora.length,
    diferencas: difs.length,
    detalhe: difs.slice(0, 10),
  };
};

console.log('sonda pronta — await medir("antes") / await comparar("antes")');
