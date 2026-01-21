"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ClipPathReveal } from "@/components/ui/ClipPathReveal";
import { ParallaxLayers } from "@/components/ui/ParallaxLayers";
import { TextReveal } from "@/components/ui/TextReveal";
import { ScrambleText } from "@/components/ui/ScrambleText";

gsap.registerPlugin(ScrollTrigger);

export function FeaturesShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll(".feature-card");

    const ctx = gsap.context(() => {
      cards.forEach((card) => {
        // Pin and reveal each card
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 70%",
            end: "top 30%",
            scrub: 1,
          },
          scale: 0.8,
          opacity: 0,
          rotateX: -15,
          y: 100,
          ease: "power2.out",
        });

        // Parallax effect on card content
        const cardContent = card.querySelector(".card-content");
        if (cardContent) {
          gsap.to(cardContent, {
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
            y: -50,
            ease: "none",
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: "Pensamiento Crítico",
      description: "Desarrolla la capacidad de analizar, evaluar y cuestionar información de manera lógica y reflexiva.",
      color: "from-naranja to-amarillo",
    },
    {
      title: "Diálogo Filosófico",
      description: "Fomenta el respeto, la escucha activa y la capacidad de expresar ideas de forma clara y fundamentada.",
      color: "from-cyan to-verde",
    },
    {
      title: "Creatividad",
      description: "Estimula la imaginación y el pensamiento divergente para encontrar soluciones innovadoras.",
      color: "from-purpura to-naranja",
    },
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen py-32 bg-gradient-to-b from-white via-amarillo/5 to-white overflow-hidden">
      {/* Parallax background layers */}
      <ParallaxLayers
        layers={[
          {
            content: (
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-naranja/10 rounded-full blur-[120px]" />
            ),
            speed: 0.3,
          },
          {
            content: (
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan/10 rounded-full blur-[100px]" />
            ),
            speed: -0.2,
          },
        ]}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        {/* Section header with scramble effect */}
        <div className="text-center mb-20">
          <span className="inline-block text-purpura font-semibold text-sm uppercase tracking-widest mb-4">
            Webflow-Style Animations
          </span>
          <TextReveal
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-purpura leading-tight mb-6"
            type="words"
            stagger={0.06}
            id="features-title-001"
          >
            Efectos Premium en Acción
          </TextReveal>
          <ScrambleText
            className="text-xl md:text-2xl text-purpura/70 max-w-3xl mx-auto"
            speed={40}
            id="features-subtitle-001"
          >
            Scroll para experimentar animaciones tipo Webflow
          </ScrambleText>
        </div>

        {/* Feature cards with advanced effects */}
        <div ref={cardsRef} className="space-y-32">
          {features.map((feature, idx) => (
            <ClipPathReveal
              key={idx}
              direction={idx % 2 === 0 ? "horizontal" : "vertical"}
              className="feature-card"
              id={`feature-card-${String(idx + 1).padStart(3, "0")}`}
            >
              <div className="relative group perspective-1000">
                {/* Card background with gradient border */}
                <div className={`relative rounded-3xl p-[2px] bg-gradient-to-br ${feature.color}`}>
                  <div className="relative bg-white rounded-[22px] p-12 md:p-16 overflow-hidden">
                    {/* Animated grid background */}
                    <div
                      className="absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage: `linear-gradient(rgba(107, 99, 128, 0.3) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(107, 99, 128, 0.3) 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                      }}
                    />

                    <div className="card-content relative z-10">
                      <h3 className="text-4xl md:text-5xl font-serif font-bold text-purpura mb-6">
                        {feature.title}
                      </h3>
                      <p className="text-xl text-purpura/70 leading-relaxed max-w-2xl">
                        {feature.description}
                      </p>
                    </div>

                    {/* Decorative elements */}
                    <div
                      className={`absolute -right-20 -bottom-20 w-40 h-40 bg-gradient-to-br ${feature.color} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                    />
                  </div>
                </div>
              </div>
            </ClipPathReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
