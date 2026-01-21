"use client";

import { useRef, ReactNode } from "react";
import { useGSAPAnimation } from "@/hooks/useGSAPAnimation";
import gsap from "gsap";

interface TiltCardProps {
  children: ReactNode;
  maxTilt?: number;
  className?: string;
  id?: string;
}

export function TiltCard({ children, maxTilt = 15, className = "", id }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  useGSAPAnimation<HTMLDivElement>(
    (el) => {
      const handleMouseMove = (e: MouseEvent) => {
        if (!cardRef.current || !innerRef.current || !glareRef.current) return;

        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        const rotateX = (y - 0.5) * maxTilt;
        const rotateY = (x - 0.5) * -maxTilt;

        gsap.to(innerRef.current, {
          rotateX: rotateX,
          rotateY: rotateY,
          duration: 0.5,
          ease: "power2.out",
          transformPerspective: 1000,
        });

        gsap.to(glareRef.current, {
          x: x * 100 + "%",
          y: y * 100 + "%",
          opacity: 0.3,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(innerRef.current, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.3)",
        });

        gsap.to(glareRef.current, {
          opacity: 0,
          duration: 0.3,
        });
      };

      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    [maxTilt]
  );

  return (
    <div ref={cardRef} className={`relative ${className}`} style={{ transformStyle: "preserve-3d" }} id={id}>
      <div ref={innerRef} className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
        {children}
        <div
          ref={glareRef}
          className="absolute inset-0 opacity-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.8), transparent 50%)",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
  );
}
