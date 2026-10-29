import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/site";

export function ProjectCard({ p, tall }: { p: Project; tall?: boolean }) {
  return (
    <Link
      to="/projetos/$slug"
      params={{ slug: p.slug }}
      className={`group relative block overflow-hidden rounded-2xl bg-ink text-ink-foreground ${tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
    >
      <img src={p.image} alt={`Atividade de ${p.name} no Projeto Jovem Esportista`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-card-fade" />
      <span className="absolute left-4 top-4 rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase text-secondary-foreground">{p.area}</span>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="flex items-end justify-between gap-3 text-4xl font-extrabold uppercase">
          {p.name}
          <ArrowUpRight className="shrink-0 rounded-full bg-primary p-1.5 transition-transform group-hover:rotate-45" size={36} />
        </h3>
        <p className="mt-2 text-sm opacity-85">{p.summary}</p>
      </div>
    </Link>
  );
}
