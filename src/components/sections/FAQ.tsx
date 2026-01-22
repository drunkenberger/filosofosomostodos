"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Tabs } from "@/components/ui/Tabs";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { FAQ_CATEGORIES, FAQ_ITEMS } from "@/lib/constants";

interface FAQProps {
  showAll?: boolean;
}

export function FAQ({ showAll = false }: FAQProps) {
  const getItemsForCategory = (categoryId: string) => {
    const items = FAQ_ITEMS.filter((item) => item.category === categoryId);
    return showAll ? items : items.slice(0, 3);
  };

  return (
    <section
      id="faq"
      className="py-24 md:py-32 bg-gradient-to-b from-white via-amarillo/5 to-amarillo/15 relative overflow-hidden"
    >
      <div className="absolute w-[500px] h-[500px] bg-naranja/10 rounded-full blur-[120px] -top-40 -right-40" />
      <div className="absolute w-[400px] h-[400px] bg-cyan/10 rounded-full blur-[100px] bottom-0 -left-40" />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <span className="inline-block text-naranja-vibrante font-semibold text-sm uppercase tracking-widest mb-4">
              Resolvemos tus dudas
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-purpura mb-6 leading-tight">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg md:text-xl text-purpura/80 max-w-2xl mx-auto leading-relaxed">
              Encuentra respuestas sobre nuestros talleres y la metodología de
              Filosofía para Niños.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <Tabs
            tabs={FAQ_CATEGORIES.map((cat) => ({ id: cat.id, label: cat.label }))}
            defaultTab="talleres"
          >
            {(activeTab) => (
              <Accordion
                items={getItemsForCategory(activeTab).map((item) => ({
                  id: item.id,
                  question: item.question,
                  answer: item.answer,
                }))}
              />
            )}
          </Tabs>
        </ScrollReveal>

        {!showAll && (
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center mt-10">
              <Button href="/faq" variant="outline" id="faq-view-all-001">
                Ver todas las preguntas
              </Button>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
