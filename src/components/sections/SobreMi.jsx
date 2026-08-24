import { motion } from "framer-motion";
import Eyebrow from "../ui/Eyebrow";
import { getScrollReveal } from "../../hooks/useScrollReveal";

// SEC-02 — Sobre Mí. Sin Ficha CORE en el DOC-A: copy borrador siguiendo la
// Guía de Tono (Sección J, fusión premium-inspirador). Primer párrafo
// grounded en la cabecera oficial del CV del usuario. Solo prosa, sin
// timeline (a pedido explícito) — los 4 proyectos SaaS y DevStudio Perú ya
// están cubiertos en Proyectos (SEC-03) y Prueba Social (SEC-05).

export default function SobreMi() {
  const reveal = getScrollReveal();

  return (
    <section id="sobre-mi" className="bg-surface/40 px-6 py-20">
      <motion.div {...reveal} className="mx-auto max-w-3xl">
        <Eyebrow icon="🧑">Sobre mí</Eyebrow>
        <h2 className="mt-4 font-heading text-3xl font-bold text-fg sm:text-4xl">
          Historia y propósito
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-fg-muted">
          Profesional en el Desarrollo de Sistemas de Información, con más de
          10 años de experiencia como Desarrollador, Analista de Sistemas,
          Analista Funcional, y en Análisis de Procesos y Gestión de Base de
          Datos, en los sectores minero, industrial, comercial y público.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-fg-muted">
          No construyo software para que se vea bien en una demo. Lo construyo
          para que sobreviva a las reglas reales de un negocio: la regulación
          que no perdona errores, los procesos que ya existen antes de que
          llegue el código, y los usuarios que necesitan que el sistema
          funcione el primer día de producción, no solo en la presentación.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-fg-muted">
          Esa forma de pensar no es teoría: doce de esos años fueron en
          Consorcio Minero Horizonte, donde no empecé como analista —empecé
          resolviendo tickets de soporte al usuario final y fui creciendo
          hasta liderar el análisis funcional y el desarrollo de los
          sistemas.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-fg-muted">
          Desde 2020 superviso proyectos de software y base de datos en
          Sudamericana de Inversiones, y desde 2024 apliqué toda esa base a
          un stack full-stack moderno, construyendo los sistemas SaaS que ves
          abajo. Apasionado por la tecnología y las soluciones prácticas,
          trabajo bien en equipos dinámicos, con entrega de valor continuo.
        </p>
      </motion.div>
    </section>
  );
}
