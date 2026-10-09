import { motion } from "framer-motion";
import { Activity, Database, GitBranch, Network, UsersRound } from "lucide-react";
import Eyebrow from "../ui/Eyebrow";
import { getScrollReveal } from "../../hooks/useScrollReveal";
import { LINKEDIN_URL } from "../../lib/conversion/social";
import { trackEvent } from "../../hooks/useAnalytics";

const HITOS_MINEROS = [
  { title: "Control operativo en tiempo real", detail: "Integración y monitoreo de biometría y tarjetas de proximidad con RRHH, SSOMA, Protección Interna y Mina; control de asistencia, accesos, alertas por turno y seguimiento en tiempo real.", Icon: Activity },
  { title: "Automatización hacia SAP", detail: "Transferencia automatizada de valorizaciones mineras hacia SAP S/4HANA, eliminando la carga manual de datos en ese proceso.", Icon: Network },
  { title: "Rendimiento de datos", detail: "Optimización de índices, procedimientos almacenados, vistas y otros objetos SQL Server, logrando hasta 70 % más velocidad en procesos de producción.", Icon: Database },
  { title: "Gestión de personal", detail: "Automatización de tareos y control de asistencia, con un ahorro reportado de 30 % de horas hombre en un procedimiento operativo.", Icon: UsersRound },
  { title: "Procesos y sistemas", detail: "Participación en producción minera, topografía, RRHH, logística, seguridad, control de personal e integraciones ERP.", Icon: GitBranch },
];

const CONTINUACION = [
  {
    period: "2020 — 2025",
    org: "Sudamericana de Inversiones",
    detail: "Supervisión de proyectos, infraestructura, datos y desarrollo de aplicaciones. Análisis, diseño, implementación y soporte de soluciones empresariales para operaciones y logística.",
  },
  {
    period: "2024 — Actualidad",
    org: "Proyectos propios · DevStudio Perú",
    detail: "Desarrollo Full Stack y arquitectura de soluciones SaaS con foco en integraciones, cumplimiento regulatorio y arquitectura multi-tenant.",
    caseHref: "#proyectos",
  },
];

const EVOLUCION = [
  "Operación crítica",
  "Procesos empresariales",
  "Infraestructura e integraciones",
  "Desarrollo de software",
  "Arquitectura de soluciones",
];

export default function Trayectoria() {
  const reveal = getScrollReveal();

  return (
    <section id="experiencia" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div {...reveal} className="max-w-2xl">
          <Eyebrow icon="📈">Trayectoria profesional</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-bold text-fg sm:text-4xl">
            La experiencia que me enseñó a diseñar software para operaciones críticas
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-fg-muted">
            <p>Mi carrera comenzó en 2008 en Consorcio Minero Horizonte, dentro de una operación donde la tecnología debía responder sin margen de error. Empecé cerca del usuario final, resolviendo incidencias y entendiendo cómo un problema técnico podía afectar producción, seguridad, logística, asistencia y gestión de personas.</p>
            <p>Durante más de 12 años evolucioné desde soporte técnico hasta asumir responsabilidades de análisis funcional, análisis de procesos, bases de datos y desarrollo de software. Participé en la mejora y evolución de sistemas de producción minera, recursos humanos, logística, seguridad, ERP e integraciones. Esa experiencia me enseñó que una solución no vale por la tecnología que utiliza, sino por su capacidad de sostener una operación real.</p>
            <p>Mi trabajo también abarcó el entorno tecnológico que hacía posible esa operación: aplicaciones desarrolladas con Visual FoxPro 9, bases de datos SQL Server, integración con SAP, servidores de archivos, datos y correo, además de conectividad que evolucionó desde enlaces satelitales hasta fibra óptica dedicada. Los sistemas reportaban información y alertas por correo para que las áreas responsables pudieran actuar a tiempo.</p>
            <p>Una parte clave de mi día a día fue el monitoreo de soluciones de control operativo. Participé en la integración de lectores biométricos y tarjetas de proximidad con los sistemas de RRHH, SSOMA, Protección Interna y Mina. Esto permitió controlar asistencia, accesos, turnos, atención en comedores y horas de capacitación en seguridad en tiempo real.</p>
            <p>Desde 2020, en Sudamericana de Inversiones, amplío esa experiencia supervisando proyectos, infraestructura, datos y desarrollo de aplicaciones. Hoy aplico esa visión de operación crítica para diseñar soluciones Full Stack, integraciones y arquitecturas preparadas para producción.</p>
          </div>
        </motion.div>

        <motion.article {...getScrollReveal(0.06)} className="mt-12 rounded-3xl border border-accent/30 bg-surface p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-wide text-accent">2008 — 2020</p>
          <h3 className="mt-2 font-heading text-2xl font-semibold text-fg">Consorcio Minero Horizonte</h3>
          <p className="mt-2 text-lg text-fg-muted">De soporte técnico a análisis funcional, datos y desarrollo</p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HITOS_MINEROS.map(({ title, detail, Icon }, index) => (
              <motion.article key={title} {...getScrollReveal(index * 0.05)} className="rounded-2xl border border-fg-muted/15 bg-bg/60 p-5">
                <Icon size={22} aria-hidden="true" className="text-accent" />
                <h4 className="mt-4 font-heading text-base font-semibold text-fg">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{detail}</p>
              </motion.article>
            ))}
          </div>
        </motion.article>

        <div className="mt-12 max-w-3xl">
          <h3 className="font-heading text-xl font-semibold text-fg">Continuación de la trayectoria</h3>
          <ol className="mt-6 space-y-6 border-l border-accent/20 pl-6">
            {CONTINUACION.map((item, index) => (
              <motion.li key={item.period} {...getScrollReveal(index * 0.08)} className="relative rounded-2xl border border-fg-muted/15 bg-surface p-6">
                <span aria-hidden="true" className="absolute -left-[1.65rem] top-7 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
                <p className="text-xs font-medium uppercase tracking-wide text-accent">{item.period}</p>
                <h4 className="mt-2 font-heading text-lg font-semibold text-fg">{item.org}</h4>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{item.detail}</p>
                {item.caseHref && (
                  <a href={item.caseHref} onClick={() => trackEvent("case_study_open", { case_name: "trayectoria_full_stack" })} className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-accent underline-offset-4 hover:underline">
                    Ver casos de estudio →
                  </a>
                )}
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-2" aria-label="Evolución profesional">
          {EVOLUCION.map((step, index) => (
            <span key={step} className="flex items-center gap-2">
              <span className="rounded-full border border-accent/25 bg-surface px-3 py-1.5 text-sm font-medium text-fg-muted">{step}</span>
              {index < EVOLUCION.length - 1 && <span aria-hidden="true" className="text-accent/40">→</span>}
            </span>
          ))}
        </div>

        <a href={LINKEDIN_URL} target="_blank" rel="me noopener noreferrer" onClick={() => trackEvent("linkedin_click", { location: "experience" })} className="mt-8 inline-flex min-h-11 items-center text-sm font-medium text-accent underline-offset-4 hover:underline">
          Ver trayectoria completa en LinkedIn →
        </a>
      </div>
    </section>
  );
}
