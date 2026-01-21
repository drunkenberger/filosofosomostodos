"use client";

import { ReactNode } from "react";
import { useGSAPScrollTrigger } from "@/hooks/useGSAPAnimation";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export function ParallaxSection({ children, speed = 0.5, className = "", id, style }: ParallaxSectionProps) {
  const sectionRef = useGSAPScrollTrigger<HTMLDivElement>(
    (el, gsapInstance) => {
      return gsapInstance.to(el, {
        y: () => window.innerHeight * speed,
        ease: "none",
      });
    },
    {
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
    [speed]
  );

  return (
    <div ref={sectionRef} className={className} id={id} style={style}>
      {children}
    </div>
  );
}
