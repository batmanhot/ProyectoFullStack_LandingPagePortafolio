import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SiUdemy, SiCisco } from "react-icons/si";

// Grupo de certificaciones colapsable. Cada certificación se muestra como
// una fila con "logo" de emisor: ícono de marca real cuando existe (Udemy,
// Cisco), o un monograma consistente cuando no (CertiProf, SDC Learning,
// Microsoft, WE Educación Ejecutiva, CETI, TECSUP, Big Data Academy Perú,
// BSG Institute no tienen ícono de marca disponible en la librería) —
// mismo patrón que el avatar "JP" del Hero. Diseñado para seguir
// creciendo: agregar una certificación es solo un objeto más en el array.

const ISSUERS = {
  CertiProf: { mono: "CP" },
  "SDC Learning": { mono: "SDC" },
  "WE Educación Ejecutiva": { mono: "WE" },
  CETI: { mono: "CETI" },
  Udemy: { Icon: SiUdemy },
  Cisco: { Icon: SiCisco },
  TECSUP: { mono: "TEC" },
  "Big Data Academy Perú": { mono: "BDA" },
  "BSG Institute": { mono: "BSG" },
  "Entrenamiento Certero": { mono: "EC" },
  Microsoft: { mono: "MS" },
  educaciónIT: { mono: "eIT" },
};

function IssuerLogo({ issuer }) {
  const meta = ISSUERS[issuer] ?? { mono: issuer.slice(0, 2).toUpperCase() };
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-bg text-accent"
      aria-hidden="true"
    >
      {meta.Icon ? (
        <meta.Icon size={16} />
      ) : (
        <span className="text-[10px] font-heading font-bold leading-none">
          {meta.mono}
        </span>
      )}
    </span>
  );
}

export default function CertGroup({ icon, category, certs }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-accent/15 bg-surface p-5">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 text-left"
      >
        <span className="flex items-center gap-3">
          <span className="text-xl" aria-hidden="true">
            {icon}
          </span>
          <span>
            <span className="block font-heading font-semibold text-fg">
              {category}
            </span>
            <span className="text-sm text-fg-muted">
              {certs.length} certificaciones
            </span>
          </span>
        </span>
        <ChevronDown
          size={20}
          aria-hidden="true"
          className={`shrink-0 text-accent transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* grid-template-rows 0fr/1fr anima a la altura real del contenido,
          sin un max-height fijo que se rompa cada vez que se agreguen más
          certificaciones (como pasó con max-h-[40rem] y 8 certs). */}
      <div
        className={`grid transition-[grid-template-rows] duration-200 ${
          open ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <ul className="overflow-hidden">
          {certs.map((cert) => (
            <li
              key={cert.name}
              className="flex items-start gap-3 border-t border-fg-muted/10 py-3 first:border-t-0 first:pt-0"
            >
              <IssuerLogo issuer={cert.issuer} />
              <span className="min-w-0">
                <span className="block text-sm font-medium text-fg">
                  {cert.name}
                </span>
                <span className="text-xs text-fg-muted">
                  {cert.issuer} · {cert.year}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
