import type { Metadata } from "next";
import { Cookie, Database, LockKeyhole, MessageCircle, ShieldCheck } from "lucide-react";
import { schemaName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como os dados enviados pelo formulário e pelos canais de contato são tratados.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PrivacyPage() {
  return (
    <main data-rota="politica-de-privacidade">
      <section className="legal-hero section-soft-edge">
        <div className="container legal-heading">
          <span className="eyebrow">Privacidade e transparência</span>
          <h1>Seus dados devem ser tratados com a mesma clareza que o seu cuidado.</h1>
          <p>
            Esta versão é demonstrativa e deverá ser revisada juridicamente com os
            dados definitivos do controlador antes da publicação.
          </p>
        </div>
      </section>

      <section className="section legal-section">
        <div className="container legal-layout">
          <aside className="legal-index">
            <span>Nesta política</span>
            <a href="#dados">Dados coletados</a>
            <a href="#finalidade">Como usamos</a>
            <a href="#whatsapp">WhatsApp</a>
            <a href="#cookies">Cookies e métricas</a>
            <a href="#direitos">Seus direitos</a>
          </aside>

          <article className="legal-content">
            <section id="dados">
              <Database aria-hidden="true" />
              <h2>Dados coletados pelo formulário</h2>
              <p>
                O formulário solicita nome, WhatsApp e uma mensagem opcional
                sobre o atendimento. O envio inclui a página de origem, um
                identificador da solicitação, a data e o registro da autorização
                de contato. Quando disponíveis, são incluídos o domínio de
                referência e os identificadores de campanha presentes no link.
              </p>
              <p>
                Use a mensagem para dúvidas sobre horários, agendamento ou
                funcionamento da consulta. Não envie sintomas, diagnósticos,
                exames, documentos ou dados de outros pacientes. A conversa
                clínica acontece com orientação da equipe.
              </p>
            </section>

            <section id="finalidade">
              <ShieldCheck aria-hidden="true" />
              <h2>Como as informações são utilizadas</h2>
              <p>
                Os dados são usados para responder à solicitação, orientar o fluxo
                de atendimento e manter a segurança do formulário. A origem
                ajuda a equipe a identificar a página e a campanha que geraram
                o contato. Os dados não devem ser utilizados para definir
                diagnóstico ou tratamento sem consulta.
              </p>
              <p>
                O envio é encaminhado a um serviço externo contratado apenas para
                entregar a solicitação à equipe. A identificação desse serviço, a
                base legal do tratamento e o prazo de guarda serão publicados
                nesta política antes da entrada no ar.
              </p>
            </section>

            <section id="whatsapp">
              <MessageCircle aria-hidden="true" />
              <h2>Contato pelo WhatsApp</h2>
              <p>
                Ao autorizar o contato, você permite que a equipe responda pelo
                número informado. Evite enviar dados clínicos sensíveis antes de
                receber orientação da equipe.
              </p>
            </section>

            <section id="cookies">
              <Cookie aria-hidden="true" />
              <h2>Cookies, métricas e publicidade</h2>
              <p>
                Tecnologias não essenciais somente serão ativadas depois da
                definição da ferramenta de consentimento. A identificação de
                origem do formulário não usa cookies nem guarda histórico de
                navegação. Eventos de conversão não devem receber nome, telefone
                ou conteúdo da mensagem.
              </p>
            </section>

            <section id="direitos">
              <LockKeyhole aria-hidden="true" />
              <h2>Acesso, correção e exclusão</h2>
              <p>
                O canal definitivo para exercício de direitos será publicado com
                os dados oficiais do controlador. Durante a demonstração, nenhuma
                informação real deve ser enviada.
              </p>
              <div className="legal-demo-note">
                Controlador demonstrativo: {schemaName} · contato a
                confirmar.
              </div>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
