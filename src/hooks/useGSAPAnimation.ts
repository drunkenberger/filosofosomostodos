"use client";

import { useEffect, useRef, MutableRefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseGSAPOptions {
  trigger?: string | Element | null;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  toggleActions?: string;
}

export function useGSAPAnimation<T extends HTMLElement = HTMLDivElement>(
  animationFn: (element: T, gsapInstance: typeof gsap) => void,
  deps: unknown[] = []
): MutableRefObject<T | null> {
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const ctx = gsap.context(() => {
      if (elementRef.current) {
        animationFn(elementRef.current, gsap);
      }
    });

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationFn, ...deps]);

  return elementRef;
}

export function useGSAPScrollTrigger<T extends HTMLElement = HTMLDivElement>(
  animationFn: (element: T, gsapInstance: typeof gsap) => gsap.core.Tween | gsap.core.Timeline,
  options: UseGSAPOptions = {},
  deps: unknown[] = []
): MutableRefObject<T | null> {
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const ctx = gsap.context(() => {
      if (elementRef.current) {
        const animation = animationFn(elementRef.current, gsap);

        ScrollTrigger.create({
          trigger: options.trigger || elementRef.current,
          start: options.start || "top 80%",
          end: options.end || "bottom 20%",
          scrub: options.scrub ?? false,
          markers: options.markers ?? false,
          toggleActions: options.toggleActions || "play none none reverse",
          animation: animation,
        });
      }
    });

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationFn, options.trigger, options.start, options.end, options.scrub, options.markers, options.toggleActions, ...deps]);

  return elementRef;
}

// Split text utility for character-by-character animations
export function splitText(element: HTMLElement): HTMLSpanElement[] {
  const text = element.textContent || "";
  const chars: HTMLSpanElement[] = [];

  element.textContent = "";

  text.split("").forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.display = "inline-block";
    element.appendChild(span);
    chars.push(span);
  });

  return chars;
}

// Split text by words
export function splitWords(element: HTMLElement): HTMLSpanElement[] {
  const text = element.textContent || "";
  const words: HTMLSpanElement[] = [];

  element.textContent = "";

  text.split(" ").forEach((word, index) => {
    const span = document.createElement("span");
    span.textContent = word;
    span.style.display = "inline-block";
    element.appendChild(span);
    words.push(span);

    if (index < text.split(" ").length - 1) {
      element.appendChild(document.createTextNode(" "));
    }
  });

  return words;
}
