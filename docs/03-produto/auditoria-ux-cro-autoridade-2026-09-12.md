**Auditoria da estrutura, conversão e autoridade — Dr. Adriano Rocha Germano**

12 de setembro de 2026. Análise estratégica do projeto local atual. Entrega de recomendações; o código das páginas não foi alterado.

**Conclusão principal**

O site já tem linguagem acolhedora, escopo bucomaxilofacial reconhecível, identificação profissional e uma credencial documental relevante. O maior problema é a distância entre declarar cuidado e demonstrar por que confiar neste profissional. Algumas páginas repetem identificação, acolhimento e cautela antes de mostrar competência, percurso de atendimento e evidência real.

Recomendo encurtar as repetições, antecipar a dúvida decisiva de cada público, contextualizar a autoridade e acrescentar provas legítimas. O visitante deve entender quem atende, por que essa avaliação é pertinente e o que acontece depois do contato.

Esta é uma avaliação qualitativa. Não foram fornecidos dados de tráfego, gravações de uso, conversas da recepção ou taxas de agendamento. As estruturas abaixo são hipóteses fundamentadas para melhorar a jornada, não aumentos de conversão já demonstrados. Foram examinados as rotas, componentes, conteúdo e decisões documentadas; não foi realizada nesta entrega uma nova inspeção visual no navegador nem um teste de atendimento em produção.

**O que existe de fato hoje**

- Home, cinco páginas de tratamentos, Para dentistas, Obrigado, Política de privacidade, página não encontrada e estado de erro global.
- “Sobre” é a seção `/#sobre` da Home. Não existe uma página Sobre independente. Contato também é uma seção, não uma rota própria.
- DTM e ATM utiliza `/cirurgia-atm`; `/dtm-atm` redireciona para essa rota. Não são duas páginas diferentes.
- Há nome, CRO-PB/CRO-RN, certificação Board de 2026 e participação na banca examinadora, com certificado acessível. O número de 29 avaliadores foi informado pelo cliente; não consta no certificado. Não deve ser tratado como ranking nem como comprovação de superioridade.
- O elemento chamado `DoctorPortrait` mostra monograma no hero e certificado na autoridade. Não há retrato real do profissional nesses blocos. Fotografias ilustrativas de ambiente/pessoas não são evidências da clínica ou de pacientes atendidos.
- Não há avaliações de pacientes efetivamente exibidas nos tratamentos: todos os arrays `testimonials` estão vazios. Também não há casos clínicos; a lista chamada `cases` em Para dentistas contém áreas de atuação.
- O formulário atual contém nome, WhatsApp, mensagem administrativa opcional e autorização de contato. As opções contextuais antigas não aparecem na interface.
- Os canais dependem de configuração: sem número de WhatsApp, o botão aponta ao formulário; sem destino de envio, o formulário fica desabilitado. Isso precisa ser verificado no ambiente publicado, sem confundir o comportamento condicional do código com uma falha comprovada em produção.

**Critério estratégico comum**

Os visitantes têm intenções distintas. A Home precisa orientar quem conhece apenas o problema e também confirmar a identidade para quem veio por indicação. As páginas de tratamentos precisam esclarecer indicação, competência e percurso. Para dentistas precisa dar previsibilidade à colaboração. Obrigado, privacidade e erros precisam cumprir sua função com clareza, sem receber uma sequência comercial artificial.

O posicionamento aproveitável é: avaliação bucomaxilofacial com credenciais verificáveis, indicação explicada e integração com os profissionais que acompanham o caso. Isso pode ser demonstrado por responsabilidades, decisões e acompanhamento. “Atendimento humanizado”, “tecnologia de ponta” e “excelência” isoladamente acrescentam pouco.

Em todas as ordens abaixo, cabeçalho e rodapé são elementos compartilhados, não seções adicionais de persuasão. Casos e avaliações são condicionados a material real e publicável: quando indisponíveis, omitir o bloco por completo e manter a ordem dos demais. Não usar placeholders de depoimentos em páginas públicas.

**1. Home — `/`**

**1 — Estrutura atual resumida:** hero com problemas cotidianos e identidade → faixa de atributos → apresentação/autoridade → áreas de atuação → editorial sobre rotina → escolha paciente/dentista → como funciona a consulta → FAQ → contato → localização.

**2 — Problemas de conversão:** o visitante precisa atravessar uma apresentação extensa antes de localizar seu problema; o acolhimento reaparece no hero, apresentação, editorial e fechamento. A divisão entre paciente e dentista interrompe a jornada depois que o visitante já escolheu explorar tratamentos. Falta validação externa por avaliações. A localização chega depois do formulário, embora deslocamento e ambiente sejam parte da decisão. O Board aparece várias vezes, mas faltam pessoa, trajetória e experiência de atendimento.

**3 — Manter:** entrada por problema/desejo; nome e registro visíveis; particular; credencial verificável; áreas organizadas em linguagem de paciente; primeira consulta; contato sem compromisso com procedimento.

**4 — Remover/fundir:** editorial “O que faz falta na sua rotina...” como seção separada; bloco duplo paciente/dentista; faixa de princípios como prova autônoma; duplicações entre apresentação, consulta e FAQ. O acesso dos dentistas permanece no menu e rodapé.

**5 — Mudar de posição:** áreas logo após o hero; autoridade resumida imediatamente depois delas; localização antes do contato; currículo detalhado para uma futura página Sobre. Identificação e credencial curta permanecem no hero para quem busca pelo nome.

**6 — Adicionar:** retrato real, avaliações verificáveis, fotos reais do local e resumo de formação relevante quando documentada. Não criaria galeria de antes/depois na Home neste momento: os públicos e tratamentos são diferentes, e imagens fora de contexto podem desviar a proposta.

**7 e 8 — Ordem final exata e justificativa de cada seção:**

| Ordem | Seção recomendada | Justificativa e ação |
|---|---|---|
| 1 | Hero: quem atende, o que avalia e onde | Problema/desejo + Dr. Adriano + bucomaxilofacial + João Pessoa + particular + retrato real. CTA “Falar com a equipe sobre uma avaliação”; secundário “Encontrar minha área de cuidado”. Evita exigir leitura longa de quem já quer contato. |
| 2 | O que trouxe você até aqui? | Manter cinco áreas com problema compreensível e nome técnico. Permitir acesso direto ao tratamento relevante. A prioridade de mídia não deve, sozinha, decidir a ordem; validar pelos motivos reais de procura e agendamentos. |
| 3 | Quem conduz sua avaliação | Foto, formação relevante confirmada, Board/banca e uma explicação concreta de como as opções são discutidas. Link “Conhecer a trajetória do Dr. Adriano”. Autoridade cedo, sem transformar a Home em currículo. |
| 4 | Como pacientes descrevem o atendimento | Duas ou três avaliações reais, legíveis, com fonte e link. Posicionar após o profissional faz o relato responder “como é ser atendido por ele?”. CTA discreto “Conversar sobre a primeira consulta”. |
| 5 | Sua primeira consulta, na prática | Contato com equipe → avaliação presencial → esclarecimento de possibilidades/próximos passos. Explicar o que pode depender de exames. Reduz receio de sair comprometido com cirurgia e dá valor à consulta. |
| 6 | Onde você será atendido | Fotos reais, endereço correto, chegada e informações de acessibilidade/estacionamento somente se confirmadas. Mapa secundário e link “Ver como chegar”. Resolve viabilidade antes da solicitação. |
| 7 | Dúvidas antes de marcar | FAQ curto: particular, valor da consulta informado previamente, encaminhamento, exames existentes, horário de resposta e solicitação versus agendamento. Não repetir a biografia ou explicar todos os tratamentos. |
| 8 | Solicitar contato para uma avaliação | WhatsApp como ação principal, formulário curto como alternativa, informação sobre retorno. Fechamento concreto: “Consultar horários com a equipe”. |

**Avaliações na Home:** sim, com prioridade alta. Um resumo discreto de nota/quantidade pode acompanhar o hero quando o perfil e os números forem verificados. A seção completa ocupa a posição 4. Não usar estrelas decorativas, nota inventada nem sugerir que avaliação de atendimento comprova resultado clínico.

**2. Implantes dentários — `/implantes-dentarios`**

**1 — Estrutura atual resumida:** hero → faixa de atributos → situações cotidianas → editorial de mastigação/conforto → método → jornada em três etapas → objeções → autoridade → primeira consulta → FAQ → contato. Sem prova social ou casos efetivos.

**2 — Problemas de conversão:** três blocos retomam perda dentária/prótese antes de aprofundar o plano. A distinção entre etapa cirúrgica e prótese está dispersa. Não fica claro o caminho de quem não tem dentista acompanhando. A autoridade detalhada aparece tarde. A jornada comprime preparo, instalação e cicatrização; falta esclarecer melhor provisório, prótese definitiva e tempo total. As objeções se repetem; não existe prova concreta de atendimento ou reabilitação.

**3 — Manter:** função/mastigação como motivação, implante e prótese planejados juntos, osso/gengiva/saúde, participação do dentista da prótese, limites, manutenção e avaliação individual.

**4 — Remover/fundir:** editorial genérico como bloco independente; faixa repetitiva; perguntas duplicadas sobre prótese removível; novo apelo emocional no fechamento.

**5 — Mudar de posição:** responsabilidades profissionais e autoridade para o primeiro terço; pouco osso junto à avaliação de viabilidade; dor, provisórios e recuperação junto à jornada; informações administrativas junto à consulta.

**6 — Adicionar:** percurso completo até prótese/manutenção, responsabilidades claras, fluxo confirmado para quem não tem dentista, casos pertinentes e avaliações reais. Não anunciar especialidade em Implantodontia a partir do Board bucomaxilofacial.

**7 e 8 — Ordem final exata e justificativas:**

| Ordem | Seção recomendada | Justificativa e ação |
|---|---|---|
| 1 | Hero: avaliar a reabilitação da mastigação | Identificação funcional, retrato/registro e credencial curta. CTA “Solicitar avaliação para implantes”; link “Entender a primeira consulta”. |
| 2 | Em quais situações vale avaliar | Dente(s) ausente(s), prótese desconfortável, perda antiga/pouco osso. Concentrar a identificação em um bloco. |
| 3 | Implante e prótese: quem participa do seu plano | Explicar etapa cirúrgica, etapa protética e comunicação; esclarecer o fluxo sem dentista prévio quando confirmado. Osso, gengiva e alternativas entram aqui. Diferencia pelo cuidado coordenado. |
| 4 | Quem conduz a etapa cirúrgica | Credenciais verificáveis e atuação relacionada. Documento como apoio, sem substituir retrato. CTA “Conversar sobre uma avaliação”. |
| 5 | Da avaliação à prótese e à manutenção | Objetivo protético desde o início → planejamento → preparo se necessário → instalação/cicatrização → reabilitação → manutenção. Explicar provisórios, desconforto e fatores que alteram o prazo. |
| 6 | Casos de reabilitação explicados | Um ou dois casos, com situação inicial, decisão, autoria das etapas, acompanhamento e limites. Sorriso final isolado não explica qualidade do implante. |
| 7 | Experiências de pacientes | Relatos reais de clareza, preparação e continuidade. Confirma a experiência depois que o visitante entende o tratamento. |
| 8 | Sua primeira consulta | O que será avaliado, o que levar se já tiver e o que ainda pode depender de exames. CTA “Consultar como marcar a avaliação”. |
| 9 | Dúvidas que ainda impedem o contato | Tempo, provisório, receio, acompanhamento, custos por etapa e coordenação, sem repetir toda a jornada. CTA “Tirar uma dúvida com a equipe”. |
| 10 | Contato e informações práticas | Particular, local confirmado, retorno e formulário alternativo. CTA “Solicitar contato para avaliação”. |

Casos têm prioridade alta nesta página, sobretudo quando demonstram função e integração com a prótese. Riscos e cuidados de manutenção precisam acompanhar possibilidades, em linha com a [orientação ao paciente da FDA](https://www.fda.gov/medical-devices/dental-devices/dental-implants-what-you-should-know).

**3. Reconstrução óssea — `/reconstrucao-ossea`**

**1 — Estrutura atual resumida:** hero sobre falta de osso → faixa → situações de quem teve plano interrompido → editorial → objeções → método → autoridade → consulta → FAQ → contato. Não há jornada organizada nem casos/avaliações exibidos.

**2 — Problemas de conversão:** “ouviu que falta osso” reaparece em vários blocos. A página reconhece a frustração, mas deixa o percurso pouco tangível. Limites são reiterados sem um mapa de decisão suficientemente claro. Materiais, desconforto, cicatrização e provisório aparecem tarde. Quem procura segunda avaliação precisa conhecer a competência cedo e entender que a consulta também pode confirmar a orientação anterior.

**3 — Manter:** entrada específica, respeito à avaliação anterior, vínculo com futura prótese, planejamento conjunto e ausência de garantia de implante.

**4 — Remover/fundir:** editorial de “possibilidades” como seção autônoma; faixa repetitiva; repetições do problema em quatro blocos; qualquer futura galeria de sorrisos que não explique a reconstrução.

**5 — Mudar de posição:** objeção central imediatamente após o hero; autoridade em seguida; materiais, provisório e recuperação perto das etapas; logística junto à consulta/contato.

**6 — Adicionar:** mapa de decisão, jornada condicional até reavaliar implantes, caso explicado, relato pertinente e clareza sobre materiais efetivamente empregados.

**7 e 8 — Ordem final exata e justificativas:**

| Ordem | Seção recomendada | Justificativa e ação |
|---|---|---|
| 1 | Hero: esclarecer a perda óssea no seu caso | Avaliação pode identificar possibilidades ou confirmar limites. CTA “Solicitar avaliação da perda óssea”; secundário “Como funciona a consulta”. |
| 2 | O que “não há osso suficiente” permite concluir? | Responder à insegurança dominante, concentrando identificação e esclarecimento. Evitar insinuar que todo caso tem solução com enxerto. |
| 3 | Quem avalia e como trabalha com seu dentista | Antecipar credenciais e responsabilidades para uma decisão cirúrgica de maior incerteza. |
| 4 | Como se escolhe entre reconstruir e considerar outros caminhos | Objetivo da prótese, exame, condições clínicas e exames indicados. Explicar o motivo das decisões, sem prometer contrariar o diagnóstico anterior. |
| 5 | Etapas, cicatrização e reavaliação | Plano → reconstrução quando indicada → acompanhamento → reavaliação → continuidade se viável. Integrar materiais, provisório, desconforto e fatores de prazo. |
| 6 | Um caso: por que essa reconstrução foi indicada? | Explicar suporte, objetivo, decisão, acompanhamento e etapa seguinte. O raciocínio agrega mais do que imagem invasiva ou resultado estético isolado. |
| 7 | Relatos sobre preparação e acompanhamento | Dar evidência humana à experiência de um percurso que pode ser longo. Somente relatos autênticos. |
| 8 | O que sua primeira consulta pode esclarecer | Possibilidades, limites e exames faltantes; permitir contato sem documentação pronta. CTA “Consultar como marcar uma avaliação”. |
| 9 | Perguntas antes da avaliação | Materiais/procedência, saúde/medicamentos como assuntos da consulta, recuperação, custos e sequência com dentista. Sem aconselhamento individual pelo site. |
| 10 | Contato e orientação prática | Particular, localização real, retorno e CTA “Solicitar contato para avaliação”. |

Casos têm prioridade alta quando demonstram decisão e continuidade. Se houver apenas foto de sorriso sem relação demonstrável com a etapa óssea, não acrescentar a seção.

**4. DTM e ATM — `/cirurgia-atm`**

**1 — Estrutura atual resumida:** hero → faixa → situações de dor/limitação → editorial → objeções → método conservador/cirúrgico → autoridade → consulta → FAQ → contato. Sem jornada própria, casos ou relatos exibidos.

**2 — Problemas de conversão:** a página repete dor e ausência de indicação cirúrgica automática. O cuidado conservador é mencionado, mas o acompanhamento fica abstrato. O texto salta de cuidados iniciais para cirurgia aberta/prótese articular, ampliando apreensão. Definições e estalos são repetidos na FAQ. A URL ainda comunica cirurgia. O Board não comprova, por si só, especialidade em DTM e Dor Orofacial.

**3 — Manter:** identificação funcional, investigação de músculos/articulação/outras causas, atenção a tratamentos anteriores, segunda opinião, possibilidade conservadora e exames quando acrescentam informação.

**4 — Remover/fundir:** editorial como bloco autônomo, faixa repetitiva, objeções duplicadas. Retirar técnicas de maior complexidade do fluxo introdutório, preservando explicação em aprofundamento contextual para quem recebeu indicação.

**5 — Mudar de posição:** definição DTM/ATM e estalo isolado para o início; linha de cuidado antes da autoridade aprofundada; recorrência e reavaliação para junto do método; custos/logística perto da primeira consulta.

**6 — Adicionar:** linha de cuidado com reavaliação, explicação da evolução funcional, caso documentado pertinente e relatos sobre escuta/continuidade. Substituir “Para marcar, basta a dor que você sente” por “Não precisa chegar com diagnóstico ou exames”.

**7 e 8 — Ordem final exata e justificativas:**

| Ordem | Seção recomendada | Justificativa e ação |
|---|---|---|
| 1 | Hero: avaliação de dor e limitação da mandíbula | Sintoma reconhecível, escopo DTM/ATM, identidade e avaliação sem cirurgia presumida. CTA “Solicitar avaliação da mandíbula”. |
| 2 | O que precisa ser esclarecido | Integrar sintomas, função e distinção entre DTM e ATM. Estalo isolado não deve ser usado como argumento automático para tratar. |
| 3 | Como o cuidado é escolhido e reavaliado | Investigar → orientar cuidado indicado → acompanhar resposta → ajustar. Procedimentos dependem de indicação, sem progressão obrigatória à cirurgia. |
| 4 | Quem acompanha essa investigação | Retrato, credenciais e atuação confirmada. Demonstrar critério; não transformar abrangência técnica em ameaça ou titulação adicional. |
| 5 | A primeira consulta, passo a passo | Conversa, exame, histórico do que já foi feito e próximos passos. CTA “Conversar sobre a primeira consulta”. |
| 6 | Um caso acompanhado: decisão e evolução | Priorizar função e acompanhamento, inclusive cuidado conservador quando houver caso real. Não usar mudança de sorriso para comprovar tratamento de DTM. |
| 7 | Relatos sobre o acompanhamento | Experiência real de escuta, explicação e continuidade. Relevante para quem já tentou outros cuidados. |
| 8 | Dúvidas práticas | Desconforto da avaliação/procedimentos quando indicados, exames/placa existentes, prazos variáveis, segunda opinião e informações administrativas. |
| 9 | Contato e localização | CTA “Consultar horários para avaliação”; formulário “Solicitar contato”. Reduzir a decisão ao próximo passo concreto. |

Evitar galeria estética de antes/depois. A ênfase conservadora e a distinção entre sons isolados e sintomas funcionais são coerentes com a [orientação do NIDCR sobre DTM](https://www.nidcr.nih.gov/health-info/tmd). A futura adoção de `/dtm-atm` deve preservar acessos, links e redirecionamentos existentes; não mudar URL apenas como intervenção estética.

**5. Cirurgia ortognática — `/cirurgia-ortognatica`**

**1 — Estrutura atual resumida:** hero → faixa → situações de mordida/face → editorial → método com ortodontista → jornada → objeções → autoridade → consulta → FAQ → contato. Sem casos e relatos efetivamente exibidos.

**2 — Problemas de conversão:** autoridade detalhada após vários blocos; repetição de função/aparência; sobreposição entre método, jornada, consulta, objeções e FAQ. Mudança facial e recuperação são nomeadas, mas faltam explicações concretas sobre fatores que mudam a experiência. Não há demonstração do planejamento. “Entender se tenho indicação” abre contato administrativo; o visitante precisa saber que a indicação será avaliada na consulta.

**3 — Manter:** função e desejo sem impor padrão estético; participação do ortodontista; avaliação sem decisão prévia de operar; etapas; credencial documental; liberdade de contato sem exames prontos.

**4 — Remover/fundir:** editorial independente, faixa repetitiva e perguntas duplicadas. Reduzir certificado como imagem principal, preservando acesso ao documento.

**5 — Mudar de posição:** autoridade após o esclarecimento de pertinência; caso perto da explicação do planejamento; recuperação depois do percurso/caso; particular e preparação perto da consulta.

**6 — Adicionar:** caso contextualizado, bloco específico sobre mudanças na face/recuperação e experiência real de acompanhamento. Demonstração de planejamento digital somente se o uso estiver confirmado, sem tratar simulação como previsão garantida.

**7 e 8 — Ordem final exata e justificativas:**

| Ordem | Seção recomendada | Justificativa e ação |
|---|---|---|
| 1 | Hero: entender a indicação antes de decidir | Reconhecimento funcional, identidade e retrato real. CTA “Conversar sobre a avaliação”; secundário “Entender a primeira consulta”. |
| 2 | Quando a avaliação ajuda e quando aparelho pode bastar | Unir situações e diferença entre dentes/maxilares. Atender quem recebeu indicação e quem ainda está investigando, sem autodiagnóstico. |
| 3 | Quem avalia e planeja com seu ortodontista | Antecipar competência documentada e responsabilidades. |
| 4 | Como o tratamento é planejado | Avaliação conjunta, preparo quando indicado, planejamento/cirurgia, recuperação/finalização. Explicar decisões e participação de cada profissional. CTA “Conversar sobre o próximo passo”. |
| 5 | Um caso de ortognática explicado | Demanda funcional, decisão, participação ortodôntica, evolução e limites. Alto valor porque mudanças faciais e funcionais geram incerteza. |
| 6 | Mudanças na face, recuperação e rotina | Expectativas, desconforto, alimentação, sensibilidade e trabalho; informar fatores e acompanhamento, com texto clínico validado. Equilibra a leitura do caso. |
| 7 | Como pacientes descrevem o atendimento | Relatos autênticos sobre preparação, clareza e continuidade, sem promessa de resultado semelhante. |
| 8 | Sua primeira consulta, na prática | O que acontece, exames existentes, ortodontista e informações administrativas. CTA “Solicitar contato para marcar a avaliação”. |
| 9 | Dúvidas restantes | Encaminhamento, investigação complementar e perguntas não respondidas; evitar outra seção inteira sobre recuperação. |
| 10 | Contato e informações de atendimento | Formulário alternativo, local, retorno e CTA “Falar com a equipe sobre horários”. |

Casos têm prioridade alta, mas não devem transformar a página em catálogo de mudanças faciais. Um caso bem explicado é preferível a muitas comparações sem contexto.

**6. Apneia do sono — `/apneia-do-sono`**

**1 — Estrutura atual resumida:** hero sobre cansaço → faixa → situações cotidianas → editorial sobre disposição → objeções → método/limites de cirurgia → autoridade → consulta → FAQ → contato. Sem casos/relatos exibidos.

**2 — Problemas de conversão:** o problema de entrada é mais amplo que o serviço bucomaxilofacial complementar. Quem procura tratamento geral para sono pode não entender por que consultar esse profissional. Cansaço/rotina são retomados antes de esclarecer o papel dos maxilares. A repetição de ressalvas cirúrgicas mantém cirurgia como tema dominante. A autoridade chega tarde e o percurso multidisciplinar não fica suficientemente visível.

**3 — Manter:** integração com equipe do sono, distinção entre sintomas e diagnóstico, avaliação individual, consideração de alternativas, segunda opinião e contato sem obrigar exames prévios.

**4 — Remover/fundir:** editorial independente, faixa repetitiva, bloco autônomo de objeções e duplicações da FAQ. Não acrescentar galeria de antes/depois facial nem apresentar cirurgia como substituição automática do CPAP.

**5 — Mudar de posição:** papel do bucomaxilo para imediatamente após hero; autoridade para o início; primeira consulta para a metade superior; CPAP/alternativas junto ao método e à coordenação profissional.

**6 — Adicionar:** pertinência da avaliação, percurso compartilhado, evidências de acompanhamento quando disponíveis e relatos reais sobre atendimento. Reescrever “basta querer entender suas noites” para não sugerir porta universal para qualquer queixa de sono.

**7 e 8 — Ordem final exata e justificativas:**

| Ordem | Seção recomendada | Justificativa e ação |
|---|---|---|
| 1 | Hero com oferta explícita | Manter identificação, deixando clara a avaliação dos maxilares na apneia obstrutiva. CTA “Conversar sobre a avaliação”; secundário “Entender o papel do bucomaxilo”. |
| 2 | Quando essa avaliação pode contribuir | Integrar sintomas pertinentes, encaminhamento e investigação em andamento. Explicar o papel complementar sem exigir autodiagnóstico. |
| 3 | Quem avalia e como trabalha com sua equipe | Credenciais verificáveis, retrato e responsabilidades. Só acrescentar formação específica do sono quando comprovada. |
| 4 | O que acontece na primeira consulta | História/exame, análise do que já existe e próximos passos. Particular e orientação sobre valor antes de marcar. CTA “Consultar horários da avaliação”. |
| 5 | Como as possibilidades são discutidas e acompanhadas | Integração com tratamentos em uso, dificuldades, participação anatômica e possibilidades individualizadas. Mostrar acompanhamento sem escada obrigatória para cirurgia. |
| 6 | Um caso acompanhado, com contexto | Se disponível, explicar indicação, participação profissional e acompanhamento documentado do sono. Foto do rosto isolada não comprova controle da apneia. |
| 7 | Experiências de atendimento | Relatos reais pertinentes; não reclassificar avaliação geral como depoimento de tratamento de apneia. |
| 8 | Dúvidas antes do contato | Encaminhamento, exames existentes, etapas, continuidade da equipe, segunda opinião e questões administrativas. CTA “Tirar uma dúvida sobre a consulta”. |
| 9 | Contato e informações práticas | Local correto, retorno e CTA “Solicitar contato para uma avaliação”. |

O destaque deve ser a contribuição ao cuidado integrado. As diferentes possibilidades terapêuticas exigem contexto; a [orientação do NHLBI sobre tratamento da apneia](https://www.nhlbi.nih.gov/health/sleep-apnea/treatment) sustenta evitar a apresentação de uma solução cirúrgica universal.

**7. Para dentistas — `/para-dentistas`**

**1 — Estrutura atual resumida:** hero profissional → faixa → quando conversar → objeções antes do encaminhamento → atuação conjunta/lista de áreas → autoridade → fluxo de encaminhamento → FAQ → contato.

**2 — Problemas de conversão:** o título presume que a etapa cirúrgica precisa avançar, embora a dúvida de indicação também seja motivo de contato. Escopo, autoridade e fluxo chegam depois de repetições institucionais. “Continuidade” e “alinhamento” não são suficientemente concretizados. Falta demonstração de raciocínio compartilhado. O cabeçalho e rodapé globais continuam falando com paciente. Não há comprovação atual de número exclusivo ou acesso direto/imediato ao cirurgião.

**3 — Manter:** página e linguagem profissionais, conversa antes do encaminhamento, integração, autonomia do paciente, certificação/banca, privacidade e CTA “Discutir um caso”. Separar a jornada profissional na comunicação não exige inventar um canal exclusivo.

**4 — Remover/fundir:** faixa, painel genérico de clareza, duplicação entre dores/lista de áreas e objeções/FAQ. Não acrescentar estrelas do Google como seção principal desta página.

**5 — Mudar de posição:** escopo logo após hero; autoridade e fluxo em seguida; dúvidas sobre continuidade depois do processo; preparação imediatamente antes da ação final.

**6 — Adicionar:** escopo orientado à decisão, caso real de colaboração, explicação positiva do primeiro contato e formas/prazos de retorno apenas quando confirmados. Retirar a presunção de que o colega está em João Pessoa da mensagem pré-preenchida se a operação aceitar outros locais.

**7 e 8 — Ordem final exata e justificativas:**

| Ordem | Seção recomendada | Justificativa e ação |
|---|---|---|
| 1 | Discutir indicação, escopo e continuidade | Abertura que aceita dúvida clínica, sem presumir cirurgia. CTA “Discutir um caso”; secundário “Ver como encaminhar”. |
| 2 | Em quais situações podemos conversar | Áreas e problemas de decisão reunidos; o colega identifica rapidamente a pertinência. |
| 3 | Com quem você vai discutir o caso | Credenciais, retrato e formação pertinente documentada. Autoridade precede explicações longas. |
| 4 | Como funciona o encaminhamento e o retorno | Motivo → escopo → avaliação/conduta → continuidade e informação compartilhada. Descrever operação real. CTA “Alinhar um encaminhamento”. |
| 5 | Uma discussão clínica em contexto | Caso legítimo com questão inicial, decisão e contribuição de cada profissional. Mais pertinente que galeria estética ou avaliações gerais. |
| 6 | Como iniciar o contato | Nome profissional, contato e objetivo geral. A equipe orienta o compartilhamento posterior de documentação; não criar upload clínico público. |
| 7 | Combinados e dúvidas | Conduta indefinida, retorno, mudanças, continuidade e informação financeira ao paciente. Não prometer controle sobre a escolha do paciente. |
| 8 | Contato profissional | WhatsApp/formulário, horário de resposta, CTA “Solicitar contato profissional”. Identificar se a recepção fará o primeiro retorno. |

A conversão relevante é discussão profissional qualificada e encaminhamento efetivo. Deve ser medida separadamente da captação de pacientes.

**8. Sobre — seção atual `/#sobre`; nova rota `/sobre` recomendada**

**1 — Estrutura atual resumida:** não há página independente. Na Home existe certificado → acolhimento/forma de avaliar → lista de credenciais → contexto de 29 avaliadores → link do certificado → áreas de atuação.

**2 — Problemas de conversão:** “Ser ouvido faz parte de ser bem cuidado” explica uma postura, mas pouco informa sobre trajetória. Faltam foto, formação/instituições, experiência documentada e ligação dos títulos com a atuação. O mesmo certificado domina diversos pontos. O visitante que busca o nome do dentista não tem um destino aprofundado; o visitante de tratamento não precisa ler currículo completo.

**3 — Manter:** tom pessoal, forma de discutir indicações, registros e documentos verificáveis.

**4 — Remover/fundir:** biografia genérica, repetição dos sintomas de todos os tratamentos e eventual mural de certificados sem seleção. Não apresentar participação em congresso como especialização, nem “um dos 29” como ranking.

**5 — Mudar de posição:** manter resumo na Home; concentrar trajetória detalhada na nova página; deixar documento ampliável como apoio e linkar das páginas de tratamentos.

**6 — Adicionar:** retrato real, formação com instituições/datas, atividade acadêmica/científica pertinente, modo de trabalhar, ambiente real e relatos sobre atendimento. Tudo além do material atual depende de confirmação. A página só precisa entrar quando houver conteúdo suficiente para aprofundar a apresentação.

**7 e 8 — Ordem final exata e justificativas:**

| Ordem | Seção recomendada | Justificativa e ação |
|---|---|---|
| 1 | Dr. Adriano: identidade, atuação e retrato | Responder imediatamente quem é, o que faz e onde atende. CTA discreto “Conhecer como funciona a consulta”. |
| 2 | Formação e trajetória verificável | Formação/residência/títulos relevantes com instituições e datas confirmadas. A biografia responde à busca de competência. |
| 3 | Certificação Board e participação como examinador | Explicar o documento em linguagem simples, com acesso à fonte. Não extrapolar resultados ou superioridade. |
| 4 | Como essa experiência orienta o cuidado | Decisões, alternativas e participação de outros profissionais com exemplos de processo confirmados. Conectar currículo à experiência do paciente. |
| 5 | Atualização e atuação científica | Seleção curta de docência, publicações, apresentações ou congressos comprovados. Omitir se não houver material relevante. |
| 6 | Onde acontece a consulta | Fotos reais e informações pertinentes. Não acrescentar hospitais, conforme decisão do projeto. |
| 7 | Experiência de pacientes | Relatos sobre escuta e clareza, com origem verificável. Valida a dimensão humana. |
| 8 | Consulta e contato | Orientação breve e CTA “Falar com a equipe sobre uma consulta”. Sem repetir todo o formulário de persuasão dos tratamentos. |

Não priorizaria casos clínicos nessa página: o foco é o profissional. Links para casos contextualizados nas páginas de tratamentos são suficientes.

**9. Contato — seções atuais; nova rota `/contato` recomendada como apoio**

**1 — Estrutura atual resumida:** contato ao final da Home/tratamentos/dentistas; localização completa somente na Home; links do rodapé retornam à Home. Não existe rota independente.

**2 — Problemas de conversão:** quem chega decidido precisa encontrar âncoras e informações espalhadas. Nas páginas de tratamento, informações práticas podem exigir saída para a Home. A falta de dados reais/configuração seria um impedimento operacional maior que a ordem das seções, se persistir em produção.

**3 — Manter:** WhatsApp, formulário curto, retorno em horário comercial e distinção entre solicitação e agendamento.

**4 — Remover/fundir:** fechamento emocional longo; coleta clínica prévia; perguntas desnecessárias; duplicação de formulários na mesma página.

**5 — Mudar de posição:** tornar “Contato e localização” acessível no menu; aproximar informações práticas dos formulários existentes. A rota de apoio não substitui os CTAs locais dos tratamentos.

**6 — Adicionar:** destino direto para pessoas decididas, com local/horários reais, chegada e fluxo de retorno. Não criar calendário online, cadastro ou envio de exames.

**7 e 8 — Ordem final exata:** (1) título direto e WhatsApp principal, para ação imediata; (2) local, horários e particular, para resolver viabilidade; (3) formulário alternativo curto, para quem prefere retorno; (4) o que acontece após solicitar, para definir expectativa; (5) dúvidas administrativas essenciais, para remover as últimas barreiras; (6) privacidade e identificação profissional no fechamento. CTA principal “Consultar horários pelo WhatsApp”; formulário “Solicitar retorno”.

**10. Obrigado — `/obrigado`**

**1 — Atual:** confirmação → botões “Complementar pelo WhatsApp” e “Voltar ao início” → três próximos passos → notas de privacidade/agendamento.

**2 — Problemas:** o destaque de complementar pode induzir contato duplicado após sucesso. A página afirma recebimento também em acesso direto; o evento de conversão dispara na montagem, sem prova de envio naquele acesso. A referência em memória impede repetição no mesmo componente, mas não deduplica nova visita/recarregamento.

**3 — Manter:** solicitação recebida, retorno pelo WhatsApp, horário ainda a combinar e próximos passos.

**4 — Remover:** CTA de complementação como ação dominante; qualquer nova promoção de tratamentos ou solicitação de avaliação pública antes do atendimento.

**5 — Mover:** previsão de retorno e “não precisa reenviar” para junto da confirmação; complementação para ação secundária após os próximos passos.

**6 — Adicionar:** estado neutro para acesso sem envio confirmado e orientação de contato caso não receba retorno dentro do prazo real informado pela equipe. Não inventar prazo.

**7 e 8 — Ordem final exata:** (1) confirmação vinculada ao envio bem-sucedido, para ser verdadeira; (2) canal/prazo real de retorno e aviso de horário não confirmado, para reduzir ansiedade; (3) próximos passos, para organizar expectativa; (4) ação secundária “Preciso corrigir meu contato”, para resolver exceções sem gerar duplicação; (5) retorno à página de origem ou Home, para encerrar a jornada. Conversão registrada no sucesso real, com deduplicação, não pela simples visualização desta URL.

**11. Política de privacidade — `/politica-de-privacidade`**

**1 — Atual:** abertura declaradamente demonstrativa → índice → dados coletados → finalidades → WhatsApp → cookies/métricas → direitos/controlador a confirmar.

**2 — Problemas:** conteúdo provisório e dados ausentes não encerram as dúvidas de quem quer saber quem receberá sua informação. A página está razoavelmente organizada; o problema é completar e conciliar o conteúdo com a operação real. O cabeçalho comercial compartilhado também pode distrair.

**3 — Manter:** linguagem simples, índice, minimização de dados e esclarecimento sobre o uso administrativo do contato.

**4 — Remover:** avisos de versão demonstrativa somente após concluir a política real; declarações futuras sobre ferramentas ainda não definidas. Não inserir casos, avaliações ou promoção de procedimentos.

**5 — Mover:** identificação do responsável e canal de privacidade para o início; resumo do uso dos dados antes do detalhamento.

**6 — Adicionar:** identificação/canal real, prestadores envolvidos, bases/finalidades, retenção, direitos e tecnologias efetivas, conforme definição jurídica e operacional. Não inventar cláusulas ou prazos.

**7 e 8 — Ordem final exata:** (1) título, versão/data e responsável; (2) resumo em linguagem simples; (3) índice; (4) dados e finalidades; (5) compartilhamento e serviços utilizados; (6) retenção e medidas de proteção descritas com precisão; (7) cookies/métricas conforme implementação; (8) direitos e canal de contato; (9) link de retorno ao atendimento. A função de conversão é dar transparência e permitir retorno, não pressionar o visitante.

**12. Página não encontrada — 404**

**1 — Atual:** símbolo/404 → mensagem → explicação → Home ou áreas de atuação.

**2 — Problemas:** fornece saída, mas exige uma etapa extra de quem sabe qual tratamento buscava; não oferece contato diretamente no conteúdo principal.

**3 — Manter:** mensagem direta, identidade e saída para Home.

**4 — Remover:** não há seção essencial a excluir; limitar o destaque decorativo se competir com os caminhos de recuperação.

**5 — Mover:** alternativas úteis imediatamente após a explicação.

**6 — Adicionar:** links diretos às cinco áreas e ao contato, em apresentação curta.

**7 e 8 — Ordem final exata:** (1) mensagem breve; (2) links para tratamentos; (3) Home e contato com equipe; (4) identificação/rodapé. Recupera intenção sem criar uma landing page longa dentro do erro.

**13. Erro global — estado de falha**

**1 — Atual:** erro inesperado → explicação → tentar novamente/Home → código da ocorrência quando disponível.

**2 — Problemas:** se a falha persistir, o visitante pode continuar sem acesso ao contato. O estado substitui o layout inteiro, portanto não se pode depender do cabeçalho/rodapé para recuperá-lo.

**3 — Manter:** linguagem objetiva, tentativa de recuperação e Home.

**4 — Remover:** não há seção relevante a remover; manter código técnico como informação secundária.

**5 — Mover:** contato de contingência para junto das ações de recuperação.

**6 — Adicionar:** link de telefone/WhatsApp confirmado que funcione independentemente do trecho quebrado, quando disponível.

**7 e 8 — Ordem final exata:** (1) falha e orientação breve; (2) tentar novamente; (3) contato alternativo confirmado; (4) Home; (5) código técnico secundário. A prioridade é recuperar acesso ao atendimento.

**Autoridade: o que mostrar e onde**

| Evidência | Hoje | Recomendação |
|---|---|---|
| Nome, registros e Board/banca | Presentes e documentados no projeto | Resumo no hero, contexto nas páginas e documento acessível. |
| Total de 29 avaliadores | Informação do cliente, fora do certificado | Obter fonte complementar antes de transformá-lo em destaque; não chamar de ranking. |
| Foto do profissional | Monograma como substituto | Retrato real na Home, Sobre e blocos de autoridade. Prioridade alta de produção de conteúdo. |
| Formação, instituições e experiência | Não detalhadas de forma comprovada no conteúdo atual | Coletar documentação; selecionar o que ajuda a decidir. Evitar inventar anos, volumes ou especializações. |
| Congressos/docência/publicações | Sem comprovação incorporada nesta auditoria | Seleção contextual na página Sobre; palestrante, docente e participante são papéis diferentes. |
| Tecnologias | Menções gerais a exames/planejamento | Dentro do método do tratamento: recurso confirmado → o que ajuda a avaliar → limite. Sem vitrine genérica ou promessa de precisão/ausência de dor. |
| Consultório/equipe | Predomínio de imagens ilustrativas | Fotos reais ligadas à consulta e à chegada, sem apresentar cenas genéricas como atendimento próprio. |

A pesquisa de UX da [Nielsen Norman Group sobre credibilidade](https://www.nngroup.com/articles/trustworthy-design/) aponta transparência e conexão com o mundo real entre os fatores de confiança. Aplicando isso ao projeto, retrato, dados de atendimento e provas verificáveis têm função maior que acrescentar adjetivos institucionais. Isso é uma inferência de aplicação ao site, não uma previsão quantitativa de conversão.

**Prova social e casos: onde realmente agregam**

| Página | Avaliações/depoimentos | Casos/resultados |
|---|---|---|
| Home | Prioridade alta, depois da apresentação resumida | Sem galeria própria nesta fase; encaminhar aos tratamentos |
| Implantes | Clareza, preparo e continuidade | Prioridade alta: reabilitação e responsabilidades |
| Reconstrução | Preparação e acompanhamento | Prioridade alta se explicar decisão, suporte e continuidade |
| DTM/ATM | Escuta e revisão do plano | Evolução funcional; sem galeria estética |
| Ortognática | Preparação, expectativas e acompanhamento | Prioridade alta, com contexto funcional/ortodôntico |
| Apneia | Clareza e integração do atendimento | Se houver acompanhamento documentado; rosto não é medida de controle da apneia |
| Sobre | Experiência humana | Links para tratamentos, sem galeria duplicada |
| Para dentistas | Relato profissional específico pode complementar | Decisão e colaboração; estrelas do Google não são prioridade |
| Contato, Obrigado, privacidade e erros | Não acrescentar por padrão | Não acrescentar |

Para avaliações do Google: confirmar perfil correto, nota, quantidade e data de consulta/atualização; incluir link para a origem; diferenciar avaliações gerais de relatos de um tratamento. Preferir poucas avaliações legíveis a carrossel automático. Ao selecionar relatos, conservar o sentido e identificar que são destaques selecionados, sem sugerir que constituem a totalidade dos resultados. Não prometer estrelas nos resultados de busca apenas por exibir avaliações no site.

Para casos: questão inicial → avaliação/decisão → participação do Dr. Adriano e demais profissionais → acompanhamento → resultado observado e limites. Identificar período de acompanhamento quando pertinente. Não atribuir ao cirurgião o trabalho protético de terceiros nem apresentar um caso favorável como resultado típico de todos.

O uso de imagens de diagnóstico/conclusão exige cuidado com autoria, autorização e identificação. A [orientação oficial do CFO sobre a Resolução 196/2019](https://website.cfo.org.br/redes-sociais-na-odontologia-fique-atento-as-normas-eticas-e-acerte-na-publicacao-dos-conteudos/) diferencia publicação pelo profissional executor de publicação por pessoa jurídica, exige TCLE e identificação do profissional/CRO e veda imagens do transcurso em publicidade. Antes de implementar imagens de casos, confirmar o enquadramento deste site e o material publicável. A marca pessoal no título, sozinha, não resolve essa definição. O consentimento não torna qualquer formato publicável.

Sem caso publicável, usar explicação ou diagrama educativo dentro do método, claramente identificado. Não apresentar ilustração, imagem gerada, paciente fictício ou exemplo didático como caso realizado.

**Objeções: dar resposta útil, sem esconder tudo na FAQ**

| Dúvida | Melhor posição | Como responder |
|---|---|---|
| “Esse profissional atende minha necessidade?” | Hero e bloco seguinte | Escopo e motivos de avaliação, sem autodiagnóstico |
| “É qualificado para esse procedimento?” | Identidade no hero; autoridade no primeiro terço | Registro/credenciais pertinentes e atuação documentada |
| “Vou precisar operar?” | Junto da indicação/método | Critérios e alternativas, evitando repetir a negativa em todos os blocos |
| “Dói? Como será a recuperação?” | Jornada/recuperação | Descrever controle do desconforto, cuidados e fatores individuais com validação clínica; evitar “indolor” |
| “Quanto tempo demora?” | Jornada e consulta | Separar duração da consulta, procedimento e tratamento; explicar variáveis e fornecer somente intervalos sustentados |
| “Como é a primeira consulta?” | Bloco visível, não só FAQ | O que acontece, o que pode ser esclarecido e o que depende de investigação |
| “Preciso de exames para marcar?” | Junto à consulta/CTA | Aproveitar exames existentes sem impedir primeiro contato |
| “É particular? Quais formas de pagamento?” | Consulta, FAQ administrativa e contato | Particular já está confirmado; formas e condições dependem de confirmação. Informar como consultar valor e como custos por etapa são apresentados |
| “Quem cuida depois?” | Método/jornada | Responsabilidades e rotina real de acompanhamento, sem inventar disponibilidade 24 horas |
| “Onde fica e como chegar?” | Antes/junto ao contato | Endereço e logística reais, sem mapa demonstrativo como prova |

Não recomendo tabela promocional, urgência comercial ou parcelamento como argumento central. A recomendação decorre do posicionamento e da falta de condições confirmadas. Não se deve transformar documentos antigos do projeto em afirmação jurídica genérica de que qualquer informação sobre desconto/pagamento é proibida: houve [decisões e acordos recentes do Cade sobre restrições a descontos na odontologia](https://www.gov.br/cade/pt-br/assuntos/noticias/cade-homologa-5-novos-acordos-com-conselhos-de-odontologia). O formato concreto de divulgação deve considerar as regras aplicáveis e condições reais.

**CTAs e navegação**

Há oportunidades de ação suficientes nos tratamentos: hero, consulta, FAQ, fechamento e botão flutuante. Recomendo redistribuir e contextualizar, mantendo uma ação principal por momento. Não colocar botão em cada seção nem multiplicar opções equivalentes.

| Momento | Intenção | Exemplo | Destino |
|---|---|---|---|
| Hero | Já quer atendimento | Solicitar avaliação para implantes | WhatsApp/equipe ou contato local, explicitamente identificado |
| Leitura inicial | Precisa entender | Como funciona a consulta | Âncora para a seção de consulta |
| Depois de competência/método/caso | Já ganhou confiança | Conversar sobre uma avaliação | Equipe de atendimento |
| Primeira consulta | Quer logística | Consultar horários com a equipe | WhatsApp |
| FAQ | Tem dúvida restante | Tirar uma dúvida sobre o atendimento | Equipe; não diagnóstico online |
| Formulário | Prefere ser chamado | Solicitar contato | Envio do formulário |
| Para dentistas | Quer colaboração | Alinhar um encaminhamento | Fluxo profissional |

“Entender meu caso” pode ser acolhedor, mas precisa de microcopy que informe o que o clique faz: a equipe orienta o agendamento; a indicação clínica é discutida na consulta. Variar rótulos pela tarefa, sem inventar sinônimos para o mesmo botão apenas para evitar repetição.

Navegação proposta: Início; Dr. Adriano; Áreas de atuação; Contato e localização; Para dentistas em posição secundária. Dúvidas permanecem dentro das páginas; a navegação de uma página de tratamento não deve levar à FAQ genérica da Home como primeira alternativa. Cabeçalho/rodapé devem respeitar o público profissional em Para dentistas. Um botão flutuante basta, com texto claro e sem encobrir leitura/formulário no celular.

Não reintroduzir pop-up de saída: o componente existe no repositório, mas não está montado nas páginas atuais. A ausência de interrupção é adequada ao posicionamento. A faixa de atributos atualmente animada pode ser retirada ou absorvida pelo hero; sua função é apresentar princípios, não comprovar autoridade ou experiência de pacientes.

**Prioridade de execução e como avaliar o resultado**

1. Garantir contato real e confiável: WhatsApp, entrega do formulário, dados de atendimento e política concluída. Conferir o caminho até uma solicitação recebida pela equipe, com dados de teste acordados, antes de direcionar pacientes.
2. Produzir os principais ativos de confiança: retrato, fotos reais, currículo comprovável, perfil de avaliações e autorização dos materiais. Separar dados já fornecidos de evidências ainda a coletar.
3. Reestruturar Home e páginas que recebem tráfego: fundir repetições, antecipar dúvidas/autoridade, detalhar percursos e ligar consulta ao contato. Isso pode avançar sem esperar casos clínicos.
4. Inserir provas pertinentes quando disponíveis, priorizando Home (avaliações), implantes e ortognática (casos contextualizados) e reconstrução (raciocínio e continuidade).
5. Criar Sobre com material substantivo e Contato como destino de apoio. Não criar blog, página isolada de depoimentos ou galeria genérica de resultados nesta fase.

Medir a jornada completa: sessão elegível → clique/solicitação → conversa iniciada → contato qualificado → consulta agendada → comparecimento. Cliques em WhatsApp não comprovam conversa; visita à página Obrigado não comprova envio nem agendamento. Separar pacientes de dentistas e analisar por página de entrada, origem e dispositivo.

Há dois pontos concretos de mensuração a corrigir antes de comparar estruturas: `form_view` dispara na montagem do formulário, não quando o usuário realmente o vê; `form_conversion` dispara pela abertura de `/obrigado`, sem vínculo obrigatório a uma entrega recente. Medir visualização efetiva e envio confirmado/deduplicado. Não enviar telefone, nome, relato clínico ou respostas pessoais a ferramentas de publicidade.

Testar primeiro uma hipótese relevante por vez: apresentação resumida antes versus depois das áreas na Home; avaliações completas após autoridade; maior clareza sobre primeira consulta nas páginas de tratamento. Com baixo volume, usar mudanças sequenciais e leitura das dúvidas recebidas, controlando variação de origem e atendimento; não declarar vitória com poucos cliques. O indicador principal é consulta agendada por sessão elegível, acompanhado de qualificação e comparecimento.

**Rastreabilidade da auditoria**

Base principal: `app/page.tsx`; páginas das cinco rotas de tratamentos; `app/para-dentistas/page.tsx`; `app/obrigado/page.tsx`; `app/obrigado/conversion-tracker.tsx`; `app/politica-de-privacidade/page.tsx`; `app/not-found.tsx`; `app/global-error.tsx`; `lib/content.ts`; `lib/site.ts`; `components/doctor-portrait.tsx`; componentes em `components/treatment/`; formulário, cabeçalho, rodapé e localização; decisões/revisões editoriais de 10 e 11 de setembro. Em divergências com documentos antigos, foi considerada a implementação atual e as decisões mais recentes documentadas.

O relatório define arquitetura e prioridades. Novos dados de formação, tecnologias, prazos, formas de pagamento, avaliações e casos permanecem dependentes de informação real; não foram criados para completar as seções.
