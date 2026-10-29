import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { projects, site } from "@/content/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Projeto Jovem Esportista" },
      { name: "description", content: "Fale com o Projeto Jovem Esportista: participação em atividades, parcerias, patrocínios e apoio institucional." },
      { property: "og:title", content: "Fale com o Projeto Jovem Esportista" },
      { property: "og:description", content: "Participe, apoie ou seja parceiro. Estamos à disposição para conversar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contato,
});

const subjects = ["Informações sobre projetos", "Participação em atividades", "Parcerias e patrocínios", "Apoio institucional", "Outros assuntos"];
const field = "w-full rounded-xl border border-input bg-card px-4 py-3 outline-none focus:border-primary";

function Contato() {
  const c = site.contact;
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Nome: ${f.get("nome")}\nE-mail: ${f.get("email")}\nTelefone: ${f.get("tel")}\n\n${f.get("msg")}`;
    window.location.href = `mailto:${c.email}?subject=${encodeURIComponent(String(f.get("assunto")))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return (
    <>
      <PageHero eyebrow="Contato" title="Vamos conversar" image={projects[3]!.image}>
        Entre em contato e descubra como nossas ações em cultura, educação e esporte estão transformando vidas há {site.years} anos em Diadema.
      </PageHero>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1fr_1.4fr]">
        <Reveal className="space-y-4">
          <a href={`mailto:${c.email}`} className="flex items-center gap-4 rounded-2xl bg-muted p-6 hover:bg-accent"><Mail className="text-primary" /><span><b className="block">E-mail</b>{c.email}</span></a>
          <a href={c.phoneHref} className="flex items-center gap-4 rounded-2xl bg-muted p-6 hover:bg-accent"><Phone className="text-primary" /><span><b className="block">Telefone</b>{c.phone}</span></a>
          <a href={c.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl bg-muted p-6 hover:bg-accent"><Instagram className="text-primary" /><span><b className="block">Instagram</b>@projetojovemesportista</span></a>
          <a href={c.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl bg-muted p-6 hover:bg-accent"><Facebook className="text-primary" /><span><b className="block">Facebook</b>Projeto Jovem Esportista</span></a>
        </Reveal>
        <Reveal delay={150}>
          <form onSubmit={submit} className="grid gap-4 rounded-3xl border bg-card p-8 shadow-sm">
            <h2 className="text-4xl font-extrabold uppercase">Envie uma mensagem</h2>
            <label className="grid gap-1.5 text-sm font-semibold">Nome<input name="nome" required className={field} /></label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-sm font-semibold">E-mail<input name="email" type="email" required className={field} /></label>
              <label className="grid gap-1.5 text-sm font-semibold">Telefone<input name="tel" type="tel" className={field} /></label>
            </div>
            <label className="grid gap-1.5 text-sm font-semibold">Assunto
              <select name="assunto" className={field}>{subjects.map((s) => <option key={s}>{s}</option>)}</select>
            </label>
            <label className="grid gap-1.5 text-sm font-semibold">Mensagem<textarea name="msg" required rows={5} className={field} /></label>
            <label className="flex gap-2 text-sm text-muted-foreground">
              <input type="checkbox" required className="mt-1 accent-primary" />
              <span>Concordo com o uso dos meus dados para retorno do contato, conforme a <Link to="/privacidade" className="font-semibold text-primary underline">Política de Privacidade</Link>.</span>
            </label>
            <button className="rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground shadow-pop">Enviar</button>
            {sent && <p role="status" className="text-sm font-semibold text-primary">Abrimos seu aplicativo de e-mail com a mensagem pronta. Obrigado!</p>}
          </form>
        </Reveal>
      </section>
    </>
  );
}
