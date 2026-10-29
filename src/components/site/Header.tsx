import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { media } from "@/content/site";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre nós" },
  { to: "/projetos", label: "Projetos" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open ? "bg-background/95 text-foreground shadow-sm backdrop-blur" : "bg-transparent text-ink-foreground",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={media.logo} alt="Logotipo Projeta – Projeto Jovem Esportista" className="h-12 w-12 rounded-full bg-card object-contain p-0.5" />
          <span className="font-display text-xl font-bold uppercase leading-none">
            Jovem<br />Esportista
          </span>
        </Link>
        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
          <Link to="/contato" className="ml-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-pop transition-transform hover:-translate-y-0.5">
            Seja parceiro
          </Link>
        </nav>
        <button className="md:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav aria-label="Principal" className="flex flex-col gap-1 border-t px-5 pb-5 pt-2 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-3 font-display text-2xl font-bold uppercase">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
      <div className="stripe-flag h-1" />
    </header>
  );
}
