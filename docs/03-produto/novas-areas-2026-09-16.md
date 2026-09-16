# Novas áreas: patologias, trauma e atuação pediátrica

Decisão de arquitetura em 16/09/2026:

- **Patologias maxilofaciais** tem página própria em `/patologias-maxilofaciais`. O eixo é esclarecer achados, diagnóstico, possível biópsia e planejamento, sem associar automaticamente tumor a câncer ou prometer cirurgia.
- **Trauma bucomaxilofacial** tem página própria em `/trauma-bucomaxilofacial`. O aviso de sinais de alerta vem antes do primeiro CTA; pronto-socorro e SAMU 192 são o caminho para risco imediato. O WhatsApp é apresentado para casos estáveis ou após o primeiro atendimento.
- **Fissuras e anomalias craniofaciais** permanecem como área de atuação institucional em `/sobre#cirurgia-pediatrica`, com acesso pela Home e pela página Para Dentistas. Uma página clínica própria depende de conteúdo específico confirmado sobre atendimento, etapas e casos.

As duas novas rotas usam o mesmo fluxo das páginas de tratamento: identificação, método de avaliação, caminhos possíveis, etapas, autoridade, consulta e contato. Estão incluídas em navegação, rodapé, sitemap, OG, dados estruturados de serviços e identificação de origem dos formulários. A atuação pediátrica consta na expertise do profissional, sem ser declarada como serviço particular disponível em todos os casos.

## Imagens e provas a substituir

| Área | Imagem ilustrativa gerada | Reserva de prova real |
| --- | --- | --- |
| Patologias | `public/images/heroes/hero-patologias-v1.webp` — consultório com modelo anatômico e exame em tela, área escura livre para texto | `public/images/placeholders/case-pathology.svg` — caso com exame, diagnóstico, conduta e seguimento anonimizados e autorizados |
| Trauma | `public/images/heroes/hero-trauma-v1.webp` — ambiente de planejamento clínico com modelo de face e imagem, área escura livre para texto | `public/images/placeholders/case-trauma.svg` — caso com primeiro atendimento, alterações funcionais, conduta e evolução anonimizados e autorizados |

Os diagramas `public/images/diagrams/pathology.svg` e `public/images/diagrams/trauma.svg` são esquemáticos e não representam pacientes. Retrato do doutor, avaliações e casos continuam com reservas identificadas até haver material real revisado e autorizado.

Referências clínicas usadas para delimitar a comunicação: [AAOMS — Oral & Head and Neck Pathology](https://myoms.org/what-we-do/oral-head-and-neck-pathology/), [CFO — atuação em cirurgias faciais](https://website.cfo.org.br/cirurgias-faciais-o-trabalho-e-a-competencia-do-cirurgiao-dentista-e-da-odontologia/), [Ministério da Saúde — SAMU 192](https://www.gov.br/saude/pt-br/composicao/saes/samu-192) e [ACPA — Parameters of Care](https://acpacares.org/parameters-of-care/).
