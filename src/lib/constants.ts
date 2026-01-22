export const COLORS = {
  naranja: "#FFBF47",
  verde: "#C8CC69",
  amarillo: "#FFEC9D",
  purpura: "#6B6380",
  cyan: "#8BE0E6",
} as const;

export const SITE_CONFIG = {
  name: "Filosofos Somos Todos",
  description: "Talleres de Filosofía para Niños basados en el programa de Matthew Lipman",
  url: "https://filosofossomostodos.com",
} as const;

export const NAV_LINKS = [
  { href: "#que-es", label: "¿Qué es FpN?" },
  { href: "#talleres", label: "Talleres" },
  { href: "/faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const WORKSHOPS = [
  {
    id: "padres",
    title: "Taller para Padres y Madres",
    audience: "Familias con niños de 4 a 12 años",
    description: "Aprende herramientas para acompañar las preguntas de tus hijos, fomentar el diálogo filosófico en casa y crear espacios de reflexión en familia.",
    href: "/taller-padres",
    comingSoon: false,
  },
  {
    id: "maestros",
    title: "Taller para Educadores",
    audience: "Maestros de preescolar y primaria",
    description: "Integra el diálogo filosófico en tu práctica docente. Herramientas pedagógicas para crear comunidades de indagación en el aula.",
    href: "/taller-maestros",
    comingSoon: false,
  },
  {
    id: "principito",
    title: "Taller El Principito",
    audience: "Familias y educadores",
    description: "Un viaje filosófico a través de la obra de Saint-Exupéry. Explora las grandes preguntas de la vida junto a los más pequeños.",
    href: "/taller-principito",
    comingSoon: true,
  },
] as const;

export const BENEFITS = [
  "Pensamiento crítico",
  "Empatía y escucha activa",
  "Argumentación y diálogo",
  "Curiosidad como motor de aprendizaje",
] as const;

export const VIDEO_PATH = "/videos/promo.mp4";
export const VIDEO_POSTER = "/videos/poster.jpg";

export const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true";

// URL del Web App de Google Apps Script para el formulario personalizado
// Reemplaza con tu URL después de hacer deploy del script
export const GOOGLE_SHEETS_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbxd9SHFlIHOjFY79rIUmTaDt7fJre_atH0Bb5Sb7ZuG4ORYCCdw16BOMK7e_3KQY8EV/exec";

// URL del Web App para el newsletter (puedes usar el mismo script con una hoja diferente)
// Reemplaza con tu URL después de hacer deploy del script
export const NEWSLETTER_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbxdrZoHphomW275AndY_uy_ryKUuAOdCklYsH-1bgvPQfgpvuoib57ja9hK53SFcUEC/exec";

export const FAQ_CATEGORIES = [
  { id: "talleres", label: "Sobre los Talleres" },
  { id: "metodologia", label: "Sobre la Metodología" },
] as const;

export const FAQ_ITEMS = [
  {
    id: "faq-talleres-001",
    category: "talleres",
    question: "¿Para qué edades son los talleres?",
    answer: "Nuestros talleres están diseñados para niños de 4 a 12 años. Organizamos grupos por rangos de edad para adaptar las dinámicas y el nivel de las discusiones filosóficas a cada etapa del desarrollo.",
  },
  {
    id: "faq-talleres-002",
    category: "talleres",
    question: "¿Cuánto duran las sesiones y con qué frecuencia son?",
    answer: "Cada sesión dura entre 45 y 60 minutos, dependiendo del grupo de edad. Los talleres tienen frecuencia semanal, lo que permite dar continuidad al proceso de reflexión y diálogo filosófico.",
  },
  {
    id: "faq-talleres-003",
    category: "talleres",
    question: "¿Son presenciales u online?",
    answer: "Ofrecemos ambas modalidades. Los talleres presenciales se realizan en espacios adaptados para el diálogo, mientras que los talleres online utilizan herramientas interactivas para mantener la participación activa.",
  },
  {
    id: "faq-talleres-004",
    category: "talleres",
    question: "¿Cuál es el costo de los talleres?",
    answer: "El costo varía según la modalidad y duración del programa. Contáctanos a través del formulario para recibir información detallada sobre precios y opciones de pago disponibles.",
  },
  {
    id: "faq-talleres-005",
    category: "talleres",
    question: "¿Cómo me inscribo?",
    answer: "Puedes inscribirte completando el formulario de contacto en nuestra página. Nos pondremos en contacto contigo para confirmar disponibilidad y coordinar los detalles del taller que te interese.",
  },
  {
    id: "faq-talleres-006",
    category: "talleres",
    question: "¿Los padres participan en las sesiones?",
    answer: "Depende del taller. En el Taller para Padres, los adultos son los participantes principales y aprenden herramientas para facilitar el diálogo en casa. En los talleres para niños, los padres pueden observar sesiones específicas.",
  },
  {
    id: "faq-metodologia-001",
    category: "metodologia",
    question: "¿Qué es la Filosofía para Niños (FpN)?",
    answer: "La Filosofía para Niños es un programa educativo que desarrolla el pensamiento crítico, creativo y ético a través del diálogo filosófico. Utiliza cuentos y preguntas para que los niños exploren ideas sobre la amistad, la justicia, la verdad y otros temas fundamentales.",
  },
  {
    id: "faq-metodologia-002",
    category: "metodologia",
    question: "¿Quién es Matthew Lipman y por qué es importante su método?",
    answer: "Matthew Lipman fue un filósofo estadounidense que en los años 70 creó el programa de Filosofía para Niños. Su método revolucionó la educación al demostrar que los niños pueden y deben pensar filosóficamente, desarrollando habilidades que los acompañarán toda la vida.",
  },
  {
    id: "faq-metodologia-003",
    category: "metodologia",
    question: "¿Qué habilidades desarrolla en los niños?",
    answer: "El programa desarrolla pensamiento crítico, capacidad de argumentación, escucha activa, empatía, creatividad y curiosidad intelectual. Los niños aprenden a formular preguntas, evaluar razones y construir ideas en comunidad.",
  },
  {
    id: "faq-metodologia-004",
    category: "metodologia",
    question: "¿Mi hijo es muy pequeño para filosofar?",
    answer: "¡Para nada! Los niños son filósofos naturales desde muy temprana edad. Sus preguntas sobre el mundo, la vida y las relaciones son genuinamente filosóficas. Desde los 4 años pueden participar en diálogos adaptados a su nivel.",
  },
  {
    id: "faq-metodologia-005",
    category: "metodologia",
    question: "¿En qué se diferencia de la educación tradicional?",
    answer: "Mientras la educación tradicional se centra en transmitir respuestas, la FpN se enfoca en formular buenas preguntas. En lugar de memorizar, los niños dialogan. En lugar de competir, construyen ideas juntos en una comunidad de indagación.",
  },
  {
    id: "faq-metodologia-006",
    category: "metodologia",
    question: "¿Cómo puedo apoyar el pensamiento filosófico en casa?",
    answer: "Escucha las preguntas de tus hijos sin apresurarte a dar respuestas. Pregunta '¿tú qué piensas?' y '¿por qué crees eso?'. Explora juntos las ideas sin juzgar. Nuestro Taller para Padres te da herramientas específicas para esto.",
  },
] as const;
