// Scroll-reveal con Framer Motion, con moderación (Sección F del DOC-A):
// respeta prefers-reduced-motion y nunca retrasa el primer paint del CTA
// porque solo se aplica a contenido below-the-fold vía whileInView.

const REDUCED_MOTION =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// No es un hook de React (no usa useState/useEffect internamente), por lo
// que es seguro llamarlo dentro de un .map() al renderizar listas.
export function getScrollReveal(delay = 0) {
  if (REDUCED_MOTION) {
    return {
      initial: false,
      whileInView: undefined,
      viewport: undefined,
      transition: undefined,
    };
  }

  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.5, delay, ease: "easeOut" },
  };
}
