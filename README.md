# Portafolio Profesional: Pablo Bastidas Garrido

Sitio de portafolio personal orientado a perfil de **Arquitecto de Software y Desarrollador Backend Senior**. Especializado en software empresarial, automatización ERP, integraciones IoT y arquitecturas web modernas.

## 🚀 Stack Tecnológico

- **Framework:** Astro (Site estático de alto rendimiento)
- **Lenguaje:** TypeScript
- **Estilos:** Vanilla CSS (Modern CSS con Glassmorphism)
- **Arquitectura:** Data-Driven (Desacoplamiento de contenido y presentación)
- **SEO:** JSON-LD Structured Data (Person & Occupation)

## 🛠️ Estructura del Proyecto

```text
/
├─ public/          # Assets estáticos (favicon, imágenes)
├─ src/
│  ├─ components/   # Componentes Astro reutilizables
│  ├─ data/         # Archivos de datos TS (Única fuente de verdad)
│  ├─ layouts/      # Plantillas base y SEO
│  ├─ pages/        # Rutas y páginas principales
│  └─ styles/       # CSS Global y variables de diseño
├─ astro.config.mjs
├─ package.json
└─ tsconfig.json
```

## 📝 Cómo Editar el Contenido 

El sitio utiliza una arquitectura basada en datos. Para actualizar la información, **no es necesario editar componentes HTML**, solo debes modificar los archivos en `src/data/`:

### 1. Datos Generales (`site.ts`)
Configura tu identidad, redes sociales y metadatos globales.

### 2. Trayectoria Profesional (`experience.ts`)
Añade o modifica tus hitos laborales. Los cambios aquí se reflejan automáticamente en la **Línea de Tiempo** y en el **SEO de Google (JSON-LD)**.

### 3. Proyectos Destacados (`projects.ts`)
Gestiona tus trabajos. Los proyectos marcados como `featured: true` aparecerán automáticamente en el **Carrusel Interactivo** de la Home.

## ✨ Características Destacadas

- **Carrusel Interactivo:** Navegación horizontal con `scroll-snap` y controles táctiles/botón.
- **Timeline Vertical:** Narrativa de crecimiento profesional con micro-interacciones.
- **Scroll Reveal:** Animaciones sutiles de entrada para mejorar la UX.
- **Spotlight Effect:** Iluminación interactiva que sigue al cursor en las tarjetas.
- **Mobile First:** Diseño adaptativo para todas las pantallas.

## 📦 Desarrollo y Despliegue

1. **Instalación:** `npm install`
2. **Desarrollo:** `npm run dev` (Disponible en `http://localhost:4321`)
3. **Build:** `npm run build`

## Notas de Despliegue
- El sitio está optimizado para **Vercel** o **GitHub Pages**.
- Asegúrate de actualizar el campo `site` en `astro.config.mjs` con tu dominio final para un SEO perfecto.
