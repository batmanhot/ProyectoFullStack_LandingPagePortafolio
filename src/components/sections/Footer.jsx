import { formatWhatsAppNumberDisplay } from "../../lib/conversion/whatsapp";

// SEC-08 — Footer. Nav agregada según Sección 19 del spec V2 (navegación +
// proyectos + contacto). Selector ES/EN fuera de este build (MVP acotado a
// ES, ver Sección I / R-04). Enlaces a GitHub/LinkedIn omitidos: el usuario
// no confirmó URLs reales todavía — se agregan en cuanto las tenga, no se
// inventan (Sección 23 del spec V2: "todos los datos deben ser reales").
// Email real tomado de la tarjeta de presentación del usuario.

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "jhon@devstudioperu.com";

const FOOTER_LINKS = [
  { href: "#hero", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#cta-final", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-fg-muted/15 px-6 py-10 text-center text-sm text-fg-muted">
      <p className="font-heading font-semibold text-fg">Jhon Ponte Casafranca</p>
      <p className="mt-1">Software Solutions Architect · Perú</p>

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

      <p className="mt-6">{formatWhatsAppNumberDisplay()}</p>
      <p className="mt-1">
        <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-accent">
          {CONTACT_EMAIL}
        </a>
      </p>
      <p className="mt-6">
        © {new Date().getFullYear()} Jhon Ponte Casafranca. Todos los derechos reservados.
      </p>
    </footer>
  );
}
