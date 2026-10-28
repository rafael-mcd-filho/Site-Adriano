import { mkdirSync, writeFileSync } from "node:fs";

// IDs e rótulos fornecidos pelo responsável pela conta do Google Ads.
export const conversionId = "18446009647";
export const conversions = [
  ["geral", "WhatsApp | Geral", "T-27CMyJ9osdEK-K39tE"],
  ["apneia-do-sono", "WhatsApp | Apneia do sono", "ybgbCP299osdEK-K39tE"],
  ["implantes-dentarios", "WhatsApp | Implantes dentários", "ZbgOCOjO_IsdEK-K39tE"],
  ["reconstrucao-ossea", "WhatsApp | Reconstrução óssea", "PkSLCIDV_IsdEK-K39tE"],
  ["patologias-maxilofaciais", "WhatsApp | Patologias maxilofaciais", "6unKCJ7Q9osdEK-K39tE"],
  ["trauma-bucomaxilofacial", "WhatsApp | Trauma bucomaxilofacial", "A5oeCMrp_IsdEK-K39tE"],
  ["cirurgia-atm", "WhatsApp | DTM e ATM", "M22fCIHx_IsdEK-K39tE"],
  ["cirurgia-ortognatica", "WhatsApp | Cirurgia ortognática", "xcm8CNi-gIwdEK-K39tE"],
  ["cirurgia-de-siso", "WhatsApp | Cirurgia de siso", "V7kGCI3NgIwdEK-K39tE"],
  ["profissionais-da-saude", "WhatsApp | Profissionais da saúde", "EZRZCLH79osdEK-K39tE"],
];
export const pageViewLabel = "yyQhCLXagIwdEK-K39tE";

const parameter = (key, value, type = "TEMPLATE") => ({ type, key, value });
const equals = (variable, value) => ({
  type: "EQUALS",
  parameter: [parameter("arg0", `{{${variable}}}`), parameter("arg1", value)],
});
const consentSettings = { consentStatus: "NOT_SET" };
const conversionTag = (id, name, label) => ({
  tagId: id,
  name: `Adriano - Google Ads - ${name}`,
  type: "awct",
  parameter: [
    parameter("conversionId", conversionId),
    parameter("conversionLabel", label),
    parameter("enableConversionLinker", "true", "BOOLEAN"),
    parameter("enableNewCustomerReporting", "false", "BOOLEAN"),
    parameter("enableProductReporting", "false", "BOOLEAN"),
    parameter("enableShippingData", "false", "BOOLEAN"),
    parameter("rdp", "false", "BOOLEAN"),
  ],
  firingTriggerId: [id],
  tagFiringOption: "ONCE_PER_EVENT",
  consentSettings,
});

const tags = conversions.map(([, name, label], index) => conversionTag(String(100 + index), name, label));
const triggers = conversions.map(([group, name], index) => ({
  triggerId: String(100 + index),
  name: `Adriano - CE - ${name}`,
  type: "CUSTOM_EVENT",
  customEventFilter: [equals("_event", "whatsapp_click")],
  filter: [equals("Adriano - DLV - whatsapp_conversion_group", group)],
}));

// Nome idêntico ao da tag já criada manualmente: Mesclar + substituir conflitos.
tags.push({ ...conversionTag("110", "Visualização de página", pageViewLabel), name: "Visualização de página" });
triggers.push({
  triggerId: "110",
  name: "Adriano - CE - Visualização de página",
  type: "CUSTOM_EVENT",
  customEventFilter: [equals("_event", "adriano_page_view")],
});
// Google tag e Vinculador já existem no destino e não entram na importação.

const container = {
  exportFormatVersion: 2,
  containerVersion: {
    container: {
      name: "Site Adriano - Google Ads",
      publicId: "GTM-WFF2SFX6",
      usageContext: ["WEB"],
    },
    tag: tags,
    trigger: triggers,
    variable: [{
      variableId: "100",
      name: "Adriano - DLV - whatsapp_conversion_group",
      type: "v",
      parameter: [
        parameter("name", "whatsapp_conversion_group"),
        parameter("dataLayerVersion", "2", "INTEGER"),
        parameter("setDefaultValue", "true", "BOOLEAN"),
        parameter("defaultValue", ""),
      ],
    }],
  },
};

mkdirSync(new URL("../gtm/", import.meta.url), { recursive: true });
writeFileSync(new URL("../gtm/adriano-google-ads-import.json", import.meta.url), JSON.stringify(container, null, 2) + "\n");
console.log("JSON gerado: 11 tags (10 novas + atualização da Visualização de página), 11 acionadores e 1 variável. Preserva Google tag e Vinculador existentes.");
