import { motion } from "framer-motion";
import Eyebrow from "../ui/Eyebrow";
import { getScrollReveal } from "../../hooks/useScrollReveal";

// SEC-02 — Sobre Mí. Reescrito según Sección 9 del spec V2: evita abrir con
// "Profesional en Desarrollo de Sistemas de Información..." (instrucción
// explícita) y usa la narrativa "empecé entendiendo problemas, no
// construyendo software". Hechos reales sin cambios (cronología, sectores,
// empresas); solo se reordenó el énfasis y se retiró "apasionado por la
// tecnología" (cliché que el spec pide evitar en la Sección 33).

export default function SobreMi() {
  const reveal = getScrollReveal();

  return (
    <section id="sobre-mi" className="bg-surface/40 px-6 py-20">
      <motion.div {...reveal} className="mx-auto max-w-3xl">
        <Eyebrow icon="🧑">Sobre mí</Eyebrow>
        <h2 className="mt-4 font-heading text-3xl font-bold text-fg sm:text-4xl">
          Historia y propósito
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-fg">
          No empecé construyendo software. Empecé entendiendo problemas.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-fg-muted">
          Antes de escribir una línea de código en producción, pasé años
          resolviendo tickets de soporte, mapeando procesos y traduciendo
          necesidades reales de negocio en requerimientos funcionales. Esa
          base —no un bootcamp— es la que hoy uso para diseñar arquitectura
          de software.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-fg-muted">
          Soy profesional en Desarrollo de Sistemas de Información, con más
          de 10 años de experiencia entre desarrollo, análisis de sistemas,
          análisis funcional y gestión de bases de datos, en los sectores
          minero, industrial, comercial y público.
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
          abajo. Sigo con el mismo criterio de siempre: entender primero el
          negocio, después decidir la arquitectura.
        </p>
      </motion.div>
    </section>
  );
}
