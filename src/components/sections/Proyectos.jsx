import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Badge from "../ui/Badge";
import Eyebrow from "../ui/Eyebrow";
import { getScrollReveal } from "../../hooks/useScrollReveal";

// SEC-03 — Proyectos Destacados. Los primeros 4 tienen Copy Directriz
// literal de la Sección C del DOC-A. Los siguientes 3 son proyectos reales
// aportados por el usuario después de publicado el DOC-A (confirmados como
// sus trabajos más recientes) — mismo formato Problema/Solución/Resultado.
// Con más proyectos por venir, se muestran los primeros 4 y el resto queda
// tras "Ver más" para no alargar la sección indefinidamente.
// CTA secundario "Ver más en GitHub" 🔴 pendiente (URL no confirmada en el
// DOC-A) — se omite en vez de enlazar a una URL inventada.

const PROJECTS = [
  {
    name: "StockPro",
    problem: "Gestión de stock sin trazabilidad entre bodegas.",
    solution:
      "Backend NestJS/Prisma con patrón Strangler Fig para migración gradual.",
    result: "108 tests unitarios + 17 smoke tests pasando.",
    stack: ["NestJS", "Prisma", "Multi-tenant"],
  },
  {
    name: "FactuSaaS",
    problem: "Firma digital de comprobantes electrónicos.",
    solution:
      "Generación de certificados .pfx + colas con BullMQ/Redis.",
    result: "Pipeline de facturación SUNAT-compliant funcional de punta a punta.",
    stack: ["BullMQ", "Redis", "SUNAT"],
  },
  {
    name: "EduSaaS / EduPerú",
    problem: "SaaS educativo multi-tenant K-12 con cumplimiento SIAGIE/RENIEC.",
    solution: "22 rutas protegidas, CRUD completo para 6 roles de usuario.",
    result: "Frontend completo entregado en 6 sprints.",
    stack: ["Next.js", "RBAC", "SIAGIE"],
  },
  {
    name: "SDK Multitenant Mercado Pago",
    problem: "Integración de pagos digitales para múltiples tenants.",
    solution:
      "Autenticación JWT dual (API-Key + Bearer), panel Super Admin.",
    result: "4 fases completadas, listo para testing E2E.",
    stack: ["JWT", "Mercado Pago", "Multi-tenant"],
  },
  {
    name: "POS Minimarket",
    problem: "Ventas, inventario y caja de un minimarket en sistemas separados.",
    solution:
      "SAAS de punto de venta con Fastify/PostgreSQL, auth JWT dual, panel Super Admin e integración directa con FactuSaaS para envío a SUNAT.",
    result: "Sistema POS unificado que centraliza ventas, inventario y caja en una sola plataforma.",
    stack: ["Node", "Fastify", "AWS", "React", "Tailwind", "TanStack", "Zod"],
  },
  {
    name: "Sistema de Encuestas",
    problem: "Necesidad de crear y distribuir encuestas online con resultados accesibles al instante.",
    solution:
      "Plataforma full-stack con NestJS/PostgreSQL, formularios validados con Zod y notificaciones por correo.",
    result: "Encuestas en línea para diversos objetivos, con resultados en tiempo real.",
    stack: ["NestJS", "TanStack", "Zod"],
  },
  {
    name: "Doña Nella",
    problem: "Negocio de pedidos dependiente de apps de delivery de terceros y sus comisiones.",
    solution:
      "Plataforma propia de pedidos con NestJS/PostgreSQL e integración de WhatsApp API para notificaciones.",
    result: "Pedidos y delivery propios 24/7, sin comisiones ni dependencia de terceros.",
    stack: ["Node", "NestJS", "Firebase", "JWT"],
  },
];

const FEATURED_COUNT = 4;

export default function Proyectos() {
  const reveal = getScrollReveal();
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, FEATURED_COUNT);
  const hiddenCount = PROJECTS.length - FEATURED_COUNT;

  return (
    <section id="proyectos" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div {...reveal}>
          <Eyebrow icon="💼">Proyectos</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-bold text-fg sm:text-4xl">
            Sistemas reales, no solo prototipos
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-fg-muted">
            Cada proyecto resuelve una regla de negocio que un template no
            puede resolver.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.name}
              {...getScrollReveal(index * 0.08)}
              className="flex flex-col gap-4 rounded-2xl border border-fg-muted/15 bg-surface p-6"
            >
              <h3 className="font-heading text-xl font-semibold text-fg">
                {project.name}
              </h3>
              <dl className="flex flex-col gap-2 text-sm">
                <div>
                  <dt className="font-medium text-fg-muted">Problema</dt>
                  <dd className="text-fg">{project.problem}</dd>
                </div>
                <div>
                  <dt className="font-medium text-fg-muted">Solución</dt>
                  <dd className="text-fg">{project.solution}</dd>
                </div>
                <div>
                  <dt className="font-medium text-fg-muted">Resultado</dt>
                  <dd className="text-fg">{project.result}</dd>
                </div>
              </dl>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {project.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {hiddenCount > 0 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
              className="flex items-center gap-2 rounded-full border border-accent/30 px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
            >
              {showAll ? "Ver menos" : `Ver ${hiddenCount} proyectos más`}
              <ChevronDown
                size={18}
                aria-hidden="true"
                className={`transition-transform duration-200 ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
