import { CheckCircle2 } from "lucide-react";
import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";
import {
  buildWhatsAppLink,
  formatWhatsAppNumberDisplay,
} from "../../lib/conversion/whatsapp";
import { trackEvent } from "../../hooks/useAnalytics";

// SEC-01 — Hero. Copy Directriz de la Sección C del DOC-A, con el 3er bullet
// reemplazado a pedido explícito del usuario (posicionamiento AI-First,
// confirmado sobre las opciones propuestas — ya no es el copy original).
// Foto profesional 🔴 pendiente (Sección F): placeholder de iniciales,
// dibujado en CSS para no arriesgar el LCP con una imagen sin optimizar.

const BULLETS = [
  "6+ sistemas SaaS completos construidos (backend + frontend)",
  "Especialización en cumplimiento regulatorio peruano (SUNAT/SIAGIE)",
  "Desarrollo AI-First: uso IA en cada etapa —del análisis de datos al código— sin perder control de calidad ni entendimiento del negocio.",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 pb-16 pt-36 text-center"
    >
      <Eyebrow icon="👋">¡Hola!</Eyebrow>

      <div
        className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-accent/40 bg-surface font-heading text-3xl font-bold text-accent"
        style={{ aspectRatio: "1 / 1" }}
        aria-hidden="true"
      >
        JP
      </div>

      <h1 className="font-heading text-4xl font-extrabold leading-tight text-fg sm:text-5xl">
        Software que funciona en producción, no solo en la demo.
      </h1>

      <p className="max-w-xl text-lg text-fg-muted">
        Full Stack Developer y Analista de Negocios. Diseño y construyo
        sistemas con reglas complejas —facturación SUNAT, logística
        multi-tenant, pagos digitales— de principio a fin.
      </p>

      <ul className="flex flex-col gap-3 text-left">
        {BULLETS.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3 text-fg">
            <CheckCircle2
              size={20}
              className="mt-0.5 shrink-0 text-cta"
              aria-hidden="true"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-center gap-3">
        <Button
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          size="large"
          onClick={() => trackEvent("whatsapp_click", { location: "hero" })}
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
