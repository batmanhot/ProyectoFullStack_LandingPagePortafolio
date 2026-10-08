import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";
import {
  buildDiagnosticWhatsAppLink,
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
          ¿Tu operación ya necesita una solución de software a medida?
        </h2>
        <p className="text-lg text-fg-muted">
          Solicita un diagnóstico inicial. Cuéntame qué proceso quieres
          construir, mejorar o automatizar y evaluaremos el camino técnico más
          adecuado para tu negocio.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button
            href={buildDiagnosticWhatsAppLink("cta_final")}
            target="_blank"
            rel="noopener noreferrer"
            size="large"
            onClick={() => trackEvent("whatsapp_click", { location: "cta_final" })}
          >
            Solicitar diagnóstico inicial →
          </Button>
          <Button
            href="#proyectos"
            variant="secondary"
            size="large"
            onClick={() => trackEvent("view_projects_click", { location: "cta_final" })}
          >
            Ver casos de estudio
          </Button>
        </div>
        <span className="text-sm text-fg-muted">
          WhatsApp directo: {formatWhatsAppNumberDisplay()}
        </span>
      </div>
    </section>
  );
}
