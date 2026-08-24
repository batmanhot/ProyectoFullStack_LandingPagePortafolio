import { motion } from "framer-motion";
import Eyebrow from "../ui/Eyebrow";
import { getScrollReveal } from "../../hooks/useScrollReveal";

// SEC-NEW — Experiencia (Sección 16 del spec V2). Timeline extraída de la
// cronología ya contada en prosa en Sobre Mí (SEC-02) — mismos hechos, solo
// en formato visual. Sin fechas inventadas: los años exactos de Consorcio
// Minero Horizonte no están confirmados, así que se muestra la duración
// ("~12 años") en vez de un rango de calendario.

const TIMELINE = [
  {
    role: "Soporte técnico → Analista Funcional",
    org: "Consorcio Minero Horizonte",
    period: "~12 años",
    detail:
      "Empecé resolviendo tickets de soporte al usuario final y crecí hasta liderar el análisis funcional y el desarrollo de sistemas en los sectores minero e industrial.",
  },
  {
    role: "Supervisor de Proyectos de Software y Base de Datos",
    org: "Sudamericana de Inversiones",
    period: "2020 — Presente",
    detail:
      "Supervisión de proyectos de software y gestión de bases de datos.",
  },
  {
    role: "Full Stack Development & Arquitectura de Soluciones SaaS",
    org: "Proyectos propios · DevStudio Perú",
    period: "2024 — Presente",
    detail:
      "Construcción end-to-end de sistemas SaaS con foco en cumplimiento regulatorio y arquitectura multi-tenant, además de refuerzo técnico para la agencia DevStudio Perú.",
  },
];

export default function Experiencia() {
  const reveal = getScrollReveal();

  return (
    <section id="experiencia" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <motion.div {...reveal}>
          <Eyebrow icon="📈">Experiencia</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-bold text-fg sm:text-4xl">
            De soporte y operaciones a arquitectura y desarrollo de soluciones
            empresariales.
          </h2>
        </motion.div>

        <ol className="mt-10 flex flex-col gap-8 border-l border-accent/20 pl-6">
          {TIMELINE.map((item, index) => (
            <motion.li
              key={item.role}
              {...getScrollReveal(index * 0.08)}
              className="relative"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[1.65rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg"
              />
              <p className="text-xs font-medium uppercase tracking-wide text-accent">
                {item.period}
              </p>
              <h3 className="mt-1 font-heading text-lg font-semibold text-fg">
                {item.role}
              </h3>
              <p className="text-sm font-medium text-fg-muted">{item.org}</p>
              <p className="mt-2 text-sm text-fg-muted">{item.detail}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
