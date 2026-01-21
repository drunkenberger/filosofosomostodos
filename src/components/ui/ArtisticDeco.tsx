"use client";

import { useGSAPAnimation } from "@/hooks/useGSAPAnimation";

interface ArtisticDecoProps {
  variant?: "blob" | "line" | "dots" | "wave";
  color?: "naranja" | "cyan" | "verde" | "amarillo" | "purpura";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

export function ArtisticDeco({
  variant = "blob",
  color = "naranja",
  position = "top-right",
  size = "md",
  animated = true,
}: ArtisticDecoProps) {
  const colorMap = {
    naranja: "#FFBF47",
    cyan: "#8BE0E6",
    verde: "#C8CC69",
    amarillo: "#FFEC9D",
    purpura: "#6B6380",
  };

  const positionMap = {
    "top-left": "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
    "top-right": "top-0 right-0 translate-x-1/2 -translate-y-1/2",
    "bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
    "bottom-right": "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  const sizeMap = {
    sm: 120,
    md: 200,
    lg: 300,
  };

  const decoRef = useGSAPAnimation<HTMLDivElement>(
    (el, gsap) => {
      if (!animated) return;

      const svgElement = el.querySelector("svg");
      if (!svgElement) return;

      if (variant === "blob") {
        gsap.to(svgElement, {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: "linear",
        });
      } else if (variant === "wave") {
        gsap.to(svgElement.children, {
          y: "+=10",
          duration: 2,
          stagger: 0.1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      } else if (variant === "dots") {
        gsap.to(svgElement.children, {
          scale: 1.3,
          duration: 1.5,
          stagger: 0.2,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
      }
    },
    [variant, animated]
  );

  const renderVariant = () => {
    const baseSize = sizeMap[size];
    const mainColor = colorMap[color];

    switch (variant) {
      case "blob":
        return (
          <svg
            width={baseSize}
            height={baseSize}
            viewBox="0 0 200 200"
            className="opacity-30"
            style={{ filter: "blur(30px)" }}
          >
            <path
              d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.5C64.8,55.8,53.8,67.8,40.3,75.4C26.8,83,10.8,86.2,-4.8,84.8C-20.4,83.4,-35.6,77.4,-48.3,68.9C-61,60.4,-71.2,49.4,-77.8,36.2C-84.4,23,-87.4,7.6,-86.2,-7.5C-85,-22.6,-79.6,-37.4,-71.2,-50.7C-62.8,-64,-51.4,-75.8,-38.1,-83.5C-24.8,-91.2,-9.6,-94.8,3.9,-91.8C17.4,-88.8,30.6,-83.6,44.7,-76.4Z"
              transform="translate(100 100)"
              fill={mainColor}
            />
          </svg>
        );

      case "line":
        return (
          <svg width={baseSize} height={baseSize / 2} viewBox="0 0 200 100" className="opacity-40">
            <path
              d="M0,50 Q50,20 100,50 T200,50"
              stroke={mainColor}
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0,60 Q50,30 100,60 T200,60"
              stroke={mainColor}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
        );

      case "dots":
        return (
          <svg width={baseSize} height={baseSize} viewBox="0 0 200 200" className="opacity-50">
            {[...Array(12)].map((_, i) => {
              const angle = (i * 360) / 12;
              const x = 100 + 60 * Math.cos((angle * Math.PI) / 180);
              const y = 100 + 60 * Math.sin((angle * Math.PI) / 180);
              return <circle key={i} cx={x} cy={y} r="8" fill={mainColor} />;
            })}
          </svg>
        );

      case "wave":
        return (
          <svg width={baseSize} height={baseSize / 1.5} viewBox="0 0 200 133" className="opacity-30">
            {[0, 10, 20, 30, 40].map((offset, i) => (
              <path
                key={i}
                d={`M0,${50 + offset} Q50,${30 + offset} 100,${50 + offset} T200,${50 + offset}`}
                stroke={mainColor}
                strokeWidth="2"
                fill="none"
                opacity={1 - i * 0.15}
              />
            ))}
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div
      ref={decoRef}
      className={`absolute pointer-events-none ${positionMap[position]}`}
      aria-hidden="true"
    >
      {renderVariant()}
    </div>
  );
}
