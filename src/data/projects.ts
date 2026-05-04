export type ProjectStatus = "Activo" | "En desarrollo" | "MVP" | "Experimental";

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
      { label: "Internal Repo", href: "#" }
    ],
    featured: true
  },
  {
    slug: "motorsport-discovery",
    name: "Motorsport Discovery",
    summary:
      "Plataforma de BI y recomendación para eventos de motor basada en algoritmos de distancia Euclidiana.",
    problem:
      "Dificultad de los usuarios para encontrar eventos afines a su perfil.",
    solution:
      "Sistema de recomendación dinámico con visualización de datos mediante Spider Charts y Chart.js.",
    tech: ["Angular 19", "FastAPI", "Chart.js", "Analytics"],
    role:
      "Lead Developer",
    challenges: [
      "Optimización de algoritmos de recomendación",
      "Visualización compleja de datos"
    ],
    status: "En desarrollo",
    links: [{ label: "Demo", href: "#" }],
    featured: true
  },
  {
    slug: "suite-sistemas-empresariales",
    name: "Logistics Enterprise Suite",
    summary:
      "Ecosistema de gestión de inventarios y logística para operaciones críticas de bodega y compras.",
    problem:
      "Procesos manuales con alta fricción y falta de trazabilidad.",
    solution:
      "Implementación de módulos integrados con lógica de negocio compleja y reportabilidad avanzada.",
    tech: ["VB.NET", "SQL Server", "DevExpress", "Reporting"],
    role:
      "Senior Developer",
    challenges: [
      "Gestión de grandes volúmenes de datos",
      "Consistencia transaccional"
    ],
    status: "Activo",
    links: [{ label: "Technical Overview", href: "#" }],
    featured: true
  }
];
