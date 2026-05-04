# 🎨 Sistema de Diseño: "The Balanced Architect"

Refinamiento de paleta para reducir la fatiga visual manteniendo el impacto Senior. Este sistema prioriza la legibilidad técnica y la sofisticación visual.

## 🌑 Paleta de Fondos (Deep Base)
- **Base:** `#0b0f14` (Deep Navy Black). El ancla visual del sitio.
- **Surface Muted:** `rgba(255, 255, 255, 0.03)` (Glass base). Para capas de profundidad sutiles.

## ⚪ Tipografía y Contraste
- **Primary Text:** `#ffffff` (Blanco puro para encabezados).
- **Secondary Text (Smoke):** `rgba(255, 255, 255, 0.6)`. Para descripciones extensas y reducción de fatiga visual.
- **Accent Color:** Dinámico según el contexto (Blue, Emerald, Amber, Rose). Utilizado para resaltar jerarquía técnica y estados activos.

## ✨ Componentes de Alta Fidelidad
- **Glassmorphism:** Uso de `backdrop-filter: blur(20px)` en el Dock de navegación y tarjetas de proyectos para una sensación moderna y translúcida.
- **Interactive Spotlight:** Gradientes radiales dinámicos que siguen el movimiento del cursor, aportando "vida" a los contenedores oscuros.
- **Professional Timeline:** Estructura vertical con guías visuales (`glow markers`) que facilitan la lectura de la narrativa profesional.

## 🎞️ UX & Animaciones
- **Scroll Reveal:** Transiciones de opacidad y desplazamiento (translateY) activadas por `IntersectionObserver` para una entrada fluida de contenidos.
- **Carousel Navigation:** Sistema de desplazamiento horizontal con `scroll-snap` para una visualización compacta de múltiples proyectos.
