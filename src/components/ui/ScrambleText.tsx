"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

interface ScrambleTextProps {
  children: string;
  className?: string;
  characters?: string;
  speed?: number;
  id?: string;
}

export function ScrambleText({
  children,
  className = "",
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",
  speed = 50,
  id,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(children);
  const textRef = useRef<HTMLDivElement>(null);
  const originalText = children;

  useEffect(() => {
    if (!textRef.current) return;

    const scramble = () => {
      let iteration = 0;
      const maxIterations = originalText.length;

      const interval = setInterval(() => {
        setDisplayText(() => {
          return originalText
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return originalText[index];
              }
              if (char === " ") return " ";
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("");
        });

        iteration += 1 / 3;

        if (iteration >= maxIterations) {
          clearInterval(interval);
          setDisplayText(originalText);
        }
      }, speed);

      return () => clearInterval(interval);
    };

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: textRef.current,
        start: "top 80%",
        onEnter: scramble,
        once: true,
      });
    });

    return () => ctx.revert();
  }, [originalText, characters, speed]);

  return (
    <div ref={textRef} className={className} id={id}>
      {displayText}
    </div>
  );
}
