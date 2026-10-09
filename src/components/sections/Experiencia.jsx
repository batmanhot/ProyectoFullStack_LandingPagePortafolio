import { motion } from "framer-motion";
import { Activity, Database, Network, UsersRound } from "lucide-react";
import Eyebrow from "../ui/Eyebrow";
import { getScrollReveal } from "../../hooks/useScrollReveal";
import { LINKEDIN_URL } from "../../lib/conversion/social";
import { trackEvent } from "../../hooks/useAnalytics";

// SEC-NEW — Experiencia (Sección 16 del spec V2). Timeline extraída de la
// cronología ya contada en prosa en Sobre Mí (SEC-02) — mismos hechos, solo
// en formato visual. Sin fechas inventadas: los años exactos de Consorcio
// Minero Horizonte no están confirmados, así que se muestra la duración
// ("~12 años") en vez de un rango de calendario.
// Contenedor externo alineado a max-w-5xl (antes max-w-3xl, Sección 25 del
// spec V2.1 — consistencia de grid editorial entre secciones); el timeline
// en sí se mantiene en una columna de lectura angosta (max-w-2xl) para no
// alargar demasiado cada línea de texto.

const TRAYECTORIA = [
  {
    period: "2008 — 2020",
    org: "Consorcio Minero Horizonte",
    role: "De soporte técnico a análisis funcional, datos y desarrollo",
    detail:
      "Participación en sistemas de producción minera, recursos humanos, logística, seguridad, ERP e integraciones.",
    evidence:
      "Visual FoxPro 9, SQL Server, SAP, servidores de datos, archivos y correo; conectividad satelital, fibra óptica de Claro y alertas operativas.",
  },
  {
    period: "2020 — 2025",
    org: "Sudamericana de Inversiones",
    role: "Supervisión de proyectos, infraestructura, datos y aplicaciones",
    detail:
      "Análisis, diseño, implementación y soporte de soluciones empresariales para operaciones y logística.",
    evidence:
      "Dashboards Power BI, modelado de procesos, desarrollo web, infraestructura y soporte especializado.",
  },
  {
    period: "2024 — Actualidad",
    org: "Proyectos propios · DevStudio Perú",
    role: "Desarrollo Full Stack y arquitectura de soluciones SaaS",
    detail:
      "Construcción end-to-end de soluciones con foco en integraciones, cumplimiento regulatorio y arquitectura multi-tenant.",
    evidence: "Next.js, NestJS, integraciones, multi-tenancy y casos de estudio publicados.",
    caseHref: "#proyectos",
  },
];

const HITOS = [
  {
    title: "Control operativo en tiempo real",
    detail:
      "Integración y monitoreo diario de biometría y tarjetas de proximidad con RRHH, SSOMA, Protección Interna y Mina; control de asistencia, alertas por turno y seguimiento en tiempo real.",
    Icon: Activity,
  },
  {
    title: "Automatización hacia SAP",
    detail:
      "Automatización de la transferencia de valorizaciones mineras hacia SAP S/4HANA para eliminar la carga manual de datos en ese proceso.",
    Icon: Network,
  },
  {
    title: "Rendimiento de datos",
    detail:
      "Optimización de índices, procedimientos almacenados, vistas y otros objetos SQL Server, logrando hasta 70 % más velocidad en procesos de producción.",
    Icon: Database,
  },
  {
    title: "Gestión de personal",
    detail:
      "Automatización de tareos y control de asistencia, con un ahorro reportado de 30 % de horas hombre en un procedimiento operativo.",
    Icon: UsersRound,
  },
];

const EVOLUCION = [
  "Operación crítica",
  "Procesos empresariales",
  "Infraestructura e integraciones",
  "Desarrollo de software",
  "Arquitectura de soluciones",
];

export default function Experiencia() {
  const reveal = getScrollReveal();

  return (
    <section id="experiencia" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <motion.div {...reveal}>
            <Eyebrow icon="📈">Trayectoria profesional</Eyebrow>
            <h2 className="mt-4 font-heading text-3xl font-bold text-fg sm:text-4xl">
              Más de 17 años conectando operación, infraestructura y software crítico
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-fg-muted">
              <p>
                Mi trayectoria comenzó en 2008 dentro de una operación minera donde la tecnología debía responder incluso en condiciones complejas y alejadas. Empecé cerca del usuario y de la operación, resolviendo incidencias y entendiendo cómo cada proceso impactaba en producción, seguridad, logística y gestión de personas.
              </p>
              <p>
                Durante más de 12 años en Consorcio Minero Horizonte evolucioné desde soporte técnico hasta asumir responsabilidades de análisis funcional, análisis de procesos, bases de datos y desarrollo de software. Participé en sistemas de producción minera, recursos humanos, logística y seguridad, entendiendo sus reglas, flujos, usuarios, integraciones y necesidades de control. Ese trabajo no ocurría de forma aislada: formé parte de un entorno que integraba software desarrollado con Visual FoxPro 9, bases de datos SQL Server y sistemas SAP, conectados con múltiples servidores de archivos, datos y correo. La infraestructura evolucionó desde enlaces satelitales hasta conexiones dedicadas de fibra óptica de Claro, permitiendo que los sistemas, reportes y alertas por correo acompañaran la operación.
              </p>
              <p>
                Además, una parte clave de mi trabajo diario fue el monitoreo de soluciones que conectaban a las personas con los sistemas de la operación. Participé en la implementación, integración y seguimiento de lectores biométricos y tarjetas de proximidad instalados en campamento, bocaminas, comedores, auditorios y salas de reunión. Estos dispositivos se integraban con los sistemas de Recursos Humanos, SSOMA, Protección Interna y Mina para controlar asistencia, acceso, atención en comedores y horas de capacitación en seguridad. Desde 2020, en Sudamericana de Inversiones, amplío esa experiencia supervisando proyectos, infraestructura, datos y desarrollo de aplicaciones. Hoy combino esa visión de operación crítica con arquitectura, desarrollo Full Stack e integraciones para transformar procesos complejos en soluciones confiables y preparadas para producción.
              </p>
            </div>
          </motion.div>
        </div>

        <ol className="mt-12 max-w-3xl space-y-6 border-l border-accent/20 pl-6">
          {TRAYECTORIA.map((item, index) => (
            <motion.li
              key={item.period}
              {...getScrollReveal(index * 0.08)}
              className="relative rounded-2xl border border-fg-muted/15 bg-surface p-6"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[1.65rem] top-7 h-3 w-3 rounded-full border-2 border-accent bg-bg"
              />
              <p className="text-xs font-medium uppercase tracking-wide text-accent">
                {item.period}
              </p>
              <h3 className="mt-2 font-heading text-lg font-semibold text-fg">
                {item.org}
              </h3>
              <p className="mt-1 font-medium text-fg-muted">{item.role}</p>
              <p className="mt-3 text-sm text-fg-muted">{item.detail}</p>
              <p className="mt-3 text-xs leading-relaxed text-accent/90">
                {item.evidence}
              </p>
              {item.caseHref && (
                <a
                  href={item.caseHref}
                  onClick={() => trackEvent("case_study_open", { case_name: "trayectoria_full_stack" })}
                  className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-accent underline-offset-4 hover:underline"
                >
                  Ver casos de estudio →
                </a>
              )}
            </motion.li>
          ))}
        </ol>

        <div className="mt-14">
          <h3 className="font-heading text-xl font-semibold text-fg">Hitos de impacto</h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HITOS.map(({ title, detail, Icon }, index) => (
              <motion.article
                key={title}
                {...getScrollReveal(index * 0.06)}
                className="rounded-2xl border border-accent/15 bg-surface p-5"
              >
                <Icon size={22} aria-hidden="true" className="text-accent" />
                <h4 className="mt-4 font-heading text-base font-semibold text-fg">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{detail}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-2" aria-label="Evolución profesional">
          {EVOLUCION.map((step, index) => (
            <span key={step} className="flex items-center gap-2">
              <span className="rounded-full border border-accent/25 bg-surface px-3 py-1.5 text-sm font-medium text-fg-muted">
                {step}
              </span>
              {index < EVOLUCION.length - 1 && (
                <span aria-hidden="true" className="text-accent/40">→</span>
              )}
            </span>
          ))}
        </div>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="me noopener noreferrer"
          onClick={() => trackEvent("linkedin_click", { location: "experience" })}
          className="mt-8 inline-flex min-h-11 items-center text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          Ver trayectoria completa en LinkedIn →
        </a>
      </div>
    </section>
  );
}
