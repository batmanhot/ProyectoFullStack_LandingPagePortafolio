import { motion } from "framer-motion";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";
import { getScrollReveal } from "../../hooks/useScrollReveal";
import { buildDiagnosticWhatsAppLink } from "../../lib/conversion/whatsapp";
import { trackEvent } from "../../hooks/useAnalytics";

// SEC-03 — Proyectos / Casos de estudio. Reestructurado según las Secciones
// 16 y 19 del spec V2.1: composición editorial (1 caso principal grande + 2
// destacados + secundarios en formato compacto) en vez del grid uniforme
// anterior, donde las 7 cards pesaban visualmente igual. Mismo copy y mismos
// datos reales que antes (Problema/Solución/Resultado, Sección 18 del spec);
// solo cambia la jerarquía visual. Formato de card simple (sin "Desafío" ni
// "Decisión arquitectónica" por card, y sin páginas de detalle por
// proyecto) — decisión explícita del usuario reconfirmada para el V2.1.

const PRINCIPAL = {
  name: "StockPro",
  category: "SaaS · Inventario · Multi-tenant",
  problem: "La operación de inventario necesitaba trazabilidad entre bodegas sin interrumpir el sistema existente.",
  solution:
    "Backend NestJS/Prisma y migración gradual con patrón Strangler Fig, diseñado para convivir con la operación actual.",
  impact: "Reduce el riesgo de una migración total y prepara la operación para crecer por etapas.",
  result: "108 tests unitarios y 17 smoke tests como evidencia de calidad técnica.",
  stack: ["NestJS", "Prisma", "Multi-tenant"],
};

const DESTACADOS = [
  {
    name: "FactuSaaS",
    category: "SaaS · Facturación electrónica · SUNAT",
    problem: "La facturación electrónica requería una emisión confiable y compatible con las reglas de SUNAT.",
    solution: "Generación de certificados .pfx + colas con BullMQ/Redis.",
    impact: "Automatiza un proceso crítico y evita depender de tareas manuales para emitir comprobantes.",
    result: "Pipeline de facturación compatible con SUNAT, funcional de punta a punta.",
    stack: ["BullMQ", "Redis", "SUNAT"],
  },
  {
    name: "EduSaaS / EduPerú",
    category: "SaaS · Educación · Multi-tenant",
    problem: "La gestión educativa necesitaba una plataforma multi-tenant con reglas de SIAGIE y RENIEC.",
    solution: "22 rutas protegidas y CRUD completo para 6 roles de usuario.",
    impact: "Centraliza procesos y permisos por institución dentro de una base preparada para múltiples clientes.",
    result: "Frontend completo entregado en 6 sprints.",
    stack: ["Next.js", "RBAC", "SIAGIE"],
  },
];

// Secundarios: mismo contenido real que antes, condensado a una línea de
// resultado en vez del trío Problema/Solución/Resultado completo — evita
// que 4 proyectos más compitan visualmente con el principal y los 2
// destacados de arriba.
const SECUNDARIOS = [
  {
    name: "SDK Multitenant Mercado Pago",
    category: "SDK · Pagos digitales · Multi-tenant",
    result: "4 fases completadas, listo para testing E2E.",
    stack: ["JWT", "Mercado Pago"],
  },
  {
    name: "POS Minimarket",
    category: "SaaS · Punto de venta · Retail",
    result: "Sistema POS unificado: ventas, inventario y caja en una sola plataforma.",
    stack: ["Fastify", "AWS"],
  },
  {
    name: "Sistema de Encuestas",
    category: "Plataforma · Encuestas · Full Stack",
    result: "Encuestas en línea con resultados accesibles en tiempo real.",
    stack: ["NestJS", "Zod"],
  },
  {
    name: "Doña Nella",
    category: "Plataforma · Pedidos · Delivery propio",
    result: "Pedidos y delivery propios 24/7, sin comisiones de terceros.",
    stack: ["NestJS", "WhatsApp API"],
  },
];

function CaseCard({ project, large = false, delay = 0 }) {
  return (
    <motion.article
      {...getScrollReveal(delay)}
      className={`flex flex-col gap-4 rounded-2xl border bg-surface ${
        large
          ? "border-accent/30 p-8 lg:p-10"
          : "border-fg-muted/15 p-6"
      }`}
    >
      <div>
        <h3
          className={`font-heading font-semibold text-fg ${
            large ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {project.name}
        </h3>
        <p className="mt-1 text-xs uppercase tracking-wide text-accent/80">
          {project.category}
        </p>
      </div>
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
          <dt className="font-medium text-fg-muted">Impacto para la operación</dt>
          <dd className="text-fg">{project.impact}</dd>
        </div>
        <div>
          <dt className="font-medium text-fg-muted">Evidencia</dt>
          <dd className="text-fg">{project.result}</dd>
        </div>
      </dl>
      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </motion.article>
  );
}

export default function Proyectos() {
  const reveal = getScrollReveal();

  return (
    <section id="proyectos" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div {...reveal}>
          <Eyebrow icon="💼">Casos de estudio</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-bold text-fg sm:text-4xl">
            Sistemas reales, no solo prototipos
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-fg-muted">
            Casos centrados en reglas de negocio, continuidad operativa y
            calidad técnica; no solo en tecnología o pantallas.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <CaseCard project={PRINCIPAL} large />
          <div className="flex flex-col gap-6">
            {DESTACADOS.map((project, index) => (
              <CaseCard key={project.name} project={project} delay={index * 0.08} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <p className="text-xs uppercase tracking-wide text-fg-muted">
            Otros proyectos
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {SECUNDARIOS.map((project, index) => (
              <motion.div
                key={project.name}
                {...getScrollReveal(index * 0.05)}
                className="flex flex-col gap-2 rounded-xl border border-fg-muted/10 bg-surface/60 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <div>
                  <p className="font-heading text-sm font-semibold text-fg">
                    {project.name}
                  </p>
                  <p className="text-xs text-fg-muted">{project.category}</p>
                  <p className="mt-1 text-xs text-fg-muted sm:hidden">
                    {project.result}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          {...getScrollReveal(0.12)}
          className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-accent/25 bg-surface p-6 sm:flex-row sm:items-center"
        >
          <div>
            <h3 className="font-heading text-xl font-semibold text-fg">
              ¿Tu operación se parece a alguno de estos casos?
            </h3>
            <p className="mt-2 max-w-2xl text-fg-muted">
              Cuéntame el proceso, la integración o el sistema que hoy limita a
              tu equipo. Revisaremos cuál debería ser el primer paso.
            </p>
          </div>
          <Button
            href={buildDiagnosticWhatsAppLink("cases")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "cases", intent: "diagnostic" })}
          >
            Evaluar mi caso →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
