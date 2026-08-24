import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";
import { buildWhatsAppLink } from "../../lib/conversion/whatsapp";
import { trackEvent } from "../../hooks/useAnalytics";
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

const QUICK_PROOF = [
  "10+ años de experiencia",
  "6+ soluciones SaaS",
  "Arquitectura + Full Stack",
  "Sistemas empresariales",
  "Perú / Remote",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 pb-16 pt-36 text-center"
    >
      <Eyebrow icon="🏗️">Software Solutions Architect</Eyebrow>

      <div
        className="h-28 w-28 overflow-hidden rounded-full border-2 border-accent/40 bg-surface"
        style={{ aspectRatio: "1 / 1" }}
      >
        <img
          src={portraitPhoto}
          alt="Jhon Ponte Casafranca"
          width={224}
          height={224}
          fetchPriority="high"
          className="h-full w-full object-cover"
          style={{ objectPosition: "50% 18%" }}
        />
      </div>

      <h1 className="font-heading text-4xl font-extrabold leading-tight text-fg sm:text-5xl">
        Transformo problemas empresariales complejos en software que funciona
        en producción.
      </h1>

      <p className="max-w-xl text-lg text-fg-muted">
        Diseño y construyo sistemas empresariales, plataformas SaaS y
        soluciones digitales combinando análisis de negocio, arquitectura de
        software y desarrollo Full Stack — con foco en cumplimiento
        regulatorio peruano, pagos digitales y arquitectura multi-tenant.
      </p>

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Button
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          size="large"
          onClick={() => trackEvent("whatsapp_click", { location: "hero" })}
        >
          Hablemos de tu proyecto →
        </Button>
        <Button
          href="#proyectos"
          variant="secondary"
          size="large"
          onClick={() => trackEvent("view_projects_click", { location: "hero" })}
        >
          Ver proyectos
        </Button>
      </div>

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
