# Referências visuais e editoriais — 11/09/2026

## O que aprendemos

**Dr. Marcelo Cavalli.** A presença do profissional, as imagens de atendimento e a alternância entre fotografia e conteúdo ajudam a dar ritmo à página. Currículo e credenciais dão contexto à autoridade. A principal adaptação para Adriano foi criar pausas fotográficas com uma mensagem ligada à rotina do paciente. [Referência analisada](https://drmarcelocavalli.com.br/)

**Dr. Saulo Botelho.** A apresentação de sintomas facilita o reconhecimento do problema antes da explicação dos tratamentos. Mantivemos essa lógica nas páginas de Adriano: o incômodo cotidiano abre a conversa e a avaliação esclarece as possibilidades. [Referência analisada](https://drsaulobotelho.com.br/)

**ID Implantes.** Medo, desconforto, recuperação e retorno à rotina recebem destaque, aproximando o tratamento das preocupações do leitor. Aproveitamos a atenção a esses temas, preservando a avaliação individual e sem importar garantias absolutas, técnicas ou estrutura da clínica. [Referência analisada](https://idimplantes.com.br/)

## O que foi aplicado

- **Home:** faixa fotográfica depois das áreas de atuação e antes dos públicos, com o título “O que faz falta na sua rotina merece espaço na consulta.”
- **Cinco tratamentos:** o título e o texto sobre o impacto na rotina foram transferidos para uma faixa fotográfica depois da seção de dor. O conteúdo foi preservado, sem criar repetição.
- **Apneia:** imagem contextual de sono. Nos demais tratamentos e na Home, uma composição ilustrativa de ambiente de consulta.
- **FAQ da Home, dos tratamentos e de Para dentistas:** fotografia de consulta desfocada como fundo, com as perguntas sobre um painel branco.
- **Leitura:** no desktop, uma camada azul-marinho dá contraste ao texto sobre a imagem. No mobile, fotografia e texto ocupam áreas separadas.

O componente reutilizável `EditorialStory` mantém títulos, parágrafos e links em HTML. A fotografia é decorativa e recebe a legenda visível “Imagem ilustrativa”.

## Imagens e limites

Foram produzidas duas imagens originais com a ferramenta integrada `image_gen` (modo builtin) e convertidas para WebP com Sharp:

| Arquivo | Dimensões | Tamanho |
| --- | --- | --- |
| [consulta-contexto.webp](C:/Users/adami/OneDrive/Documentos/Projetos/Site-Adriano/public/images/editorial/consulta-contexto.webp) | 1672 × 941 px | 53.068 bytes |
| [sono-rotina.webp](C:/Users/adami/OneDrive/Documentos/Projetos/Site-Adriano/public/images/editorial/sono-rotina.webp) | 1672 × 941 px | 77.408 bytes |

Os prompts completos e a origem estão registrados em [prompts-fotografia-editorial.json](C:/Users/adami/OneDrive/Documentos/Projetos/Site-Adriano/docs/03-produto/prompts-fotografia-editorial.json). Não foram reutilizadas fotografias dos sites de referência.

As imagens representam situações ilustrativas. Não representam o Dr. Adriano, seu consultório ou pacientes reais. Fotografias reais do profissional e do atendimento continuam sendo uma oportunidade para fortalecer sua presença no site, quando estiverem disponíveis.

Os títulos específicos dos tratamentos, os limites clínicos e as credenciais confirmadas do Dr. Adriano foram mantidos. A inspiração visual não altera os serviços e as condições de atendimento informados no projeto.

## Validação

Lint, build e verificação de diferenças (`git diff --check`) passaram. A revisão final de comentários e formatação do componente também passou no ESLint.

As faixas da Home e de Apneia e o FAQ foram inspecionados visualmente no navegador em desktop (1440 px) e mobile (390 px). Fotografias carregadas, texto legível e recortes conferidos. Em 320 px, Home, cinco tratamentos, Para dentistas e Privacidade não apresentaram rolagem horizontal; cada página tem um H1 e os links das novas faixas apontam para âncoras existentes.

As alterações permanecem na prévia local. WhatsApp e envio do formulário continuam dependendo dos dados de contato e da integração já documentados no projeto.
