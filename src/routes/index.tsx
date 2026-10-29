import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import { HeroMedia } from "@/components/site/HeroMedia";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/ProjectCard";
import { impact, media, partners, projects, site, testimonials } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Projeto Jovem Esportista — Esporte, cultura e educação em Diadema" },
      { name: "description", content: "Há 20 anos transformando vidas em Diadema com esporte, cultura e educação gratuitos para crianças, jovens, adultos e idosos." },
      { property: "og:title", content: "Projeto Jovem Esportista — Mais do que esporte" },
      { property: "og:description", content: "Oportunidades para transformar vidas por meio do esporte, da cultura e da educação em Diadema." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: projects[0]!.image },
      { name: "twitter:image", content: projects[0]!.image },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* 1. Abertura */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink text-ink-foreground">
        <HeroMedia />
        <div className="pointer-events-none absolute inset-0 bg-hero-fade" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-32">
          <p className="font-display text-lg font-bold uppercase tracking-[0.3em] text-secondary">{site.city} · {site.years} anos</p>
          <h1 className="mt-4 max-w-5xl text-6xl font-extrabold uppercase sm:text-7xl lg:text-[6.5rem]">
            Mais do que esporte.<span className="block text-secondary">Oportunidades</span> para transformar vidas.
          </h1>
          <p className="mt-6 max-w-xl text-lg opacity-90">{site.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projetos" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground shadow-pop transition-transform hover:-translate-y-0.5">
              Conheça nossos projetos <ArrowRight size={18} />
            </Link>
            <Link to="/contato" className="inline-flex items-center gap-2 rounded-full border-2 border-ink-foreground/70 px-7 py-4 font-bold transition-colors hover:bg-ink-foreground hover:text-ink">
              Faça parte dessa transformação
            </Link>
          </div>
        </div>
      </section>

      {/* Faixa de valores */}
      <div className="overflow-hidden bg-secondary py-4 text-secondary-foreground" aria-label="Nossos valores">
        <div className="flex w-max animate-marquee gap-10 font-display text-3xl font-extrabold uppercase">
          {[...site.values, ...site.values, ...site.values, ...site.values].map((v, k) => (
            <span key={k} className="flex items-center gap-10">{v}<span className="text-primary">●</span></span>
          ))}
        </div>
      </div>

      {/* 2. Apresentação */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:py-32">
        <Reveal>
          <p className="font-display text-lg font-bold uppercase tracking-widest text-primary">Quem somos</p>
          <h2 className="mt-3 text-5xl font-extrabold uppercase md:text-7xl">O esporte transforma muito além das quadras.</h2>
          <p className="mt-6 text-lg text-muted-foreground">{site.mission}</p>
          <p className="mt-4 text-muted-foreground">{site.missionExtra}</p>
          <Link to="/sobre" className="mt-8 inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all">
            Conheça nossa história <ArrowRight size={18} />
          </Link>
        </Reveal>
        <Reveal delay={150} className="relative">
          <img src={media.banner} alt="Arte institucional Projeta: Educação, Esporte, Cultura e Cidadania" className="w-full rounded-2xl shadow-2xl" />
          <img src={media.bannerSide} alt="" className="absolute -bottom-10 -left-6 hidden w-40 -rotate-6 rounded-xl border-4 border-card shadow-xl md:block" />
        </Reveal>
      </section>

      {/* Pilares */}
      <section className="bg-muted py-20">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.pillars.map((p, k) => (
            <Reveal key={p.title} delay={k * 100} className="rounded-2xl border bg-card p-7">
              <span className="font-display text-5xl font-extrabold text-primary">0{k + 1}</span>
              <h3 className="mt-3 text-3xl font-extrabold uppercase">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. Projetos */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:py-32">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-display text-lg font-bold uppercase tracking-widest text-primary">Projetos e iniciativas</p>
            <h2 className="mt-3 text-5xl font-extrabold uppercase md:text-7xl">Uma quadra de possibilidades</h2>
          </div>
          <Link to="/projetos" className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-6 py-3 font-bold hover:bg-foreground hover:text-background">
            Ver todos <ArrowRight size={18} />
          </Link>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {projects.slice(0, 6).map((p, k) => (
            <Reveal key={p.slug} delay={(k % 3) * 120} className={k % 3 === 1 ? "md:translate-y-10" : ""}>
              <ProjectCard p={p} tall />
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. Impacto */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <h2 className="max-w-3xl text-5xl font-extrabold uppercase md:text-7xl">Duas décadas de presença na comunidade.</h2>
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {impact.map((m, k) => (
              <Reveal key={m.label} delay={k * 120} className="border-t-2 border-primary-foreground/40 pt-5">
                <p className="font-display text-7xl font-extrabold text-secondary">{m.value}</p>
                <p className="mt-2 font-semibold">{m.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Histórias */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:py-32">
        <Reveal>
          <p className="font-display text-lg font-bold uppercase tracking-widest text-primary">Histórias</p>
          <h2 className="mt-3 text-5xl font-extrabold uppercase md:text-7xl">Histórias reais. Conquistas que inspiram.</h2>
        </Reveal>
        {testimonials.length ? (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Reveal key={t.name} className="rounded-2xl bg-card p-7 shadow-sm">
                <Quote className="text-primary" />
                <p className="mt-4">{t.quote}</p>
                <p className="mt-5 font-bold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-12 grid items-center gap-8 rounded-3xl bg-ink p-10 text-ink-foreground md:grid-cols-[1fr_auto]">
            <div>
              <Quote className="text-secondary" size={40} />
              <p className="mt-4 max-w-2xl text-2xl">{site.belief}</p>
              <p className="mt-3 opacity-70">Você faz parte dessa trajetória? Queremos conhecer e compartilhar a sua história.</p>
            </div>
            <Link to="/contato" className="rounded-full bg-secondary px-7 py-4 font-bold text-secondary-foreground">Conte sua história</Link>
          </Reveal>
        )}
      </section>

      {/* 6. Parceiros */}
      <section className="border-y bg-muted py-20">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <Reveal>
            <h2 className="text-5xl font-extrabold uppercase md:text-6xl">Juntos, ampliamos oportunidades.</h2>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {partners.map((p) => (
                <span key={p.name} className="rounded-xl border bg-card px-8 py-5 font-display text-2xl font-bold uppercase">{p.name}</span>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-xl text-muted-foreground">Empresas e instituições podem apoiar nossos projetos e fazer parte dessa transformação.</p>
            <Link to="/contato" className="mt-6 inline-flex items-center gap-2 font-bold text-primary">Seja um parceiro <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>

      {/* 7. Chamada final */}
      <section className="relative overflow-hidden bg-ink py-28 text-ink-foreground">
        <img src={projects[1]!.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <Reveal className="relative mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-6xl font-extrabold uppercase md:text-8xl">Vem com a gente.</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg opacity-90">Participe das atividades, apoie um projeto ou converse com a nossa equipe.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contato" className="rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground shadow-pop">Entre em contato</Link>
            <Link to="/contato" className="rounded-full bg-secondary px-7 py-4 font-bold text-secondary-foreground">Seja um parceiro</Link>
            <Link to="/projetos" className="rounded-full border-2 border-ink-foreground/70 px-7 py-4 font-bold">Conheça nossos projetos</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
