# Diseño: Reestructuración de Layout (Estilo Nivora)

**Fecha:** 2026-01-20
**Referencia:** https://nivora.framer.website/
**Objetivo:** Adoptar la estructura y layout de Nivora manteniendo la paleta de colores actual

---

## Resumen de Cambios

| Aspecto | Actual | Nuevo |
|---------|--------|-------|
| Ancho máximo | 1152px (max-w-6xl) | 1600px |
| Hero height | 90vh | 100vh |
| Section padding | py-24/32 | py-32/40 |
| Padding horizontal móvil | px-4 | px-6 |
| Grid gaps | gap-8/12 | gap-10/16/24 |

---

## Cambios por Componente

### 1. Globales (globals.css + tailwind.config.ts)

**Nuevo utility class:**
```css
.section-padding-lg {
  @apply py-32 md:py-40;
}
```

**Container expandido:**
- Reemplazar `max-w-6xl` por `max-w-[1600px]` en todos los componentes

---

### 2. Hero.tsx

- `min-h-[90vh]` → `min-h-screen`
- Container: `max-w-6xl` → `max-w-[1600px]`
- Título margin: `mb-8` → `mb-12`
- Subtítulo max-width: `max-w-3xl` → `max-w-4xl`
- Padding horizontal: `px-4` → `px-6`

---

### 3. Header.tsx

- Nav container: `max-w-6xl` → `max-w-[1600px]`
- Padding horizontal: `px-4` → `px-6`

---

### 4. AboutFpN.tsx

- Container: `max-w-6xl` → `max-w-[1600px]`
- Grid gap: `gap-12 lg:gap-16` → `gap-16 lg:gap-24`
- Section class: `section-padding` → `section-padding-lg`
- Padding horizontal: `px-4` → `px-6`

---

### 5. Workshops.tsx

- Container: `max-w-6xl` → `max-w-[1600px]`
- Cards gap: `gap-8` → `gap-10`
- Título margin: `mb-16` → `mb-20`
- Section class: `section-padding` → `section-padding-lg`
- Padding horizontal: `px-4` → `px-6`

---

### 6. VideoSection.tsx

- Container: `max-w-6xl` → `max-w-[1600px]`
- Section class: `section-padding` → `section-padding-lg`
- Padding horizontal: `px-4` → `px-6`

---

### 7. ContactForm.tsx

- Container: `max-w-6xl` → `max-w-[1600px]`
- Formulario interno mantiene `max-w-2xl` centrado
- Section class: `section-padding` → `section-padding-lg`
- Padding horizontal: `px-4` → `px-6`

---

### 8. Footer.tsx

- Container: `max-w-6xl` → `max-w-[1600px]`
- Grid gap: `gap-12` → `gap-16`
- Padding vertical: `py-16` → `py-20`
- Padding horizontal: `px-4` → `px-6`

---

## Archivos a Modificar

1. `src/app/globals.css`
2. `src/components/layout/Header.tsx`
3. `src/components/layout/Footer.tsx`
4. `src/components/sections/Hero.tsx`
5. `src/components/sections/AboutFpN.tsx`
6. `src/components/sections/Workshops.tsx`
7. `src/components/sections/VideoSection.tsx`
8. `src/components/sections/ContactForm.tsx`

---

## Notas

- Se mantiene la paleta de colores actual (naranja, verde, amarillo, púrpura, cyan)
- Se mantienen las animaciones y efectos existentes
- Los decorative blobs se mantienen pero pueden necesitar ajuste de posición
