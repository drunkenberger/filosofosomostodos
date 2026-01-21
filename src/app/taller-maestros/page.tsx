import { TallerLayout } from "@/components/layout/TallerLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taller para Educadores | Filósofos Somos Todos",
  description: "Herramientas pedagógicas para integrar el diálogo filosófico en preescolar y primaria.",
};

export default function TallerMaestrosPage() {
  return (
    <TallerLayout
      id="taller-maestros"
      title="Taller para Educadores"
      subtitle="Integra el diálogo filosófico en tu práctica docente"
      audience="Dirigido a maestros de preescolar y primaria"
    >
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-purpura mb-4">¿Para quién es este taller?</h2>
          <p className="text-purpura/80">
            Diseñado para educadores que buscan herramientas pedagógicas innovadoras para
            desarrollar el pensamiento crítico en sus alumnos. Basado en el programa de
            Filosofía para Niños de Matthew Lipman, este taller te dará las herramientas
            para crear comunidades de indagación en el aula.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-purpura mb-4">¿Qué aprenderás?</h2>
          <ul className="space-y-3">
            {[
              "Fundamentos del programa de Filosofía para Niños",
              "Cómo facilitar comunidades de indagación",
              "Técnicas para formular preguntas que inviten a la reflexión",
              "Estrategias para integrar el diálogo filosófico en el currículo",
              "Manejo del diálogo y la diversidad de opiniones en el aula",
            ].map((item, index) => (
              <li
                key={index}
                id={`taller-maestros-learn-${String(index + 1).padStart(3, "0")}`}
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
          <h2 className="text-2xl font-bold text-purpura mb-4">Beneficios para tu práctica docente</h2>
          <ul className="space-y-3">
            {[
              "Herramientas para desarrollar pensamiento crítico",
              "Mejora del clima de respeto y escucha en el aula",
              "Alumnos más participativos y reflexivos",
              "Integración transversal con otras materias",
              "Comunidad de práctica con otros educadores",
            ].map((item, index) => (
              <li
                key={index}
                id={`taller-maestros-benefit-${String(index + 1).padStart(3, "0")}`}
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
              <li><strong>Formato:</strong> Sesiones teórico-prácticas</li>
              <li><strong>Modalidad:</strong> Presencial y/o en línea</li>
              <li><strong>Incluye:</strong> Material didáctico y recursos para el aula</li>
              <li><strong>Certificación:</strong> Constancia de participación</li>
            </ul>
          </div>
        </section>

        <section className="bg-cyan/10 rounded-2xl p-8 border border-cyan/30">
          <blockquote className="text-lg text-purpura italic">
            &quot;¿Alguna vez te has preguntado qué puedes hacer para mejorar el mundo?
            Quizás todo empiece... por enseñar a pensar.&quot;
          </blockquote>
        </section>
      </div>
    </TallerLayout>
  );
}
