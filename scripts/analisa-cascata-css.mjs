/*
 * Diz quais regras da camada final (app/styles/17- e 18-) poderiam ser levadas
 * de volta ao arquivo dono sem mudar a aparência do site.
 *
 *   node scripts/analisa-cascata-css.mjs
 *
 * Não altera nada — só relata. A resposta que ele deu em 2026-09-11: de 251
 * regras, nenhuma. Rode de novo depois de mexer no CSS; se aparecerem
 * candidatas, elas valem a dissolução (sempre conferindo com
 * scripts/regressao-css.js depois).
 *
 * Por que a pergunta é difícil: uma regra da camada final ganha suas disputas
 * por vir por último. Puxá-la para o arquivo dono só é seguro se nada entre as
 * duas posições puder vencê-la. Como não dá para saber estaticamente quais
 * elementos casam com quais seletores, a checagem é conservadora: basta
 * alguém no caminho mexer na mesma família de propriedade com especificidade
 * igual ou maior para o caso ser descartado.
 *
 * O caso que ensinou isso: `.visual-motif { border-radius }` da camada final
 * vencia `.motif-implant { border-radius }`, que vem depois dela no arquivo
 * dos motivos. Mesclada no dono, passou a perder — e o quadro do implante
 * mudou de canto. Os dois seletores não compartilham uma classe sequer, mas
 * casam no mesmo elemento.
 */
import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const DIR = join(dirname(fileURLToPath(import.meta.url)), "..", "app", "styles");
const arquivos = readdirSync(DIR).filter((f) => /^\d\d-.*\.css$/.test(f)).sort();
const ehCamadaFinal = (f) => /^1[78]-/.test(f);

/** Regras folha, em ordem, com o contexto de @media em que vivem. */
function parse(css, arquivo) {
  const regras = [];
  const pilha = [];
  let cabDe = 0;
  let emComentario = false;
  for (let i = 0; i < css.length; i++) {
    if (emComentario) { if (css.startsWith("*/", i)) { emComentario = false; i++; } continue; }
    if (css.startsWith("/*", i)) { emComentario = true; i++; continue; }
    const c = css[i];
    if (c === '"' || c === "'") {
      const q = c; i++;
      while (i < css.length && css[i] !== q) { if (css[i] === "\\") i++; i++; }
      continue;
    }
    if (c === "{") { pilha.push({ cab: css.slice(cabDe, i), abre: i }); cabDe = i + 1; continue; }
    if (c === "}") {
      const q = pilha.pop();
      const corpo = css.slice(q.abre + 1, i);
      if (!/[{}]/.test(corpo)) {
        const limpa = (s) => s.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s+/g, " ").trim();
        regras.push({
          arquivo,
          ctx: pilha.map((p) => limpa(p.cab)).filter((s) => s.startsWith("@")).join(" "),
          sel: limpa(q.cab),
          props: corpo.split(";").map((d) => d.trim()).filter(Boolean)
            .map((d) => d.slice(0, d.indexOf(":")).trim()).filter(Boolean),
        });
      }
      cabDe = i + 1;
      continue;
    }
  }
  return regras;
}

function familia(p) {
  if (/-radius$/.test(p)) return "border-radius";
  if (/^margin(-|$)/.test(p)) return "margin";
  if (/^padding(-|$)/.test(p)) return "padding";
  if (/^background(-|$)/.test(p)) return "background";
  if (/^font(-|$)/.test(p)) return "font";
  if (/^border(-|$)/.test(p)) return "border";
  if (/^(gap|row-gap|column-gap)$/.test(p)) return "gap";
  if (/^(inset|top|right|bottom|left)$/.test(p)) return "inset";
  if (/^(flex|grid|overflow|animation|transition)(-|$)/.test(p)) return RegExp.$1;
  return p;
}

function espec(sel) {
  let melhor = [0, 0, 0];
  for (const parte of sel.split(",")) {
    const s = parte.trim();
    const v = [
      (s.match(/#[\w-]+/g) || []).length,
      (s.match(/\.[\w-]+|\[[^\]]*\]|:(?!:)[\w-]+/g) || []).length,
      (s.match(/(^|[\s>+~])[a-zA-Z][\w-]*|::[\w-]+/g) || []).length,
    ];
    if (v[0] > melhor[0] || (v[0] === melhor[0] && (v[1] > melhor[1] ||
        (v[1] === melhor[1] && v[2] > melhor[2])))) melhor = v;
  }
  return melhor;
}

const mandaOuEmpata = (x, y) =>
  x[0] !== y[0] ? x[0] > y[0] : x[1] !== y[1] ? x[1] > y[1] : x[2] >= y[2];

const todas = [];
for (const f of arquivos) todas.push(...parse(readFileSync(join(DIR, f), "utf8"), f));

const camadaFinal = todas.filter((r) => ehCamadaFinal(r.arquivo));
const candidatas = [];
const presas = [];
const semDono = [];

for (const r of camadaFinal) {
  const iguais = todas.filter((d) => !ehCamadaFinal(d.arquivo) && d.sel === r.sel && d.ctx === r.ctx);
  if (!iguais.length) { semDono.push(r); continue; }

  const dono = iguais[iguais.length - 1];
  const fam = new Set(r.props.map(familia));
  const eDela = espec(r.sel);
  const bloqueio = todas.slice(todas.indexOf(dono) + 1, todas.indexOf(r)).find((m) =>
    m.ctx === r.ctx && m.sel !== r.sel &&
    m.props.some((p) => fam.has(familia(p))) && mandaOuEmpata(espec(m.sel), eDela));

  if (bloqueio) presas.push({ r, dono, bloqueio });
  else candidatas.push({ r, dono });
}

console.log("Regras na camada final: " + camadaFinal.length);
console.log("");
console.log("  dissolvíveis agora ................ " + candidatas.length);
console.log("  presas pela cascata .............. " + presas.length);
console.log("  sem regra de mesmo seletor antes .. " + semDono.length);
console.log("");

if (candidatas.length) {
  console.log("Dissolvíveis — mover as declarações para o fim do bloco no dono,");
  console.log("depois conferir com scripts/regressao-css.js:");
  for (const c of candidatas) {
    console.log("  " + c.r.arquivo.slice(0, 2) + " -> " + c.dono.arquivo +
      "   " + (c.r.ctx ? c.r.ctx + " " : "") + c.r.sel);
  }
} else {
  console.log("Nada a dissolver: toda regra com dono ou está presa pela cascata");
  console.log("ou não tem regra de mesmo seletor antes dela.");
}

if (presas.length) {
  console.log("\nPresas (amostra) — quem as bloqueia:");
  for (const p of presas.slice(0, 10)) {
    console.log("  " + p.r.sel + "\n      bloqueada por  " + p.bloqueio.sel +
      "  (" + p.bloqueio.arquivo + ")");
  }
}
