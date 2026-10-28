import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");
const compile = (path) => ts.transpileModule(read(path), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX },
}).outputText;
const tracker = { exports: {}, URL };
vm.runInNewContext(compile("../lib/whatsapp-tracking.ts"), tracker);
const { buildWhatsAppEvent, whatsappConversionGroups } = tracker.exports;
const site = { exports: {}, process: { env: {} } };
vm.runInNewContext(compile("../lib/site.ts"), site);
const { practiceLocations: locations, contactLocation, getWhatsAppHref } = site.exports;
const { containerVersion: container } = JSON.parse(read("../gtm/adriano-google-ads-import.json"));
const value = (item, key) => item.parameter.find((entry) => entry.key === key)?.value;
const expectedLabels = [
  "T-27CMyJ9osdEK-K39tE", "ybgbCP299osdEK-K39tE", "ZbgOCOjO_IsdEK-K39tE",
  "PkSLCIDV_IsdEK-K39tE", "6unKCJ7Q9osdEK-K39tE", "A5oeCMrp_IsdEK-K39tE",
  "M22fCIHx_IsdEK-K39tE", "xcm8CNi-gIwdEK-K39tE", "V7kGCI3NgIwdEK-K39tE",
  "EZRZCLH79osdEK-K39tE", "yyQhCLXagIwdEK-K39tE",
];
assert.equal(container.container.publicId, "GTM-WFF2SFX6");
assert.equal(container.tag.length, 11);
assert.equal(container.trigger.length, 11);
assert.equal(container.variable.length, 1);
assert.ok(container.tag.every((tag) => tag.type === "awct"));
assert.equal(container.tag.find((tag) => value(tag, "conversionLabel") === expectedLabels[10]).name, "Visualização de página");
for (const key of ["tag", "trigger", "variable"]) {
  assert.equal(new Set(container[key].map((item) => item[key + "Id"])).size, container[key].length);
}
const conversionTags = container.tag.filter((tag) => tag.type === "awct");
assert.deepEqual(conversionTags.map((tag) => value(tag, "conversionLabel")), expectedLabels);
for (const tag of conversionTags) {
  assert.equal(value(tag, "conversionId"), "18446009647");
  assert.equal(tag.tagFiringOption, "ONCE_PER_EVENT");
  assert.ok(container.trigger.some((trigger) => trigger.triggerId === tag.firingTriggerId[0]));
}

function matchingTags(event) {
  const variables = { _event: event.event };
  for (const variable of container.variable) variables[variable.name] = event[value(variable, "name")] ?? value(variable, "defaultValue");
  const matches = (filter) => {
    assert.equal(filter.type, "EQUALS");
    return variables[value(filter, "arg0").slice(2, -2)] === value(filter, "arg1");
  };
  const ids = container.trigger.filter((trigger) => [...trigger.customEventFilter, ...(trigger.filter || [])].every(matches)).map((trigger) => trigger.triggerId);
  return conversionTags.filter((tag) => tag.firingTriggerId.some((id) => ids.includes(id)));
}
for (const [index, group] of whatsappConversionGroups.entries()) {
  for (const path of group.paths) for (const location of locations) {
    const event = buildWhatsAppEvent({ href: `https://wa.me/${location.whatsapp}`, path, title: "Teste", label: "WhatsApp", location: "hero" }, locations);
    const tags = matchingTags(event);
    assert.equal(tags.length, 1);
    assert.equal(value(tags[0], "conversionLabel"), expectedLabels[index]);
  }
  for (const path of group.paths) {
    const event = buildWhatsAppEvent({ href: getWhatsAppHref("Olá, vim pelo site."), path, title: "Teste", label: "WhatsApp", location: "hero" }, locations);
    assert.equal(event.whatsapp_city, "joao-pessoa");
    assert.equal(event.whatsapp_phone, contactLocation.whatsapp);
    const tags = matchingTags(event);
    assert.equal(tags.length, 1);
    assert.equal(value(tags[0], "conversionLabel"), expectedLabels[index]);
  }
}
for (const group of ["", undefined, "desconhecido", "__proto__"]) {
  assert.equal(matchingTags({ event: "whatsapp_click", whatsapp_conversion_group: group }).length, 0);
}
assert.equal(matchingTags({ event: "gtm.click", whatsapp_conversion_group: "geral" }).length, 0);
assert.equal(matchingTags({ event: "adriano_page_view", whatsapp_conversion_group: "geral" }).length, 1);
assert.equal(value(matchingTags({ event: "adriano_page_view" })[0], "conversionLabel"), expectedLabels[10]);

// Exercita o efeito real do componente, preservando o ref entre renderizações.
let pathname = "/";
let effect;
const ref = { current: null };
const pageTracker = {
  exports: {}, window: {},
  require(name) {
    if (name === "react") return { useRef: () => ref, useEffect: (callback) => { effect = callback; } };
    if (name === "next/navigation") return { usePathname: () => pathname };
    if (name === "@/lib/whatsapp-tracking") return tracker.exports;
    throw new Error(`Dependência inesperada: ${name}`);
  },
};
vm.runInNewContext(compile("../components/page-view-tracking.tsx"), pageTracker);
function visit(path) { pathname = path; pageTracker.exports.PageViewTracking(); effect(); }
visit("/"); effect(); // React StrictMode não pode duplicar o evento.
visit("/"); visit("/implantes-dentarios"); visit("/implantes-dentarios/");
visit("/sobre"); visit("/"); visit("/obrigado"); visit("/inexistente");
visit("/politica-de-privacidade"); visit(null); visit("/");
const events = pageTracker.window.dataLayer;
assert.deepEqual(Array.from(events, (event) => event.page_path), ["/", "/implantes-dentarios", "/sobre", "/", "/politica-de-privacidade", "/"]);
for (const event of events) {
  assert.equal(event.event, "adriano_page_view");
  assert.deepEqual(Object.keys(event).sort(), ["event", "page_path"]);
  assert.equal(matchingTags(event).length, 1);
}
console.log("OK: 11 rótulos; roteamento real de cliques para tags; exclusões; visualizações iniciais/internas; StrictMode; retorno à página; 404.");
