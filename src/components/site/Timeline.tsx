import { useEffect, useRef, useState } from "react";
import { timeline } from "@/content/site";
import { Reveal } from "./Reveal";

/** Linha do tempo: a linha central se preenche conforme a rolagem e cada marco surge alternando os lados. */
export function Timeline() {
  const ref = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const on = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.6 - r.top) / r.height;
      setProgress(Math.max(0, Math.min(1, p)));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);

  return (
    <ol ref={ref} className="relative mt-16">
      <span aria-hidden className="absolute bottom-0 left-4 top-0 w-1 -translate-x-1/2 rounded-full bg-primary-foreground/25 md:left-1/2" />
      <span
        aria-hidden
        className="absolute left-4 top-0 w-1 -translate-x-1/2 rounded-full bg-secondary md:left-1/2"
        style={{ height: `${progress * 100}%` }}
      />
      {timeline.map((t, k) => {
        const left = k % 2 === 0;
        const reached = progress >= (k + 0.5) / timeline.length;
        return (
          <li key={t.title} className="relative grid pb-14 pl-12 last:pb-0 md:grid-cols-2 md:pl-0">
            <span
              aria-hidden
              className={`absolute left-4 top-2 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-primary transition-all duration-500 md:left-1/2 ${reached ? "scale-125 bg-secondary" : "bg-primary-foreground/40"}`}
            />
            <Reveal
              delay={80}
              className={`${left ? "md:col-start-1 md:pr-14 md:text-right" : "md:col-start-2 md:pl-14"}`}
            >
              <p className="font-display text-xl font-bold uppercase tracking-widest text-secondary">{t.when}</p>
              <h3 className="mt-1 text-4xl font-extrabold uppercase">{t.title}</h3>
              <p className={`mt-2 max-w-md opacity-90 ${left ? "md:ml-auto" : ""}`}>{t.text}</p>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
