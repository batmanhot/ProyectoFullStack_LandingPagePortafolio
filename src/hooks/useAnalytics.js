// Instrumenta los KPIs de la Sección G del DOC-A (KPI-01, KPI-02, KPI-07):
// clics de CTA como evento principal. GA4 se carga de forma diferida y solo
// si hay measurement ID configurado, para no penalizar el LCP/INP.

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
let initialized = false;

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

export function useAnalytics() {
  return { trackEvent };
}
