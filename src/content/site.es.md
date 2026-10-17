---
lang: es
identity:
  name: Pablo Bastidas Garrido
  location: Santiago, Chile
  email: pablobastidasgarrido@gmail.com
  githubUrl: https://github.com/pablobastidas
  linkedinUrl: https://www.linkedin.com/in/bastidaspablo/
seo:
  title: Pablo Bastidas | Backend Developer & Systems Integrator
  description: >-
    Portafolio profesional de Pablo Bastidas, experto en .NET, Python, automatización Softland ERP e
    integración de sistemas industriales.
profile:
  role: Ingeniero en Informática | Desarrollador Backend .NET & Python
  tagline: Arquitectura backend, automatización de procesos e integración de sistemas críticos.
  summary: >-
    Ingeniero en Informática con más de 5 años de trayectoria en el ciclo completo de desarrollo. Especialista
    en modernización de sistemas legacy, automatización ERP e integración de ecosistemas IoT industriales.
    Certificado en Python Profesional (PUC) con un enfoque actual en arquitecturas escalables y ciencia de
    datos.
ui:
  nav:
    label: Navegación principal
    projects: Proyectos
    about: Sobre mí
    contact: Contacto
    languageLabel: EN
    languageAria: Leer en inglés
  skipToContent: Saltar al contenido
  hero:
    intro: Pablo Bastidas / Desarrollo de software
    headlineFirst: Backend sólido.
    headlineSecond: Procesos más simples.
    summary: >-
      Conecto sistemas, automatizo tareas y desarrollo aplicaciones. Software pensado para resolver lo que
      pasa en el trabajo de cada día.
    projectsAction: Explorar proyectos
    contactAction: Conversemos
  projects:
    heading: Software en uso.
    description: Proyectos donde las ideas se encuentran con los datos, el código y las personas.
    otherHeading: Otras ideas llevadas a la práctica
    featuredLabel: Proyecto destacado · Datos y aplicaciones web
    visitAction: Visitar proyecto
    visitImageLabel: Visitar
    imageAlt: Interfaz de
    newTabHint: nueva pestaña
  journey:
    eyebrow: Enfoque y experiencia
    headlineFirst: Primero, entender.
    headlineSecond: Después, construir.
    description: >-
      Soy Pablo Bastidas, ingeniero en Informática en Santiago de Chile. He trabajado en salud, operaciones
      industriales y sistemas empresariales, conectando tecnología con necesidades concretas.
    linkedinAction: Mi perfil en LinkedIn
    experienceAction: Explorar mi trayectoria profesional
  strengths:
    heading: Dónde puedo aportar
    areas:
      - title: Backend
        description: APIs, lógica de negocio y bases de datos. .NET, Python y SQL.
      - title: Automatización
        description: Reportes, pagos y procesos administrativos que necesitan menos trabajo manual.
      - title: Integraciones
        description: Sistemas ERP, herramientas empresariales y equipos industriales conectados.
  contact:
    eyebrow: El siguiente paso
    headlineFirst: Hagamos que
    headlineSecond: funcione.
    description: ¿Un proceso por mejorar o una idea por construir? Cuéntame en qué estás trabajando.
  footer:
    backToTop: Volver arriba
projects:
  - slug: patas-match
    name: Patas Match
    summary: >-
      Plataforma web full-stack editorial premium orientada a la adopción responsable de mascotas con
      geolocalización y chat en tiempo real.
    problem: >-
      La fragmentación de portales de adopción y la falta de flujos de trabajo profesionales que garanticen la
      seguridad de la mascota y el cumplimiento legal de protección de datos.
    solution: >-
      Desarrollo de una arquitectura con Angular 18 (Signals), Django Rest Framework con PostGIS para
      búsquedas por proximidad, base de datos desnormalizada para chats O(1) e infraestructura Dockerizada.
    tech:
      - Angular 18
      - Django DRF
      - PostgreSQL
      - PostGIS
      - Redis
      - Docker
      - Tailwind CSS
    role: Desarrollador Full-Stack & DevOps
    challenges:
      - Optimización de chats en tiempo real con Redis y desnormalización de mensajes O(1)
      - Implementación de búsquedas geográficas por proximidad usando PostGIS en producción
      - Flujos de cumplimiento legal (Ley 19.628 de Chile) y borrado seguro de cuentas (Derecho ARCO)
    status: Activo
    links:
      - label: Ver proyecto
        href: https://patasmatch.vercel.app/
    featured: true
    cardDescription: >-
      Una aplicación de adopción responsable con búsquedas por proximidad, chat en tiempo real y una
      arquitectura full-stack.
  - slug: mundial-48
    name: Predicción Mundial 2026
    summary: >-
      Plataforma web para gestionar pronósticos (pollas/quinielas) del Mundial de Fútbol 2026. Permite a los
      usuarios competir en ligas privadas prediciendo resultados.
    problem: >-
      Necesidad de una plataforma moderna y escalable para gestionar predicciones del nuevo formato FIFA de 48
      selecciones y 104 partidos.
    solution: >-
      Desarrollo Full-Stack con motor de fixture dinámico, autenticación passwordless (Supabase), y
      provisionamiento Just-in-Time.
    tech:
      - Next.js 15
      - React 19
      - FastAPI
      - PostgreSQL
      - Supabase
      - Tailwind CSS
    role: Desarrollador Full-Stack
    challenges:
      - Optimización de consultas N+1 en base de datos
      - Sincronización automática de JWT en backend
      - Migración a Next.js 15 con App Router
    status: Activo
    links:
      - label: Ver proyecto
        href: https://prediccionmundial2026-frontend.vercel.app/
    featured: true
    cardDescription: >-
      Una plataforma de pronósticos para competir entre amigos, con ligas privadas, autenticación y un motor
      de partidos para 48 selecciones.
  - slug: kawin-event-platform
    name: Kawin Ecosystem
    summary: >-
      Arquitectura completa de 3 capas para la centralización y curación de eventos masivos mediante scraping
      inteligente.
    problem: Fragmentación de datos de eventos en múltiples fuentes.
    solution: Pipeline ETL en Python + API robusta en FastAPI + Frontend reactivo en Angular con filtrado avanzado.
    tech:
      - FastAPI
      - Angular
      - PostgreSQL
      - Python
      - Scraping
    role: Arquitecto de Software & Desarrollador Full-Stack
    challenges:
      - Normalización de estructuras heterogéneas
      - Sincronización de datos en tiempo real
    status: Activo
    links:
      - label: Ver proyecto
        href: https://kawin-frontend.vercel.app/
    featured: true
    cardDescription: >-
      Reúne eventos de distintas fuentes para explorarlos en un mapa. Construí el pipeline de datos, la API y
      la aplicación web que conecta todo el recorrido.
experience:
  - id: personal-projects
    year: Actualidad
    title: Desarrollador de Arquitecturas Web & Proyectos Personales
    company: Desarrollo Independiente
    description: >-
      Liderando la construcción del Kawin Ecosystem (Arquitectura de 3 capas para eventos mediante scraping
      masivo) y Motorsport Discovery (Plataforma BI con algoritmos de recomendación Euclidiana), utilizando
      stacks modernos como Angular 19 y FastAPI.
    tags:
      - Angular 19
      - FastAPI
      - Python
      - Scraping
      - BI
  - id: abenis-consultores
    year: 2024 - 2025
    title: Desarrollador de Software Full-Stack
    company: Abenis Consultores
    description: >-
      Desarrollo de módulos críticos para el gestor documental SIGA del Hospital Dr. Sótero del Río.
      Optimización de consultas SQL complejas en Oracle 11g y automatización de flujos administrativos
      hospitalarios.
    tags:
      - VB.NET
      - Oracle 11g
      - GitLab CI/CD
      - jQuery
      - Bootstrap
  - id: infratec-spa
    year: 2023 - 2024
    title: Desarrollador de Software IoT
    company: Infratec Spa
    description: >-
      Integración de sistemas IoT industriales en C#, conectando estaciones meteorológicas y equipos de
      adquisición de datos vía protocolo Modbus. Mantenimiento del sistema crítico ITS SICAS.
    tags:
      - C#
      - IoT
      - Modbus
      - SQL Server
      - Architecture
  - id: tu-complemento
    year: 2021 - 2023
    title: Analista Programador ERP & Automatización
    company: Tu Complemento EIRL
    description: >-
      Automatización tributaria y financiera en Softland ERP. Diseño de workflows de pagos automatizados en
      Duemint con sincronización bidireccional y migración de ecosistemas empresariales.
    tags:
      - ERP Softland
      - T-SQL
      - API Integration
      - Duemint
  - id: disecom-chile
    year: '2021'
    title: Analista Programador (Ingeniería Inversa)
    company: DISECOM CHILE
    description: >-
      Ingeniería inversa completa de un sistema WMS sin código fuente. Recuperación, estabilización y creación
      de documentación técnica desde cero mediante decompilación y debugging avanzado.
    tags:
      - Reverse Engineering
      - WMS
      - Decompilation
      - Legacy
  - id: puc-chile
    year: '2020'
    title: Analista Programador ERP Institucional
    company: Pontificia Universidad Católica de Chile
    description: >-
      Desarrollo de módulos ERP para Facultades de Medicina y Ciencias Biológicas. Implementación de fichas de
      inventario responsivas y ejecución de pruebas QA críticas.
    tags:
      - ASP.NET
      - ERP
      - Responsive Design
      - QA
  - id: fahneu
    year: 2019 - 2020
    title: Analista Programador BI & Automatización
    company: Fahneu
    description: >-
      Automatización de reportes KPI gerenciales integrando Softland ERP, Exchange y SQL Server.
      Implementación de mantenedores Web API y metodología Kanban en el área TI.
    tags:
      - BI
      - Web API
      - Kanban
      - Automation
  - id: early-career
    year: '2018'
    title: Desarrollador Web & SQL
    company: BoxTI / VMICA
    description: >-
      Soporte y mantención de aplicaciones C# MVC 5. Gestión de información en SQL Server 2014 y creación de
      APIs REST para plataformas académicas.
    tags:
      - C# MVC
      - SQL Server
      - API REST
---

<!-- Edit the frontmatter above to update this language version of the portfolio. -->
