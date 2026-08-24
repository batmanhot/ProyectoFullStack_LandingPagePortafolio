import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import { buildWhatsAppLink } from "../../lib/conversion/whatsapp";
import { trackEvent } from "../../hooks/useAnalytics";

// Header en pastilla flotante — patrón tomado de henriquesousadev.vercel.app
// (referencia de estructura), con la paleta y el único CTA del DOC-A.
// Logo/wordmark: "Blueprint Badge" (Sección 26 del spec V2) — sello
// geométrico rotado con línea de base tipo plano técnico, elegido por el
// usuario entre 4 conceptos explorados en un canvas de diseño. Mismo mark
// que favicon.svg (que antes era una forma morada sin relación con la
// marca). Fondo del rombo en --color-bg (más oscuro que la pastilla del
// header, que usa --color-surface) para que siga leyéndose como insignia
// separada y no se funda con el fondo del header.
//
// Menú mobile: antes de esto, nav (hidden md:flex) y CTA (hidden sm:block)
// desaparecían por debajo de esos breakpoints sin ningún reemplazo — en
// mobile solo quedaba el logo, sin forma de navegar ni de contactar sin
// hacer scroll manual. Se unifica el breakpoint a md y se agrega el botón
// de hamburguesa + panel desplegable para todo lo que quede por debajo.

// Sección 36 del spec V2.1: Inicio / Problemas / Método / Proyectos / Sobre
// mí / Contacto — 6 ítems, sin exceso de opciones. Reemplaza el listado
// anterior (que omitía Problemas y Contacto, e incluía FAQ) para alinearse
// al recorrido de conversión que pide el spec.
const NAV_LINKS = [
  { href: "#hero", label: "Inicio" },
  { href: "#problemas", label: "Problemas" },
  { href: "#metodologia", label: "Método" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#cta-final", label: "Contacto" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between gap-4 rounded-full border border-accent/15 bg-surface/80 px-5 py-2.5 shadow-lg shadow-black/20 backdrop-blur">
          <a
            href="#hero"
            aria-label="Jhon Ponte Casafranca — Inicio"
            className="relative flex h-9 w-9 shrink-0 items-center justify-center"
          >
            <span
              aria-hidden="true"
              className="absolute h-7 w-7 rotate-45 rounded border border-accent/70 bg-bg"
            />
            <span className="relative flex flex-col items-center gap-0.5">
              <span className="font-heading text-[11px] font-extrabold leading-none tracking-tight text-accent">
                JP
              </span>
              <span aria-hidden="true" className="h-px w-3 bg-accent" />
            </span>
          </a>

          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-6 md:flex"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              onClick={() => trackEvent("whatsapp_click", { location: "header" })}
            >
              Escríbeme
            </Button>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 shrink-0 items-center justify-center text-fg md:hidden"
          >
            {mobileOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>

        {mobileOpen && (
          <nav
            aria-label="Navegación principal (mobile)"
            className="mt-2 flex flex-col gap-1 rounded-3xl border border-accent/15 bg-surface/95 p-4 shadow-lg shadow-black/20 backdrop-blur md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm text-fg-muted transition-colors hover:bg-accent/10 hover:text-fg"
              >
                {link.label}
              </a>
            ))}
            <Button
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              size="default"
              className="mt-2 w-full"
              onClick={() => {
                setMobileOpen(false);
                trackEvent("whatsapp_click", { location: "header_mobile" });
              }}
            >
              Escríbeme
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
