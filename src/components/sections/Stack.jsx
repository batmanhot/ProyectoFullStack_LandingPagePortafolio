import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiNestjs,
  SiPrisma,
  SiRedis,
  SiPostgresql,
  SiPython,
  SiDjango,
  SiFastify,
  SiDocker,
  SiKubernetes,
  SiMysql,
  SiGithubcopilot,
  SiCursor,
  SiClaude,
} from "react-icons/si";
import { BarChart3, Database, Server } from "lucide-react";
import Eyebrow from "../ui/Eyebrow";
import CertGroup from "../ui/CertGroup";
import CertLogoStrip from "../ui/CertLogoStrip";
import { getScrollReveal } from "../../hooks/useScrollReveal";

// SEC-04 — Stack / Cómo Trabajo. Sin Ficha CORE en el DOC-A: copy borrador,
// tecnologías tomadas de las que ya aparecen citadas en Proyectos (Sección C)
// y Arquitectura Funcional (Sección H) del DOC-A. Grid de iconos: patrón
// tomado de henriquesousadev.vercel.app (referencia de estructura), con la
// paleta ya aprobada (acento cian, no multicolor). Los "Diferenciadores" se
// movieron a Prueba Social (SEC-05) — no encajaban entre iconos técnicos.

const STACK = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "NestJS", Icon: SiNestjs },
  { name: "Fastify", Icon: SiFastify },
  { name: "Python", Icon: SiPython },
  { name: "Django", Icon: SiDjango },
  { name: "Prisma", Icon: SiPrisma },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MySQL", Icon: SiMysql },
  // Oracle y SQL Server no tienen ícono de marca en la librería (removidos
  // por disputas de trademark, igual que OpenAI) — ícono genérico de respaldo.
  { name: "Oracle", Icon: Database },
  { name: "SQL Server", Icon: Server },
  { name: "Redis", Icon: SiRedis },
  { name: "Docker", Icon: SiDocker },
  { name: "Kubernetes", Icon: SiKubernetes },
  // Power BI tampoco tiene ícono de marca disponible.
  { name: "Power BI", Icon: BarChart3 },
];

// Herramientas de IA que uso realmente en el flujo de trabajo (confirmado
// por el usuario): asistentes de código, LLMs para análisis de datos e
// integraciones de IA en los productos que construyo.
const AI_STACK = [
  { name: "GitHub Copilot", Icon: SiGithubcopilot },
  { name: "Cursor", Icon: SiCursor },
  { name: "Claude", Icon: SiClaude },
];

// Certificaciones reales, deduplicadas de los certificados aportados
// (LinkedIn + PDFs individuales) y agrupadas por área.
const CERT_GROUPS = [
  {
    icon: "📋",
    category: "Gestión de Procesos & Ágil",
    // Orden cronológico (más reciente primero), tal como lo definió el
    // usuario — reemplaza el orden anterior, que mezclaba las etapas.
    certs: [
      { name: "Analista de Procesos", issuer: "WE Educación Ejecutiva", year: "Septiembre 2022" },
      { name: "Lean Six Sigma con Minitab", issuer: "WE Educación Ejecutiva", year: "Septiembre 2022" },
      { name: "Gestión de Procesos", issuer: "WE Educación Ejecutiva", year: "Junio 2022" },
      { name: "Modelamiento de Procesos", issuer: "WE Educación Ejecutiva", year: "Abril 2022" },
      { name: "Programa de Certificación Internacional en Scrum", issuer: "SDC Learning", year: "Febrero 2021" },
      { name: "Scrum Developer Professional Certificate (SDPC)", issuer: "CertiProf", year: "Enero 2021" },
      { name: "Scrum Master Professional Certificate (SMPC)", issuer: "CertiProf", year: "Enero 2021" },
      { name: "Scrum Foundation Professional Certificate (SFPC)", issuer: "CertiProf", year: "Diciembre 2020" },
    ],
  },
  {
    icon: "💻",
    category: "Desarrollo Web",
    // Orden cronológico (más reciente primero), tal como lo definió el
    // usuario — reemplaza el orden anterior, que mezclaba las etapas.
    certs: [
      { name: "NodeJS de Cero a Experto", issuer: "Udemy", year: "Julio 2026" },
      { name: "Ingeniería de Prompts y Automatización IA", issuer: "Udemy", year: "Julio 2026" },
      { name: "Node Bootcamp", issuer: "Udemy", year: "Diciembre 2025" },
      { name: "JavaScript Moderno", issuer: "Udemy", year: "Septiembre 2025" },
      { name: "Programación JavaScript", issuer: "Cisco", year: "Marzo 2025" },
      { name: "Desarrollo Web Full Stack con Python", issuer: "TECSUP", year: "Julio 2024" },
      { name: "Especialista en Desarrollo de Aplicaciones con PHP 7.0, Laravel y PostgreSQL", issuer: "CETI", year: "Enero 2022" },
    ],
  },
  {
    icon: "☁️",
    category: "Datos & Cloud",
    // Orden cronológico (más reciente primero). Oracle 21c, Big Data
    // Engineer/Architect y el diplomado BI de BSG Institute se movieron
    // aquí desde "Desarrollo Web" — encajan mejor temáticamente.
    certs: [
      { name: "Administración y Desarrollo de Base de Datos Oracle 21c", issuer: "CETI", year: "Abril 2025" },
      { name: "Google Data Studio", issuer: "SDC Learning", year: "Diciembre 2020" },
      { name: "Programa de Especialización en Power BI", issuer: "SDC Learning", year: "Diciembre 2020" },
      { name: "Administración de Infraestructura de Base de Datos SQL Server 2016 (20764C)", issuer: "educaciónIT", year: "Noviembre 2020" },
      { name: "Azure Boards", issuer: "SDC Learning", year: "Noviembre 2020" },
      { name: "Microsoft Azure Fundamentals (AZ-900T01)", issuer: "Entrenamiento Certero", year: "Septiembre 2020" },
      { name: "Big Data Engineer y Big Data Architect Professional", issuer: "Big Data Academy Perú", year: "Agosto 2020" },
      { name: "Diplomado Business Intelligence con SQL Server 2014", issuer: "BSG Institute", year: "Octubre 2016" },
    ],
  },
];

// Metodología AI-First de 8 etapas, adaptada a la práctica real del usuario:
// IA como copiloto de desarrollo y análisis, e integrada como feature vía
// APIs de terceros — no entrenamiento de modelos propios ni MLOps, eso no
// es parte de la oferta actual (confirmado explícitamente por el usuario).
const PROCESO = [
  {
    step: "1. Ideación y descubrimiento",
    detail: "Identifico necesidades del negocio y evalúo dónde la IA puede automatizar o agilizar un proceso, apoyado en LLMs para acelerar el análisis de datos.",
  },
  {
    step: "2. Definición de requerimientos",
    detail: "Defino qué se resuelve con IA (vía APIs de LLMs) y qué no la necesita, evitando integrarla solo por moda.",
  },
  {
    step: "3. Arquitectura y diseño",
    detail: "Diseño el sistema para que soporte producción, no solo la demo, explorando alternativas de arquitectura con asistentes de IA antes de comprometerme a una.",
  },
  {
    step: "4. Desarrollo e integración",
    detail: "Construyo con asistentes de código (GitHub Copilot, Cursor, Claude) e integro APIs de IA de terceros cuando el producto lo requiere.",
  },
  {
    step: "5. Validación y control de calidad",
    detail: "Reviso cada sugerencia de IA antes de aceptarla: nada se integra al sistema sin pruebas y revisión humana.",
  },
  {
    step: "6. Pruebas de software",
    detail: "Pruebas unitarias y smoke tests, más revisión de que las respuestas o automatizaciones con IA sean consistentes con las reglas de negocio.",
  },
  {
    step: "7. Despliegue y monitoreo",
    detail: "Despliego el sistema y monitoreo su comportamiento en producción, incluyendo las integraciones de IA, ajustando según el uso real.",
  },
  {
    step: "8. Evolución continua",
    detail: "El sistema evoluciona con retroalimentación real del negocio, ajustando prompts, flujos e integraciones de IA a medida que cambian las necesidades.",
  },
];

export default function Stack() {
  const reveal = getScrollReveal();

  return (
    <section id="stack" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div {...reveal}>
          <Eyebrow icon="🛠️">Stack</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-bold text-fg sm:text-4xl">
            Stack
          </h2>
        </motion.div>

        <motion.div
          {...getScrollReveal(0.05)}
          className="mt-8 grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-8"
        >
          {STACK.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 rounded-xl border border-accent/15 bg-surface p-3"
              title={name}
            >
              <Icon size={28} className="text-accent" aria-hidden="true" />
              <span className="text-center text-xs text-fg-muted">{name}</span>
            </div>
          ))}
        </motion.div>

        <motion.div {...getScrollReveal(0.07)} className="mt-4">
          <p className="text-xs uppercase tracking-wide text-fg-muted">
            Herramientas de IA en el flujo de trabajo
          </p>
          <div className="mt-3 grid grid-cols-3 gap-3 max-w-sm">
            {AI_STACK.map(({ name, Icon }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-2 rounded-xl border border-accent/15 bg-surface p-3"
                title={name}
              >
                <Icon size={28} className="text-accent" aria-hidden="true" />
                <span className="text-center text-xs text-fg-muted">{name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...getScrollReveal(0.1)} className="mt-12">
          <h3 className="font-heading text-xl font-semibold text-fg">Certificaciones</h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {CERT_GROUPS.map((group) => (
              <CertGroup key={group.category} {...group} />
            ))}
          </div>
          <CertLogoStrip />
        </motion.div>

        <motion.div {...getScrollReveal(0.2)} className="mt-12">
          <h3 className="font-heading text-xl font-semibold text-fg">Cómo trabajo</h3>
          <ol className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESO.map((item) => (
              <li key={item.step} className="rounded-xl bg-surface/60 p-4">
                <p className="font-heading font-semibold text-accent">{item.step}</p>
                <p className="mt-1 text-sm text-fg-muted">{item.detail}</p>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
