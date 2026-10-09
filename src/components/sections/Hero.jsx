import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";
import { buildDiagnosticWhatsAppLink } from "../../lib/conversion/whatsapp";
import { trackEvent } from "../../hooks/useAnalytics";
import { LINKEDIN_URL } from "../../lib/conversion/social";
import portraitPhoto from "../../assets/jhon-ponte.jpg";

// SEC-01 — Hero. Reposicionado a Software Solutions Architect (spec V2,
// Sección 6): headline y CTA dual reemplazan el copy Full-Stack-first
// original. Foto profesional (Sección 6.1 del spec V2): entre las dos fotos
// de estudio aportadas por el usuario se eligió la de traje + brazos
// cruzados (vs. la de camisa manga corta) por transmitir con más fuerza el
// perfil "ejecutivo/consultivo" que pide el spec — el objetivo central de
// esta reingeniería es elevar el posicionamiento a Software Solutions
// Architect. object-fit + object-position recortan el retrato (784×980) al
// círculo sin depender de una herramienta de edición de imágenes aparte.

// Sección 9 del spec V2.1: reemplaza "Sistemas empresariales" (redundante
// con el headline) por "Integraciones y automatización", indicador de
// autoridad que el spec pide explícitamente y que antes no aparecía aquí.
const QUICK_PROOF = [
  "10+ años de experiencia",
  "6+ soluciones SaaS",
  "Arquitectura + desarrollo Full Stack",
  "SUNAT, pagos e integraciones",
  "Perú / Remote",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 pb-16 pt-36 text-center"
    >
      <Eyebrow icon="🏗️">Software Solutions Architect</Eyebrow>

      <p className="-mb-4 font-heading text-lg font-semibold text-fg">
        Jhon Ponte Casafranca
      </p>

      <div
        className="h-32 w-32 overflow-hidden rounded-full border-2 border-accent/40 bg-surface"
        style={{ aspectRatio: "1 / 1" }}
      >
        <img
          src={portraitPhoto}
          alt="Retrato profesional de Jhon Ponte Casafranca"
          width={224}
          height={224}
          fetchPriority="high"
          className="h-full w-full object-cover"
          style={{ objectPosition: "50% 14%" }}
        />
      </div>

      <h1 className="font-heading text-4xl font-extrabold leading-tight text-fg sm:text-5xl">
        Convierto procesos empresariales complejos en software confiable y
        escalable.
      </h1>

      <p className="max-w-xl text-lg text-fg-muted">
        Ayudo a empresas peruanas que necesitan automatizar operaciones,
        integrar SUNAT o pagos, y reemplazar procesos manuales por sistemas a
        medida. Combino análisis de negocio, arquitectura y desarrollo Full
        Stack para llevar la solución a producción.
      </p>

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Button
          href={buildDiagnosticWhatsAppLink("hero")}
          target="_blank"
          rel="noopener noreferrer"
          size="large"
          onClick={() => trackEvent("cta_whatsapp_click", { location: "hero", intent: "diagnostic" })}
        >
          Solicitar diagnóstico →
        </Button>
        <Button
          href="#proyectos"
          variant="secondary"
          size="large"
          onClick={() => trackEvent("view_projects_click", { location: "hero" })}
        >
          Ver experiencia y casos →
        </Button>
      </div>

      <p className="-mt-3 text-sm text-fg-muted">
        Cuéntame tu proceso y problema actual; así podremos definir el mejor
        primer paso.
      </p>

      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="me noopener noreferrer"
        onClick={() => trackEvent("linkedin_click", { location: "hero" })}
        className="-mt-3 text-sm text-accent underline-offset-4 hover:underline"
      >
        Ver perfil profesional en LinkedIn
      </a>

      <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-fg-muted">
        {QUICK_PROOF.map((item, index) => (
          <li key={item} className="flex items-center gap-3">
            {item}
            {index < QUICK_PROOF.length - 1 && (
              <span aria-hidden="true" className="text-accent/40">
                ·
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
