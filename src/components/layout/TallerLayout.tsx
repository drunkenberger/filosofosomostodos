import { Button } from "@/components/ui/Button";

interface TallerLayoutProps {
  id: string;
  title: string;
  subtitle: string;
  audience: string;
  children: React.ReactNode;
  comingSoon?: boolean;
}

export function TallerLayout({
  id,
  title,
  subtitle,
  audience,
  children,
  comingSoon,
}: TallerLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amarillo/20 to-white">
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button href="/" variant="outline" size="sm" id={`${id}-back-001`}>
              ← Volver al inicio
            </Button>
          </div>

          {comingSoon && (
            <span className="inline-block bg-cyan text-purpura text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Próximamente
            </span>
          )}

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purpura mb-4">
            {title}
          </h1>

          <p className="text-xl text-purpura/80 mb-2">{subtitle}</p>

          <p className="text-verde font-medium mb-8">{audience}</p>

          {children}

          {!comingSoon && (
            <div className="mt-12 text-center">
              <Button href="/#contacto" size="lg" id={`${id}-cta-001`}>
                Inscribirme en este taller
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
