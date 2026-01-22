import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WORKSHOPS } from "@/lib/constants";

export function Workshops() {
  return (
    <section
      id="talleres"
      className="py-24 md:py-32 bg-gradient-to-b from-white via-amarillo/10 to-amarillo/20 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute w-80 h-80 bg-verde/20 rounded-full blur-[100px] -top-20 -left-40" />
      <div className="absolute w-64 h-64 bg-cyan/20 rounded-full blur-[80px] bottom-0 right-0" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mb-20">
            <span className="inline-block text-verde font-semibold text-sm uppercase tracking-widest mb-4">
              Descubre nuestros programas
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-purpura mb-6 leading-tight">
              Nuestros Talleres
            </h2>
            <p className="text-lg md:text-xl text-purpura/80 max-w-2xl mx-auto leading-relaxed">
              Programas diseñados para que padres, madres y educadores
              incorporen la filosofía en la vida de los niños.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-10">
          {WORKSHOPS.map((workshop, index) => (
            <ScrollReveal
              key={workshop.id}
              direction="up"
              delay={200 + index * 150}
            >
              <Card
                id={`workshop-card-${workshop.id}-001`}
                title={workshop.title}
                audience={workshop.audience}
                description={workshop.description}
                href={workshop.href}
                comingSoon={workshop.comingSoon}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Certification badge */}
        <ScrollReveal direction="up" delay={500}>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-5 bg-gradient-to-r from-white/90 to-white/70 backdrop-blur-sm border border-amarillo/40 rounded-2xl px-8 py-6 max-w-2xl mx-auto shadow-md">
            <img
              src="/logo_FpN.png"
              alt="Federación Mexicana de Filosofía para Niños"
              className="h-16 w-auto flex-shrink-0"
            />
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-purpura/20 to-transparent hidden sm:block" />
            <div className="text-center sm:text-left">
              <p className="text-purpura font-semibold text-base mb-1">
                Verónica Morelos Zaragoza Gutiérrez
              </p>
              <p className="text-purpura/70 text-sm">
                Facilitadora certificada por la
              </p>
              <p className="text-purpura font-semibold text-sm">
                Federación Mexicana de Filosofía para Niños
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
