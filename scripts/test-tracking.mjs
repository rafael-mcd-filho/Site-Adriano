import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const compile = (path) => ts.transpileModule(readFileSync(new URL(path, import.meta.url), "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const context = { exports: {}, URL };
vm.runInNewContext(compile("../lib/whatsapp-tracking.ts"), context);
const { buildWhatsAppEvent, whatsappConversionGroups } = context.exports;
const siteSource = compile("../lib/site.ts");
const loadSite = (env = {}) => {
  const context = { exports: {}, process: { env } };
  vm.runInNewContext(siteSource, context);
  return context.exports;
};
const { practiceLocations: locations, contactLocation } = loadSite();
const natal = locations.find((location) => location.id === "natal");
const base = { href: `https://wa.me/${natal.whatsapp}?text=mensagem-privada`, path: "/implantes-dentarios", title: "Implantes", label: "Falar com a equipe", location: "hero", ctaId: "cta-hero-whatsapp__natal" };

let cases = 0;
for (const group of whatsappConversionGroups) {
  for (const path of group.paths) {
    for (const city of locations) {
      const event = buildWhatsAppEvent({ ...base, path, href: `https://wa.me/${city.whatsapp}?text=mensagem-privada`, ctaId: `cta-hero-whatsapp__${city.id}` }, locations);
      assert.equal(event.whatsapp_conversion_group, group.id);
      assert.equal(event.whatsapp_city, city.id);
      assert.equal(event.whatsapp_click_id, `${path === "/" ? "home" : path.slice(1)}__hero-whatsapp__${city.id}`);
      assert.ok(!JSON.stringify(event).includes("mensagem-privada"));
      cases++;
    }
  }
}
assert.equal(new Set(whatsappConversionGroups.map(group => group.id)).size, 10);
for (const path of ["/politica-de-privacidade", "/obrigado", "/rota-inexistente"]) {
  assert.equal(buildWhatsAppEvent({ ...base, path }, locations).whatsapp_conversion_group, "");
}
for (const href of ["https://example.com/wa.me/558494177176", "https://wa.me.example.com/558494177176", "https://example.com/?next=https://wa.me/558494177176", "#contato", "https://api.whatsapp.com/privacy", "javascript:alert(1)"]) {
  assert.equal(buildWhatsAppEvent({ ...base, href }, locations), null);
}
const direct = buildWhatsAppEvent({ ...base, path: "/sobre/", ctaId: "cta-rodape-whatsapp", href: `https://api.whatsapp.com/send?phone=${contactLocation.whatsapp}&text=mensagem-privada` }, locations);
assert.equal(direct.whatsapp_click_id, "sobre__rodape-whatsapp__joao-pessoa");
assert.equal(direct.whatsapp_conversion_group, "geral");
assert.equal(direct.whatsapp_phone, contactLocation.whatsapp);
const changedDestination = buildWhatsAppEvent({ ...base, href: `https://wa.me/${contactLocation.whatsapp}` }, locations);
assert.equal(changedDestination.whatsapp_click_id, "implantes-dentarios__hero-whatsapp__joao-pessoa");
assert.equal(buildWhatsAppEvent({ ...base, href: "https://wa.me/5511999999999" }, locations).whatsapp_city, "nao_identificado");

// Os cartões preservam a origem do clique mesmo compartilhando o destino.
const localEvents = locations.map(location => buildWhatsAppEvent({
  ...base,
  path: "/",
  href: loadSite().getWhatsAppHref("Olá, vim pelo site."),
  ctaId: `cta-local-${location.id}-whatsapp`,
}, locations));
assert.equal(new Set(localEvents.map(event => event.whatsapp_click_id)).size, locations.length);
assert.ok(localEvents.every(event => event.whatsapp_city === "joao-pessoa"));

// Configurações antigas de deploy não podem desviar os CTAs de João Pessoa.
const message = "Olá, vim pelo site. Dúvidas sobre avaliação & horários?";
for (const env of [{}, { NEXT_PUBLIC_WHATSAPP_NUMBER: natal.whatsapp }]) {
  const { getWhatsAppHref, siteConfig } = loadSite(env);
  assert.equal(siteConfig.whatsappNumber, contactLocation.whatsapp);
  const href = getWhatsAppHref(message);
  const url = new URL(href);
  assert.equal(url.origin, "https://wa.me");
  assert.equal(url.pathname, "/" + contactLocation.whatsapp);
  assert.equal(url.searchParams.get("text"), message);
  for (const group of whatsappConversionGroups) for (const path of group.paths) {
    const event = buildWhatsAppEvent({ ...base, href, path }, locations);
    assert.equal(event.whatsapp_city, "joao-pessoa");
    assert.equal(event.whatsapp_phone, contactLocation.whatsapp);
    assert.equal(event.whatsapp_conversion_group, group.id);
    assert.ok(!JSON.stringify(event).includes(message));
  }
}
console.log(`OK: ${cases} combinações de página/cidade; destino real exclusivo João Pessoa; override antigo; dez grupos; exclusões; URLs; telefone; dados enviados.`);
