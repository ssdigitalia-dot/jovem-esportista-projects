import { createFileRoute } from "@tanstack/react-router";
import { FileText, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { transparency } from "@/content/site";

export const Route = createFileRoute("/transparencia")({
  head: () => ({
    meta: [
      { title: "Portal da Transparência — Projeto Jovem Esportista" },
      { name: "description", content: "Termos de fomento, publicações no Diário Oficial e extratos de recursos recebidos pelo Projeto Jovem Esportista." },
      { property: "og:title", content: "Portal da Transparência — Jovem Esportista" },
      { property: "og:description", content: "Documentos e prestação de contas dos recursos públicos recebidos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Transparencia,
});

function Transparencia() {
  return (
    <section className="mx-auto max-w-5xl px-5 pb-24 pt-40">
      <p className="font-display text-lg font-bold uppercase tracking-widest text-primary">Prestação de contas</p>
      <h1 className="mt-2 text-6xl font-extrabold uppercase md:text-7xl">Portal da Transparência</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">Documentos oficiais sobre os recursos recebidos e sua aplicação nos projetos.</p>
      <div className="mt-14 space-y-10">
        {transparency.map((t) => (
          <Reveal key={t.title} className="grid gap-6 rounded-3xl border bg-card p-8 md:grid-cols-[auto_1fr]">
            <span className="font-display text-7xl font-extrabold text-primary">{t.year}</span>
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">{t.entity}</p>
              <h2 className="mt-1 text-3xl font-extrabold uppercase">{t.title}</h2>
              <p className="mt-1 font-semibold">Valor: {t.value}</p>
              <ul className="mt-5 space-y-3">
                {t.documents.map((d) => (
                  <li key={d.url}>
                    <a href={d.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl bg-muted p-4 font-semibold transition-colors hover:bg-accent hover:text-primary">
                      <FileText className="shrink-0 text-primary" size={20} />
                      <span className="flex-1">{d.label}</span>
                      <ExternalLink size={16} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
