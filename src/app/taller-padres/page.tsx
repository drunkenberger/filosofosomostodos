import { TallerLayout } from "@/components/layout/TallerLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taller para Padres y Madres | Filósofos Somos Todos",
  description: "Aprende herramientas para acompañar las preguntas de tus hijos y crear espacios de diálogo filosófico en familia.",
};

export default function TallerPadresPage() {
  return (
    <TallerLayout
      id="taller-padres"
      title="Taller para Padres y Madres"
      subtitle="Acompaña las preguntas de tus hijos sin dar respuestas cerradas"
      audience="Dirigido a familias con niños de 4 a 12 años"
    >
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-purpura mb-4">¿Para quién es este taller?</h2>
          <p className="text-purpura/80">
            Este taller está dirigido a mamás y papás que desean incorporar la filosofía
            en su vida familiar, basado en el programa de Matthew Lipman. Si alguna vez tus
            hijos te han hecho preguntas como &quot;¿Por qué el cielo es azul?&quot; o &quot;¿Qué pasa
            cuando dormimos?&quot;, este taller es para ti.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-purpura mb-4">¿Qué aprenderás?</h2>
          <ul className="space-y-3">
            {[
              "Cómo acompañar las preguntas de tus hijos sin dar respuestas cerradas",
              "Herramientas para fomentar el pensamiento crítico en casa",
              "Técnicas para crear espacios de reflexión en familia",
              "Cómo transformar cada pregunta en una oportunidad de diálogo",
            ].map((item, index) => (
              <li
                key={index}
                id={`taller-padres-learn-${String(index + 1).padStart(3, "0")}`}
                className="flex items-start gap-3"
              >
                <span className="mt-1 w-5 h-5 rounded-full bg-naranja/20 flex items-center justify-center flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-naranja" />
                </span>
                <span className="text-purpura/80">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-purpura mb-4">¿Qué lograrán tus hijos?</h2>
          <ul className="space-y-3">
            {[
              "Respetar opiniones diferentes",
              "Desarrollar empatía",
              "Construir argumentos sólidos",
              "Pensar por sí mismos",
              "Atreverse a preguntar incluso lo que parece obvio",
            ].map((item, index) => (
              <li
                key={index}
                id={`taller-padres-benefit-${String(index + 1).padStart(3, "0")}`}
                className="flex items-start gap-3"
              >
                <span className="mt-1 w-5 h-5 rounded-full bg-verde/20 flex items-center justify-center flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-verde" />
                </span>
                <span className="text-purpura/80">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-purpura mb-4">¿Cómo funciona?</h2>
          <div className="bg-white rounded-2xl p-6 border border-amarillo/30">
            <ul className="space-y-4 text-purpura/80">
              <li><strong>Formato:</strong> Sesiones prácticas y vivenciales</li>
              <li><strong>Modalidad:</strong> Presencial y/o en línea</li>
              <li><strong>Duración:</strong> Programa completo de varias sesiones</li>
            </ul>
          </div>
        </section>

        <section className="bg-cyan/10 rounded-2xl p-8 border border-cyan/30">
          <blockquote className="text-lg text-purpura italic">
            &quot;Vivimos en un mundo que cambia cada segundo: redes sociales, tecnología,
            inteligencia artificial... Ahora más que nunca, necesitamos que nuestros hijos
            aprendan a reflexionar, a escuchar sin juzgar, y a formar su propio criterio.&quot;
          </blockquote>
        </section>
      </div>
    </TallerLayout>
  );
}
