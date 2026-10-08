import { motion } from "framer-motion";
import Eyebrow from "../ui/Eyebrow";
import { getScrollReveal } from "../../hooks/useScrollReveal";

// SEC-NEW — "¿Qué puedo resolver?" (Sección 7 del spec V2). No existía en
// el DOC-A original. Cada bloque referencia un proyecto real de Proyectos
// (SEC-03) como evidencia, en vez de quedarse en descripciones genéricas.

const PROBLEMAS = [
  {
    icon: "🏢",
    title: "Operaciones que dependen de Excel o tareas manuales",
    detail: "Convierto procesos repetitivos, dispersos o difíciles de controlar en un sistema a medida.",
    evidence: "POS Minimarket",
  },
  {
    icon: "☁️",
    title: "Productos SaaS que necesitan crecer sin rehacerse",
    detail: "Diseño una base multi-tenant preparada para atender varias empresas o instituciones.",
    evidence: "EduSaaS, StockPro",
  },
  {
    icon: "🔗",
    title: "Sistemas que no conversan entre sí",
    detail: "Integro APIs, pagos, SUNAT, WhatsApp y servicios externos para evitar doble trabajo.",
    evidence: "FactuSaaS, Mercado Pago",
  },
  {
    icon: "🔄",
    title: "Software antiguo que frena al negocio",
    detail: "Modernizo por etapas para mejorar el sistema sin detener la operación actual.",
    evidence: "StockPro (Strangler Fig)",
  },
  {
    icon: "⚙️",
    title: "Procesos lentos con errores operativos",
    detail: "Digitalizo flujos y reglas de negocio para dar trazabilidad y consistencia al equipo.",
    evidence: "Doña Nella",
  },
  {
    icon: "🚀",
    title: "Una idea de producto que debe llegar a producción",
    detail: "Defino la arquitectura y desarrollo el MVP o plataforma con criterio de evolución.",
    evidence: "Sistema de Encuestas",
  },
];

export default function Problemas() {
  const reveal = getScrollReveal();

  return (
    <section id="problemas" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div {...reveal}>
          <Eyebrow icon="🎯">Problemas que puedo resolver</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-bold text-fg sm:text-4xl">
            Software para los cuellos de botella que ya cuestan tiempo,
            control o crecimiento.
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMAS.map((item, index) => (
            <motion.div
              key={item.title}
              {...getScrollReveal(index * 0.06)}
              className="flex flex-col gap-3 rounded-2xl border border-fg-muted/15 bg-surface p-6"
            >
              <span className="text-2xl" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="font-heading text-lg font-semibold text-fg">
                {item.title}
              </h3>
              <p className="text-sm text-fg-muted">{item.detail}</p>
              <p className="mt-auto text-xs uppercase tracking-wide text-accent/80">
                Ej. {item.evidence}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
