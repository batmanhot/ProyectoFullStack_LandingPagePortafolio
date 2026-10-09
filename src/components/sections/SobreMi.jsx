import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Eyebrow from "../ui/Eyebrow";
import { getScrollReveal } from "../../hooks/useScrollReveal";

// SEC-02 — Sobre Mí. Reescrito según Sección 9 del spec V2: evita abrir con
// "Profesional en Desarrollo de Sistemas de Información..." (instrucción
// explícita) y usa la narrativa "empecé entendiendo problemas, no
// construyendo software". Hechos reales sin cambios (cronología, sectores,
// empresas); solo se reordenó el énfasis y se retiró "apasionado por la
// tecnología" (cliché que el spec pide evitar en la Sección 33).
// Diagrama de evolución + diferencial agregados por la Sección 13 del spec
// V2.1: antes la evolución solo estaba contada en prosa dentro de los
// párrafos de abajo; ahora también existe como pieza visual, siguiendo el
// mismo patrón de "cadena con flechas" que ya usa Metodologia.jsx.
// Contenedor externo alineado a max-w-5xl (antes max-w-3xl): el ancho de
// sección no coincidía con Problemas/Metodologia/Proyectos, así que el
// título y el texto arrancaban más a la derecha que el resto del cuerpo de
// la página. El texto en sí se mantiene en un ancho de lectura cómodo
// (max-w-2xl) pero sin re-centrarlo, para que el borde izquierdo quede
// alineado con las demás secciones.

const EVOLUCION = [
  "Operación real",
  "Procesos críticos",
  "Análisis de negocio",
  "Desarrollo Full Stack",
  "Arquitectura escalable",
];

export default function SobreMi() {
  const reveal = getScrollReveal();

  return (
    <section id="sobre-mi" className="bg-surface/40 px-6 py-20">
      <motion.div {...reveal} className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <Eyebrow icon="🧑">Sobre mí</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-bold text-fg sm:text-4xl">
            Del problema real a una solución que funciona en producción
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-fg-muted">
            No diseño software desde una mirada teórica. Durante años estuve
            donde los sistemas realmente se ponen a prueba: resolviendo
            incidencias, escuchando a usuarios, mapeando procesos y entendiendo
            qué ocurre cuando una operación depende de herramientas que no
            responden.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-fg-muted">
            Esa experiencia me permitió desarrollar una visión que va más allá
            del código. Soy profesional en Desarrollo de Sistemas de
            Información y tengo más de 10 años de experiencia en desarrollo,
            análisis de sistemas, análisis funcional y gestión de bases de
            datos, trabajando en sectores minero, industrial, comercial y
            público.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-fg-muted">
            Hoy convierto esa comprensión del negocio en soluciones de software
            confiables y escalables. No se trata solo de crear una interfaz
            atractiva o una demo funcional: se trata de diseñar sistemas que
            respeten reglas reales, se integren con la operación existente y den
            a los equipos la confianza de trabajar bien desde el primer día de
            producción.
          </p>

          <div
            aria-hidden="true"
            className="mt-8 flex flex-wrap items-center gap-2"
          >
            {EVOLUCION.map((step, index) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-accent/25 bg-surface px-3 py-1.5 text-sm font-medium text-fg-muted">
                  {step}
                </span>
                {index < EVOLUCION.length - 1 && (
                  <ArrowRight size={16} className="shrink-0 text-accent/40" />
                )}
              </span>
            ))}
          </div>

          <p className="mt-6 font-heading text-lg font-semibold text-accent">
            Negocio + análisis + tecnología.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
