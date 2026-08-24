import { motion } from "framer-motion";
import { SiGithubcopilot, SiCursor, SiClaude } from "react-icons/si";
import Eyebrow from "../ui/Eyebrow";
import { getScrollReveal } from "../../hooks/useScrollReveal";

// SEC-NEW — AI-Augmented Engineering (Sección 14 del spec V2). Extraído de
// Stack.jsx: el proceso de 8 etapas y el stack de IA (Copilot/Cursor/Claude)
// vivían ahí como "Cómo trabajo", pero el spec V2 separa la metodología de
// negocio (ahora Metodologia.jsx) del uso de IA en el flujo de desarrollo.
// Contenido sin cambios respecto al original (confirmado por el usuario) —
// solo se reubicó y se le dio positioning propio.
// Contenedor ampliado a max-w-5xl (antes max-w-4xl) para alinearse con el
// resto de las secciones de cuerpo (Sección 25 del spec V2.1).

const AI_STACK = [
  { name: "GitHub Copilot", Icon: SiGithubcopilot },
  { name: "Cursor", Icon: SiCursor },
  { name: "Claude", Icon: SiClaude },
];

const PROCESO = [
  {
    step: "1. Ideación y descubrimiento",
    detail: "Identifico necesidades del negocio y evalúo dónde la IA puede automatizar o agilizar un proceso, apoyado en LLMs para acelerar el análisis de datos.",
  },
  {
    step: "2. Definición de requerimientos",
    detail: "Defino qué se resuelve con IA (vía APIs de LLMs) y qué no la necesita, evitando integrarla solo por moda.",
  },
  {
    step: "3. Arquitectura y diseño",
    detail: "Diseño el sistema para que soporte producción, no solo la demo, explorando alternativas de arquitectura con asistentes de IA antes de comprometerme a una.",
  },
  {
    step: "4. Desarrollo e integración",
    detail: "Construyo con asistentes de código (GitHub Copilot, Cursor, Claude) e integro APIs de IA de terceros cuando el producto lo requiere.",
  },
  {
    step: "5. Validación y control de calidad",
    detail: "Reviso cada sugerencia de IA antes de aceptarla: nada se integra al sistema sin pruebas y revisión humana.",
  },
  {
    step: "6. Pruebas de software",
    detail: "Pruebas unitarias y smoke tests, más revisión de que las respuestas o automatizaciones con IA sean consistentes con las reglas de negocio.",
  },
  {
    step: "7. Despliegue y monitoreo",
    detail: "Despliego el sistema y monitoreo su comportamiento en producción, incluyendo las integraciones de IA, ajustando según el uso real.",
  },
  {
    step: "8. Evolución continua",
    detail: "El sistema evoluciona con retroalimentación real del negocio, ajustando prompts, flujos e integraciones de IA a medida que cambian las necesidades.",
  },
];

export default function AIEngineering() {
  const reveal = getScrollReveal();

  return (
    <section id="ai-engineering" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div {...reveal}>
          <Eyebrow icon="🤖">AI-Augmented Engineering</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-bold text-fg sm:text-4xl">
            IA como multiplicador de productividad
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-fg-muted">
            Utilizo IA para acelerar análisis, exploración, documentación,
            desarrollo y testing, manteniendo el criterio arquitectónico y la
            responsabilidad técnica en cada decisión.
          </p>
        </motion.div>

        <motion.div
          {...getScrollReveal(0.05)}
          className="mt-8 grid grid-cols-3 gap-3 max-w-sm"
        >
          {AI_STACK.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 rounded-xl border border-accent/15 bg-surface p-3"
              title={name}
            >
              <Icon size={28} className="text-accent" aria-hidden="true" />
              <span className="text-center text-xs text-fg-muted">{name}</span>
            </div>
          ))}
        </motion.div>

        <motion.div {...getScrollReveal(0.1)} className="mt-10">
          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESO.map((item) => (
              <li key={item.step} className="rounded-xl bg-surface/60 p-4">
                <p className="font-heading font-semibold text-accent">{item.step}</p>
                <p className="mt-1 text-sm text-fg-muted">{item.detail}</p>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
