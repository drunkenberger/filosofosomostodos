import { Button } from "./Button";

interface CardProps {
  id?: string;
  title: string;
  audience: string;
  description: string;
  href: string;
  comingSoon?: boolean;
}

export function Card({ id, title, audience, description, href, comingSoon }: CardProps) {
  return (
    <article
      id={id}
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100 hover:-translate-y-2"
    >
      <div className="flex flex-col h-full">
        {comingSoon && (
          <span className="self-start bg-cyan text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6">
            Próximamente
          </span>
        )}

        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-naranja-vibrante/10 flex items-center justify-center mb-5 group-hover:bg-naranja-vibrante/20 transition-colors">
          <svg className="w-7 h-7 text-naranja-vibrante" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-purpura mb-2 group-hover:text-naranja-vibrante transition-colors">
          {title}
        </h3>

        <p className="text-sm text-naranja-vibrante font-semibold mb-4 uppercase tracking-wide">
          {audience}
        </p>

        <p className="text-purpura/70 mb-8 flex-grow leading-relaxed">
          {description}
        </p>

        <Button
          href={href}
          variant={comingSoon ? "outline" : "primary"}
          size="md"
          className="w-full"
          id={id ? `${id}-button` : undefined}
        >
          {comingSoon ? "Más información" : "Ver taller"}
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Button>
      </div>
    </article>
  );
}
