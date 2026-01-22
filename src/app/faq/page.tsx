import { FAQ } from "@/components/sections/FAQ";

export const metadata = {
  title: "Preguntas Frecuentes | Filósofos Somos Todos",
  description: "Resuelve tus dudas sobre nuestros talleres de Filosofía para Niños y la metodología de Matthew Lipman.",
};

export default function FAQPage() {
  return (
    <main className="pt-24">
      <FAQ showAll />
    </main>
  );
}
