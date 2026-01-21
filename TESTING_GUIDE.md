# Guía de Testing - Award-Winning Design

## Cómo Probar las Mejoras Implementadas

Esta guía te ayudará a verificar todas las mejoras de diseño implementadas en el sitio.

---

## Iniciar el Proyecto

```bash
# En el directorio del proyecto
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

---

## Checklist de Testing

### 1. Progress Bar de Lectura
- [ ] Al cargar la página, debe aparecer una barra delgada en la parte superior
- [ ] El color debe ser un gradiente (naranja → amarillo → cyan)
- [ ] Al hacer scroll, la barra debe crecer proporcionalmente
- [ ] Al llegar al final, debe estar al 100%

### 2. Custom Cursor (Solo Desktop ≥1024px)
- [ ] En desktop, el cursor normal debe ocultarse
- [ ] Debe aparecer un punto naranja pequeño
- [ ] Debe aparecer un anillo más grande alrededor
- [ ] Al pasar sobre links/botones, ambos elementos deben crecer
- [ ] En mobile/tablet, debe aparecer el cursor normal

### 3. Header
- [ ] Al inicio, el header debe ser transparente con texto blanco
- [ ] Al hacer scroll, debe volverse blanco con backdrop-blur
- [ ] El logo debe tener efecto scale en hover
- [ ] Los links de navegación deben mostrar underline gradiente en hover
- [ ] El botón "Contacto" debe tener glow effect en hover
- [ ] En mobile, el menú hamburguesa debe funcionar correctamente

### 4. Hero Section
- [ ] El título debe usar fuente serif (Playfair Display)
- [ ] Los blobs decorativos deben tener efecto float
- [ ] Al hacer scroll, los blobs deben moverse a diferentes velocidades (parallax)
- [ ] Los badges de beneficios deben tener hover states
- [ ] El scroll indicator debe animar correctamente
- [ ] Los botones deben tener shimmer effect en hover

### 5. About FpN Section
- [ ] Los elementos deben aparecer con animación al entrar en viewport
- [ ] El título debe usar fuente serif
- [ ] La quote card debe tener border gradiente
- [ ] Los benefit items deben tener hover states con color naranja
- [ ] Los decorative squares deben ser visibles

### 6. Stats Section (Nueva)
- [ ] Debe aparecer entre About y Workshops
- [ ] Los números deben animar desde 0 al valor final
- [ ] La animación debe comenzar al entrar en viewport
- [ ] Los cards deben tener gradiente en hover
- [ ] El fondo debe ser púrpura con grid pattern

### 7. Workshops Section
- [ ] Los 3 cards deben aparecer con delay escalonado
- [ ] Las cards deben tener lift effect en hover (shadow 2xl)
- [ ] El border gradiente debe animar en hover
- [ ] Los íconos deben rotar ligeramente en hover
- [ ] El badge "Próximamente" debe ser visible en El Principito

### 8. Video Section
- [ ] El contenedor del video debe tener scale animation al aparecer
- [ ] El decorative frame debe ser visible (gradiente blur)
- [ ] El título debe usar fuente serif

### 9. Contact Form
- [ ] El formulario debe aparecer con scale animation
- [ ] El glassmorphism effect debe ser visible
- [ ] El contenedor debe tener backdrop-blur

### 10. Footer Premium
- [ ] Newsletter section debe ser prominente
- [ ] El input debe tener glassmorphism con focus states
- [ ] El social proof badge debe mostrar "50+ años"
- [ ] Debe haber 4 columnas en desktop
- [ ] Los links deben tener dot scale + translate en hover
- [ ] El botón "Volver arriba" debe funcionar y tener hover animation
- [ ] Los decorative blobs deben ser sutiles

### 11. Buttons
- [ ] Variante primary: shimmer effect en hover
- [ ] Todos los botones: lift effect (-translate-y-1)
- [ ] Active state: scale down ligeramente
- [ ] Duración de transición: 500ms suave

### 12. Typography
- [ ] Títulos principales: Playfair Display (serif)
- [ ] Cuerpo de texto: Inter
- [ ] Tamaños responsive correctos
- [ ] Leading ajustado en títulos grandes

---

## Testing Responsive

### Desktop (≥1024px)
- [ ] Custom cursor visible
- [ ] Parallax effects funcionando
- [ ] 4 columnas en footer
- [ ] Header navigation completa visible

### Tablet (768px - 1023px)
- [ ] Cursor normal
- [ ] Layout responsive
- [ ] Menú hamburguesa funcionando
- [ ] 2-3 columnas en grids

### Mobile (<768px)
- [ ] Todo el contenido accesible
- [ ] Menú móvil funcionando
- [ ] Stack vertical en todas las secciones
- [ ] Botones táctiles adecuados

---

## Testing de Accesibilidad

### Keyboard Navigation
- [ ] Tab navega por todos los elementos interactivos
- [ ] Focus states visibles (ring naranja)
- [ ] Enter/Space activan botones y links
- [ ] Esc cierra el menú móvil

### Screen Readers
- [ ] Todos los botones tienen aria-labels
- [ ] Las imágenes decorativas son ignoradas
- [ ] La estructura semántica es correcta (h1, h2, sections)

### Reduced Motion
- [ ] En settings del OS, activar "reduce motion"
- [ ] Las animaciones deben reducirse o desaparecer
- [ ] La funcionalidad debe mantenerse

---

## Testing de Performance

### Lighthouse Audit
1. Abrir DevTools (F12)
2. Ir a tab "Lighthouse"
3. Seleccionar: Performance, Accessibility, Best Practices
4. Run audit

**Targets esperados**:
- Performance: ≥90
- Accessibility: ≥95
- Best Practices: ≥90

### Network
- [ ] First Load JS: ~138 kB (aceptable)
- [ ] Fonts load con display: swap
- [ ] No hay requests bloqueantes

---

## Testing Cross-Browser

### Chrome/Edge
- [ ] Todas las features funcionan
- [ ] Custom cursor smooth
- [ ] Animaciones fluidas

### Firefox
- [ ] Glassmorphism correcto
- [ ] Gradientes visibles
- [ ] Parallax funcionando

### Safari (Mac/iOS)
- [ ] Backdrop-blur funciona
- [ ] Scroll smooth funciona
- [ ] Animaciones optimizadas

---

## Testing de Interacciones

### Hover States
1. Header links → underline gradiente
2. Buttons → shimmer + lift
3. Cards → border gradiente + lift + shadow
4. Footer links → dot scale + translate
5. Logo → scale

### Scroll Animations
1. Hacer scroll lento desde arriba
2. Verificar que cada sección anime al entrar
3. Los delays escalonados deben ser visibles
4. Stats counters deben animar una sola vez

### Parallax
1. Hacer scroll en Hero section
2. Los blobs deben moverse a diferentes velocidades
3. El efecto debe ser sutil, no mareante

---

## Troubleshooting

### Custom Cursor no aparece
- Verificar que estés en desktop (≥1024px)
- Revisar DevTools console por errores
- Verificar que `cursor: none` esté aplicado en html

### Animaciones no funcionan
- Verificar que "reduce motion" no esté activado
- Revisar que IntersectionObserver esté soportado
- Check DevTools console

### Parallax no funciona
- Verificar scroll events en console
- Asegurarse que `will-change: transform` esté aplicado
- Check performance en DevTools

### Fonts no cargan
- Verificar conexión a Google Fonts
- Check Network tab en DevTools
- Verificar que las variables CSS estén correctas

---

## Reportar Issues

Si encuentras algún problema:

1. **Descripción clara** del issue
2. **Navegador y versión** donde ocurre
3. **Pasos para reproducir**
4. **Screenshot** si es visual
5. **DevTools console** errors si aplica

---

## Build para Producción

```bash
# Build optimizado
npm run build

# Revisar output
# Debe mostrar: ✓ Compiled successfully
```

---

## Métricas de Éxito

El sitio debe sentirse:
- **Fluido**: 60fps en todas las animaciones
- **Premium**: Tipografía elegante, microinteracciones sutiles
- **Profesional**: Diseño coherente, espaciado consistente
- **Rápido**: Transiciones suaves, load time bajo
- **Accesible**: Navegable por teclado, screen reader friendly

---

**Última actualización**: 2026-01-20
