import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const STATS = [
  {
    value: "50",
    suffix: "+",
    label: "Años de experiencia",
    sublabel: "Programa desarrollado en 1970",
  },
  {
    value: "60",
    suffix: "+",
    label: "Países",
    sublabel: "Implementando Filosofía para Niños",
  },
  {
    value: "100",
    suffix: "%",
    label: "Compromiso",
    sublabel: "Con el pensamiento crítico infantil",
  },
];

export function Stats() {
  return (
    <section
      id="stats-section-001"
      className="relative py-24 md:py-32 bg-gradient-to-br from-purpura via-purpura/95 to-purpura/90 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Decorative blurred shapes */}
      <div className="absolute w-[600px] h-[600px] bg-naranja/10 rounded-full blur-[120px] -top-40 right-0" />
      <div className="absolute w-[400px] h-[400px] bg-cyan/10 rounded-full blur-[100px] -bottom-20 left-0" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Un método probado y respaldado
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Filosofía para Niños es un programa reconocido internacionalmente
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {STATS.map((stat, index) => (
            <ScrollReveal
              key={stat.label}
              direction="up"
              delay={300 + index * 150}
            >
              <div
                id={`stat-card-${String(index + 1).padStart(3, "0")}`}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-naranja/10 via-transparent to-cyan/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="text-6xl md:text-7xl font-bold text-white mb-4 font-serif">
                    <AnimatedCounter
                      value={parseInt(stat.value)}
                      suffix={stat.suffix}
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-naranja mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base">
                    {stat.sublabel}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-naranja/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
