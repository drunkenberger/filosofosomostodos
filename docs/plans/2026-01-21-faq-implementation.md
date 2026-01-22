# FAQ Section Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a FAQ section with tabs and accordion to both the landing page (summary) and a dedicated /faq page (complete).

**Architecture:** Create reusable Tabs and Accordion components in ui/, a FAQ section component for landing, and a dedicated FAQ page. All FAQ data lives in constants.ts.

**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS, existing ScrollReveal component

---

## Task 1: Add FAQ Data to Constants

**Files:**
- Modify: `src/lib/constants.ts:64` (end of file)

**Step 1: Add FAQ data structure**

Add at the end of `constants.ts`:

```typescript
export const FAQ_CATEGORIES = [
  { id: "talleres", label: "Sobre los Talleres" },
  { id: "metodologia", label: "Sobre la Metodología" },
] as const;

export const FAQ_ITEMS = [
  // Talleres
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
  // Metodología
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
```

**Step 2: Verify the file compiles**

Run: `cd "/Users/santiagogonzalez/BOTS y SCRIPTS/filosofos-somos-todos" && npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add src/lib/constants.ts
git commit -m "feat(faq): add FAQ data to constants"
```

---

## Task 2: Create Tabs Component

**Files:**
- Create: `src/components/ui/Tabs.tsx`

**Step 1: Create the Tabs component**

```typescript
"use client";

import { useState, ReactNode } from "react";

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  children: (activeTab: string) => ReactNode;
  defaultTab?: string;
  className?: string;
}

export function Tabs({ tabs, children, defaultTab, className = "" }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div className={className}>
      {/* Tab buttons */}
      <div
        className="flex flex-col sm:flex-row gap-2 sm:gap-1 p-1 bg-purpura/5 rounded-full mb-8 max-w-md mx-auto"
        role="tablist"
        aria-label="FAQ categories"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-naranja text-purpura shadow-md"
                : "text-purpura/70 hover:text-purpura hover:bg-purpura/5"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className="transition-opacity duration-150"
      >
        {children(activeTab)}
      </div>
    </div>
  );
}
```

**Step 2: Verify TypeScript compiles**

Run: `cd "/Users/santiagogonzalez/BOTS y SCRIPTS/filosofos-somos-todos" && npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add src/components/ui/Tabs.tsx
git commit -m "feat(ui): create reusable Tabs component"
```

---

## Task 3: Create Accordion Component

**Files:**
- Create: `src/components/ui/Accordion.tsx`

**Step 1: Create the Accordion component**

```typescript
"use client";

import { useState } from "react";

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className = "" }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className="bg-white/60 backdrop-blur-sm border border-purpura/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-purpura/20"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <button
              id={item.id}
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`content-${item.id}`}
              className="w-full flex items-center justify-between p-5 text-left transition-colors duration-200 group"
            >
              <span className="font-medium text-purpura pr-4 group-hover:text-purpura/80">
                {item.question}
              </span>
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full bg-naranja/10 flex items-center justify-center transition-all duration-300 ${
                  isOpen ? "rotate-45 bg-naranja/20" : ""
                }`}
              >
                <svg
                  className="w-4 h-4 text-naranja"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </span>
            </button>

            <div
              id={`content-${item.id}`}
              role="region"
              aria-labelledby={item.id}
              className="grid transition-all duration-300 ease-out"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
              }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-purpura/70 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
```

**Step 2: Verify TypeScript compiles**

Run: `cd "/Users/santiagogonzalez/BOTS y SCRIPTS/filosofos-somos-todos" && npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add src/components/ui/Accordion.tsx
git commit -m "feat(ui): create reusable Accordion component"
```

---

## Task 4: Create FAQ Section for Landing Page

**Files:**
- Create: `src/components/sections/FAQ.tsx`

**Step 1: Create the FAQ section component**

```typescript
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
      className="py-24 md:py-32 bg-crema relative overflow-hidden"
    >
      {/* Decorative blob */}
      <div className="absolute w-80 h-80 bg-verde/10 rounded-full blur-[100px] -top-20 -right-20" />
      <div className="absolute w-64 h-64 bg-naranja/10 rounded-full blur-[80px] bottom-20 -left-20" />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <span className="inline-block text-verde font-semibold text-sm uppercase tracking-widest mb-4">
              Resolvemos tus dudas
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-purpura mb-6 leading-tight">
              Preguntas{" "}
              <span className="bg-gradient-to-r from-naranja to-cyan bg-clip-text text-transparent">
                Frecuentes
              </span>
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
              <Button
                href="/faq"
                variant="outline"
                id="faq-view-all-001"
              >
                Ver todas las preguntas
              </Button>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
```

**Step 2: Verify TypeScript compiles**

Run: `cd "/Users/santiagogonzalez/BOTS y SCRIPTS/filosofos-somos-todos" && npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add src/components/sections/FAQ.tsx
git commit -m "feat(sections): create FAQ section component"
```

---

## Task 5: Add FAQ Section to Landing Page

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Import and add FAQ section**

Update `src/app/page.tsx` to:

```typescript
import { Hero } from "@/components/sections/Hero";
import { AboutFpN } from "@/components/sections/AboutFpN";
import { Stats } from "@/components/sections/Stats";
import { Workshops } from "@/components/sections/Workshops";
import { VideoSection } from "@/components/sections/VideoSection";
import { FAQ } from "@/components/sections/FAQ";
import { ContactForm } from "@/components/sections/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutFpN />
      <Stats />
      <Workshops />
      <VideoSection />
      <FAQ />
      <ContactForm />
    </>
  );
}
```

**Step 2: Verify dev server runs**

Run: `cd "/Users/santiagogonzalez/BOTS y SCRIPTS/filosofos-somos-todos" && npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat(landing): add FAQ section after video"
```

---

## Task 6: Create Dedicated FAQ Page

**Files:**
- Create: `src/app/faq/page.tsx`

**Step 1: Create the FAQ page**

```typescript
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
```

**Step 2: Verify the page renders**

Run: `cd "/Users/santiagogonzalez/BOTS y SCRIPTS/filosofos-somos-todos" && npm run build`
Expected: Build succeeds, /faq page is generated

**Step 3: Commit**

```bash
git add src/app/faq/page.tsx
git commit -m "feat(pages): create dedicated FAQ page"
```

---

## Task 7: Add FAQ Link to Navigation

**Files:**
- Modify: `src/lib/constants.ts:15-20`

**Step 1: Update NAV_LINKS**

Change NAV_LINKS in `constants.ts` from:

```typescript
export const NAV_LINKS = [
  { href: "#que-es", label: "¿Qué es FpN?" },
  { href: "#talleres", label: "Talleres" },
  { href: "#video", label: "Video" },
  { href: "#contacto", label: "Contacto" },
] as const;
```

To:

```typescript
export const NAV_LINKS = [
  { href: "#que-es", label: "¿Qué es FpN?" },
  { href: "#talleres", label: "Talleres" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
] as const;
```

**Step 2: Verify build**

Run: `cd "/Users/santiagogonzalez/BOTS y SCRIPTS/filosofos-somos-todos" && npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add src/lib/constants.ts
git commit -m "feat(nav): add FAQ link to navigation"
```

---

## Task 8: Update ELEMENT_IDS.md

**Files:**
- Modify: `ELEMENT_IDS.md`

**Step 1: Add new FAQ element IDs**

Add new section to `ELEMENT_IDS.md`:

```markdown
## Sección FAQ

| ID | Componente | Descripción | Archivo | Sección |
|----|-----------|-------------|---------|----------|
| faq-view-all-001 | FAQ | Botón "Ver todas las preguntas" | src/components/sections/FAQ.tsx | Landing |
| faq-talleres-001 | Accordion | Pregunta: ¿Para qué edades son los talleres? | src/lib/constants.ts | FAQ |
| faq-talleres-002 | Accordion | Pregunta: ¿Cuánto duran las sesiones? | src/lib/constants.ts | FAQ |
| faq-talleres-003 | Accordion | Pregunta: ¿Son presenciales u online? | src/lib/constants.ts | FAQ |
| faq-talleres-004 | Accordion | Pregunta: ¿Cuál es el costo? | src/lib/constants.ts | FAQ |
| faq-talleres-005 | Accordion | Pregunta: ¿Cómo me inscribo? | src/lib/constants.ts | FAQ |
| faq-talleres-006 | Accordion | Pregunta: ¿Los padres participan? | src/lib/constants.ts | FAQ |
| faq-metodologia-001 | Accordion | Pregunta: ¿Qué es la FpN? | src/lib/constants.ts | FAQ |
| faq-metodologia-002 | Accordion | Pregunta: ¿Quién es Matthew Lipman? | src/lib/constants.ts | FAQ |
| faq-metodologia-003 | Accordion | Pregunta: ¿Qué habilidades desarrolla? | src/lib/constants.ts | FAQ |
| faq-metodologia-004 | Accordion | Pregunta: ¿Mi hijo es muy pequeño? | src/lib/constants.ts | FAQ |
| faq-metodologia-005 | Accordion | Pregunta: ¿En qué se diferencia? | src/lib/constants.ts | FAQ |
| faq-metodologia-006 | Accordion | Pregunta: ¿Cómo apoyar en casa? | src/lib/constants.ts | FAQ |
```

Also update Header navigation IDs (add FAQ between Video and Contacto):

```markdown
| header-nav-003 | Header | Link navegación "FAQ" | src/components/layout/Header.tsx | 35 |
| header-nav-004 | Header | Link navegación "Contacto" | src/components/layout/Header.tsx | 35 |
| header-nav-mobile-003 | Header | Link móvil "FAQ" | src/components/layout/Header.tsx | 49 |
| header-nav-mobile-004 | Header | Link móvil "Contacto" | src/components/layout/Header.tsx | 49 |
```

**Step 2: Commit**

```bash
git add ELEMENT_IDS.md
git commit -m "docs: update ELEMENT_IDS with FAQ component IDs"
```

---

## Task 9: Final Verification

**Step 1: Run full build**

Run: `cd "/Users/santiagogonzalez/BOTS y SCRIPTS/filosofos-somos-todos" && npm run build`
Expected: Build succeeds with no errors

**Step 2: Run dev server and test manually**

Run: `cd "/Users/santiagogonzalez/BOTS y SCRIPTS/filosofos-somos-todos" && npm run dev`

Test checklist:
- [ ] FAQ section visible on landing page after Video section
- [ ] Tabs switch between "Sobre los Talleres" and "Sobre la Metodología"
- [ ] Accordion items expand/collapse on click
- [ ] Only one accordion item open at a time
- [ ] "Ver todas las preguntas" button links to /faq
- [ ] /faq page shows all 12 questions (6 per category)
- [ ] FAQ link in header navigation works
- [ ] Responsive on mobile (tabs stack, accordion adapts)

**Step 3: Update CHANGE_LOG.md**

Add entry:
```
[2026-01-21] feat: Add FAQ section with tabs and accordion | Archivos: constants.ts, Tabs.tsx, Accordion.tsx, FAQ.tsx, page.tsx, faq/page.tsx, ELEMENT_IDS.md | Estado: ✅ Exitoso
```

**Step 4: Final commit**

```bash
git add CHANGE_LOG.md
git commit -m "docs: update CHANGE_LOG with FAQ implementation"
```
