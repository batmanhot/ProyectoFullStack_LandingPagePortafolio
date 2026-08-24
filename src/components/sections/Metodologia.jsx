import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Eyebrow from "../ui/Eyebrow";
import { getScrollReveal } from "../../hooks/useScrollReveal";

// SEC-NEW — Metodología (Sección 8 del spec V2). Flujo de negocio de 5
// etapas, separado del proceso AI-First de 8 etapas (que ahora vive en
// AIEngineering.jsx) — este es el "cómo pienso un proyecto", no el "cómo
// uso IA en el día a día".

const PASOS = [
  {
    step: "01",
    title: "Entiendo",
    detail: "Analizo el problema, los procesos, usuarios, reglas y objetivos del negocio.",
  },
  {
    step: "02",
    title: "Diseño",
    detail: "Defino arquitectura, datos, integraciones, experiencia y estrategia técnica.",
  },
  {
    step: "03",
    title: "Construyo",
    detail: "Desarrollo frontend, backend, APIs, integraciones y componentes necesarios.",
  },
  {
    step: "04",
    title: "Valido",
    detail: "Pruebas, calidad, seguridad, rendimiento y comportamiento real.",
  },
  {
    step: "05",
    title: "Evoluciono",
    detail: "La solución queda preparada para crecer, integrarse y mantenerse.",
  },
];

export default function Metodologia() {
  const reveal = getScrollReveal();

  return (
    <section id="metodologia" className="bg-surface/40 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div {...reveal}>
          <Eyebrow icon="🧭">Cómo trabajo</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-bold text-fg sm:text-4xl">
            No empiezo por el código. Empiezo por entender el problema.
          </h2>
        </motion.div>

        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-3">
          {PASOS.map((item, index) => (
            <div key={item.step} className="flex items-center gap-3 lg:flex-1">
              <motion.div
                {...getScrollReveal(index * 0.08)}
                className="flex flex-1 flex-col gap-2 rounded-2xl border border-accent/15 bg-surface p-5"
              >
                <p className="font-heading text-sm font-bold text-accent">
                  {item.step}
                </p>
                <h3 className="font-heading text-lg font-semibold text-fg">
                  {item.title}
                </h3>
                <p className="text-sm text-fg-muted">{item.detail}</p>
              </motion.div>
              {index < PASOS.length - 1 && (
                <ArrowRight
                  size={20}
                  aria-hidden="true"
                  className="hidden shrink-0 text-accent/40 lg:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
