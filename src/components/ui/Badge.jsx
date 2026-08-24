// C-06 — Badge de stack tecnológico. Estático, acento cian (Sección F del DOC-A).

export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
      {children}
    </span>
  );
}
