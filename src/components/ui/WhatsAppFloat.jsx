import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "../../lib/conversion/whatsapp";
import { trackEvent } from "../../hooks/useAnalytics";

// C-01 — Botón CTA WhatsApp sticky/flotante. Global, es el trigger de
// conversión principal (Sección D del DOC-A).

export default function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { location: "float" })}
      aria-label="Escríbeme por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-cta text-bg shadow-lg shadow-cta/30 transition-transform duration-200 hover:scale-105 md:hidden"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  );
}
