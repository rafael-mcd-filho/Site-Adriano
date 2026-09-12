# Onde mexer no CSS

Era um `globals.css` de 4.819 linhas. Agora `globals.css` só declara a ordem de
carga, e as regras moram aqui. Nada de aparência mudou na divisão: o estilo
computado de 3.561 nós, em 6 rotas, foi comparado antes e depois e deu zero
diferenças. Como refazer essa conferência está em "Conferir antes de commitar".

## Em qual arquivo a sua mudança entra

Comece por esta pergunta: **a mudança vale para quantas rotas?**

**Uma rota só** → `rotas/<slug>.css`. Todo seletor começa com
`[data-rota="<slug>"]`, que o `<main>` daquela rota carrega. Esses arquivos são
os últimos a carregar, então vencem sem `!important`. É aqui que a maioria das
mudanças de página deveria cair.

```css
/* rotas/apneia-do-sono.css */
[data-rota="apneia-do-sono"] .pain-section {
  padding-block: 120px;
}
```

**Mais de uma rota** → o arquivo numerado dono do assunto (lista abaixo).
Mexer ali muda o site inteiro, e é isso mesmo que se quer nesse caso.

**Uma seção nova, que só uma rota usa** → nem um nem outro: crie o componente
com um CSS Module ao lado dele (`minha-secao.module.css`). Nasce isolado, sem
nome global, sem entrar nesta pasta. É o caminho preferido para coisa nova.

> Nunca copie um bloco de um arquivo numerado para `rotas/` para "só mudar uma
> coisinha". Duas cópias da mesma regra divergem na primeira manutenção.
> Sobrescreva só a propriedade que muda.

## Os arquivos

A ordem importa: cada um pode sobrescrever os anteriores. Não reordene os
`@import` em `globals.css`.

| Arquivo | O que mora nele |
|---|---|
| `01-tokens-e-base.css` | Variáveis de cor e tipografia, reset, títulos, parágrafos, destaque do H1 |
| `02-cabecalho.css` | Cabeçalho fixo, navegação, estado ao rolar, menu mobile |
| `03-botoes-e-links.css` | Botões, botão de WhatsApp, links de texto, variantes sobre fundo escuro |
| `04-layout-e-secoes.css` | Container, espaçamento de seção, títulos de seção, heros, utilitários |
| `05-temas-por-motivo.css` | `--page-accent` e `--page-dark` por motivo visual, e o fundo do hero de cada um |
| `06-motivos-visuais.css` | As ilustrações: ar, implante, camadas, articulação, alinhamento, planejamento |
| `07-faixa-de-confianca.css` | Faixa de destaques logo abaixo do hero |
| `08-home-areas-e-publicos.css` | Blocos da home: selo em pílula, áreas de atuação, dois públicos |
| `09-credenciais-e-localizacao.css` | Cartão de credencial do hero e bloco de localização |
| `10-duvidas.css` | Acordeão de dúvidas frequentes |
| `11-formulario.css` | Formulário de contato: campos, máscara, estados, avisos |
| `12-responsivo-global.css` | Os cortes de 1080, 800 e 600px que valem para o site inteiro |
| `13-retrato-e-hero.css` | Retrato do profissional, selos do hero, WhatsApp como botão primário |
| `14-paginas-de-tratamento.css` | Blocos 2 a 8 das rotas de tratamento |
| `15-tratamento-responsivo.css` | Cortes de largura dos blocos de tratamento |
| `16-rodape-e-obrigado.css` | Onda do rodapé e página de confirmação |
| `17-divida-…` / `18-divida-…` | Camada final. Ver abaixo |
| `rotas/*.css` | Uma rota cada, via `[data-rota="…"]` |

## A camada final (`17-` e `18-`)

Duas rodadas de revisão que foram aplicadas por cima do que já existia, em vez
de corrigir o arquivo dono. São **251 regras** que vencem as anteriores — entre
elas `.authority-section`, que deixa de ser navy e vira branco lá no fim.

Consequência prática: mudar `.authority-section` em
`09-credenciais-e-localizacao.css` pode não ter efeito nenhum, porque o `17-`
sobrescreve depois. **Se uma alteração sua não aparecer, procure o seletor nos
dois arquivos antes de recorrer a `!important`.**

```bash
grep -rn "authority-section" app/styles/
```

### Por que quase nada dali volta para o arquivo dono

A tentativa foi feita e medida. Das 258 regras originais, **7 foram
dissolvidas** — os tokens de `.mark-accent` e de `:root` voltaram para
`01-tokens-e-base.css` e `12-responsivo-global.css`, onde alguém de fato
procuraria. As outras 251 **não são dívida no sentido de sujeira**: elas ganham
suas disputas justamente por vir por último. Puxá-las para o arquivo dono muda
quem vence.

O caso que ensina isso: `.visual-motif { border-radius }` estava na camada
final e vencia `.motif-implant { border-radius }`, que vem depois dela em
`06-motivos-visuais.css`. Mesclada no dono, passou a perder — e o quadro do
implante mudou de canto. Os dois seletores não compartilham uma classe sequer,
mas casam no mesmo elemento. Especificidade igual: decide a ordem.

**Então a regra de trabalho é: edite a regra onde ela está.** Se o seletor
aparece na camada final, é ali que ele se resolve. Mover é operação separada,
que precisa de análise e da sonda — não faça de passagem.

Para saber se alguma virou dissolvível depois de você mexer no CSS:

```bash
node scripts/analisa-cascata-css.mjs
```

Ele erra para o lado seguro: "presa" quer dizer "precisa de olho humano", não
"impossível". Hoje responde zero dissolvíveis.

Não faça esses dois arquivos crescerem. Regra nova de uma rota vai para
`rotas/`; regra nova compartilhada vai para o arquivo do assunto.

## Conferir antes de commitar

Serve para qualquer mexida em CSS, e é obrigatória ao mover regra de arquivo.
A sonda lê o estilo computado de todo nó de uma rota — mais a geometria de cada
caixa — e compara com a medição anterior. Está em `scripts/regressao-css.js`.

1. `npm run dev`
2. Abra a rota no navegador e cole `scripts/regressao-css.js` no console.
3. `await medir("antes")` — grava a medição do estado atual.
4. Faça a alteração no CSS e espere o recarregamento.
5. `await comparar("antes")` — deve responder `0` diferenças, a menos que você
   tenha mudado a aparência de propósito.

Repita rota a rota. As que importam: `/`, as cinco de tratamento,
`/para-dentistas` e `/politica-de-privacidade`.

**Não redimensione a janela entre medir e comparar.** Poucos pixels de largura
mudam quase todo nó, e o relatório passa a culpar o seu CSS. A sonda recusa a
comparação quando a largura mudou; se ela recusar, volte ao tamanho anterior.
Pelo mesmo motivo ela rola ao topo antes de medir: o cabeçalho é `fixed` e ganha
`is-scrolled`.

Se aparecerem poucas diferenças e todas de fração de pixel na cadeia de uma
`<img>`, quase sempre é a imagem que ainda não tinha assentado na medição —
recarregue e compare de novo antes de sair procurando culpado no CSS.
