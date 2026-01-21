"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
  type?: "chars" | "words" | "lines";
  stagger?: number;
  delay?: number;
  id?: string;
}

export function TextReveal({
  children,
  className = "",
  type = "words",
  stagger = 0.03,
  delay = 0,
  id,
}: TextRevealProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, { types: type });
    const elements = type === "chars" ? split.chars : type === "words" ? split.words : split.lines;

    if (!elements) return;

    gsap.set(elements, {
      opacity: 0,
      y: 50,
      rotateX: -90,
      transformOrigin: "top center",
    });

    ScrollTrigger.create({
      trigger: textRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: stagger,
          delay: delay,
          ease: "back.out(1.7)",
        });
      },
    });

    return () => {
      split.revert();
    };
  }, [children, type, stagger, delay]);

  return (
    <div ref={textRef} className={className} id={id}>
      {children}
    </div>
  );
}
