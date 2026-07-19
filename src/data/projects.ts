export type ProjectStatus = "Activo" | "En desarrollo" | "MVP" | "Experimental" | "Beta" | "Active" | "In development";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  summary: string;
  problem: string;
  solution: string;
  tech: string[];
  role: string;
  challenges: string[];
  status: ProjectStatus;
  links: ProjectLink[];
  featured: boolean;
};

export const projects: Record<"es" | "en", Project[]> = {
  es: [
    {
      slug: "patas-match",
      name: "Patas Match",
      summary:
        "Plataforma web full-stack editorial premium orientada a la adopción responsable de mascotas con geolocalización y chat en tiempo real.",
      problem:
        "La fragmentación de portales de adopción y la falta de flujos de trabajo profesionales que garanticen la seguridad de la mascota y el cumplimiento legal de protección de datos.",
      solution:
        "Desarrollo de una arquitectura con Angular 18 (Signals), Django Rest Framework con PostGIS para búsquedas por proximidad, base de datos desnormalizada para chats O(1) e infraestructura Dockerizada.",
      tech: ["Angular 18", "Django DRF", "PostgreSQL", "PostGIS", "Redis", "Docker", "Tailwind CSS"],
      role:
        "Desarrollador Full-Stack & DevOps",
      challenges: [
        "Optimización de chats en tiempo real con Redis y desnormalización de mensajes O(1)",
        "Implementación de búsquedas geográficas por proximidad usando PostGIS en producción",
        "Flujos de cumplimiento legal (Ley 19.628 de Chile) y borrado seguro de cuentas (Derecho ARCO)"
      ],
      status: "Activo",
      links: [
        { label: "Ver proyecto", href: "https://patasmatch.vercel.app/" }
      ],
      featured: true
    },
    {
      slug: "mundial-48",
      name: "Predicción Mundial 2026",
      summary:
        "Plataforma web para gestionar pronósticos (pollas/quinielas) del Mundial de Fútbol 2026. Permite a los usuarios competir en ligas privadas prediciendo resultados.",
      problem:
        "Necesidad de una plataforma moderna y escalable para gestionar predicciones del nuevo formato FIFA de 48 selecciones y 104 partidos.",
      solution:
        "Desarrollo Full-Stack con motor de fixture dinámico, autenticación passwordless (Supabase), y provisionamiento Just-in-Time.",
      tech: ["Next.js 15", "React 19", "FastAPI", "PostgreSQL", "Supabase", "Tailwind CSS"],
      role:
        "Desarrollador Full-Stack",
      challenges: [
        "Optimización de consultas N+1 en base de datos",
        "Sincronización automática de JWT en backend",
        "Migración a Next.js 15 con App Router"
      ],
      status: "Activo",
      links: [
        { label: "Ver proyecto", href: "https://prediccionmundial2026-frontend.vercel.app/" }
      ],
      featured: true
    },
    {
      slug: "kawin-event-platform",
      name: "Kawin Ecosystem",
      summary:
        "Arquitectura completa de 3 capas para la centralización y curación de eventos masivos mediante scraping inteligente.",
      problem:
        "Fragmentación de datos de eventos en múltiples fuentes.",
      solution:
        "Pipeline ETL en Python + API robusta en FastAPI + Frontend reactivo en Angular con filtrado avanzado.",
      tech: ["FastAPI", "Angular", "PostgreSQL", "Python", "Scraping"],
      role:
        "Arquitecto de Software & Desarrollador Full-Stack",
      challenges: [
        "Normalización de estructuras heterogéneas",
        "Sincronización de datos en tiempo real",
      ],
      status: "Activo",
      links: [
        { label: "Ver proyecto", href: "https://kawin-frontend.vercel.app/" }
      ],
      featured: true
    }
  ],
  en: [
    {
      slug: "patas-match",
      name: "Patas Match",
      summary:
        "Premium editorial full-stack web platform oriented towards responsible pet adoption, featuring geolocation and real-time chat.",
      problem:
        "The fragmentation of adoption portals and the lack of professional workflows that guarantee pet safety and legal data protection compliance.",
      solution:
        "Development of an architecture using Angular 18 (Signals), Django Rest Framework with PostGIS for proximity searches, a denormalized database for O(1) chats, and a Dockerized infrastructure.",
      tech: ["Angular 18", "Django DRF", "PostgreSQL", "PostGIS", "Redis", "Docker", "Tailwind CSS"],
      role:
        "Full-Stack & DevOps Developer",
      challenges: [
        "Real-time chat optimization using Redis and O(1) message denormalization",
        "Implementation of geographic proximity searches using PostGIS in production",
        "Legal compliance workflows (Chilean Law 19,628) and secure account deletion (ARCO Rights)"
      ],
      status: "Active",
      links: [
        { label: "View project", href: "https://patasmatch.vercel.app/" }
      ],
      featured: true
    },
    {
      slug: "mundial-48",
      name: "2026 World Cup Prediction",
      summary:
        "Web platform to manage predictions (pools/quinielas) for the 2026 FIFA World Cup. Allows users to compete in private leagues predicting match results.",
      problem:
        "Need for a modern, scalable platform to manage predictions for the new FIFA format of 48 teams and 104 matches.",
      solution:
        "Full-Stack development with a dynamic fixture engine, passwordless authentication (Supabase), and Just-in-Time provisioning.",
      tech: ["Next.js 15", "React 19", "FastAPI", "PostgreSQL", "Supabase", "Tailwind CSS"],
      role:
        "Full-Stack Developer",
      challenges: [
        "Optimization of N+1 database queries",
        "Automatic JWT synchronization in the backend",
        "Migration to Next.js 15 with App Router"
      ],
      status: "Active",
      links: [
        { label: "View project", href: "https://prediccionmundial2026-frontend.vercel.app/" }
      ],
      featured: true
    },
    {
      slug: "kawin-event-platform",
      name: "Kawin Ecosystem",
      summary:
        "Complete 3-tier architecture for the centralization and curation of massive events through smart scraping.",
      problem:
        "Fragmentation of event data across multiple sources.",
      solution:
        "ETL pipeline in Python + robust API in FastAPI + reactive frontend in Angular with advanced filtering.",
      tech: ["FastAPI", "Angular", "PostgreSQL", "Python", "Scraping"],
      role:
        "Software Architect & Full-Stack Developer",
      challenges: [
        "Normalization of heterogeneous data structures",
        "Real-time data synchronization"
      ],
      status: "Active",
      links: [
        { label: "View project", href: "https://kawin-frontend.vercel.app/" }
      ],
      featured: true
    }
  ]
};
