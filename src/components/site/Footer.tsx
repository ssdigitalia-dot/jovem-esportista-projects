import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { media, site } from "@/content/site";

export function Footer() {
  const c = site.contact;
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="stripe-flag h-1.5" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={media.logo} alt="" className="h-14 w-14 rounded-full bg-card object-contain p-0.5" />
            <p className="font-display text-3xl font-bold uppercase">{site.name}</p>
          </div>
          <p className="mt-4 max-w-md text-sm opacity-75">
            Cultura, educação e esporte transformando vidas há {site.years} anos em {site.city}.
          </p>
        </div>
        <div>
          <p className="font-display text-lg font-bold uppercase text-secondary">Navegue</p>
          <ul className="mt-3 space-y-2 text-sm opacity-85">
            <li><Link to="/sobre" className="hover:text-secondary">Sobre nós</Link></li>
            <li><Link to="/projetos" className="hover:text-secondary">Projetos</Link></li>
            <li><Link to="/contato" className="hover:text-secondary">Contato</Link></li>
            <li><Link to="/transparencia" className="hover:text-secondary">Portal da Transparência</Link></li>
            <li><Link to="/privacidade" className="hover:text-secondary">Política de Privacidade</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-lg font-bold uppercase text-secondary">Fale conosco</p>
          <ul className="mt-3 space-y-3 text-sm opacity-85">
            <li><a href={`mailto:${c.email}`} className="flex items-center gap-2 hover:text-secondary"><Mail size={16} />{c.email}</a></li>
            <li><a href={c.phoneHref} className="flex items-center gap-2 hover:text-secondary"><Phone size={16} />{c.phone}</a></li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href={c.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full bg-ink-foreground/10 p-2.5 hover:bg-primary"><Instagram size={18} /></a>
            <a href={c.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-full bg-ink-foreground/10 p-2.5 hover:bg-primary"><Facebook size={18} /></a>
          </div>
        </div>
      </div>
      <p className="border-t border-ink-foreground/10 py-5 text-center text-xs opacity-60">
        © {new Date().getFullYear()} {site.name} · Projeta
      </p>
    </footer>
  );
}
