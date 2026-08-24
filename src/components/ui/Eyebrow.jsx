// Badge "eyebrow" con emoji sobre cada título de sección — patrón tomado
// de henriquesousadev.vercel.app (referencia de estructura, DOC-A Sección A),
// con la paleta ya aprobada del DOC-A (acento cian, no morado).

export default function Eyebrow({ icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
      {icon ? <span aria-hidden="true">{icon}</span> : null}
      {children}
    </span>
  );
}
