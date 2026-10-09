import { FaGithub, FaLinkedin } from "react-icons/fa";
import { formatWhatsAppNumberDisplay } from "../../lib/conversion/whatsapp";
import { trackEvent } from "../../hooks/useAnalytics";
import { LINKEDIN_URL, GITHUB_URL } from "../../lib/conversion/social";

// SEC-08 — Footer. Nav agregada según Sección 19 del spec V2 (navegación +
// proyectos + contacto). Selector ES/EN fuera de este build (MVP acotado a
// ES, ver Sección I / R-04). Enlaces a GitHub/LinkedIn (Sección 29 del spec
// V2.1: "completar sameAs únicamente con URLs reales") confirmados por el
// usuario — antes se omitían porque no había URLs reales todavía.
// Email real tomado de la tarjeta de presentación del usuario.

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "jhon@devstudioperu.com";

const FOOTER_LINKS = [
  { href: "#hero", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#cta-final", label: "Contacto" },
];

const SOCIAL_LINKS = [
  { href: LINKEDIN_URL, label: "LinkedIn", Icon: FaLinkedin },
  { href: GITHUB_URL, label: "GitHub", Icon: FaGithub },
];

export default function Footer() {
  return (
    <footer className="border-t border-fg-muted/15 px-6 py-10 text-center text-sm text-fg-muted">
      <p className="font-heading font-semibold text-fg">Jhon Ponte Casafranca</p>
      <p className="mt-1">Software Solutions Architect · Perú</p>
      <p className="mt-3 text-xs uppercase tracking-wide text-accent/70">
        Entiendo el negocio. Diseño la arquitectura. Construyo la solución.
      </p>

      <nav
        aria-label="Navegación del pie de página"
        className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
      >
        {FOOTER_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-accent">
            {link.label}
          </a>
        ))}
      </nav>

      <div className="mt-6 flex items-center justify-center gap-4">
        {SOCIAL_LINKS.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="me noopener noreferrer"
            aria-label={label}
            onClick={() =>
              trackEvent(
                label === "LinkedIn" ? "linkedin_click" : "github_click",
                { location: "footer" },
              )
            }
            className="flex h-11 w-11 items-center justify-center text-fg-muted transition-colors hover:text-accent"
          >
            <Icon size={20} aria-hidden="true" />
          </a>
        ))}
      </div>

      <p className="mt-6">{formatWhatsAppNumberDisplay()}</p>
      <p className="mt-1">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          onClick={() => trackEvent("email_click", { location: "footer" })}
          className="hover:text-accent"
        >
          {CONTACT_EMAIL}
        </a>
      </p>
      <p className="mt-6">
        © {new Date().getFullYear()} Jhon Ponte Casafranca. Todos los derechos reservados.
      </p>
    </footer>
  );
}
