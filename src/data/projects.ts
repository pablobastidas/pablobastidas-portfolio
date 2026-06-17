export type ProjectStatus = "Activo" | "En desarrollo" | "MVP" | "Experimental" | "Beta";

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

export const projects: Project[] = [
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
];
