import { motion } from "framer-motion";
import Eyebrow from "../ui/Eyebrow";
import { getScrollReveal } from "../../hooks/useScrollReveal";

// SEC-NEW — "¿Qué puedo resolver?" (Sección 7 del spec V2). No existía en
// el DOC-A original. Cada bloque referencia un proyecto real de Proyectos
// (SEC-03) como evidencia, en vez de quedarse en descripciones genéricas.

const PROBLEMAS = [
  {
    icon: "🏢",
    title: "Sistemas empresariales",
    detail: "Automatización de procesos y operaciones mediante software a medida.",
    evidence: "POS Minimarket",
  },
  {
    icon: "☁️",
    title: "Plataformas SaaS",
    detail: "Arquitecturas multi-tenant preparadas para crecer.",
    evidence: "EduSaaS, StockPro",
  },
  {
    icon: "🔗",
    title: "Integraciones",
    detail: "APIs, pagos, SUNAT, WhatsApp y servicios externos.",
    evidence: "FactuSaaS, Mercado Pago",
  },
  {
    icon: "🔄",
    title: "Modernización",
    detail: "Migración progresiva de sistemas existentes sin detener la operación.",
    evidence: "StockPro (Strangler Fig)",
  },
  {
    icon: "⚙️",
    title: "Automatización",
    detail: "Transformación de procesos manuales en flujos digitales.",
    evidence: "Doña Nella",
  },
  {
    icon: "🚀",
    title: "Productos digitales",
    detail: "Desde MVP hasta plataformas listas para producción.",
    evidence: "Sistema de Encuestas",
  },
];

export default function Problemas() {
  const reveal = getScrollReveal();

  return (
    <section id="problemas" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div {...reveal}>
          <Eyebrow icon="🎯">Qué puedo resolver</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-bold text-fg sm:text-4xl">
            ¿Qué tipo de problemas puedo ayudarte a resolver?
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
