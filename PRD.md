# PRD - FilosofoSomosTodos

## 1. Resumen Ejecutivo

**Proyecto:** Sitio web promocional para talleres de Filosofia para Ninos
**Nombre:** FilosofoSomosTodos
**Objetivo:** Atraer padres, madres y maestros interesados en incorporar el dialogo filosofico en la educacion de ninos pequenos.

**Alcance:**
- Landing page principal con navegacion por secciones
- 3 paginas detalladas (una por cada taller)
- Formulario de contacto via Google Form embebido
- 2 videos promocionales (1 listo, 1 placeholder)
- Diseno responsivo mobile-first

**Stack tecnologico:** Next.js 14 + Tailwind CSS + TypeScript + Netlify

---

## 2. Paleta de Colores y Estilo Visual

### Colores principales:
| Color | Hex | Uso |
|-------|-----|-----|
| Naranja calido | #FFBF47 | CTAs, botones principales, acentos |
| Verde oliva | #C8CC69 | Elementos secundarios, iconos |
| Amarillo claro | #FFEC9D | Fondos suaves, highlights |
| Purpura grisaceo | #6B6380 | Textos, headers, elementos sobrios |
| Cyan/Turquesa | #8BE0E6 | Acentos, elementos interactivos |

### Estilo visual:
- Ilustraciones calidas y amigables (estilo infantil pero no infantilizado)
- Tipografia legible: sans-serif moderna para cuerpo
- Espaciado generoso, diseno limpio y aireado
- Iconos simples y consistentes

### Tono de voz:
- Calido, cercano, inspirador
- Preguntas retoricas para conectar emocionalmente
- Enfocado en beneficios concretos para los hijos
- Sin jerga academica excesiva
- **Sin testimoniales falsos ni estadisticas inventadas**

---

## 3. Estructura del Sitio

```
FilosofoSomosTodos/
|-- Landing Page (/)
|   |-- Hero - Propuesta de valor + CTA
|   |-- Que es Filosofia para Ninos? - Explicacion del metodo Lipman
|   |-- Nuestros Talleres - Cards de los 3 talleres
|   |-- Video promocional principal
|   |-- Formulario de contacto (Google Form)
|
|-- /taller-padres
|   |-- Pagina detallada del taller para padres y madres
|
|-- /taller-maestros
|   |-- Pagina detallada del taller para educadores
|
|-- /taller-principito (Coming Soon)
    |-- Pagina con informacion preliminar + lista de espera
```

---

## 4. Detalle de Secciones - Landing Page

### 4.1 Hero Section
- Titulo principal con pregunta retorica (ej: "Y si ensenar a pensar fuera el mejor regalo?")
- Subtitulo breve explicando la propuesta
- CTA principal: "Conoce nuestros talleres"
- Ilustracion o imagen de fondo suave

### 4.2 Que es Filosofia para Ninos?
- Explicacion clara del programa de Matthew Lipman
- Beneficios concretos:
  - Pensamiento critico
  - Empatia y escucha activa
  - Argumentacion y dialogo
  - Curiosidad como motor de aprendizaje
- Espacio para video secundario (placeholder por ahora)

### 4.3 Nuestros Talleres
- 3 cards con:
  - Titulo del taller
  - Audiencia objetivo
  - Descripcion breve (2-3 lineas)
  - Boton "Ver mas" hacia la pagina detallada
- El taller del Principito tendra badge "Proximamente"

### 4.4 Video Promocional
- Video principal embebido (el de papas)
- Diseno limpio, centrado, con controles visibles

### 4.5 Formulario de Contacto
- Google Form embebido
- Titulo invitando a la accion: "Listo para empezar?"
- Campos: Nombre, Email, Taller de interes, Mensaje

---

## 5. Paginas de Taller (Detalle)

### Estructura comun:
1. Header con titulo del taller
2. Para quien es? (audiencia especifica)
3. Que aprenderas? (lista de beneficios/temas)
4. Como funciona? (formato: sesiones, duracion, modalidad)
5. Video promocional (si aplica)
6. CTA: Boton hacia el formulario de contacto
7. Navegacion de regreso a landing

### Taller Padres:
- Enfocado en herramientas para el hogar
- Como acompanar preguntas sin dar respuestas cerradas
- Crear espacios de dialogo en familia

### Taller Maestros:
- Herramientas pedagogicas para el aula
- Integrar el dialogo filosofico en preescolar y primaria
- Comunidades de indagacion

### Taller Principito (Coming Soon):
- Teaser del contenido basado en la obra de Saint-Exupery
- Explicacion breve del enfoque filosofico
- Formulario de lista de espera

---

## 6. Arquitectura Tecnica

### Stack:
```
Next.js 14 (App Router)
|-- Tailwind CSS (estilos)
|-- TypeScript (tipado)
|-- Netlify (hosting)
```

### Estructura de carpetas:
```
filosofos-somos-todos/
|-- src/
|   |-- app/
|   |   |-- layout.tsx          # Layout principal
|   |   |-- page.tsx            # Landing page
|   |   |-- taller-padres/
|   |   |   |-- page.tsx
|   |   |-- taller-maestros/
|   |   |   |-- page.tsx
|   |   |-- taller-principito/
|   |       |-- page.tsx
|   |-- components/
|   |   |-- ui/                 # Botones, Cards, etc.
|   |   |-- layout/             # Header, Footer, Nav
|   |   |-- sections/           # Hero, Talleres, etc.
|   |-- lib/
|   |   |-- constants.ts        # Colores, textos, config
|   |-- styles/
|       |-- globals.css
|-- public/
|   |-- images/
|   |-- videos/
|-- tailwind.config.ts
|-- next.config.ts
|-- package.json
```

---

## 7. Plan de Implementacion

### Fase 1: Setup inicial
- [ ] Crear proyecto Next.js con Tailwind y TypeScript
- [ ] Configurar paleta de colores en tailwind.config.ts
- [ ] Crear estructura de carpetas
- [ ] Setup de fuentes y estilos base en globals.css

### Fase 2: Componentes base
- [ ] Header/Navegacion responsiva
- [ ] Footer con informacion de contacto
- [ ] Button component reutilizable
- [ ] Card component para talleres
- [ ] VideoEmbed component
- [ ] GoogleFormEmbed component

### Fase 3: Landing Page
- [ ] Hero section
- [ ] Seccion Filosofia para Ninos (explicacion Lipman)
- [ ] Seccion Cards de talleres
- [ ] Seccion Video promocional
- [ ] Seccion Formulario de contacto

### Fase 4: Paginas de talleres
- [ ] Template/Layout reutilizable para talleres
- [ ] Pagina Taller Padres
- [ ] Pagina Taller Maestros
- [ ] Pagina Taller Principito (coming soon)

### Fase 5: Responsive y pulido
- [ ] Ajustes para mobile (breakpoints)
- [ ] Optimizacion de imagenes/videos
- [ ] SEO basico (meta tags, Open Graph)
- [ ] Pruebas en diferentes dispositivos

### Fase 6: Deploy
- [ ] Configurar proyecto en Netlify
- [ ] Deploy inicial
- [ ] Pruebas en URL publica
- [ ] Ajustes finales

---

## 8. Archivos Criticos a Crear/Modificar

| Archivo | Proposito |
|---------|-----------|
| `src/app/layout.tsx` | Layout principal, fuentes, metadata |
| `src/app/page.tsx` | Landing page completa |
| `src/app/taller-padres/page.tsx` | Detalle taller padres |
| `src/app/taller-maestros/page.tsx` | Detalle taller maestros |
| `src/app/taller-principito/page.tsx` | Pagina coming soon |
| `src/components/ui/Button.tsx` | Boton reutilizable |
| `src/components/ui/Card.tsx` | Card de taller |
| `src/components/layout/Header.tsx` | Navegacion |
| `src/components/layout/Footer.tsx` | Footer |
| `src/components/sections/Hero.tsx` | Hero section |
| `src/components/sections/AboutFpN.tsx` | Seccion Filosofia para Ninos |
| `src/components/sections/Workshops.tsx` | Grid de talleres |
| `src/components/sections/VideoSection.tsx` | Video promocional |
| `src/components/sections/ContactForm.tsx` | Google Form embebido |
| `src/lib/constants.ts` | Colores, textos, URLs |
| `tailwind.config.ts` | Configuracion de colores custom |

---

## 9. Verificacion

Para validar que el sitio funciona correctamente:

1. **Desarrollo local:**
   ```bash
   npm run dev
   ```
   - Verificar que corre sin errores en http://localhost:3000

2. **Navegacion:**
   - Visitar todas las paginas (/, /taller-padres, /taller-maestros, /taller-principito)
   - Verificar que los links funcionan correctamente

3. **Responsive:**
   - Probar en viewport mobile (375px)
   - Probar en tablet (768px)
   - Probar en desktop (1280px+)

4. **Contenido multimedia:**
   - Verificar que el video carga y reproduce
   - Verificar que el placeholder del segundo video se muestra

5. **Formulario:**
   - Verificar que el Google Form embebido carga correctamente
   - Probar envio de formulario

6. **Estilos:**
   - Validar colores contra la paleta definida
   - Verificar consistencia tipografica

7. **Build de produccion:**
   ```bash
   npm run build
   ```
   - Verificar que no hay errores de build

8. **Deploy:**
   - Deploy a Netlify
   - Probar URL publica en multiples dispositivos

---

## 10. Assets Existentes

- **Video:** `design_assets/Vero_Filosofia_Final_papas1.mp4`
- **Thumbnail:** `design_assets/Vero_Filosofia_Final_papas1-Thumbnail.jpg`
- **Paleta:** `design_assets/AdobeColor-Spring Fling.jpeg`
- **Guion de referencia:** `knowledge.md/guion1.md`

---

## 11. Guion de Referencia para Tono y Contenido

**Archivo fuente:** `knowledge.md/guion1.md`

Este guion sirve como referencia principal para el tono de voz, estructura de mensajes y contenido del sitio:

```
¿Alguna vez tus hijos te han hecho preguntas como…
"¿Por qué el cielo es azul?" o "¿Qué pasa cuando dormimos?"

Los niños tienen una curiosidad desbordante.
Y esa curiosidad natural es el punto de partida perfecto para el diálogo filosófico.

En este taller aprenderás cómo acompañar sus preguntas sin dar respuestas cerradas,
ayudarles a fomentar el pensamiento crítico,