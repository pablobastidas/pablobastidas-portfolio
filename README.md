# Portafolio de Pablo Bastidas

Portafolio bilingüe creado con Astro. El contenido editable del sitio está centralizado en archivos Markdown y separado por idioma; los componentes Astro se ocupan de presentar esa información.

## Editar el contenido

Modifica el frontmatter YAML del idioma correspondiente:

- `src/content/site.es.md`: versión en español.
- `src/content/site.en.md`: versión en inglés.

Cada archivo reúne identidad y enlaces, metadatos SEO, textos de navegación y secciones, fortalezas, proyectos y experiencia profesional. Mantén la misma estructura en los dos idiomas. El esquema de `src/content.config.ts` valida campos y enlaces al ejecutar Astro.

Los proyectos tienen una entrada por idioma. `featured: true` los incluye en la página. `cardDescription` es el texto breve de la tarjeta; `summary`, `problem`, `solution` y `challenges` permiten conservar la ficha técnica completa para futuras páginas de detalle.

## Desarrollo

```sh
npm install
npm run dev
```

Para validar la generación de ambas páginas:

```sh
npm run build
```

El repositorio está conectado a Vercel. Los cambios que se suben a `main` activan el despliegue automático.

Sitio publicado: [pablobastidas-portfolio.vercel.app](https://pablobastidas-portfolio.vercel.app/).
