import type { Metadata } from "next";
import { Cookie, Database, LockKeyhole, MessageCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
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
    <main>
      <section className="legal-hero section-soft-edge">
        <div className="container breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Início</Link>
          <span aria-hidden="true">/</span>
          <span>Política de privacidade</span>
        </div>
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
                O formulário solicita nome, WhatsApp e uma opção de contato em
                lista fechada — na página inicial, a área sobre a qual você quer
                conversar; nas demais, o tipo de ajuda que procura. São
                registrados também a página de origem e a data do envio.
              </p>
              <p>
                O formulário não coleta sintomas, diagnósticos, exames,
                documentos ou qualquer descrição do seu quadro clínico. Nenhuma
                das opções disponíveis descreve estado de saúde. Se precisar
                falar sobre o caso, isso acontece na conversa com a equipe, não
                aqui.
              </p>
            </section>

            <section id="finalidade">
              <ShieldCheck aria-hidden="true" />
              <h2>Como as informações são utilizadas</h2>
              <p>
                Os dados são usados para responder à solicitação, orientar o fluxo
                de atendimento e manter a segurança do formulário. Eles não devem
                ser utilizados para definir diagnóstico ou tratamento sem consulta.
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
                definição da ferramenta de consentimento. Eventos de conversão não
                devem receber sintomas, opções clínicas ou conteúdo do formulário.
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

