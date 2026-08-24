import { formatWhatsAppNumberDisplay } from "../../lib/conversion/whatsapp";

// SEC-08 — Footer. Sin Ficha CORE en el DOC-A: copy borrador mínimo.
// Selector ES/EN fuera de este build (MVP acotado a ES, ver Sección I / R-04).
// Enlace a GitHub omitido: URL no confirmada en el DOC-A (🔴 pendiente).
// Email real tomado de la tarjeta de presentación del usuario.

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "jhon@devstudioperu.com";

export default function Footer() {
  return (
    <footer className="border-t border-fg-muted/15 px-6 py-10 text-center text-sm text-fg-muted">
      <p className="font-heading font-semibold text-fg">Jhon Ponte Casafranca</p>
      <p className="mt-1">Software Solutions Architect</p>
      <p className="mt-3">{formatWhatsAppNumberDisplay()}</p>
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
