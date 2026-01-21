"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!progressRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(progressRef.current, {
        scaleX: 1,
        transformOrigin: "left center",
        ease: "none",
        scrollTrigger: {
          start: "top top",
          end: "max",
          scrub: 0.3,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 pointer-events-none">
      <div className="relative w-full h-full bg-gradient-to-r from-naranja/20 via-cyan/20 to-verde/20">
        <div
          ref={progressRef}
          id="scroll-progress-001"
          className="absolute inset-0 bg-gradient-to-r from-naranja via-cyan to-verde origin-left"
          style={{ transform: "scaleX(0)" }}
          role="progressbar"
          aria-label="Progreso de lectura"
        />
      </div>
    </div>
  );
}
