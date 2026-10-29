import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/content/site";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Projeto não encontrado — Jovem Esportista" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${p.name} — Projeto Jovem Esportista` },
        { name: "description", content: p.summary },
        { property: "og:title", content: `${p.name} — Jovem Esportista` },
        { property: "og:description", content: p.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:image", content: p.image },
        { name: "twitter:image", content: p.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-5 py-40 text-center">
      <h1 className="text-5xl font-extrabold uppercase">Projeto não encontrado</h1>
      <Link to="/projetos" className="mt-6 inline-block font-bold text-primary">Ver todos os projetos</Link>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const others = projects.filter((o) => o.slug !== p.slug).slice(0, 3);
  return (
    <>
      <PageHero eyebrow={p.area} title={p.name} image={p.image}>{p.summary}</PageHero>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[2fr_1fr]">
        <Reveal>
          <Link to="/projetos" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary"><ArrowLeft size={16} /> Todos os projetos</Link>
          <h2 className="mt-6 text-4xl font-extrabold uppercase">Sobre o projeto</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{p.description}</p>
          <img src={p.image} alt={`Participantes em atividade de ${p.name}`} className="mt-10 w-full rounded-2xl" />
        </Reveal>
        <Reveal delay={150} as="aside" className="h-fit space-y-6 rounded-2xl bg-muted p-7 md:sticky md:top-28">
          {p.audience && (
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">Público</p>
              <p className="mt-1 font-semibold">{p.audience}</p>
            </div>
          )}
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">Benefícios</p>
            <ul className="mt-2 space-y-2">
              {p.benefits.map((b) => <li key={b} className="flex gap-2"><Check className="mt-0.5 shrink-0 text-primary" size={18} />{b}</li>)}
            </ul>
          </div>
          <Link to="/contato" className="block rounded-full bg-primary px-6 py-3.5 text-center font-bold text-primary-foreground">Quero participar</Link>
        </Reveal>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-24">
        <h2 className="text-4xl font-extrabold uppercase">Outros projetos</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">{others.map((o) => <ProjectCard key={o.slug} p={o} />)}</div>
      </section>
    </>
  );
}
