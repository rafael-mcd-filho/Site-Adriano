# Formulário e origem dos contatos — 11/09/2026

O formulário compartilhado da home, das cinco páginas de tratamento e da página para dentistas solicita nome, WhatsApp e mensagem opcional (até 1.000 caracteres). O consentimento de contato foi mantido. As opções de rádio foram removidas.

## Integração

Configure `FORM_WEBHOOK_URL` no ambiente do servidor com o endpoint da automação. Ele recebe um POST JSON e deve responder com HTTP 2xx para que o site redirecione à confirmação. Há timeout de 8 segundos e redirecionamentos HTTP do webhook não são seguidos. Sem endpoint configurado, a prévia informa a indisponibilidade; não simula uma entrega.

Exemplo ilustrativo de contrato (dados fictícios):

```json
{
  "schemaVersion": 2,
  "submissionId": "UUID gerado pelo servidor",
  "name": "Teste local",
  "whatsapp": "83999990000",
  "message": "Gostaria de consultar os horários.",
  "reason": "Gostaria de consultar os horários.",
  "page": "apneia-do-sono",
  "source": "site",
  "formId": "contato-apneia-do-sono",
  "pageTitle": "Apneia do sono",
  "pagePath": "/apneia-do-sono",
  "pageUrl": "https://dradrianorgermano.com.br/apneia-do-sono",
  "attribution": {
    "referrerOrigin": "https://www.google.com",
    "utm": {
      "utm_source": "google",
      "utm_medium": "cpc",
      "utm_campaign": "sono"
    }
  },
  "consent": {
    "granted": true,
    "purpose": "responder-solicitacao-pelo-whatsapp",
    "policyPath": "/politica-de-privacidade"
  },
  "submittedAt": "2026-09-11T15:00:00.000Z"
}
```

`reason` é um alias temporário de `message`, para compatibilidade; novas automações devem usar `message`. O WhatsApp é normalizado para DDD + número, sem pontuação. A automação pode acrescentar `55` quando seu provedor exigir E.164.

Na notificação interna, os campos mais úteis são nome, WhatsApp, mensagem, página e campanha. Não renderize mensagem de usuário como HTML sem escape. O identificador do envio facilita correlacionar o processamento do mesmo evento.

## Origem e limites

- Página, título, caminho e URL canônicos são derivados no servidor de uma lista permitida; campos ocultos continuam sendo entrada não confiável.
- Campanhas: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` e `utm_term` da URL da página onde o formulário está. Identificadores limitados a 100 caracteres; formatos de e-mail, URL e telefone são descartados.
- O referenciador guarda apenas a origem (protocolo, domínio e porta), sem caminho, query, fragmento ou credenciais.
- Não há cookies, armazenamento de histórico ou atribuição persistente do primeiro acesso. Ao navegar para outra página sem os parâmetros, a campanha pode ficar vazia. O navegador também pode omitir o referenciador.
- Nome, telefone e mensagem não vão para os eventos do `dataLayer`. O formulário não é canal para exames ou dados clínicos.

## Validação realizada

`node scripts/test-contact.mjs` executa a action real com um servidor HTTP de teste em `127.0.0.1`. Confere payload, origem, normalização do telefone, mensagem opcional, consentimento, limites, honeypot, página inválida, metadados malformados, configuração ausente e erro de entrega. Nenhum contato foi enviado a uma automação externa.
