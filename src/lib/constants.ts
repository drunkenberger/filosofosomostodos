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
  { href: "#video", label: "Video" },
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
