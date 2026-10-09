import { motion } from "framer-motion";
import FAQAccordion from "../ui/FAQAccordion";
import Eyebrow from "../ui/Eyebrow";
import { getScrollReveal } from "../../hooks/useScrollReveal";

// SEC-06 — FAQ / Objeciones. Ampliado según Sección 17 del spec V2 (de 4 a
// 9 preguntas, orientadas a objeciones comerciales típicas de un Software
// Solutions Architect) sobre la base original de "Objeciones típicas" de la
// Ficha de Buyer Persona (Sección A del DOC-A). Sin precios ni plazos
// inventados — cada respuesta se apoya en un proyecto real ya documentado
// en Proyectos (SEC-03).
// Contenedor externo alineado a max-w-5xl (antes max-w-2xl) para que el
// título arranque en la misma línea que las secciones de arriba (Sección 25
// del spec V2.1); el acordeón se mantiene en una columna angosta
// (max-w-2xl) para que las preguntas no se estiren de más.

const FAQS = [
  {
    question: "¿Trabajas proyectos desde cero?",
    answer:
      "Sí. Desde el análisis del problema de negocio hasta arquitectura, desarrollo y despliegue — así construí cada uno de los sistemas SaaS que ves en Proyectos.",
  },
  {
    question: "¿Puedes trabajar sobre sistemas existentes?",
    answer:
      "Sí. En StockPro, por ejemplo, apliqué un patrón de migración progresiva (Strangler Fig) para modernizar sin detener la operación del negocio.",
  },
  {
    question: "¿Puedes integrar servicios externos (pagos, SUNAT, WhatsApp)?",
    answer:
      "Sí. Ya lo hice en producción: facturación electrónica SUNAT-compliant (FactuSaaS), pagos con Mercado Pago (SDK Multitenant) y notificaciones vía WhatsApp API (Doña Nella).",
  },
  {
    question: "¿Puedes ayudar a definir la arquitectura, no solo programar?",
    answer:
      "Sí. Antes de escribir código entiendo el problema y el negocio, y propongo la arquitectura y las decisiones técnicas — no solo ejecuto un ticket.",
  },
  {
    question: "¿Trabajas remoto?",
    answer: "Sí, remoto, desde Perú.",
  },
  {
    question: "¿Cómo empezamos?",
    answer:
      "Solicita el diagnóstico inicial por WhatsApp. Cuéntame la empresa, el proceso que quieres mejorar, el problema y el sistema actual si existe. Con ese contexto podremos evaluar el alcance con mayor claridad.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="px-6 py-20">
      <motion.div {...getScrollReveal()} className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <Eyebrow icon="💬">FAQ</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-bold text-fg sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-8">
            <FAQAccordion items={FAQS} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
