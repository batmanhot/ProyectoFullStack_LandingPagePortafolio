// Regla de Oro #1 del DOC-A: un solo CTA dominante. "primary" usa el único
// color de máximo contraste de la página (--color-cta); cualquier otro botón
// debe usar "secondary", visualmente subordinado.

const VARIANTS = {
  primary:
    "bg-cta hover:bg-cta-hover text-bg font-semibold shadow-lg shadow-cta/20",
  secondary:
    "bg-transparent border border-accent/40 text-accent hover:bg-accent/10",
};

const SIZES = {
  small: "px-4 py-2 text-sm",
  default: "px-6 py-3 text-base",
  large: "px-6 py-3 text-base",
};

export default function Button({
  as: Component = "a",
  variant = "primary",
  size = "default",
  icon: Icon,
  children,
  className = "",
  ...props
}) {
  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full transition-colors duration-200 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    >
      {Icon ? <Icon size={20} aria-hidden="true" /> : null}
      {children}
    </Component>
  );
}
