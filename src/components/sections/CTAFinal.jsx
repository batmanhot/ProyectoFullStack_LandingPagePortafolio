import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";
import {
  buildWhatsAppLink,
  formatWhatsAppNumberDisplay,
} from "../../lib/conversion/whatsapp";
import { trackEvent } from "../../hooks/useAnalytics";

// SEC-07 — CTA Final. Reescrito según Sección 18 del spec V2: título y
// copy actualizados, y se agrega un CTA secundario ("Ver proyectos") para
// que WhatsApp deje de ser el único concepto de conversión de la página.

export default function CTAFinal() {
  return (
    <section id="cta-final" className="bg-surface px-6 py-20 text-center">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-6">
        <Eyebrow icon="📩">Contacto</Eyebrow>
        <h2 className="font-heading text-3xl font-bold text-fg sm:text-4xl">
          ¿Tienes un problema de software que necesita una solución real?
        </h2>
        <p className="text-lg text-fg-muted">
          Cuéntame qué quieres construir, mejorar o automatizar. Analicemos el
          problema y definamos el camino técnico más adecuado.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            size="large"
            onClick={() => trackEvent("whatsapp_click", { location: "cta_final" })}
          >
            Cuéntame qué necesitas construir →
          </Button>
          <Button
            href="#proyectos"
            variant="secondary"
            size="large"
            onClick={() => trackEvent("view_projects_click", { location: "cta_final" })}
          >
            Ver proyectos
          </Button>
        </div>
        <span className="text-sm text-fg-muted">
          {formatWhatsAppNumberDisplay()}
        </span>
      </div>
    </section>
  );
}
