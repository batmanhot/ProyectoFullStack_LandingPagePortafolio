import Button from "../ui/Button";
import { buildWhatsAppLink } from "../../lib/conversion/whatsapp";
import { trackEvent } from "../../hooks/useAnalytics";

// Header en pastilla flotante — patrón tomado de henriquesousadev.vercel.app
// (referencia de estructura), con la paleta y el único CTA del DOC-A.
// Logo/wordmark 🔴 pendiente (Sección F): se usa un monograma.

const NAV_LINKS = [
  { href: "#hero", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#stack", label: "Stack" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 rounded-full border border-accent/15 bg-surface/80 px-5 py-2.5 shadow-lg shadow-black/20 backdrop-blur">
        <a
          href="#hero"
          className="font-heading text-lg font-bold text-fg shrink-0"
        >
          JP<span className="text-accent">.</span>
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-6 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:block">
          <Button
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            onClick={() => trackEvent("whatsapp_click", { location: "header" })}
          >
            Escríbeme
          </Button>
        </div>
      </div>
    </header>
  );
}
