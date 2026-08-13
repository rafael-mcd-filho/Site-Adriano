# Decisões confirmadas e especificação dos formulários

Atualização: 11 de agosto de 2026  
Status: regras obrigatórias para a implementação

Este documento complementa a especificação completa. Em caso de conflito com documentos anteriores, as decisões abaixo prevalecem.

## 1. Decisões confirmadas

- Implantes dentários fazem parte do escopo e terão captação ativa.
- Não incluir cirurgia de sisos na navegação principal até nova confirmação.
- O Dr. Adriano realiza tratamento de DTM e ATM, incluindo avaliação, abordagem conservadora e possibilidades cirúrgicas conforme o caso.
- O atendimento é particular, sem convênios.
- Não informar hospitais onde o profissional opera.
- O site terá botões de WhatsApp e formulário próprio.
- Não haverá agenda online nem link externo de agendamento.
- A equipe responde em horário comercial.
- Antes da consulta, solicitar somente nome, WhatsApp e uma opção contextual relacionada à página.
- Nome completo, CRO, endereço e demais dados oficiais podem usar valores de demonstração durante o desenvolvimento.
- A direção visual existente está aprovada e não precisa de uma nova etapa de descoberta.

## 2. Arquitetura atualizada

Rotas principais:

1. Home — /
2. Apneia do sono — /apneia-do-sono
3. Implantes dentários — /implantes-dentarios
4. Reconstrução óssea — /reconstrucao-ossea
5. DTM e ATM — /dtm-atm
6. Cirurgia ortognática — /cirurgia-ortognatica
7. Para dentistas — /para-dentistas

Rotas utilitárias:

8. Política de privacidade — /politica-de-privacidade
9. Página não encontrada — /404

Não criar:

- página de convênios;
- seções de autorização ou cobertura;
- página com hospitais onde opera;
- agenda online;
- área do paciente;
- envio de exames;
- cadastro clínico.

## 3. Posicionamento de implantes

A página de implantes não deve parecer uma oferta promocional ou uma clínica de volume. O eixo será:

1. Avaliação individual.
2. Condições ósseas e gengivais.
3. Planejamento da posição do implante.
4. Integração entre função, prótese e manutenção.
5. Reconstrução óssea quando necessária.
6. Explicação honesta das etapas e variáveis.

### Copy inicial

Etiqueta:

> Implantes dentários em João Pessoa

H1:

> Um implante bem planejado começa antes do procedimento.

Texto:

> A avaliação considera a condição óssea, a posição ideal, a saúde geral e a futura reabilitação. Quando existe perda óssea, o planejamento também pode envolver técnicas de reconstrução.

CTA principal:

> Solicitar uma avaliação

CTA secundário:

> Falar pelo WhatsApp

### Estrutura da página

| # | Seção | Objetivo | Fundo | Apoio visual |
|---|---|---|---|---|
| 1 | Hero | Posicionar planejamento antes do procedimento | Marfim | Retrato profissional e linhas de precisão |
| 2 | Quando avaliar | Reconhecimento de situações | Branco | Cards com ícones lineares |
| 3 | O que precisa ser analisado | Osso, gengiva, posição, saúde e prótese | Verde-neblina | Camadas abstratas e checklist |
| 4 | Etapas do planejamento | Consulta, exames, plano e execução | Branco | Linha de processo |
| 5 | Quando falta osso | Conectar à reconstrução óssea | Azul-neblina | Camadas estruturais discretas |
| 6 | Quem realiza a avaliação | Autoridade verificável | Azul principal | Foto e credenciais de demonstração |
| 7 | Cuidados e acompanhamento | Reforçar continuidade | Branco | Ícones de acompanhamento |
| 8 | FAQ | Reduzir dúvidas | Verde-neblina | Accordion |
| 9 | Formulário e CTA final | Solicitar contato | Azul principal | Card claro sobre o fundo |

### Movimento

- Hero segue a abertura global já definida.
- Cards entram em sequência curta, com atraso máximo de 60 ms entre itens.
- A linha de processo cresce apenas uma vez quando entra na área visível.
- As camadas da reconstrução usam deslocamento vertical máximo de 6 px.
- Nenhuma animação simula perfuração, cirurgia ou instalação clínica.

## 4. Posicionamento de DTM e ATM

A rota /dtm-atm substitui a antiga rota planejada /cirurgia-atm.

A página deve mostrar que o profissional acompanha o caso desde a avaliação e pode trabalhar com tratamento conservador ou cirúrgico. Cirurgia não será apresentada como ponto de entrada obrigatório.

### Copy inicial

Etiqueta:

> DTM e ATM

H1:

> Dor, estalos ou limitação da mandíbula pedem um diagnóstico cuidadoso.

Texto:

> O tratamento depende da causa, do tempo de evolução e das alterações encontradas. A avaliação pode orientar medidas conservadoras e, em casos selecionados, procedimentos cirúrgicos.

CTA principal:

> Solicitar uma avaliação

CTA secundário:

> Falar pelo WhatsApp

### Linha de cuidado

1. Entender sintomas, histórico e impacto funcional.
2. Realizar avaliação clínica e analisar exames quando necessários.
3. Orientar tratamento conservador quando indicado.
4. Acompanhar a resposta ao tratamento.
5. Considerar procedimentos cirúrgicos somente em casos selecionados.

Evitar qualquer copy que diga ou sugira que cirurgia é necessária porque uma placa, fisioterapia ou medicação não funcionou.

## 5. Conversão

O site terá dois caminhos complementares:

### Formulário

CTA principal:

> Solicitar uma avaliação

O botão leva ao formulário contextual da própria página. O envio representa uma solicitação de contato, não um agendamento confirmado.

### WhatsApp

CTA secundário e botão flutuante:

> Falar pelo WhatsApp

O WhatsApp abre com mensagem curta relacionada à página. Não inserir sintomas, diagnósticos ou respostas do formulário na URL.

### Horário

Microcopy padrão:

> A equipe responde em horário comercial. Mensagens enviadas fora desse período serão respondidas no próximo horário de atendimento.

## 6. Formulário global

### Campos obrigatórios

1. Nome
   - Tipo: texto.
   - Rótulo: Como podemos chamar você?
   - Autocomplete: name.

2. WhatsApp
   - Tipo: telefone.
   - Rótulo: Qual é o seu WhatsApp?
   - Autocomplete: tel.
   - Aceitar DDD e aplicar máscara sem impedir colagem.

3. Motivo do contato
   - Tipo: opções de escolha única.
   - As opções mudam conforme a página.

4. Consentimento
   - Checkbox obrigatório.
   - Texto: Autorizo o contato da equipe pelo WhatsApp para responder a esta solicitação.
   - Link próximo para a política de privacidade.

### Dados técnicos ocultos

- página de origem;
- identificador do formulário;
- data do envio;
- parâmetros UTM, quando existirem;
- referenciador, quando permitido;
- proteção antispam.

### Não solicitar

- CPF;
- data de nascimento;
- número de convênio;
- diagnóstico;
- descrição clínica aberta;
- fotografia;
- exame;
- receita;
- prontuário;
- escolha de data ou horário.

## 7. Opções contextuais por página

### Home

Pergunta:

> Sobre qual assunto você deseja conversar?

Opções:

- Implantes dentários.
- Reconstrução óssea.
- Dor, estalos ou limitação da mandíbula.
- Apneia do sono.
- Cirurgia ortognática.
- Outro assunto.

### Apneia do sono

Pergunta:

> Em qual situação você se encontra?

Opções:

- Quero entender se preciso de uma avaliação especializada.
- Já tenho diagnóstico ou exames.
- Estou buscando uma segunda avaliação.
- Quero entender como funciona o atendimento.

### Implantes dentários

Pergunta:

> O que melhor descreve sua necessidade?

Opções:

- Quero avaliar a possibilidade de implante.
- Fui informado de que pode faltar osso.
- Já utilizo prótese e quero conhecer possibilidades.
- Estou buscando uma segunda avaliação.

### Reconstrução óssea

Pergunta:

> O que melhor descreve sua situação?

Opções:

- Fui informado de que não há osso suficiente.
- Tive perda óssea após a perda de dentes.
- Já tive um implante ou reconstrução anterior.
- Estou buscando uma segunda avaliação.

### DTM e ATM

Pergunta:

> O que melhor descreve sua necessidade?

Opções:

- Tenho dor, estalos ou limitação da mandíbula.
- Quero avaliar tratamento conservador.
- Já realizei tratamento e continuo com sintomas.
- Recebi uma indicação de procedimento ou cirurgia.
- Estou buscando uma segunda avaliação.

### Cirurgia ortognática

Pergunta:

> Em qual etapa você se encontra?

Opções:

- Quero entender se a cirurgia pode ser indicada.
- Recebi indicação de dentista ou ortodontista.
- Já estou em preparo ortodôntico.
- Estou buscando uma segunda avaliação.

### Para dentistas

Pergunta:

> Qual é o objetivo do contato?

Opções:

- Encaminhar um caso de implantes ou reconstrução.
- Encaminhar um caso de DTM ou ATM.
- Encaminhar um caso de cirurgia ortognática.
- Encaminhar um caso relacionado à apneia.
- Discutir um caso antes do encaminhamento.

O formulário para dentistas também pode solicitar o nome profissional e CRO em uma segunda etapa opcional, sem impedir o contato inicial.

## 8. Estados e mensagens do formulário

### Botão

Normal:

> Solicitar contato

Durante o envio:

> Enviando...

### Sucesso

> Recebemos sua solicitação. A equipe entrará em contato pelo WhatsApp em horário comercial.

Complemento:

> O envio deste formulário não confirma um agendamento.

### Erro

> Não foi possível enviar agora. Tente novamente ou fale com a equipe pelo WhatsApp.

### Validação

- Mostrar a mensagem junto ao campo.
- Preservar os dados preenchidos quando houver erro.
- Levar o foco ao primeiro erro.
- Não depender apenas de cor.
- Permitir envio por teclado e leitor de tela.

## 9. Destino e segurança

Na primeira versão:

- não usar banco de dados;
- enviar a solicitação por uma função do servidor para um e-mail ou webhook configurável;
- não registrar o conteúdo em analytics;
- não enviar a opção clínica para Google Ads, Meta ou URL do WhatsApp;
- aplicar honeypot e limitação básica de frequência;
- adicionar desafio antispam somente se houver abuso;
- manter logs mínimos e sem conteúdo clínico desnecessário.

O endereço que receberá os formulários será uma variável de ambiente e poderá ser definido mais tarde.

## 10. Mensagens de WhatsApp

| Página | Mensagem inicial |
|---|---|
| Home | Olá, gostaria de saber como funciona uma avaliação com o Dr. Adriano. |
| Apneia | Olá, gostaria de informações sobre avaliação relacionada à apneia do sono. |
| Implantes | Olá, gostaria de informações sobre avaliação para implantes dentários. |
| Reconstrução | Olá, gostaria de informações sobre reconstrução óssea. |
| DTM e ATM | Olá, gostaria de informações sobre avaliação e tratamento de DTM ou ATM. |
| Ortognática | Olá, gostaria de informações sobre avaliação para cirurgia ortognática. |
| Dentistas | Olá, sou dentista e gostaria de conversar sobre um possível encaminhamento. |

## 11. Dados de demonstração

Durante o desenvolvimento, centralizar valores provisórios:

- Nome: Dr. Adriano [Sobrenome].
- Registro: CRO-PB 00000.
- Especialidade: Cirurgia e Traumatologia Buco-Maxilo-Facial.
- Endereço: Endereço de demonstração — João Pessoa, PB.
- WhatsApp: número de demonstração.
- Horário: atendimento em horário comercial.

Regras:

- usar um sinalizador de ambiente indicando que o site está em modo demonstração;
- não inventar formação, títulos, instituições, experiência ou associações;
- não exibir hospitais;
- não mencionar convênios;
- impedir publicação definitiva enquanto os dados de demonstração estiverem ativos.

## 12. Critério de conclusão desta frente

- [x] Escopo de implantes definido.
- [x] Escopo de DTM e ATM definido.
- [x] Ausência de convênios confirmada.
- [x] Hospitais removidos do conteúdo público.
- [x] Canais de conversão definidos.
- [x] Campos do formulário definidos.
- [x] Opções contextuais definidas.
- [x] Horário de resposta definido de forma geral.
- [ ] Número definitivo do WhatsApp.
- [ ] E-mail ou webhook que receberá o formulário.
- [ ] Dados profissionais definitivos antes da produção.

