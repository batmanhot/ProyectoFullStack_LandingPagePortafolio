// Objetivo de Conversión (Bloque 0 del DOC-A): Escribir por WhatsApp — CTA único.
// Sección H: enlace wa.me con mensaje precargado, sin backend ni formulario.

export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "51951655295";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola Jhon, vi tu portafolio y quiero contarte sobre...";

export function buildWhatsAppLink(message = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function formatWhatsAppNumberDisplay(number = WHATSAPP_NUMBER) {
  // 51951655295 -> +51 951 655 295 (respaldo textual, ver Sección H "Fallback")
  const match = number.match(/^51(\d{3})(\d{3})(\d{3})$/);
  if (!match) return `+${number}`;
  return `+51 ${match[1]} ${match[2]} ${match[3]}`;
}
