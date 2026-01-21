import { Card } from "@/components/ui/Card";
import { WORKSHOPS } from "@/lib/constants";

export function Workshops() {
  return (
    <section id="talleres" className="py-24 md:py-32 bg-gradient-to-b from-white via-amarillo/10 to-amarillo/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute w-80 h-80 bg-verde/20 rounded-full blur-[100px] -top-20 -left-40" />
      <div className="absolute w-64 h-64 bg-cyan/20 rounded-full blur-[80px] bottom-0 right-0" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block text-verde font-semibold text-sm uppercase tracking-widest mb-4">
            Descubre nuestros programas
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-purpura mb-6 leading-tight">
            Nuestros Talleres
          </h2>
          <p className="text-lg md:text-xl text-purpura/80 max-w-2xl mx-auto leading-relaxed">
            Programas diseñados para que padres, madres y educadores incorporen
            la filosofía en la vida de los niños.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {WORKSHOPS.map((workshop) => (
            <Card
              key={workshop.id}
              id={`workshop-card-${workshop.id}-001`}
              title={workshop.title}
              audience={workshop.audience}
              description={workshop.description}
              href={workshop.href}
              comingSoon={workshop.comingSoon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
