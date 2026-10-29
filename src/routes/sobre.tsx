import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { media, projects, site } from "@/content/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre nós — Projeto Jovem Esportista" },
      { name: "description", content: "Criado em Diadema, o Projeto Jovem Esportista transforma vidas há 20 anos através da cultura, educação e esporte." },
      { property: "og:title", content: "Sobre o Projeto Jovem Esportista" },
      { property: "og:description", content: "Missão, valores e 20 anos de história em Diadema." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <PageHero eyebrow={`${site.years} anos em ${site.city}`} title="Educar, cuidar e inspirar" image={projects[1].image} />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-2">
        <Reveal>
          <p className="font-display text-lg font-bold uppercase tracking-widest text-primary">Nossa história</p>
          <p className="mt-4 text-2xl leading-snug">{site.about}</p>
          <p className="mt-6 text-lg text-muted-foreground">{site.belief}</p>
        </Reveal>
        <Reveal delay={150}><img src={media.bannerSide} alt="Arte Projeta com crianças praticando esporte, música e dança" className="mx-auto w-full max-w-md rounded-2xl" /></Reveal>
      </section>
      <section className="bg-ink py-24 text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2">
          <Reveal>
            <h2 className="text-6xl font-extrabold uppercase text-secondary">Missão</h2>
            <p className="mt-5 text-xl">{site.mission}</p>
            <p className="mt-4 opacity-75">{site.missionExtra}</p>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="text-6xl font-extrabold uppercase text-secondary">Valores</h2>
            <ul className="mt-5 flex flex-wrap gap-3">
              {site.values.map((v) => <li key={v} className="rounded-full border border-ink-foreground/30 px-5 py-2 font-semibold">{v}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-4 px-5 py-24 sm:grid-cols-2 lg:grid-cols-4">
        {site.pillars.map((p, k) => (
          <Reveal key={p.title} delay={k * 100} className="rounded-2xl border-t-4 border-primary bg-muted p-7">
            <h3 className="text-3xl font-extrabold uppercase">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
          </Reveal>
        ))}
      </section>
    </>
  );
}
