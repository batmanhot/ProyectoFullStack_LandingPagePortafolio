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
} from "react-icons/si";
import { BarChart3, Database, Server } from "lucide-react";
import Badge from "../ui/Badge";
import Eyebrow from "../ui/Eyebrow";
import CertGroup from "../ui/CertGroup";
import CertLogoStrip from "../ui/CertLogoStrip";
import { getScrollReveal } from "../../hooks/useScrollReveal";

// SEC-04 — Stack. Reestructurado según Sección 13 del spec V2: se reduce el
// protagonismo visual agrupando por capacidad (antes era una sola grilla
// plana) y se retira el proceso "Cómo trabajo" (AI-First), que ahora vive
// en su propia sección (AIEngineering.jsx) — el spec separa la metodología
// de negocio del uso de IA. Tecnologías sin cambios respecto al original.

const STACK_GROUPS = [
  {
    label: "Frontend",
    items: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "React", Icon: SiReact },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "NestJS", Icon: SiNestjs },
      { name: "Fastify", Icon: SiFastify },
      { name: "Python", Icon: SiPython },
      { name: "Django", Icon: SiDjango },
    ],
  },
  {
    label: "Data",
    items: [
      { name: "Prisma", Icon: SiPrisma },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MySQL", Icon: SiMysql },
      // Oracle y SQL Server no tienen ícono de marca en la librería
      // (removidos por disputas de trademark, igual que OpenAI).
      { name: "Oracle", Icon: Database },
      { name: "SQL Server", Icon: Server },
      { name: "Redis", Icon: SiRedis },
      // Power BI tampoco tiene ícono de marca disponible.
      { name: "Power BI", Icon: BarChart3 },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "Docker", Icon: SiDocker },
      { name: "Kubernetes", Icon: SiKubernetes },
    ],
  },
];

// Decisiones de arquitectura reales, tomadas de los proyectos ya descritos
// en Proyectos.jsx (Strangler Fig en StockPro, RBAC en EduSaaS, colas en
// FactuSaaS, auth dual en SDK Mercado Pago / POS Minimarket) — no son
// tecnologías con logo, así que se muestran como badges de texto.
const ARQUITECTURA = [
  "Multi-tenant",
  "Migración progresiva (Strangler Fig)",
  "RBAC multi-rol",
  "Colas asíncronas (BullMQ + Redis)",
  "Autenticación dual (API-Key + JWT)",
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

export default function Stack() {
  const reveal = getScrollReveal();

  return (
    <section id="stack" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div {...reveal}>
          <Eyebrow icon="🛠️">Stack</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-bold text-fg sm:text-4xl">
            La tecnología es el medio
          </h2>
          <p className="mt-2 text-fg-muted">El resultado es el producto.</p>
        </motion.div>

        <div className="mt-8 flex flex-col gap-6">
          {STACK_GROUPS.map((group, groupIndex) => (
            <motion.div key={group.label} {...getScrollReveal(groupIndex * 0.05)}>
              <p className="text-xs uppercase tracking-wide text-fg-muted">
                {group.label}
              </p>
              <div className="mt-3 grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-8">
                {group.items.map(({ name, Icon }) => (
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
          ))}
        </div>

        <motion.div {...getScrollReveal(0.1)} className="mt-8">
          <p className="text-xs uppercase tracking-wide text-fg-muted">
            Arquitectura
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {ARQUITECTURA.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </motion.div>

        <motion.div {...getScrollReveal(0.15)} className="mt-12">
          <h3 className="font-heading text-xl font-semibold text-fg">Certificaciones</h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {CERT_GROUPS.map((group) => (
              <CertGroup key={group.category} {...group} />
            ))}
          </div>
          <CertLogoStrip />
        </motion.div>
      </div>
    </section>
  );
}
