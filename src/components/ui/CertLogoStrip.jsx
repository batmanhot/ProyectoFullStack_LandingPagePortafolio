import certiprofLogo from "../../assets/certs/certiprof.webp";
import sdcLearningLogo from "../../assets/certs/sdc-learning-crop-small.png";
import weEducacionLogo from "../../assets/certs/we-educacion-ejecutiva.png";

// Franja de entidades emisoras que tienen una certificación visible en la
// página. Cada logo va en una tarjeta clara para conservar el contraste y
// evitar atribuir certificaciones a entidades sin credencial publicada.

const LOGOS = [
  { name: "CertiProf", src: certiprofLogo },
  { name: "SDC Learning", src: sdcLearningLogo },
  { name: "WE Educación Ejecutiva", src: weEducacionLogo },
];

export default function CertLogoStrip() {
  return (
    <div className="mt-8">
      <p className="text-center text-xs uppercase tracking-wide text-fg-muted">
        Algunas entidades emisoras
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
