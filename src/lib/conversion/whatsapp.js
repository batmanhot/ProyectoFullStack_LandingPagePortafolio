// Objetivo de Conversión (Bloque 0 del DOC-A): Escribir por WhatsApp — CTA único.
// Sección H: enlace wa.me con mensaje precargado, sin backend ni formulario.

export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "51951655295";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola Jhon, quiero solicitar un diagnóstico inicial para un proyecto de software.\n\nEmpresa: \nProceso o área a mejorar: \nPrincipal problema: \nSistema actual (si existe): ";

export function buildWhatsAppLink(message = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Conserva el origen tanto en analítica como en el mensaje para poder
// identificar qué punto de la landing genera cada conversación.
export function buildDiagnosticWhatsAppLink(location) {
  return buildWhatsAppLink(`${DEFAULT_WHATSAPP_MESSAGE}\n\nVi el botón: ${location}.`);
}

export function formatWhatsAppNumberDisplay(number = WHATSAPP_NUMBER) {
  // 51951655295 -> +51 951 655 295 (respaldo textual, ver Sección H "Fallback")
  const match = number.match(/^51(\d{3})(\d{3})(\d{3})$/);
  if (!match) return `+${number}`;
  return `+51 ${match[1]} ${match[2]} ${match[3]}`;
}
