import { MessageCircle } from "lucide-react";
import { buildDiagnosticWhatsAppLink } from "../../lib/conversion/whatsapp";
import { trackEvent } from "../../hooks/useAnalytics";

// C-01 — Botón CTA WhatsApp sticky/flotante. Global, es el trigger de
// conversión principal (Sección D del DOC-A).

export default function WhatsAppFloat() {
  return (
    <a
      href={buildDiagnosticWhatsAppLink("floating_cta")}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { location: "float" })}
      aria-label="Solicitar diagnóstico inicial por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 items-center justify-center gap-2 rounded-full bg-cta px-4 text-bg shadow-lg shadow-cta/30 transition-transform duration-200 hover:scale-105"
    >
      <MessageCircle size={26} aria-hidden="true" />
      <span className="hidden text-sm font-semibold lg:inline">Diagnóstico inicial</span>
    </a>
  );
}
