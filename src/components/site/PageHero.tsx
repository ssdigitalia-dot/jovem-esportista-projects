import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, image, children }: { eyebrow: string; title: string; image: string; children?: ReactNode }) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-ink text-ink-foreground">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover animate-kenburns" />
      <div className="absolute inset-0 bg-hero-fade" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-36">
        <p className="font-display text-lg font-bold uppercase tracking-widest text-secondary">{eyebrow}</p>
        <h1 className="mt-2 max-w-4xl text-6xl font-extrabold uppercase md:text-8xl">{title}</h1>
        {children && <div className="mt-5 max-w-2xl text-lg opacity-90">{children}</div>}
      </div>
    </section>
  );
}
