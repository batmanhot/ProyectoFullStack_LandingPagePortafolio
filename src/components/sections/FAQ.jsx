import { motion } from "framer-motion";
import FAQAccordion from "../ui/FAQAccordion";
import Eyebrow from "../ui/Eyebrow";
import { getScrollReveal } from "../../hooks/useScrollReveal";

// SEC-06 — FAQ / Objeciones. Sin Ficha CORE en el DOC-A: preguntas
// construidas a partir de las "Objeciones típicas" de la Ficha de Buyer
// Persona (Sección A del DOC-A). Sin precios ni plazos inventados.

const FAQS = [
  {
    question: "¿Cómo sé que esto va a funcionar en producción y no solo en la demo?",
    answer:
      "Porque el trabajo no termina en el mockup: cada sistema que construyo pasa por pruebas (unitarias y smoke tests) y se valida contra las reglas reales del negocio antes de considerarse listo.",
  },
  {
    question: "¿Entiendes las reglas de SUNAT o la regulación local?",
    answer:
      "Sí. He construido sistemas de facturación electrónica SUNAT-compliant y plataformas educativas con cumplimiento SIAGIE/RENIEC — la regulación peruana es parte del diseño, no un parche al final.",
  },
  {
    question: "¿Puedes trabajar con nuestro stack y estándares de código existentes?",
    answer:
      "Sí. He trabajado como refuerzo técnico dentro del stack de una agencia (DevStudio Perú) sin necesitar supervisión constante.",
  },
  {
    question: "¿Cómo empezamos?",
    answer:
      "Escríbeme por WhatsApp contándome qué necesitas. Te respondo directamente, sin formularios ni intermediarios.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="px-6 py-20">
      <motion.div {...getScrollReveal()} className="mx-auto max-w-2xl">
        <Eyebrow icon="💬">FAQ</Eyebrow>
        <h2 className="mt-4 font-heading text-3xl font-bold text-fg sm:text-4xl">
          Preguntas frecuentes
        </h2>
        <div className="mt-8">
          <FAQAccordion items={FAQS} />
        </div>
      </motion.div>
    </section>
  );
}
