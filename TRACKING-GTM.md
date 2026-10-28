# Rastreamento do Site Adriano

Atualizado em 27/10/2026. O contato é exclusivamente pelo WhatsApp de João Pessoa, sem modais de escolha de consultório. Formulários, webhook, eventos de formulário e a rota `/obrigado` foram removidos.

## GTM diretamente no script

O contêiner `GTM-WFF2SFX6` está configurado diretamente em `components/gtm.tsx`. O layout global inclui o script no `head` e o `noscript` como primeiro elemento do `body`. Não depende de variável de ambiente ou configuração na Vercel. Os cliques são enviados ao `window.dataLayer`, que o contêiner processa conforme suas tags publicadas. Essa fila não persiste ao fechar/recarregar a página.

O Google Ads usa o ID `18446009647` (`AW-18446009647`). Os onze rótulos foram recebidos e estão no JSON `gtm/adriano-google-ads-import.json`. O arquivo foi adaptado ao print do contêiner: Google tag, Vinculador de conversões e Visualização de página já foram criados manualmente. A instalação no código e o print do workspace não confirmam publicação no GTM.

## Conversões de WhatsApp informadas no Google Ads

| Nome da ação | Grupo no evento | Páginas |
|---|---|---|
| Adriano \| WhatsApp \| Geral | `geral` | `/` e `/sobre` |
| Adriano \| WhatsApp \| Apneia do sono | `apneia-do-sono` | `/apneia-do-sono` |
| Adriano \| WhatsApp \| Implantes dentários | `implantes-dentarios` | `/implantes-dentarios` |
| Adriano \| WhatsApp \| Reconstrução óssea | `reconstrucao-ossea` | `/reconstrucao-ossea` |
| Adriano \| WhatsApp \| Patologias maxilofaciais | `patologias-maxilofaciais` | `/patologias-maxilofaciais` |
| Adriano \| WhatsApp \| Trauma bucomaxilofacial | `trauma-bucomaxilofacial` | `/trauma-bucomaxilofacial` |
| Adriano \| WhatsApp \| DTM e ATM | `cirurgia-atm` | `/cirurgia-atm` |
| Adriano \| WhatsApp \| Cirurgia ortognática | `cirurgia-ortognatica` | `/cirurgia-ortognatica` |
| Adriano \| WhatsApp \| Cirurgia de siso | `cirurgia-de-siso` | `/cirurgia-de-siso` |
| Adriano \| WhatsApp \| Profissionais da saúde | `profissionais-da-saude` | `/profissionais-da-saude` |

São dez ações, todas com destino ao WhatsApp de João Pessoa (`558391275324`). Cada clique pertence a um único grupo. A cidade identifica a equipe de destino (`joao-pessoa`), não a localização geográfica do visitante nem o endereço do cartão de consultório. Não criar ações de formulário, página de obrigado ou uma ação para cada botão. O evento mede clique, não mensagem enviada ou consulta agendada.

Os nomes no Google Ads foram informados sem o prefixo `Adriano |`; a associação técnica usa ID/rótulo. Todos os rótulos exatos estão em `scripts/build-gtm.mjs` e no JSON gerado.

Há também a ação **Visualização de página**, rótulo `yyQhCLXagIwdEK-K39tE`. `components/page-view-tracking.tsx` envia `adriano_page_view` na primeira exibição e em cada mudança de rota conhecida, incluindo a política de privacidade. Retornar à mesma página após visitar outra conta novamente. Renderizações repetidas, mudanças apenas de query/hash e rotas inexistentes não geram visualização. O payload contém apenas evento e caminho, sem parâmetros da URL.

## Evento e identificadores

`components/whatsapp-tracking.tsx` registra um único listener global, com limpeza no desmontar. `lib/whatsapp-tracking.ts` valida o destino, monta o evento e classifica a página por lista permitida. Funciona após navegação interna do Next.js.

Evento: `whatsapp_click`.

- `whatsapp_click_id`: `pagina__botao__cidade`, por exemplo `implantes-dentarios__hero-whatsapp__natal`.
- `whatsapp_button_text`: texto acessível do link.
- `whatsapp_button_location`: região do link.
- `whatsapp_page_path` e `whatsapp_page_title`: página no momento do clique.
- `whatsapp_city`: `natal`, `joao-pessoa` ou `nao_identificado` para outro destino. Inferida pelo telefone real do link.
- `whatsapp_phone`: número do consultório, nunca telefone do visitante.
- `whatsapp_conversion_group`: um dos dez grupos da tabela; vazio para política de privacidade, páginas desconhecidas e rotas removidas.

O link completo, sua query string e a mensagem não são enviados no evento. Links de outros domínios, abrir/fechar o seletor, âncoras de contato e cliques de navegação não geram `whatsapp_click`.

Links do seletor, dos cartões de localização, do rodapé e da política têm identificadores explícitos. O rastreador acrescenta a cidade uma vez, inclusive nos links diretos.

## JSON para importar

Arquivo: `gtm/adriano-google-ads-import.json`. Para regenerar: `node scripts/build-gtm.mjs`.

- 10 tags de conversão WhatsApp, cada uma com seu rótulo e um acionador `whatsapp_click` filtrado pelo grupo exato.
- 1 atualização da tag **Visualização de página**, com esse nome exato para corresponder à tag manual. Seu acionador passa de Initialization para `adriano_page_view`; isso cobre o carregamento inicial e as navegações internas sem disparar duas vezes na abertura.
- 11 acionadores de evento personalizado e 1 variável `whatsapp_conversion_group`.
- Google tag e Vinculador existentes não estão no arquivo. Devem permanecer em Initialization - All Pages.

Não é necessário conhecer os IDs internos da conta/contêiner para selecionar o destino na importação; o arquivo não reutiliza metadados da SEMEP.

### Importação no GTM-WFF2SFX6

1. Faça uma exportação da versão/workspace atual como backup.
2. Administrador → Importar contêiner → selecione o JSON e o workspace de destino.
3. Escolha **Mesclar** e **Substituir tags, acionadores e variáveis conflitantes**. Não escolha substituir o contêiner inteiro nem renomear conflitos.
4. Na primeira importação, a revisão deve mostrar 10 tags novas e 1 tag modificada (Visualização de página), além de 11 acionadores e 1 variável novos. Google tag e Vinculador devem ficar intactos. A tag existente precisa se chamar exatamente `Visualização de página`, conforme o print.
5. Use Visualizar/Tag Assistant para conferir os eventos e rótulos. Depois, Enviar → Publicar. Reimportações devem atualizar os mesmos nomes, sem criar cópias.

No Google Ads, recomenda-se **Visualização de página como secundária**, fora de metas personalizadas usadas para lances. Cliques WhatsApp podem ser primários nas campanhas correspondentes, com contagem **Uma** para leads. Essas opções pertencem ao Google Ads e não são alteradas pela importação do GTM. Nenhum valor monetário fictício ou dado de conversão otimizada foi configurado.

Referências oficiais: [importar e mesclar](https://support.google.com/tagmanager/answer/6106997?hl=pt-BR), [conversões do Google Ads](https://support.google.com/tagmanager/answer/6105160?hl=pt-BR), [primárias e secundárias](https://support.google.com/google-ads/answer/11461796?hl=pt-BR).

Identificar botão e cidade no dataLayer não cria automaticamente relatórios dessas dimensões no Google Ads. As dez ações agrupam por assunto; uma análise adicional de botões/cidades exige configuração de relatório ou destino de medição apropriado.

A política de privacidade descreve a presença do GTM e os dados do evento de clique. A configuração de tags e consentimento no painel do GTM deve corresponder ao comportamento publicado; ela não foi verificada nesta instalação local.

## Validação

`node scripts/test-tracking.mjs` verifica grupos, cidades, links diretos, exclusões e o conteúdo enviado. `node scripts/test-gtm.mjs` verifica os onze pares ID/rótulo, estrutura e referências do JSON, associação dos cliques reais aos acionadores e ciclo do efeito de visualização (incluindo StrictMode e retorno à página). `npm run lint` e `npm run build` verificam o projeto. A simulação local não substitui a validação de importação e disparo no GTM/Tag Assistant.

No navegador/Preview, testar home e tratamentos, cabeçalho, menu mobile, botão flutuante, rodapé, cartões de localização e navegação interna. Cada CTA de contato deve abrir diretamente o WhatsApp de João Pessoa e produzir um evento, com `whatsapp_city=joao-pessoa` e somente a conversão do grupo. Política de privacidade não deve converter WhatsApp. A visualização deve disparar uma vez ao abrir a página e uma vez ao navegar para outra rota, sem disparar ao abrir menu ou rolar até uma âncora. `/obrigado` deve responder 404 e não gerar visualização.
