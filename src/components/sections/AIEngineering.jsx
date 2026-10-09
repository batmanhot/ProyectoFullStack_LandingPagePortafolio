import { motion } from "framer-motion";
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

const PRINCIPIOS = [
  "Acelero análisis, documentación, desarrollo y pruebas repetitivas.",
  "Reviso las sugerencias antes de incorporarlas a una solución.",
  "Mantengo pruebas, reglas de negocio y responsabilidad técnica antes de producción.",
];

export default function AIEngineering() {
  const reveal = getScrollReveal();

  return (
    <section id="ai-engineering" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div {...reveal}>
          <Eyebrow icon="🤖">AI-Augmented Engineering</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-bold text-fg sm:text-4xl">
            IA aplicada con criterio técnico
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-fg-muted">
            Uso IA como apoyo para acelerar el trabajo repetitivo, no como
            sustituto del análisis, las pruebas ni la responsabilidad sobre la
            solución entregada.
          </p>
        </motion.div>

        <motion.div
          {...getScrollReveal(0.05)}
          className="mt-8 max-w-2xl rounded-2xl border border-accent/15 bg-surface p-6"
        >
          <ul className="space-y-3 text-sm text-fg-muted">
            {PRINCIPIOS.map((principio) => (
              <li key={principio} className="flex gap-3">
                <span aria-hidden="true" className="text-accent">•</span>
                <span>{principio}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
