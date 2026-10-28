import type { Metadata } from "next";
import {
  Clock3,
  Cookie,
  Database,
  FileText,
  Globe,
  HeartPulse,
  ListChecks,
  LockKeyhole,
  RefreshCw,
  Share2,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { contactLocation, getWhatsAppHref, practiceLocations, schemaName, siteConfig } from "@/lib/site";

/*
 * A página declarava `index: false` e, ao mesmo tempo, `app/sitemap.ts` a
 * listava com o comentário de que ela é "indexável de propósito". Vale a
 * intenção documentada no sitemap: quem procura a política precisa achá-la
 * sem depender do link do rodapé.
 */
export const metadata: Metadata = pageMetadata({
  title: "Política de Privacidade",
  description:
    "Como o site e os canais de contato do Dr. Adriano Rocha Germano tratam dados pessoais, com quais finalidades, por quanto tempo e como exercer seus direitos pela LGPD.",
  path: "/politica-de-privacidade",
  ogSlug: "politica-de-privacidade",
});

const lastUpdated = "27 de outubro de 2026";

// Manter a descrição de medição alinhada às tags publicadas no GTM.
const sections = [
  { id: "controlador", label: "Quem é o responsável" },
  { id: "abrangencia", label: "O que esta política cobre" },
  { id: "dados", label: "Quais dados são tratados" },
  { id: "finalidades", label: "Finalidades e bases legais" },
  { id: "saude", label: "Dados de saúde" },
  { id: "compartilhamento", label: "Compartilhamento" },
  { id: "internacional", label: "Transferência internacional" },
  { id: "cookies", label: "Cookies e medição" },
  { id: "retencao", label: "Por quanto tempo" },
  { id: "seguranca", label: "Segurança" },
  { id: "direitos", label: "Seus direitos" },
  { id: "criancas", label: "Crianças e adolescentes" },
  { id: "alteracoes", label: "Alterações" },
];

export default function PrivacyPage() {
  return (
    <main data-rota="politica-de-privacidade">
      <section className="legal-hero section-soft-edge">
        <div className="container legal-heading">
          <span className="eyebrow">Privacidade e transparência</span>
          <h1>Seus dados devem ser tratados com a mesma clareza que o seu cuidado.</h1>
          <p>
            Como o site e os canais de contato dos consultórios tratam dados
            pessoais, conforme a Lei Geral de Proteção de Dados Pessoais (Lei
            nº 13.709/2018).
          </p>
          <p className="legal-updated">Última atualização: {lastUpdated}.</p>
        </div>
      </section>

      <section className="section legal-section">
        <div className="container legal-layout">
          <nav className="legal-index" aria-label="Nesta política">
            <span>Nesta política</span>
            {sections.map((section) => (
              <a key={section.id} href={"#" + section.id}>
                {section.label}
              </a>
            ))}
          </nav>

          <article className="legal-content">

            <aside className="legal-summary" aria-label="Resumo">
              <strong>Em resumo</strong>
              <ul>
                <li>O site usa o Google Tag Manager para gerenciar ferramentas de medição e registra cliques nos links de WhatsApp.</li>
                <li>O contato é feito diretamente pelo WhatsApp de João Pessoa. O site não recebe solicitações por campos de cadastro.</li>
                <li>Os dados da conversa servem para responder ao seu contato e organizar o atendimento. O evento de clique não inclui o conteúdo da conversa.</li>
                <li>Você pode pedir acesso, correção ou exclusão pelo WhatsApp de João Pessoa.</li>
              </ul>
            </aside>

            <section id="controlador">
              <UserRound aria-hidden="true" />
              <h2>Quem é o responsável pelos seus dados</h2>
              <p>
                O controlador dos dados pessoais tratados neste site e nos canais
                de contato dos consultórios é <strong>{schemaName}</strong>,
                cirurgião-dentista especialista em Cirurgia e Traumatologia
                Buco-Maxilo-Facial ({siteConfig.registry}), que atende nos
                seguintes endereços:
              </p>
              <ul className="legal-list">
                {practiceLocations.map((location) => (
                  <li key={location.id}>
                    <strong>{location.city}/{location.state}:</strong>{" "}
                    {location.building}, {location.street}, {location.complement}
                    {location.neighborhood ? ", " + location.neighborhood : ""},
                    CEP {location.postalCode}.
                  </li>
                ))}
              </ul>
              <p>
                Dúvidas e solicitações sobre dados pessoais podem ser enviadas
                pelo WhatsApp de João Pessoa. Veja como em{" "}
                <a href="#direitos">Seus direitos</a>.
              </p>
            </section>

            <section id="abrangencia">
              <FileText aria-hidden="true" />
              <h2>O que esta política cobre</h2>
              <p>
                Esta política se aplica ao site {siteConfig.url.replace("https://", "")}{" "}
                e aos contatos iniciados a partir dele pelos botões de WhatsApp.
              </p>
              <p>
                Ela não trata do prontuário e das informações clínicas registradas
                durante uma consulta. Esses dados seguem as regras próprias da
                legislação de saúde e do Código de Ética Odontológica, e as
                orientações sobre eles são dadas no atendimento.
              </p>
            </section>

            <section id="dados">
              <Database aria-hidden="true" />
              <h2>Quais dados são tratados</h2>

              <h3>Ao navegar pelo site</h3>
              <p>
                O site não pede cadastro e não grava cookies próprios. O provedor
                de hospedagem registra, como qualquer servidor, dados técnicos de
                acesso — endereço IP, tipo de navegador, página acessada, data e
                hora — usados para manter o site funcionando e seguro.
              </p>

              <h3>Ao falar pelo WhatsApp</h3>
              <p>
                Os botões abrem uma conversa com a equipe de João Pessoa. A
                mensagem inicial já vem escrita e indica de qual página do site
                você partiu. A partir daí, a equipe recebe o que o próprio
                WhatsApp exibe — seu número, nome e foto de perfil, conforme suas
                configurações — e o conteúdo das mensagens que você enviar.
              </p>

              <h3>O que não é coletado</h3>
              <p>
                O site não pede CPF, data de nascimento, convênio, exames,
                fotografias nem descrição de sintomas. Nome, telefone pessoal e mensagem
                nunca são enviados a ferramentas de medição ou de publicidade.
              </p>
            </section>

            <section id="finalidades">
              <ListChecks aria-hidden="true" />
              <h2>Para que os dados são usados e com qual base legal</h2>
              <dl className="legal-bases">
                <div>
                  <dt>Conversar com você, esclarecer dúvidas e agendar a avaliação</dt>
                  <dd>Procedimentos preliminares a um atendimento, feitos a seu pedido (art. 7º, V).</dd>
                </div>
                <div>
                  <dt>Saber qual página originou o contato</dt>
                  <dd>Legítimo interesse (art. 7º, IX), para avaliar quais conteúdos ajudam as pessoas a encontrar o atendimento.</dd>
                </div>
                <div>
                  <dt>Manter o site seguro</dt>
                  <dd>Legítimo interesse (art. 7º, IX).</dd>
                </div>
                <div>
                  <dt>Cumprir obrigações legais e regulatórias e atender autoridades</dt>
                  <dd>Cumprimento de obrigação legal ou regulatória (art. 7º, II).</dd>
                </div>
              </dl>
              <p>
                Os dados não são vendidos e não são usados para formar listas de
                público em plataformas de anúncio.
              </p>
            </section>

            <section id="saude">
              <HeartPulse aria-hidden="true" />
              <h2>Dados de saúde</h2>
              <p>
                Informações sobre sintomas, exames e tratamentos são dados
                pessoais sensíveis. O site não os solicita, e a
                orientação é que você não os envie antes de a equipe indicar o
                meio adequado.
              </p>
              <p>
                Se você decidir compartilhar informações de saúde em uma conversa,
                elas são tratadas apenas para a tutela da sua saúde, por
                profissionais de saúde e com acesso restrito à equipe envolvida
                no seu atendimento (art. 11, II, &ldquo;f&rdquo;, da LGPD).
              </p>
            </section>

            <section id="compartilhamento">
              <Share2 aria-hidden="true" />
              <h2>Com quem os dados são compartilhados</h2>
              <p>Somente com quem é necessário para o site e o atendimento funcionarem:</p>
              <ul className="legal-list">
                <li><strong>Hospedagem do site:</strong> Vercel Inc., que processa os acessos e registra os dados técnicos descritos acima.</li>
                <li><strong>Medição:</strong> o Google Tag Manager carrega as ferramentas configuradas para o site. Conforme as tags ativas, dados técnicos de navegação e eventos de clique podem ser processados pelo Google para medição de resultados.</li>
                <li><strong>WhatsApp:</strong> ao usar os botões, a conversa acontece na plataforma do WhatsApp, operada pela Meta, que trata os dados segundo a própria política de privacidade.</li>
                <li><strong>Mapas:</strong> os mapas dos consultórios são incorporados do Google Maps. Ao serem exibidos, o Google recebe dados técnicos da sua conexão, conforme a política de privacidade do Google.</li>
                <li><strong>Autoridades:</strong> quando houver obrigação legal, ordem judicial ou requisição de autoridade competente.</li>
              </ul>
              <p>
                Os links para o Instagram e para aplicativos de mapas levam a
                serviços de terceiros, que têm políticas próprias.
              </p>
            </section>

            <section id="internacional">
              <Globe aria-hidden="true" />
              <h2>Transferência internacional</h2>
              <p>
                A hospedagem do site, o WhatsApp e o Google Maps são serviços de
                empresas com infraestrutura fora do Brasil, e parte dos dados
                pode ser processada em outros países. Nesses casos, o tratamento
                segue as garantias oferecidas por esses provedores em seus
                termos e políticas, nas hipóteses admitidas pelo art. 33 da LGPD.
              </p>
              <p>
                O WhatsApp e o Google Maps são usados diretamente por você: ao
                abrir uma conversa ou exibir um mapa, a relação é entre você e a
                empresa responsável por esse serviço.
              </p>
            </section>

            <section id="cookies">
              <Cookie aria-hidden="true" />
              <h2>Cookies e medição de visitas</h2>
              <p>
                O site carrega o Google Tag Manager, serviço do Google que
                gerencia as ferramentas de medição. O envio de dados às
                plataformas de análise ou publicidade depende das ferramentas
                configuradas nesse gerenciador.
              </p>
              <p>
                Para entender quais botões levam ao contato, o site registra
                eventos técnicos de clique — por exemplo, &ldquo;botão de
                WhatsApp da página de implantes&rdquo;. Esses eventos ficam
                disponíveis ao gerenciador e identificam a página, o botão, a cidade e o número
                do contato de João Pessoa. Não incluem seu nome, seu telefone
                pessoal nem o conteúdo da mensagem.
              </p>
              <p>
                Os mapas incorporados do Google podem gravar cookies do próprio
                Google quando exibidos. Você pode bloqueá-los nas configurações do
                seu navegador.
              </p>
              <p>
                Ferramentas de medição e publicidade podem usar cookies de
                terceiros, conforme a configuração adotada. Você pode gerenciar
                e bloquear cookies nas configurações do navegador. Esta política
                deve acompanhar mudanças nas ferramentas utilizadas.
              </p>
            </section>

            <section id="retencao">
              <Clock3 aria-hidden="true" />
              <h2>Por quanto tempo os dados são mantidos</h2>
              <ul className="legal-list">
                <li><strong>Solicitações e conversas que não resultam em atendimento:</strong> pelo tempo necessário para responder, e excluídas em até 12 meses após o último contato.</li>
                <li><strong>Quando há atendimento:</strong> os dados passam a integrar o registro do paciente e são mantidos pelo prazo exigido pela legislação de saúde e pelas normas do Conselho Federal de Odontologia.</li>
                <li><strong>Dados técnicos de acesso:</strong> pelo período de retenção do provedor de hospedagem.</li>
              </ul>
              <p>
                Encerrado o prazo, os dados são excluídos ou anonimizados, salvo
                quando a lei exigir sua guarda.
              </p>
            </section>

            <section id="seguranca">
              <LockKeyhole aria-hidden="true" />
              <h2>Segurança</h2>
              <p>
                O site usa conexão criptografada (HTTPS). O acesso às conversas
                é restrito à equipe
                responsável pelo atendimento.
              </p>
              <p>
                Nenhum sistema é totalmente imune a incidentes. Se ocorrer um
                incidente de segurança que possa acarretar risco ou dano relevante
                a você, a comunicação será feita a você e à Autoridade Nacional de
                Proteção de Dados, conforme a lei.
              </p>
            </section>

            <section id="direitos">
              <ShieldCheck aria-hidden="true" />
              <h2>Seus direitos e como exercê-los</h2>
              <p>Pela LGPD (art. 18), você pode pedir, a qualquer momento:</p>
              <ul className="legal-list">
                <li>confirmação de que seus dados são tratados e acesso a eles;</li>
                <li>correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desacordo com a lei;</li>
                <li>portabilidade dos dados a outro fornecedor de serviço;</li>
                <li>eliminação dos dados tratados com base no seu consentimento;</li>
                <li>informação sobre as entidades com as quais seus dados foram compartilhados;</li>
                <li>informação sobre a possibilidade de não consentir e suas consequências;</li>
                <li>revogação do consentimento;</li>
                <li>oposição a tratamento feito sem consentimento, quando em desacordo com a lei.</li>
              </ul>
              <p>
                Para exercer esses direitos, envie uma mensagem com o assunto
                &ldquo;Privacidade&rdquo; para o WhatsApp de João Pessoa:
              </p>
              <ul className="legal-list">
                <li>
                  <strong>{contactLocation.city}:</strong>{" "}
                  <a href={getWhatsAppHref("Olá, vim pela política de privacidade do site e gostaria de tratar de uma solicitação sobre meus dados pessoais. Assunto: Privacidade.")} data-cta="cta-privacidade-whatsapp" data-cta-channel="whatsapp" data-cta-location="privacidade" data-cta-city={contactLocation.id} target="_blank" rel="noopener noreferrer">{contactLocation.whatsappDisplay}</a>
                </li>
              </ul>
              <p>
                Para proteger seus dados, pode ser solicitada uma confirmação de
                identidade antes do atendimento do pedido. A confirmação de
                existência e o acesso em formato simplificado são respondidos de
                imediato; a declaração completa, em até 15 dias (art. 19).
              </p>
              <p>
                Você também pode apresentar reclamação à Autoridade Nacional de
                Proteção de Dados (ANPD), pelo endereço{" "}
                <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer">gov.br/anpd</a>.
              </p>
            </section>

            <section id="criancas">
              <Users aria-hidden="true" />
              <h2>Crianças e adolescentes</h2>
              <p>
                Os canais de contato devem ser usados por adultos.
                Quando o atendimento for de uma criança ou de um adolescente, o
                contato deve ser feito por um dos pais ou pelo responsável legal,
                que fornece os dados e as autorizações necessárias (art. 14).
              </p>
            </section>

            <section id="alteracoes">
              <RefreshCw aria-hidden="true" />
              <h2>Alterações nesta política</h2>
              <p>
                Esta política pode ser atualizada quando o site, os serviços
                utilizados ou a legislação mudarem. A data da versão em vigor
                aparece no topo da página, e mudanças relevantes serão
                destacadas aqui.
              </p>
              <p className="legal-updated">Versão em vigor desde {lastUpdated}.</p>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
