# Guía de Animaciones Premium Tipo Webflow

Este documento describe todas las animaciones y efectos premium tipo Webflow implementados en el sitio "Filósofos Somos Todos".

## Índice

1. [Smooth Scroll con Lenis](#smooth-scroll-con-lenis)
2. [Componentes de Animación](#componentes-de-animación)
3. [Efectos CSS Premium](#efectos-css-premium)
4. [Ejemplos de Uso](#ejemplos-de-uso)

---

## Smooth Scroll con Lenis

### SmoothScrollProvider

El sitio usa **Lenis** para un scroll suave y premium, integrado con GSAP ScrollTrigger.

**Ubicación**: `/src/components/providers/SmoothScrollProvider.tsx`

**Características**:
- Scroll suave y fluido (easing personalizado)
- Integración perfecta con GSAP ScrollTrigger
- Multiplicador de rueda configurable
- Orientación vertical

**Configuración actual**:
```typescript
{
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: "vertical",
  smoothWheel: true,
  wheelMultiplier: 1,
}
```

---

## Componentes de Animación

### 1. MagneticButton

Botones que siguen el cursor sutilmente con efecto magnético.

**Props**:
- `children`: Contenido del botón
- `strength`: Intensidad del efecto (default: 0.3)
- `className`: Clases CSS adicionales
- `id`: ID único

**Ejemplo**:
```tsx
<MagneticButton strength={0.4} id="cta-magnetic-001">
  <Button href="#contact">Contáctanos</Button>
</MagneticButton>
```

**Efectos**:
- Movimiento suave siguiendo el cursor
- Scale sutil en hover
- Retorno elástico al salir

---

### 2. ParallaxSection

Secciones con efecto parallax basado en scroll.

**Props**:
- `children`: Contenido a animar
- `speed`: Velocidad del parallax (default: 0.5)
- `className`: Clases CSS
- `id`: ID único
- `style`: Estilos inline opcionales

**Ejemplo**:
```tsx
<ParallaxSection speed={0.3} className="absolute w-96 h-96 bg-naranja/10 blur-3xl">
  <div />
</ParallaxSection>
```

**Uso**:
- Valores positivos: se mueve hacia abajo
- Valores negativos: se mueve hacia arriba
- Ideal para elementos decorativos de fondo

---

### 3. TextReveal

Texto que se revela con animación al hacer scroll.

**Props**:
- `children`: Texto a animar (string)
- `className`: Clases CSS
- `type`: "chars" | "words" | "lines" (default: "words")
- `stagger`: Delay entre elementos (default: 0.03)
- `delay`: Delay inicial
- `id`: ID único

**Ejemplo**:
```tsx
<TextReveal
  className="text-5xl font-bold"
  type="words"
  stagger={0.05}
>
  Título con Efecto Premium
</TextReveal>
```

**Características**:
- Usa SplitType para dividir el texto
- Animación 3D con rotateX
- Back easing para efecto elástico

---

### 4. TiltCard

Cards con efecto de tilt 3D al mover el cursor.

**Props**:
- `children`: Contenido de la card
- `maxTilt`: Inclinación máxima en grados (default: 15)
- `className`: Clases CSS
- `id`: ID único

**Ejemplo**:
```tsx
<TiltCard maxTilt={10} id="product-card-001">
  <div className="p-8 bg-white rounded-3xl">
    {/* Contenido */}
  </div>
</TiltCard>
```

**Efectos**:
- Rotación 3D siguiendo el cursor
- Efecto glare (brillo) dinámico
- Retorno elástico al salir

---

### 5. ClipPathReveal

Elementos que se revelan con clip-path animado.

**Props**:
- `children`: Contenido a revelar
- `direction`: "horizontal" | "vertical" | "diagonal" | "circle"
- `className`: Clases CSS
- `id`: ID único

**Ejemplo**:
```tsx
<ClipPathReveal direction="horizontal">
  <div className="p-12 bg-gradient-to-br from-naranja to-cyan">
    {/* Contenido */}
  </div>
</ClipPathReveal>
```

**Direcciones**:
- `horizontal`: Se revela de izquierda a derecha
- `vertical`: Se revela de abajo hacia arriba
- `diagonal`: Efecto diagonal
- `circle`: Se expande desde el centro

---

### 6. ScrambleText

Texto con efecto de "scramble" (desorden) que se ordena progresivamente.

**Props**:
- `children`: Texto a animar (string)
- `className`: Clases CSS
- `characters`: Caracteres para el scramble
- `speed`: Velocidad de la animación (ms)
- `id`: ID único

**Ejemplo**:
```tsx
<ScrambleText
  className="text-2xl"
  speed={40}
>
  Texto con efecto scramble
</ScrambleText>
```

**Características**:
- Se activa al hacer scroll
- Caracteres aleatorios que se ordenan
- Solo se ejecuta una vez (once: true)

---

### 7. ParallaxLayers

Sistema de capas con parallax diferencial.

**Props**:
- `layers`: Array de capas con contenido y velocidad
- `className`: Clases CSS del contenedor

**Ejemplo**:
```tsx
<ParallaxLayers
  layers={[
    {
      content: <div className="w-96 h-96 bg-naranja/20 blur-3xl" />,
      speed: 0.3,
      className: "absolute top-0 right-0",
    },
    {
      content: <div className="w-80 h-80 bg-cyan/20 blur-3xl" />,
      speed: -0.2,
      className: "absolute bottom-0 left-0",
    },
  ]}
  className="absolute inset-0"
/>
```

**Uso**:
- Crea profundidad visual
- Cada capa se mueve a diferente velocidad
- Perfecto para fondos decorativos

---

### 8. PinSection

Secciones que se "pegan" (pin) mientras se hacen animaciones internas.

**Props**:
- `children`: Contenido de la sección
- `className`: Clases CSS
- `pinSpacing`: Mantener espacio al hacer pin (default: true)
- `id`: ID único

**Ejemplo**:
```tsx
<PinSection className="min-h-screen flex items-center">
  <div>
    {/* Contenido que se queda fijo mientras scrolleas */}
  </div>
</PinSection>
```

---

## Efectos CSS Premium

### Animaciones Disponibles

#### 1. Liquid Morph
```css
.animate-liquid-morph
```
Morfismo orgánico de blobs con border-radius animado.

#### 2. Slide Up Fade
```css
.animate-slide-up-fade
```
Entrada con fade y slide desde abajo.

#### 3. Scale Rotate In
```css
.animate-scale-rotate-in
```
Entrada con scale y rotación con bounce.

#### 4. Reveal Center
```css
.animate-reveal-center
```
Revelación circular desde el centro.

#### 5. Shimmer
```css
.animate-shimmer
```
Efecto shimmer/brillo deslizante.

#### 6. Float 3D
```css
.animate-float-3d
```
Flotación con perspectiva 3D.

---

### Transiciones Premium

#### Transition Smooth
```css
.transition-smooth
```
Transición suave con easing personalizado:
```css
transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
```

#### Transition Bounce
```css
.transition-bounce
```
Transición con efecto bounce:
```css
transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
```

---

### Efectos de Hover

#### Underline Reveal
```css
.underline-reveal
```
Subrayado animado que aparece en hover de izquierda a derecha.

**Ejemplo**:
```tsx
<a href="#" className="underline-reveal">
  Link con subrayado animado
</a>
```

#### Image Reveal
```css
.image-reveal
```
Efecto de "wipe" con gradiente sobre imágenes en hover.

**Ejemplo**:
```tsx
<div className="image-reveal">
  <img src="..." alt="..." />
</div>
```

---

### Utilidades de Perspective

#### Perspective 1000
```css
.perspective-1000
```
Perspectiva 3D para transformaciones.

#### Perspective 2000
```css
.perspective-2000
```
Perspectiva 3D más pronunciada.

---

### Stagger Delays

Para animar múltiples elementos con delay:
```css
.stagger-1  /* 100ms */
.stagger-2  /* 200ms */
.stagger-3  /* 300ms */
.stagger-4  /* 400ms */
.stagger-5  /* 500ms */
```

---

## Ejemplos de Uso

### Ejemplo 1: Hero Section Premium

```tsx
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Parallax background */}
      <ParallaxSection speed={0.3} className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-naranja/20 via-cyan/10 to-verde/20" />
      </ParallaxSection>

      {/* Content */}
      <div className="relative z-10 text-center">
        <TextReveal
          className="text-6xl font-bold mb-6"
          type="words"
          stagger={0.08}
        >
          Tu Título Impactante
        </TextReveal>

        <MagneticButton strength={0.4}>
          <Button size="lg">Call to Action</Button>
        </MagneticButton>
      </div>
    </section>
  );
}
```

---

### Ejemplo 2: Cards con Tilt

```tsx
import { TiltCard } from "@/components/ui/TiltCard";

export function FeatureCards() {
  const features = [
    { title: "Feature 1", description: "..." },
    { title: "Feature 2", description: "..." },
    { title: "Feature 3", description: "..." },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature, idx) => (
        <TiltCard key={idx} maxTilt={12}>
          <div className="p-8 bg-white rounded-3xl shadow-lg transition-smooth hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </TiltCard>
      ))}
    </div>
  );
}
```

---

### Ejemplo 3: Sección con Clip Path Reveal

```tsx
import { ClipPathReveal } from "@/components/ui/ClipPathReveal";

export function RevealSection() {
  return (
    <section className="py-32">
      <ClipPathReveal direction="circle">
        <div className="max-w-4xl mx-auto p-16 bg-gradient-to-br from-purpura to-naranja rounded-3xl">
          <h2 className="text-4xl font-bold text-white mb-6">
            Contenido que se revela
          </h2>
          <p className="text-white/80 text-lg">
            Este contenido aparece con un efecto circular impresionante.
          </p>
        </div>
      </ClipPathReveal>
    </section>
  );
}
```

---

### Ejemplo 4: Parallax Layers Complejo

```tsx
import { ParallaxLayers } from "@/components/ui/ParallaxLayers";

export function ParallaxBackground() {
  return (
    <div className="relative min-h-screen">
      <ParallaxLayers
        layers={[
          {
            content: (
              <div className="w-[600px] h-[600px] bg-naranja/10 rounded-full blur-[120px] animate-liquid-morph" />
            ),
            speed: 0.4,
            className: "absolute -top-40 -right-40",
          },
          {
            content: (
              <div className="w-[500px] h-[500px] bg-cyan/10 rounded-full blur-[100px] animate-liquid-morph" />
            ),
            speed: -0.3,
            className: "absolute -bottom-40 -left-40",
          },
          {
            content: (
              <div className="w-[400px] h-[400px] bg-verde/10 rounded-full blur-[80px] animate-liquid-morph" />
            ),
            speed: 0.2,
            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          },
        ]}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="relative z-10">
        {/* Tu contenido aquí */}
      </div>
    </div>
  );
}
```

---

## Best Practices

### Performance

1. **Usar ParallaxSection con moderación**: Demasiados elementos con parallax pueden afectar el rendimiento.

2. **Limitar TiltCard en móviles**: El efecto tilt consume más recursos en dispositivos móviles.

3. **Optimizar TextReveal**: Para textos muy largos, considera usar `type="words"` en lugar de `type="chars"`.

### Accesibilidad

1. **Respetar prefers-reduced-motion**: Todas las animaciones respetan la preferencia del usuario:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

2. **Mantener contraste**: Asegúrate de que los efectos no reduzcan la legibilidad.

3. **Proveer alternativas**: Para efectos críticos, ofrece contenido estático alternativo.

### UX

1. **No abusar de las animaciones**: Usa efectos con propósito, no decorativos solamente.

2. **Mantener consistencia**: Usa el mismo tipo de animación para elementos similares.

3. **Tiempos apropiados**:
   - Micro-interacciones: 150-300ms
   - Transiciones de página: 400-600ms
   - Animaciones complejas: 600-1200ms

---

## Troubleshooting

### El smooth scroll no funciona

Verifica que `SmoothScrollProvider` esté incluido en el layout:
```tsx
// src/app/layout.tsx
<body>
  <SmoothScrollProvider />
  {/* resto del contenido */}
</body>
```

### Las animaciones se cortan

Asegúrate de que los contenedores padres tengan `overflow-hidden` cuando sea necesario:
```tsx
<section className="relative overflow-hidden">
  {/* elementos animados */}
</section>
```

### MagneticButton no sigue el cursor

Verifica que el botón tenga un tamaño definido y esté posicionado correctamente:
```tsx
<MagneticButton className="inline-block">
  {/* contenido con width/height */}
</MagneticButton>
```

---

## Recursos Adicionales

- **GSAP Documentation**: https://gsap.com/docs/
- **Lenis Documentation**: https://www.npmjs.com/package/lenis
- **SplitType Documentation**: https://www.npmjs.com/package/split-type

---

## Archivos Creados

### Componentes
- `/src/components/providers/SmoothScrollProvider.tsx`
- `/src/components/ui/MagneticButton.tsx`
- `/src/components/ui/ParallaxSection.tsx`
- `/src/components/ui/TextReveal.tsx`
- `/src/components/ui/TiltCard.tsx`
- `/src/components/ui/ClipPathReveal.tsx`
- `/src/components/ui/ParallaxLayers.tsx`
- `/src/components/ui/PinSection.tsx`
- `/src/components/ui/ScrambleText.tsx`

### Secciones
- `/src/components/sections/FeaturesShowcase.tsx`

### Estilos
- Animaciones y efectos añadidos en `/src/app/globals.css`

---

¡Disfruta creando experiencias web premium tipo Webflow! 🚀
