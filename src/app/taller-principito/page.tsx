import { TallerLayout } from "@/components/layout/TallerLayout";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taller El Principito (Próximamente) | Filósofos Somos Todos",
  description: "Un viaje filosófico a través de la obra de Saint-Exupéry. Próximamente.",
};

const EXPLORE_ITEMS = [
  "Los vínculos y la amistad a través de la historia del Principito y el zorro",
  'El valor de lo esencial: "Lo esencial es invisible a los ojos"',
  "La responsabilidad hacia lo que hemos domesticado",
  "El sentido de la vida y las prioridades de los adultos",
  "La imaginación como herramienta filosófica",
];

export default function TallerPrincipitoPage() {
  return (
    <TallerLayout
      id="taller-principito"
      title="Taller El Principito"
      subtitle="Un viaje filosófico a través de la obra de Saint-Exupéry"
      audience="Dirigido a familias y educadores"
      comingSoon
    >
      <div className="space-y-12">
        <section className="bg-cyan/10 rounded-2xl p-8 border border-cyan/30">
          <p className="text-lg text-purpura text-center">
            Estamos preparando algo especial para ti. Este taller explorará las grandes
            preguntas de la vida a través de la obra más querida de Antoine de Saint-Exupéry.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-purpura mb-4">¿Qué exploraremos?</h2>
          <ul className="space-y-3">
            {EXPLORE_ITEMS.map((item, index) => (
              <li
                key={index}
                id={`taller-principito-explore-${String(index + 1).padStart(3, "0")}`}
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
          <h2 className="text-2xl font-bold text-purpura mb-4">¿Para quién es?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-amarillo/30">
              <h3 className="font-semibold text-purpura mb-2">Para familias</h3>
              <p className="text-purpura/80 text-sm">
                Una experiencia compartida entre padres e hijos para dialogar sobre
                las preguntas más importantes de la vida.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-amarillo/30">
              <h3 className="font-semibold text-purpura mb-2">Para educadores</h3>
              <p className="text-purpura/80 text-sm">
                Herramientas para usar El Principito como recurso filosófico en el aula.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold text-purpura mb-4">
            ¿Te interesa este taller?
          </h2>
          <p className="text-purpura/80 mb-6">
            Déjanos tus datos y te avisaremos cuando esté disponible.
          </p>
          <Button href="/#contacto" size="lg" id="taller-principito-waitlist-001">
            Unirme a la lista de espera
          </Button>
        </section>
      </div>
    </TallerLayout>
  );
}
