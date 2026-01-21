interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  id?: string;
}

export function Badge({ children, variant = "primary", className = "", id }: BadgeProps) {
  const variants = {
    primary: "bg-gradient-to-r from-naranja to-naranja/80 text-white shadow-md",
    secondary: "bg-gradient-to-r from-cyan to-cyan/80 text-white shadow-md",
    outline: "border-2 border-naranja/30 text-naranja bg-naranja/5",
  };

  return (
    <span
      id={id}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
