"use client";

import { ReactNode } from "react";
import { useGSAPScrollTrigger } from "@/hooks/useGSAPAnimation";

interface ParallaxLayersProps {
  layers: {
    content: ReactNode;
    speed: number;
    className?: string;
    id?: string;
  }[];
  className?: string;
}

export function ParallaxLayers({ layers, className = "" }: ParallaxLayersProps) {
  return (
    <div className={`relative ${className}`}>
      {layers.map((layer, index) => {
        const LayerWrapper = () => {
          const layerRef = useGSAPScrollTrigger<HTMLDivElement>(
            (el, gsap) => {
              return gsap.to(el, {
                y: () => window.innerHeight * layer.speed,
                ease: "none",
              });
            },
            {
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
            [layer.speed]
          );

          return (
            <div
              ref={layerRef}
              className={`absolute inset-0 ${layer.className || ""}`}
              id={layer.id}
              style={{ zIndex: layers.length - index }}
            >
              {layer.content}
            </div>
          );
        };

        return <LayerWrapper key={index} />;
      })}
    </div>
  );
}
