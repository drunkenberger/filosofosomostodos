# Diseño: Sección FAQ para Filosofos Somos Todos

**Fecha:** 2026-01-21
**Estado:** Aprobado

---

## Resumen

Agregar una sección de preguntas frecuentes (FAQ) al sitio con dos propósitos:
1. Resolver dudas prácticas sobre los talleres
2. Explicar la metodología de Filosofía para Niños (FpN)

---

## Ubicación

- **Landing page:** Sección resumida con 6 preguntas (3 por categoría) + link a página completa
- **Página dedicada `/faq`:** Versión completa con las 12 preguntas

**Posición en landing:** Después de Video, antes de Contact

---

## Arquitectura

### Componentes a crear

```
src/components/
├── ui/
│   ├── Tabs.tsx          # Componente de tabs reutilizable
│   └── Accordion.tsx     # Componente de acordeón reutilizable
├── sections/
│   └── FAQ.tsx           # Sección FAQ para landing (versión resumida)

app/faq/page.tsx          # Página dedicada completa
```

### Flujo de datos

- Preguntas/respuestas definidas en `constants.ts`
- Ambas ubicaciones consumen los mismos datos
- Landing filtra para mostrar solo las 3 primeras de cada categoría

---

## Diseño Visual

### Tabs

- Dos pestañas: "Sobre los Talleres" y "Sobre la Metodología"
- Estilo pill/redondeado
- Tab activo: fondo `warm-orange` (#FFBF47) con texto oscuro
- Tab inactivo: fondo transparente con borde sutil

### Acordeón

- Pregunta con icono `+` que rota a `×` al expandir
- Fondo glassmorphism sutil
- Animación suave de altura (300ms ease)
- Solo una respuesta abierta a la vez dentro de cada tab

### Decoración

- Blob flotante decorativo en esquina
- Heading con gradiente de texto
- Contenedor max-width 900px

### Colores

- Fondo sección: crema (`#FFFDF8`)
- Texto preguntas: grayish-purple (`#6B6380`)
- Acentos: warm-orange y olive-green

### Responsivo

- Tabs apilados verticalmente en móvil
- Acordeón ancho completo con padding reducido

---

## Animaciones

### Entrada (ScrollReveal)

- Heading: fade-in desde abajo
- Tabs: delay stagger 100ms
- Acordeón items: stagger 50ms

### Interacción Tabs

- Sliding pill indicator
- Crossfade de contenido (150ms)
- Sin salto de altura

### Interacción Acordeón

- Rotación de ícono (0° → 45°)
- Expansión con `grid-template-rows`
- Auto-colapso de respuesta anterior
- Hover: cambio de fondo sutil

### Accesibilidad

- Soporte teclado completo
- ARIA: `aria-expanded`, `aria-controls`, `role="tablist"`
- Respeta `prefers-reduced-motion`

---

## Contenido

### Tab 1: Sobre los Talleres

1. ¿Para qué edades son los talleres?
2. ¿Cuánto duran las sesiones y con qué frecuencia son?
3. ¿Son presenciales u online?
4. ¿Cuál es el costo de los talleres?
5. ¿Cómo me inscribo?
6. ¿Los padres participan en las sesiones?

### Tab 2: Sobre la Metodología FpN

1. ¿Qué es la Filosofía para Niños (FpN)?
2. ¿Quién es Matthew Lipman y por qué es importante su método?
3. ¿Qué habilidades desarrolla en los niños?
4. ¿Mi hijo es muy pequeño para filosofar?
5. ¿En qué se diferencia de la educación tradicional?
6. ¿Cómo puedo apoyar el pensamiento filosófico en casa?

---

## Navegación

- Nuevo enlace "FAQ" en Header
- Botón "Ver todas las preguntas" en landing → `/faq`

---

## Archivos a modificar

1. Crear `src/components/ui/Tabs.tsx`
2. Crear `src/components/ui/Accordion.tsx`
3. Crear `src/components/sections/FAQ.tsx`
4. Crear `app/faq/page.tsx`
5. Actualizar `src/lib/constants.ts` - agregar FAQ data
6. Actualizar `src/components/layout/Header.tsx` - agregar enlace
7. Actualizar `app/page.tsx` - agregar sección FAQ
8. Actualizar `ELEMENT_IDS.md` - documentar nuevos IDs
