"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import Ballpit from "@/components/reactbits/Ballpit";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-badge", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.3 })
        .fromTo(".hero-title", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.6")
        .fromTo(".hero-subtitle", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.7")
        .fromTo(".hero-cta-buttons", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
        .fromTo(".hero-social-proof", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6");
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      id="hero-section-001"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Grain texture with RGB glitch effect */}
      {/* Violet layer */}
      <div
        className="absolute inset-0 w-full h-full opacity-60 pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' fill='%238B5CF6'/%3E%3C/svg%3E")`,
          transform: "translateX(-3px)",
        }}
      />
      {/* Yellow layer */}
      <div
        className="absolute inset-0 w-full h-full opacity-50 pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter2)' fill='%23FFEC9D'/%3E%3C/svg%3E")`,
          transform: "translateX(3px)",
        }}
      />
      {/* Purple/Morado layer */}
      <div
        className="absolute inset-0 w-full h-full opacity-40 pointer-events-none mix-blend-hard-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter3'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter3)' fill='%236B6380'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Background Image (PNG with transparency) */}
      <div
        className="absolute inset-0 w-full h-full bg-contain bg-no-repeat bg-center opacity-[0.15]"
        style={{ backgroundImage: "url('/hero_background_2.png')" }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-purpura/60 z-10" />

      {/* Ballpit - above overlay so colors show properly */}
      <div className="absolute inset-0 w-full h-full z-[15] pointer-events-none md:pointer-events-auto">
        <Ballpit
          count={100}
          gravity={0.5}
          friction={0.9975}
          wallBounce={0.95}
          followCursor
          colors={["#f495d6", "#fffb8f", "#f9cf5d"]}
        />
      </div>

      <div className="relative z-20 max-w-[1200px] mx-auto px-6 py-20 text-center">
        {/* Trust badge */}
        <div className="hero-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
          <span className="text-naranja-vibrante text-sm">★</span>
          <span className="text-white/90 text-sm font-medium">
            Basado en el método de Matthew Lipman
          </span>
        </div>

        {/* Main headline */}
        <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Enseña a tus hijos <span className="text-naranja-vibrante">a pensar</span>
        </h1>

        {/* Subheadline */}
        <p className="hero-subtitle text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Talleres de Filosofía para Niños que desarrollan el pensamiento
          crítico, la empatía y la curiosidad. Para padres, madres y educadores.
        </p>

        {/* CTA buttons */}
        <div className="hero-cta-buttons flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button href="#talleres" size="lg" id="hero-cta-primary-001">
            Ver talleres disponibles
          </Button>
          <Button
            href="#que-es"
            variant="ghost"
            size="lg"
            id="hero-cta-secondary-001"
          >
            Conocer más
          </Button>
        </div>

        {/* Social proof */}
        <div className="hero-social-proof flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-naranja font-bold text-lg">50+</span>
            <span>años de metodología probada</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/30" />
          <div className="flex items-center gap-2">
            <span className="text-naranja font-bold text-lg">1000+</span>
            <span>familias transformadas</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/30" />
          <div className="flex items-center gap-2">
            <span className="text-naranja font-bold text-lg">4-12</span>
            <span>años de edad</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <a
          href="#que-es"
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">
            Descubre más
          </span>
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
