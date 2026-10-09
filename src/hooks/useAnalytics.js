// Instrumenta los KPIs de la Sección G del DOC-A (KPI-01, KPI-02, KPI-07):
// clics de CTA como evento principal. GA4 se carga de forma diferida y solo
// si hay measurement ID configurado, para no penalizar el LCP/INP.

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
let initialized = false;
let scrollListenerActive = false;
let reachedMilestones = new Set();

export function initAnalytics() {
  if (initialized || !GA_ID || typeof window === "undefined") return;
  initialized = true;

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
}

export function trackEvent(name, params = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  } else if (typeof window.plausible === "function") {
    window.plausible(name, { props: params });
  }
}

// Mide el interés por la narrativa completa del portfolio sin enviar eventos
// continuos de scroll. Los hitos son comparables entre sesiones y cubren el
// requisito de scroll depth sin añadir dependencias.
export function initScrollDepthTracking() {
  if (scrollListenerActive || typeof window === "undefined") return undefined;

  scrollListenerActive = true;
  const milestones = [25, 50, 75, 100];

  const measureScrollDepth = () => {
    const documentHeight = document.documentElement.scrollHeight;
    const scrollableHeight = documentHeight - window.innerHeight;
    const depth = scrollableHeight > 0
      ? Math.min(100, Math.round(((window.scrollY + window.innerHeight) / documentHeight) * 100))
      : 100;

    milestones.forEach((milestone) => {
      if (depth >= milestone && !reachedMilestones.has(milestone)) {
        reachedMilestones.add(milestone);
        trackEvent("scroll_depth", { percent_scrolled: milestone });
      }
    });
  };

  window.addEventListener("scroll", measureScrollDepth, { passive: true });
  window.addEventListener("resize", measureScrollDepth, { passive: true });
  measureScrollDepth();

  return () => {
    window.removeEventListener("scroll", measureScrollDepth);
    window.removeEventListener("resize", measureScrollDepth);
    scrollListenerActive = false;
    reachedMilestones = new Set();
  };
}

// Registra una única visualización por sección durante la sesión. Solo se
// envía el id público de la sección; no se captura texto, formularios ni datos
// personales del visitante.
export function initSectionViewTracking() {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return undefined;
  }

  const observedSections = document.querySelectorAll("main section[id]");
  const viewedSections = new Set();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const section = entry.target.id;
        if (!entry.isIntersecting || viewedSections.has(section)) return;

        viewedSections.add(section);
        trackEvent("portfolio_section_view", { section });
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.35 },
  );

  observedSections.forEach((section) => observer.observe(section));
  return () => observer.disconnect();
}

export function useAnalytics() {
  return { trackEvent };
}
