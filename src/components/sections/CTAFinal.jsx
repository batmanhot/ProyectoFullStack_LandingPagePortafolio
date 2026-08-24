import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";
import {
  buildWhatsAppLink,
  formatWhatsAppNumberDisplay,
} from "../../lib/conversion/whatsapp";
import { trackEvent } from "../../hooks/useAnalytics";

// SEC-07 — CTA Final. Copy Directriz literal de la Sección C del DOC-A.

export default function CTAFinal() {
  return (
    <section id="cta-final" className="bg-surface px-6 py-20 text-center">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-6">
        <Eyebrow icon="📩">Contacto</Eyebrow>
        <h2 className="font-heading text-3xl font-bold text-fg sm:text-4xl">
          ¿Tienes un problema de negocio que necesita software real?
        </h2>
        <p className="text-lg text-fg-muted">
          Cuéntame qué necesitas por WhatsApp — respondo directamente, sin
          formularios ni intermediarios.
        </p>
        <Button
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          size="large"
          onClick={() => trackEvent("whatsapp_click", { location: "cta_final" })}
        >
          Escríbeme por WhatsApp
        </Button>
        <span className="text-sm text-fg-muted">
          {formatWhatsAppNumberDisplay()}
        </span>
      </div>
    </section>
  );
}
