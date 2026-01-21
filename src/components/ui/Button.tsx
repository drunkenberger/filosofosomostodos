"use client";

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  id?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  id,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]";

  const variants = {
    primary: "bg-naranja text-purpura hover:bg-naranja/90 shadow-lg hover:shadow-xl",
    secondary: "bg-verde text-purpura hover:bg-verde/90 shadow-lg hover:shadow-xl",
    outline: "border-2 border-purpura text-purpura hover:bg-purpura hover:text-white",
    ghost: "bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20 hover:border-white/50",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles} id={id}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles} id={id}>
      {children}
    </button>
  );
}
