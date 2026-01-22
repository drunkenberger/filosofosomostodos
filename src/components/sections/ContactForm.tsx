import { CustomContactForm } from "@/components/ui/CustomContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GOOGLE_SHEETS_WEBAPP_URL } from "@/lib/constants";

export function ContactForm() {
  return (
    <section
      id="contacto"
      className="py-24 md:py-32 bg-gradient-to-b from-amarillo/15 via-cyan/10 to-cyan/20 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute w-80 h-80 bg-naranja/20 rounded-full blur-[100px] -top-20 -left-20" />
      <div className="absolute w-64 h-64 bg-verde/20 rounded-full blur-[80px] bottom-10 right-10" />
      <div className="absolute w-48 h-48 bg-cyan/15 rounded-full blur-[60px] top-1/2 right-1/4" />

      <div className="relative z-10 max-w-[800px] mx-auto px-6">
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mb-14">
            <span className="inline-block text-purpura font-semibold text-sm uppercase tracking-widest mb-4">
              Da el primer paso
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-purpura mb-6 leading-tight">
              ¿Listo para empezar?
            </h2>
            <p className="text-lg md:text-xl text-purpura/80 max-w-2xl mx-auto leading-relaxed">
              ¿Alguna vez te has preguntado qué puedes hacer para mejorar el
              mundo? Quizás todo empiece... por enseñar a pensar.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={300}>
          <div className="relative">
            <div className="absolute -inset-2 bg-white/50 rounded-2xl blur-sm" />
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg">
              <CustomContactForm
                id="contact-form-001"
                webAppUrl={GOOGLE_SHEETS_WEBAPP_URL}
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <div className="mt-10 text-center">
            <p className="text-purpura/60 text-base">
              Te responderemos en un plazo de 24-48 horas.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
