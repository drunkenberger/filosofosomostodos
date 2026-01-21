"use client";

import { ReactNode, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PinSectionProps {
  children: ReactNode;
  className?: string;
  pinSpacing?: boolean;
  id?: string;
}

export function PinSection({ children, className = "", pinSpacing = true, id }: PinSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: pinSpacing,
        scrub: 1,
      });
    });

    return () => ctx.revert();
  }, [pinSpacing]);

  return (
    <div ref={sectionRef} className={className} id={id}>
      {children}
    </div>
  );
}
