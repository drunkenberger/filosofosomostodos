"use client";

import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="hero-section-001"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purpura via-purpura/95 to-purpura/90"
    >
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-naranja/15 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan/10 via-transparent to-transparent" />

      {/* Soft decorative shapes */}
      <div className="absolute w-[500px] h-[500px] bg-naranja/20 rounded-full blur-[120px] -top-40 -left-40" />
      <div className="absolute w-[400px] h-[400px] bg-cyan/15 rounded-full blur-[100px] top-1/4 -right-32" />
      <div className="absolute w-[300px] h-[300px] bg-verde/10 rounded-full blur-[80px] bottom-20 left-1/3" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20 text-center">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
          <span className="text-naranja text-sm">★</span>
          <span className="text-white/90 text-sm font-medium">Basado en el método de Matthew Lipman</span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Enseña a tus hijos{" "}
          <span className="text-naranja">a pensar</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Talleres de Filosofía para Niños que desarrollan el pensamiento crítico,
          la empatía y la curiosidad. Para padres, madres y educadores.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button href="#talleres" size="lg" id="hero-cta-primary-001">
            Ver talleres disponibles
          </Button>
          <Button href="#que-es" variant="ghost" size="lg" id="hero-cta-secondary-001">
            Conocer más
          </Button>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60 text-sm">
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#que-es" className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors">
          <span className="text-xs uppercase tracking-widest">Descubre más</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
