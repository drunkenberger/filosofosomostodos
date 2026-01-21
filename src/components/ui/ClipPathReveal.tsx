"use client";

import { ReactNode, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ClipPathRevealProps {
  children: ReactNode;
  direction?: "horizontal" | "vertical" | "diagonal" | "circle";
  className?: string;
  id?: string;
}

export function ClipPathReveal({ children, direction = "vertical", className = "", id }: ClipPathRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const clipPaths = {
      horizontal: {
        from: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        to: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      vertical: {
        from: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        to: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      diagonal: {
        from: "polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%)",
        to: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      circle: {
        from: "circle(0% at 50% 50%)",
        to: "circle(100% at 50% 50%)",
      },
    };

    gsap.set(elementRef.current, {
      clipPath: clipPaths[direction].from,
    });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: elementRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        onEnter: () => {
          gsap.to(elementRef.current, {
            clipPath: clipPaths[direction].to,
            duration: 1.5,
            ease: "power2.out",
          });
        },
      });
    });

    return () => ctx.revert();
  }, [direction]);

  return (
    <div ref={elementRef} className={className} id={id}>
      {children}
    </div>
  );
}
