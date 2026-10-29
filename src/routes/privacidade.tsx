import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/content/site";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Projeto Jovem Esportista" },
      { name: "description", content: "Como o Projeto Jovem Esportista coleta, utiliza e protege dados pessoais, conforme a LGPD." },
      { property: "og:title", content: "Política de Privacidade — Jovem Esportista" },
      { property: "og:description", content: "Tratamento de dados pessoais conforme a LGPD." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Privacidade,
});

const sections = [
  ["Dados coletados", "Coletamos apenas os dados que você informa voluntariamente nos formulários e canais de contato, como nome, e-mail, telefone e o conteúdo da mensagem."],
  ["Finalidade", "Os dados são utilizados exclusivamente para responder solicitações, informar sobre atividades e projetos, e tratar de parcerias e apoio institucional."],
  ["Tratamento e segurança", "Os dados não são vendidos nem compartilhados com terceiros para fins comerciais, e são armazenados apenas pelo tempo necessário para cumprir a finalidade informada."],
  ["Formulários", "As mensagens enviadas pelo formulário de contato são encaminhadas ao e-mail institucional da organização e utilizadas somente para retorno."],
  ["Imagens de participantes", "Fotografias e depoimentos de participantes são publicados apenas mediante autorização, com atenção especial à proteção de crianças e adolescentes."],
  ["Seus direitos", "Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode solicitar acesso, correção, anonimização ou exclusão dos seus dados, além de revogar o consentimento a qualquer momento."],
];

function Privacidade() {
  return (
    <section className="mx-auto max-w-3xl px-5 pb-24 pt-40">
      <p className="font-display text-lg font-bold uppercase tracking-widest text-primary">LGPD</p>
      <h1 className="mt-2 text-6xl font-extrabold uppercase">Política de Privacidade</h1>
      <div className="mt-10 space-y-8">
        {sections.map(([t, d]) => (
          <div key={t}><h2 className="text-3xl font-extrabold uppercase">{t}</h2><p className="mt-2 text-muted-foreground">{d}</p></div>
        ))}
        <div>
          <h2 className="text-3xl font-extrabold uppercase">Contato</h2>
          <p className="mt-2 text-muted-foreground">Para questões sobre privacidade, escreva para <a className="font-semibold text-primary" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.</p>
        </div>
      </div>
    </section>
  );
}
