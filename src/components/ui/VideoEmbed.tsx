"use client";

interface VideoEmbedProps {
  src: string;
  poster?: string;
  title?: string;
  id?: string;
}

export function VideoEmbed({ src, poster, title = "Video promocional", id }: VideoEmbedProps) {
  return (
    <div id={id} className="relative w-full max-w-4xl mx-auto group">
      <div className="rounded-2xl overflow-hidden shadow-soft-lg bg-purpura/5">
        <video
          className="w-full aspect-video transition-transform duration-700 group-hover:scale-[1.01]"
          controls
          poster={poster}
          preload="metadata"
          playsInline
        >
          <source src={src} type="video/mp4" />
          <p>Tu navegador no soporta videos HTML5. Puedes <a href={src} className="text-naranja hover:underline">descargar el video</a>.</p>
        </video>
      </div>
      {title && (
        <p className="sr-only">{title}</p>
      )}
    </div>
  );
}
