import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { VIDEO_PATH, VIDEO_POSTER } from "@/lib/constants";

export function VideoSection() {
  return (
    <section id="video" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute w-96 h-96 bg-cyan/15 rounded-full blur-[100px] -top-40 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-cyan font-semibold text-sm uppercase tracking-widest mb-4">
            Ve el impacto
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-purpura mb-6 leading-tight">
            ¿Alguna vez tus hijos te han hecho preguntas difíciles?
          </h2>
          <p className="text-lg md:text-xl text-purpura/80 max-w-2xl mx-auto leading-relaxed">
            Descubre cómo transformar cada pregunta en una oportunidad
            para el diálogo y el aprendizaje.
          </p>
        </div>

        <div className="relative">
          {/* Video frame decoration */}
          <div className="absolute -inset-4 bg-gradient-to-br from-naranja/20 via-amarillo/20 to-cyan/20 rounded-3xl blur-xl" />
          <div className="relative">
            <VideoEmbed
              id="video-promo-001"
              src={VIDEO_PATH}
              poster={VIDEO_POSTER}
              title="Video promocional - Filosofía para Niños"
            />
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-purpura/60 text-base italic">
            Taller de Filosofía para Niños dirigido a mamás y papás
          </p>
        </div>
      </div>
    </section>
  );
}
