import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/content/site";

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title: "Projetos — Projeto Jovem Esportista" },
      { name: "description", content: "Futebol de salão, capoeira, ballet, zumba, informática, fotografia, Páscoa Feliz e Banco de Alimentos." },
      { property: "og:title", content: "Projetos do Jovem Esportista" },
      { property: "og:description", content: "Esporte, cultura, educação e ação social gratuitos em Diadema." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projetos,
});

function Projetos() {
  return (
    <>
      <PageHero eyebrow="Projetos e iniciativas" title="Nossos projetos" image={projects[0]!.image}>
        Atividades gratuitas de esporte, cultura e educação, além de ações sociais que apoiam famílias de Diadema.
      </PageHero>
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-20 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, k) => (
          <Reveal key={p.slug} delay={(k % 3) * 100}>
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </section>
    </>
  );
}
