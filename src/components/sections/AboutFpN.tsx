import { BENEFITS } from "@/lib/constants";

export function AboutFpN() {
  return (
    <section id="que-es" className="py-24 md:py-32 bg-gradient-to-b from-white to-amarillo/10 relative overflow-hidden">
      {/* Decorative blurred shapes */}
      <div className="absolute w-[600px] h-[600px] bg-naranja/10 rounded-full blur-[120px] -top-40 -right-40" />
      <div className="absolute w-[400px] h-[400px] bg-cyan/10 rounded-full blur-[100px] bottom-0 -left-40" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-naranja font-semibold text-sm uppercase tracking-widest mb-4">
            Conoce el programa
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-purpura leading-tight">
            ¿Qué es Filosofía para Niños?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-purpura/90 leading-relaxed font-light">
              Filosofía para Niños es un programa educativo desarrollado por el filósofo
              <strong className="text-purpura font-semibold"> Matthew Lipman</strong> que transforma la curiosidad
              natural de los niños en el punto de partida para el diálogo filosófico.
            </p>

            <p className="text-lg text-purpura/70 leading-relaxed">
              Los niños hacen preguntas como &quot;¿Por qué el cielo es azul?&quot; o &quot;¿Qué
              pasa cuando dormimos?&quot; Estas preguntas son el comienzo de grandes
              conversaciones que desarrollan habilidades esenciales para la vida.
            </p>

            <div className="pt-6">
              <h3 className="text-2xl font-bold text-purpura mb-8">
                Beneficios concretos
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BENEFITS.map((benefit, index) => (
                  <li
                    key={benefit}
                    id={`about-benefit-${String(index + 1).padStart(3, "0")}`}
                    className="flex items-center gap-4 group bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-amarillo/30 hover:border-naranja/50 hover:shadow-md transition-all duration-300"
                  >
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-naranja to-naranja/70 flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-base font-medium text-purpura group-hover:text-naranja transition-colors duration-300">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quote card */}
          <div className="relative">
            <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-naranja via-amarillo to-cyan">
              <div className="relative bg-purpura rounded-[22px] p-10 md:p-12 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

                {/* Quote icon */}
                <div className="absolute top-6 right-6 w-16 h-16 text-naranja/20">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <blockquote className="relative z-10 text-xl md:text-2xl text-white/90 leading-relaxed mb-8 font-light">
                  &quot;Vivimos en un mundo que cambia cada segundo: redes sociales, tecnología,
                  inteligencia artificial... Ahora más que nunca, necesitamos que nuestros hijos
                  aprendan a reflexionar, a escuchar sin juzgar, y a formar su propio criterio.&quot;
                </blockquote>

                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-1 h-12 bg-gradient-to-b from-naranja to-cyan rounded-full" />
                  <p className="text-lg text-white/70 font-medium">
                    Filosofía para Niños es una herramienta poderosa para lograrlo.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-naranja rounded-2xl rotate-12 opacity-80 shadow-lg" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-cyan rounded-xl -rotate-12 opacity-80 shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
