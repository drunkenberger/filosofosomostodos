interface GoogleFormEmbedProps {
  formUrl: string;
  title?: string;
  id?: string;
}

export function GoogleFormEmbed({
  formUrl,
  title = "Formulario de contacto",
  id
}: GoogleFormEmbedProps) {
  return (
    <div id={id} className="w-full max-w-2xl mx-auto">
      <iframe
        src={formUrl}
        width="100%"
        height="800"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title={title}
        className="rounded-lg"
      >
        Cargando formulario...
      </iframe>
    </div>
  );
}
