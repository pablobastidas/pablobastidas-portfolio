export interface Experience {
  id: string;
  year: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
}

export const experiences: Experience[] = [
  {
    id: "personal-projects",
    year: "Actualidad",
    title: "Desarrollador de Arquitecturas Web & Proyectos Personales",
    company: "Desarrollo Independiente",
    description: "Liderando la construcción del Kawin Ecosystem (Arquitectura de 3 capas para eventos mediante scraping masivo) y Motorsport Discovery (Plataforma BI con algoritmos de recomendación Euclidiana), utilizando stacks modernos como Angular 19 y FastAPI.",
    tags: ["Angular 19", "FastAPI", "Python", "Scraping", "BI"]
  },
  {
    id: "abenis-consultores",
    year: "2024 - 2025",
    title: "Desarrollador de Software Full-Stack",
    company: "Abenis Consultores",
    description: "Desarrollo de módulos críticos para el gestor documental SIGA del Hospital Dr. Sótero del Río. Optimización de consultas SQL complejas en Oracle 11g y automatización de flujos administrativos hospitalarios.",
    tags: ["VB.NET", "Oracle 11g", "GitLab CI/CD", "jQuery", "Bootstrap"]
  },
  {
    id: "infratec-spa",
    year: "2023 - 2024",
    title: "Desarrollador de Software IoT",
    company: "Infratec Spa",
    description: "Integración de sistemas IoT industriales en C#, conectando estaciones meteorológicas y equipos de adquisición de datos vía protocolo Modbus. Mantenimiento del sistema crítico ITS SICAS.",
    tags: ["C#", "IoT", "Modbus", "SQL Server", "Architecture"]
  },
  {
    id: "tu-complemento",
    year: "2021 - 2023",
    title: "Analista Programador ERP & Automatización",
    company: "Tu Complemento EIRL",
    description: "Automatización tributaria y financiera en Softland ERP. Diseño de workflows de pagos automatizados en Duemint con sincronización bidireccional y migración de ecosistemas empresariales.",
    tags: ["ERP Softland", "T-SQL", "API Integration", "Duemint"]
  },
  {
    id: "disecom-chile",
    year: "2021",
    title: "Analista Programador (Ingeniería Inversa)",
    company: "DISECOM CHILE",
    description: "Ingeniería inversa completa de un sistema WMS sin código fuente. Recuperación, estabilización y creación de documentación técnica desde cero mediante decompilación y debugging avanzado.",
    tags: ["Reverse Engineering", "WMS", "Decompilation", "Legacy"]
  },
  {
    id: "puc-chile",
    year: "2020",
    title: "Analista Programador ERP Institucional",
    company: "Pontificia Universidad Católica de Chile",
    description: "Desarrollo de módulos ERP para Facultades de Medicina y Ciencias Biológicas. Implementación de fichas de inventario responsivas y ejecución de pruebas QA críticas.",
    tags: ["ASP.NET", "ERP", "Responsive Design", "QA"]
  },
  {
    id: "fahneu",
    year: "2019 - 2020",
    title: "Analista Programador BI & Automatización",
    company: "Fahneu",
    description: "Automatización de reportes KPI gerenciales integrando Softland ERP, Exchange y SQL Server. Implementación de mantenedores Web API y metodología Kanban en el área TI.",
    tags: ["BI", "Web API", "Kanban", "Automation"]
  },
  {
    id: "early-career",
    year: "2018",
    title: "Desarrollador Web & SQL",
    company: "BoxTI / VMICA",
    description: "Soporte y mantención de aplicaciones C# MVC 5. Gestión de información en SQL Server 2014 y creación de APIs REST para plataformas académicas.",
    tags: ["C# MVC", "SQL Server", "API REST"]
  }
];
