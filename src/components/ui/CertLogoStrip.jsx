import certiprofLogo from "../../assets/certs/certiprof.webp";
import microsoftLogo from "../../assets/certs/microsoft.png";
import sdcLearningLogo from "../../assets/certs/sdc-learning-crop-small.png";
import weEducacionLogo from "../../assets/certs/we-educacion-ejecutiva.png";
import dacaLogo from "../../assets/certs/daca-certjoin.png";

// Franja de logos reales de las entidades certificadoras, al pie de
// Certificaciones (a pedido explícito del usuario). Cada logo va en una
// tarjeta clara porque algunos vienen con fondo transparente (CertiProf,
// Microsoft, DACA) y otros con fondo propio oscuro (SDC Learning, WE
// Educación Ejecutiva) — la tarjeta blanca da contraste parejo a todos.

const LOGOS = [
  { name: "CertiProf", src: certiprofLogo },
  { name: "Microsoft", src: microsoftLogo },
  { name: "SDC Learning", src: sdcLearningLogo },
  { name: "WE Educación Ejecutiva", src: weEducacionLogo },
  { name: "DACA — CertJoin", src: dacaLogo },
];

export default function CertLogoStrip() {
  return (
    <div className="mt-8">
      <p className="text-center text-xs uppercase tracking-wide text-fg-muted">
        Certificado por
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
        {LOGOS.map((logo) => (
          <div
            key={logo.name}
            className="flex h-16 w-28 items-center justify-center rounded-xl bg-fg p-3"
            title={logo.name}
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
              width={96}
              height={40}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
