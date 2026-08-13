# Plano de SEO, sitemap e leitura por IA

Projeto: Site profissional do Dr. Adriano — Cirurgia Buco-Maxilo-Facial  
Mercado prioritário: João Pessoa e região  
Status: especificação para implementação

## 1. Situação atual

A estratégia de SEO está definida neste documento, mas ainda não está implementada porque o projeto Next.js, o domínio oficial e os dados profissionais finais ainda não foram configurados.

Decisões já confirmadas: atendimento particular, sem convênios; hospitais não serão divulgados; implantes fazem parte do escopo; DTM e ATM incluem tratamento conservador e possibilidades cirúrgicas conforme o caso.

O trabalho será dividido em quatro frentes:

1. SEO técnico e indexação.
2. SEO local e construção de entidade.
3. Conteúdo clínico útil e persuasivo.
4. Leitura clara por mecanismos de busca e sistemas de IA.

O objetivo não é somente aparecer para o nome do profissional. O site também deverá responder buscas de pessoas que:

- já receberam uma indicação cirúrgica;
- pesquisam sintomas e condições;
- procuram uma segunda avaliação;
- querem entender etapas, recuperação e segurança;
- são dentistas buscando encaminhamento ou parceria.

## 2. Objetivos orgânicos

### Objetivo principal

Transformar o site na fonte oficial e mais clara sobre o trabalho do Dr. Adriano, fortalecendo confiança, descoberta local e geração de contatos qualificados.

### Objetivos secundários

- Consolidar a entidade profissional Dr. Adriano.
- Relacionar o profissional à especialidade e à localização.
- Cobrir as principais condições e procedimentos atendidos.
- Responder dúvidas reais antes do contato.
- Apoiar o Google Business Profile e as campanhas de mídia.
- Produzir páginas que possam ser compreendidas e citadas por sistemas de busca e IA.

## 3. Arquitetura indexável

As rotas abaixo devem entrar no sitemap somente quando tiverem conteúdo completo, revisado e publicado:

| Rota | Intenção principal | Indexação |
|---|---|---|
| / | marca, especialidade e localização | index, follow |
| /apneia-do-sono | condição, avaliação e possibilidades de tratamento | index, follow |
| /implantes-dentarios | avaliação, planejamento e implantes | index, follow |
| /reconstrucao-ossea | procedimento, indicação e planejamento | index, follow |
| /dtm-atm | sintomas, diagnóstico e tratamento conservador ou cirúrgico | index, follow |
| /cirurgia-ortognatica | indicação, planejamento, cirurgia e recuperação | index, follow |
| /para-dentistas | encaminhamentos e relacionamento profissional | index, follow |

### Rotas fora do sitemap

| Rota ou ambiente | Diretriz |
|---|---|
| /politica-de-privacidade | noindex, follow |
| página 404 | noindex |
| páginas de obrigado ou confirmação futuras | noindex, nofollow |
| filtros, parâmetros e resultados internos futuros | canonical ou noindex conforme o caso |
| previews da Vercel | noindex, nofollow e bloqueio por ambiente |
| páginas incompletas ou duplicadas | não publicar ou usar noindex temporariamente |

A política de privacidade pode permanecer acessível pelo rodapé e pelo fluxo do formulário, mas não precisa competir por tráfego orgânico.

## 4. Sitemap XML

### Implementação

Criar app/sitemap.ts no projeto Next.js para gerar:

- https://DOMINIO/sitemap.xml

O sitemap deverá:

- usar apenas URLs canônicas e absolutas;
- listar somente páginas publicadas que desejamos indexar;
- excluir previews, páginas de confirmação, páginas noindex e duplicatas;
- informar lastModified apenas quando a data for real e mantida;
- ser referenciado no robots.txt;
- ser enviado ao Google Search Console após o lançamento.

Não incluir priority nem changefreq. Esses campos não devem orientar a arquitetura ou a manutenção do projeto.

### Sitemap inicial esperado

- https://DOMINIO/
- https://DOMINIO/apneia-do-sono
- https://DOMINIO/implantes-dentarios
- https://DOMINIO/reconstrucao-ossea
- https://DOMINIO/dtm-atm
- https://DOMINIO/cirurgia-ortognatica
- https://DOMINIO/para-dentistas

Se um blog ou biblioteca de artigos for criado futuramente, o sitemap poderá ser dividido por tipo de conteúdo.

## 5. Robots.txt e controle de rastreamento

Criar app/robots.ts com as seguintes responsabilidades:

- permitir o rastreamento das páginas públicas;
- declarar a URL do sitemap;
- não bloquear por robots.txt uma página que precise receber a diretiva noindex;
- impedir indexação de ambientes de preview por cabeçalho ou metadata;
- revisar as políticas de rastreadores no momento do lançamento.

### Busca, respostas e treinamento

Esses usos não devem ser tratados automaticamente como a mesma coisa:

- rastreamento para mecanismos de busca;
- rastreamento usado para fornecer respostas ou referências;
- rastreamento usado para treinamento de modelos.

A decisão sobre permitir ou restringir agentes específicos deverá ser tomada no lançamento, considerando o objetivo comercial e as regras vigentes de cada plataforma. A regra inicial recomendada é manter o conteúdo público descobrível para busca e respostas, sem transformar arquivos de controle em substitutos da política jurídica.

## 6. Domínio e canonicalização

Antes da publicação, decidir:

- domínio oficial;
- versão canônica com www ou sem www;
- política de redirecionamento;
- conta proprietária no Google Search Console;
- acesso ao Google Business Profile.

Regras obrigatórias:

- HTTPS em todas as páginas;
- redirecionamento permanente para uma única versão do domínio;
- canonical absoluto em todas as páginas indexáveis;
- nenhum canonical apontando para endereço temporário da Vercel;
- URLs curtas, estáveis, em minúsculas e sem datas desnecessárias;
- uma intenção principal por URL.

## 7. Metadata por página

Os textos abaixo são direcionais e devem ser revisados quando nome profissional, domínio, CRO, endereço e posicionamento final forem confirmados.

### Home

Title sugerido: Cirurgião Buco-Maxilo-Facial em João Pessoa | Dr. Adriano

Description sugerida: Avaliação e planejamento em cirurgia buco-maxilo-facial, com orientação clara para cada etapa do tratamento. Conheça o trabalho do Dr. Adriano em João Pessoa.

### Apneia do sono

Title sugerido: Tratamento da Apneia do Sono em João Pessoa | Dr. Adriano

Description sugerida: Entenda quando a anatomia facial pode estar relacionada à apneia do sono e como funciona a avaliação com um cirurgião buco-maxilo-facial.

### Reconstrução óssea

Title sugerido: Reconstrução Óssea em João Pessoa | Dr. Adriano

Description sugerida: Saiba quando a reconstrução óssea pode ser indicada, como o caso é planejado e quais etapas fazem parte do tratamento.

### Implantes dentários

Title sugerido: Implantes Dentários em João Pessoa | Dr. Adriano

Description sugerida: Entenda como funciona a avaliação para implantes dentários, o que precisa ser analisado e quando a reconstrução óssea pode fazer parte do planejamento.

### DTM e ATM

Title sugerido: Tratamento de DTM e ATM em João Pessoa | Dr. Adriano

Description sugerida: Dor, estalos e limitação da mandíbula precisam de diagnóstico adequado. Entenda a avaliação e as possibilidades de tratamento conservador e cirúrgico.

### Cirurgia ortognática

Title sugerido: Cirurgia Ortognática em João Pessoa | Dr. Adriano

Description sugerida: Conheça as indicações, o planejamento e as etapas da cirurgia ortognática, do preparo à recuperação.

### Para dentistas

Title sugerido: Encaminhamento para Cirurgia Buco-Maxilo-Facial | Dr. Adriano

Description sugerida: Canal profissional para dentistas que desejam encaminhar pacientes e acompanhar o planejamento cirúrgico em parceria.

## 8. Regras de conteúdo on-page

Cada página clínica deverá ter:

- um único H1 descritivo;
- resumo direto do assunto nos primeiros parágrafos;
- explicação de sintomas, indicações ou contexto;
- como funciona a avaliação;
- etapas do planejamento e do tratamento;
- expectativas e limitações apresentadas com responsabilidade;
- riscos e variáveis quando pertinentes;
- seção de perguntas frequentes visível;
- CTA contextual;
- autoria ou revisão profissional;
- data de revisão;
- referências confiáveis quando houver afirmações clínicas específicas;
- links internos para páginas relacionadas.

### Estrutura de copy

Usar uma combinação validada e ética:

- PAS moderado para reconhecer problema e impacto sem alarmismo;
- AIDA para conduzir da compreensão à ação;
- autoridade verificável para reduzir incerteza;
- resposta a objeções ao longo da página;
- CTA de baixa fricção, como conversar sobre avaliação.

Não usar:

- promessa de resultado;
- garantia de cura;
- urgência falsa;
- números não comprovados;
- comparação depreciativa com outros profissionais;
- depoimentos ou antes e depois sem validação jurídica e ética.

## 9. SEO local e construção de entidade

### Dados consistentes

Nome, especialidade, CRO, telefone, endereço, horários e domínio devem ser idênticos nos principais pontos:

- site;
- Google Business Profile;
- diretórios profissionais relevantes;
- redes sociais oficiais;
- plataformas de agendamento, se utilizadas.

### Sinais locais

- mencionar João Pessoa de forma natural em títulos, textos e dados de contato;
- exibir endereço e mapa somente após confirmação;
- manter página de contato integrada à Home ou criar rota própria se houver conteúdo suficiente;
- conectar o perfil do Google e os perfis sociais oficiais;
- incluir orientação clara de localização e atendimento;
- produzir imagens próprias do profissional e do ambiente, com nomes e textos alternativos úteis.

### Evidências de autoridade

- nome profissional completo;
- CRO e especialidade confirmados;
- formação e atuação descritas de forma verificável;
- instituições e associações apenas quando verdadeiras;
- conteúdo revisado pelo profissional;
- página Para dentistas com fluxo de encaminhamento real.

## 10. Dados estruturados

Os dados estruturados deverão refletir apenas o conteúdo visível e confirmado.

### Na Home

- WebSite para identificar o site oficial.
- Dentist como tipo principal do negócio ou prática odontológica, se os dados cadastrais confirmarem essa classificação.
- Person para o Dr. Adriano.

### Nas páginas internas

- WebPage ou MedicalWebPage, conforme adequação do conteúdo.
- BreadcrumbList para a hierarquia.
- Service apenas quando o serviço estiver realmente descrito e oferecido.

### Relações importantes

- relacionar o profissional à clínica sem duplicar entidades;
- usar sameAs somente para perfis oficiais;
- informar área atendida somente com base real;
- inserir coordenadas apenas depois da confirmação do endereço;
- manter telefone, endereço e horários iguais ao conteúdo visível.

### FAQ

As perguntas frequentes devem existir principalmente para ajudar o usuário. O markup FAQPage, caso usado, deve representar exatamente as perguntas e respostas visíveis. O projeto não deve depender da exibição de resultado rico de FAQ.

### Exemplo de entidades

WebSite  
└── about: Person — Dr. Adriano  
└── publisher ou provider: Dentist — prática profissional  
    └── employee ou founder, conforme o caso: Person  
    └── address: PostalAddress  
    └── areaServed: João Pessoa e região confirmada

O relacionamento final dependerá da natureza jurídica e operacional confirmada pelo cliente.

## 11. Open Graph, imagens sociais e favicon

Preparar:

- favicon em formatos atuais;
- ícone para dispositivos;
- imagem Open Graph padrão;
- imagem Open Graph específica por página quando houver valor;
- título e descrição social coerentes com cada URL;
- texto alternativo nas imagens de conteúdo;
- largura, altura e formato definidos para evitar instabilidade visual.

As imagens sociais devem ser legíveis em telas pequenas e não depender de parágrafos longos.

## 12. Performance e SEO técnico

Metas de implementação:

- conteúdo principal renderizado em HTML;
- JavaScript apenas onde houver interação real;
- imagens com dimensões conhecidas, formatos modernos e carregamento adequado;
- fonte otimizada e auto-hospedada quando possível;
- navegação utilizável por teclado;
- contraste adequado;
- animações compatíveis com redução de movimento;
- estabilidade visual;
- formulários com rótulos, mensagens e consentimento claros;
- formulários solicitando somente nome, WhatsApp e opção contextual, sem dados clínicos abertos;
- cabeçalhos HTTP e redirecionamentos revisados;
- página 404 útil;
- ausência de links quebrados.

As animações definidas na especificação visual não podem atrasar a leitura do conteúdo nem ocultar texto de usuários, mecanismos de busca ou tecnologias assistivas.

## 13. Leitura por mecanismos de busca e IA

Não existe uma camada de copy separada para humanos e outra para IA. A mesma página deverá ser:

- clara;
- factual;
- estruturada;
- verificável;
- específica;
- fácil de citar sem perder contexto.

### Padrão editorial recomendado

- iniciar seções com respostas diretas;
- usar títulos que correspondam às dúvidas reais;
- definir termos clínicos em linguagem simples;
- separar indicação, processo, benefícios possíveis, riscos e recuperação;
- usar listas e tabelas somente quando facilitarem comparação;
- informar autoria e revisão;
- manter datas de atualização reais;
- relacionar páginas por links internos descritivos;
- garantir que dados estruturados correspondam ao texto visível;
- evitar esconder informações essenciais somente em imagens, vídeos ou animações.

### Blocos úteis para respostas

Cada página deverá conter respostas autossuficientes para perguntas como:

- O que é?
- Quais sinais merecem avaliação?
- Para quem pode ser indicado?
- Como funciona o diagnóstico?
- Quais exames podem ser necessários?
- Como é o planejamento?
- Como costuma ser a recuperação?
- Quais fatores mudam de pessoa para pessoa?
- Quando conversar com um especialista?

### llms.txt

Será mantido um modelo opcional em llms-template.txt. O arquivo poderá ser publicado futuramente em /llms.txt depois da definição do domínio e da conclusão das páginas.

Ele será tratado como recurso experimental e complementar:

- não substitui robots.txt;
- não substitui sitemap.xml;
- não substitui metadata, links internos ou conteúdo em HTML;
- não será tratado como fator de ranking;
- não deve incluir informações diferentes das páginas oficiais.

Na primeira versão do site, não é necessário manter cópias em Markdown de todas as páginas. Essa duplicação só será considerada se houver um processo confiável para manter as versões sincronizadas.

## 14. Clusters de perguntas por página

### Apneia do sono

- Qual a relação entre mandíbula, respiração e apneia?
- Quando a avaliação buco-maxilo-facial é indicada?
- Cirurgia é sempre necessária?
- Como o caso é investigado?
- Qual a diferença entre avaliação, diagnóstico e tratamento?

### Reconstrução óssea

- Por que pode faltar osso?
- Quando a reconstrução pode ser necessária?
- Quais exames orientam o planejamento?
- O tratamento acontece em uma ou mais etapas?
- O tempo de recuperação é igual para todos?

### Implantes dentários

- Como saber se posso receber um implante?
- Quais condições precisam ser avaliadas?
- Quais exames podem fazer parte do planejamento?
- Quando uma reconstrução óssea pode ser necessária?
- Como funciona o acompanhamento?

### DTM e ATM

- Dor e estalo significam que preciso de cirurgia?
- Quais sintomas justificam avaliação?
- Como a ATM é examinada?
- Quais tratamentos conservadores podem ser considerados?
- Quando um procedimento cirúrgico pode entrar no plano?

### Cirurgia ortognática

- Para que serve a cirurgia ortognática?
- Quais alterações funcionais podem estar envolvidas?
- Como funciona o planejamento entre cirurgião e ortodontista?
- Quais são as etapas antes e depois da cirurgia?
- O resultado e a recuperação variam entre pacientes?

### Para dentistas

- Quais casos podem ser encaminhados?
- Quais informações e exames ajudam na avaliação?
- Como funciona a comunicação durante o tratamento?
- Como solicitar uma discussão de caso?
- O dentista solicitante recebe retorno?

## 15. Estrutura técnica prevista no Next.js

Arquivos esperados:

- app/layout.tsx — metadata global, idioma e estrutura compartilhada
- app/sitemap.ts — geração do sitemap
- app/robots.ts — regras de rastreamento
- app/manifest.ts — dados do aplicativo e ícones
- app/not-found.tsx — página 404
- app/opengraph-image — imagem social padrão, estática ou gerada
- metadata por rota — title, description, canonical e Open Graph
- componentes de JSON-LD — entidades validadas por página
- public/llms.txt — opcional, somente depois de preenchido e aprovado

Configurações centralizadas:

- domínio canônico;
- nome profissional;
- CRO;
- telefone;
- WhatsApp;
- endereço;
- coordenadas;
- horários;
- perfis sociais;
- links de agendamento.

Nenhum placeholder poderá chegar à produção.

## 16. Mensuração e operação

Antes do lançamento:

- configurar Google Search Console;
- validar propriedade do domínio;
- testar sitemap;
- inspecionar URLs principais;
- validar dados estruturados;
- verificar canonicals e redirects;
- testar preview e produção separadamente;
- configurar analytics com consentimento adequado;
- definir conversões de WhatsApp e formulário;
- revisar o Google Business Profile.

Depois do lançamento:

- monitorar cobertura e páginas indexadas;
- acompanhar consultas, cliques e posição por página;
- identificar dúvidas que geram impressão e ainda não têm boa resposta;
- revisar CTAs com base em conversões;
- atualizar conteúdos quando houver mudança clínica ou operacional;
- verificar links quebrados e erros periodicamente;
- evitar publicar conteúdo em volume sem utilidade real.

## 17. Checklist de aprovação

### Dados do cliente

- [ ] Nome profissional completo confirmado.
- [ ] CRO e especialidade confirmados.
- [ ] Razão ou nome da clínica confirmado.
- [ ] Endereço e coordenadas confirmados.
- [ ] Telefone e WhatsApp confirmados.
- [ ] Horários confirmados.
- [ ] Perfis oficiais confirmados.
- [ ] Área real de atendimento confirmada.
- [x] Atendimento particular sem convênios confirmado.
- [x] Hospitais excluídos do conteúdo público.

### Conteúdo

- [ ] Todas as páginas revisadas pelo cliente.
- [ ] Afirmações clínicas responsáveis.
- [ ] Autoria e revisão exibidas.
- [ ] FAQs visíveis e específicas.
- [ ] Links internos implementados.
- [ ] CTAs contextuais.
- [ ] Sem promessas ou placeholders.

### Técnico

- [ ] Domínio canônico configurado.
- [ ] Sitemap disponível.
- [ ] Robots disponível.
- [ ] Preview com noindex.
- [ ] Canonicals corretos.
- [ ] Metadata por página.
- [ ] JSON-LD validado.
- [ ] Imagens sociais testadas.
- [ ] Página 404 pronta.
- [ ] Performance e acessibilidade verificadas.
- [ ] Search Console configurado.

## 18. Referências oficiais

- Next.js — arquivos de metadata: https://nextjs.org/docs/app/api-reference/file-conventions/metadata
- Next.js — sitemap: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
- Google Search Central — criação de sitemap: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google Search Central — dados estruturados de negócio local: https://developers.google.com/search/docs/appearance/structured-data/local-business
- Google Search Central — políticas de dados estruturados: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- Google Search Central — recursos de IA e o seu site: https://developers.google.com/search/docs/appearance/ai-features
- Google Search Central — mudanças em FAQ rich results: https://developers.google.com/search/blog/2023/08/howto-faq-changes
- Schema.org — Dentist: https://schema.org/Dentist
- Proposta llms.txt: https://llmstxt.org/
