"use client";

import Link from "next/link";
import { useState } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter logic would go here
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer id="footer-main-001" className="relative bg-gradient-to-b from-purpura via-purpura/98 to-[#5a5370] text-white overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-naranja via-amarillo to-cyan" />

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute w-[800px] h-[800px] bg-naranja/5 rounded-full blur-[150px] -bottom-96 -right-96" />
      <div className="absolute w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[120px] -bottom-72 -left-72" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6">
        {/* Newsletter section */}
        <div className="py-20 border-b border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-naranja/10 backdrop-blur-sm border border-naranja/20 rounded-full px-5 py-2 mb-6">
              <span className="w-2 h-2 bg-naranja rounded-full animate-pulse" />
              <span className="text-naranja text-sm font-medium tracking-wide">Mantente conectado</span>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
              Recibe inspiración filosófica para niños
            </h3>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              Tips, actividades y reflexiones para fomentar el pensamiento crítico en familia
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                id="footer-newsletter-input-001"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-naranja focus:border-transparent transition-all duration-300"
              />
              <button
                id="footer-newsletter-submit-001"
                type="submit"
                className="px-8 py-4 bg-naranja text-purpura font-semibold rounded-xl hover:bg-naranja/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-naranja whitespace-nowrap"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>

        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block group mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-naranja group-hover:text-amarillo transition-colors duration-300">
                Filósofos Somos Todos
              </h3>
            </Link>
            <p className="text-white/75 leading-relaxed text-lg mb-8 max-w-md">
              Transformando la curiosidad natural de los niños en el motor del pensamiento crítico
              y el diálogo filosófico desde 1970.
            </p>

            {/* Social proof badge */}
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-3">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-naranja to-cyan border-2 border-purpura"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="text-white/90 font-semibold">50+ años</div>
                <div className="text-white/50">de experiencia</div>
              </div>
            </div>
          </div>

          {/* Talleres */}
          <div>
            <h4 className="font-semibold mb-6 text-amarillo text-lg">Talleres</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/taller-padres"
                  id="footer-link-padres-001"
                  className="text-white/75 hover:text-white transition-all duration-300 inline-flex items-center gap-3 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-naranja/50 group-hover:bg-naranja group-hover:scale-150 transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Taller para Padres
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/taller-maestros"
                  id="footer-link-maestros-001"
                  className="text-white/75 hover:text-white transition-all duration-300 inline-flex items-center gap-3 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-naranja/50 group-hover:bg-naranja group-hover:scale-150 transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Taller para Educadores
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/taller-principito"
                  id="footer-link-principito-001"
                  className="text-white/75 hover:text-white transition-all duration-300 inline-flex items-center gap-3 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan/50 group-hover:bg-cyan group-hover:scale-150 transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Taller El Principito
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Navegación rápida */}
          <div>
            <h4 className="font-semibold mb-6 text-amarillo text-lg">Navegación</h4>
            <ul className="space-y-4">
              {[
                { href: "#que-es", label: "¿Qué es FpN?" },
                { href: "#talleres", label: "Nuestros talleres" },
                { href: "#video", label: "Ver video" },
                { href: "#contacto", label: "Contacto" },
              ].map((link, index) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    id={`footer-nav-${String(index + 1).padStart(3, "0")}`}
                    className="text-white/75 hover:text-white transition-all duration-300 inline-flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-verde/50 group-hover:bg-verde group-hover:scale-150 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-white/50">
              <span>© {currentYear} Filósofos Somos Todos</span>
              <span className="hidden md:inline">•</span>
              <span>Todos los derechos reservados</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#hero-section-001"
                id="footer-back-to-top-001"
                className="group flex items-center gap-2 text-sm text-white/60 hover:text-naranja transition-colors duration-300"
              >
                <span>Volver arriba</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
