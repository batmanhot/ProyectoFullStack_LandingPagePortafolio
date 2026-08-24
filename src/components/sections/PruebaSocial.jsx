import { motion } from "framer-motion";
import Eyebrow from "../ui/Eyebrow";
import { getScrollReveal } from "../../hooks/useScrollReveal";

// SEC-05 — Autoridad / Proof of Work. Sin Ficha CORE en el DOC-A: copy
// borrador, C-08 "contador de proyectos, sectores" (Sección D del DOC-A).
// Cero testimonios reales (riesgo R-02) — el spec V2 (Sección 15) pide
// nombrar esto explícitamente como "Proof of Work" en vez de simularlos.
// Diferenciadores reubicados aquí desde Stack (SEC-04): temáticamente ambas
// secciones son etapa "Confianza" del buyer journey (Sección E del DOC-A),
// y no encajaban visualmente entre los iconos técnicos del stack.
// Contenedor ampliado a max-w-5xl (antes max-w-4xl) para alinearse con el
// resto de las secciones de cuerpo (Sección 25 del spec V2.1); el contenido
// se mantiene centrado internamente (items-center) porque esta sección
// funciona como banda de estadísticas, no como grid de lectura.

const STATS = [
  { value: "10+", label: "Años de experiencia en sistemas y desarrollo" },
  { value: "6+", label: "Sistemas SaaS completos construidos" },
  { value: "4", label: "Sectores: logística, educación, pagos, minería" },
  { value: "1", label: "Cliente-agencia verificable: DevStudio Perú" },
];

const DIFERENCIADORES = [
  {
    title: "Cumplimiento regulatorio peruano",
    detail: "SUNAT, SIAGIE y reglas locales, no solo funcionalidad genérica.",
  },
  {
    title: "Negocio + código en una sola persona",
    detail: "Menos traducción entre lo que pides y lo que se construye.",
  },
  {
    title: "Sistemas multi-tenant",
    detail: "Arquitectura pensada para escalar a varios clientes desde el inicio.",
  },
  {
    title: "Desarrollo AI-First",
    detail: "IA integrada en cada etapa —código, análisis de datos y funcionalidades del producto— sin perder control de calidad.",
  },
];

export default function PruebaSocial() {
  return (
    <section id="prueba-social" className="bg-surface/40 px-6 py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8">
        <motion.div {...getScrollReveal()} className="text-center">
          <Eyebrow icon="📊">Proof of Work</Eyebrow>
          <p className="mx-auto mt-4 max-w-xl text-fg-muted">
            Todavía no tengo testimonios de clientes publicados. La autoridad
            viene de la evidencia: sistemas reales, en producción.
          </p>
        </motion.div>

        <motion.div
          {...getScrollReveal(0.05)}
          className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-accent/20 bg-surface px-6 py-8 text-center"
            >
              <p className="font-heading text-4xl font-extrabold text-accent">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-fg-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div {...getScrollReveal(0.1)} className="w-full">
          <h3 className="text-center font-heading text-xl font-semibold text-fg">
            Por qué trabajar conmigo
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DIFERENCIADORES.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-fg-muted/15 bg-surface p-6"
              >
                <h4 className="font-heading text-lg font-semibold text-fg">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm text-fg-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
