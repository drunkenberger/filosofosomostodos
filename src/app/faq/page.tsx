import { FAQ } from "@/components/sections/FAQ";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata = {
  title: "Preguntas Frecuentes | Filósofos Somos Todos",
  description: "Resuelve tus dudas sobre nuestros talleres de Filosofía para Niños y la metodología de Matthew Lipman.",
};

export default function FAQPage() {
  return (
    <main className="pt-24 bg-white min-h-screen">
      <FAQ showAll />
      <ContactForm />
    </main>
  );
}
