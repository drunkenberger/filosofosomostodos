"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header-main-001"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft-lg py-4"
          : "bg-transparent py-6"
      }`}
      style={{
        borderBottom: isScrolled ? "2px solid transparent" : "none",
        borderImage: isScrolled
          ? "linear-gradient(90deg, rgba(255, 191, 71, 0.3), rgba(139, 224, 230, 0.3)) 1"
          : "none",
      }}
    >
      <nav className="max-w-[1600px] mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            id="header-logo-001"
            className="flex items-center transition-all duration-500 hover:scale-105 group"
          >
            <Image
              src="/logo.png"
              alt="Filósofos Somos Todos Logo"
              width={90}
              height={90}
              className="mr-3"
              priority
            />
            <span
              className={`text-xl font-bold ${
                isScrolled ? "text-purpura" : "text-white"
              }`}
            >
              filosofosomostodos
            </span>
          </Link>

          <button
            id="header-menu-toggle-001"
            className={`md:hidden p-2 transition-colors duration-300 rounded-lg ${
              isScrolled
                ? "text-purpura hover:text-naranja-vibrante hover:bg-amarillo/20"
                : "text-white hover:text-naranja-vibrante hover:bg-white/10"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                className="transition-all duration-300"
              />
            </svg>
          </button>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  id={`header-nav-${String(index + 1).padStart(3, "0")}`}
                  className={`relative font-medium py-2 px-1 transition-all duration-300 group ${
                    isScrolled
                      ? "text-purpura/80 hover:text-purpura"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-[3px] transition-all duration-500 ease-out group-hover:w-full ${
                      isScrolled ? "bg-gradient-to-r from-naranja-vibrante to-cyan" : "bg-gradient-to-r from-amarillo to-naranja-vibrante"
                    }`}
                    style={{
                      borderRadius: "2px 2px 0 0",
                    }}
                  />
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                id="header-cta-001"
                className={`font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 ${
                  isScrolled
                    ? "bg-naranja-vibrante text-purpura hover:bg-naranja-vibrante/90 shadow-lg hover:shadow-xl"
                    : "bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20"
                }`}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <ul className={`pb-4 space-y-1 pt-4 rounded-xl ${
            isScrolled
              ? "bg-transparent border-t border-amarillo/30"
              : "bg-white/10 backdrop-blur-md border border-white/20"
          }`}>
            {NAV_LINKS.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  id={`header-nav-mobile-${String(index + 1).padStart(3, "0")}`}
                  className={`block py-3 px-4 transition-all duration-300 font-medium rounded-lg ${
                    isScrolled
                      ? "text-purpura hover:text-naranja-vibrante hover:bg-amarillo/10"
                      : "text-white hover:text-naranja-vibrante hover:bg-white/10"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
