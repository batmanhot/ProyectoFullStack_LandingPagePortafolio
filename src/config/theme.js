// Tokens de la Sección F del DOC-A — se ejecutan tal cual, no se reinterpretan.
// Espejo en CSS: src/index.css (@theme). Usar este archivo solo cuando un
// token se necesita en JS (p. ej. meta theme-color, gráficos, canvas).

export const COLORS = {
  bg: "#0A0E1A",
  surface: "#12172B",
  cta: "#25D366",
  accent: "#5EEAD4",
  fg: "#F8FAFC",
  // Ajustado desde #64748B (valor original del DOC-A) por contraste WCAG AA
  // insuficiente contra los fondos de la página — ver src/index.css.
  fgMuted: "#7C8CA8",
};

export const FONTS = {
  heading: "Sora, ui-sans-serif, system-ui, sans-serif",
  body: "Inter, ui-sans-serif, system-ui, sans-serif",
};

export const BREAKPOINTS = {
  mobile: 375,
  tablet: 768,
  desktop: 1280,
};
