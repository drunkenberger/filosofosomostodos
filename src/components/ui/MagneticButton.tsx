"use client";

import { useRef, ReactNode } from "react";
import { useGSAPAnimation } from "@/hooks/useGSAPAnimation";
import gsap from "gsap";

interface MagneticButtonProps {
  children: ReactNode;
  strength?: number;
  className?: string;
  id?: string;
}

export function MagneticButton({ children, strength = 0.3, className = "", id }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAPAnimation<HTMLDivElement>(
    (el) => {
      const handleMouseMove = (e: MouseEvent) => {
        if (!buttonRef.current || !innerRef.current) return;

        const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - (left + width / 2);
        const y = e.clientY - (top + height / 2);

        gsap.to(innerRef.current, {
          x: x * strength,
          y: y * strength,
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(buttonRef.current, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(innerRef.current, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.5)",
        });

        gsap.to(buttonRef.current, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    [strength]
  );

  return (
    <div ref={buttonRef} className={`relative cursor-pointer ${className}`} id={id}>
      <div ref={innerRef} className="relative">
        {children}
      </div>
    </div>
  );
}
