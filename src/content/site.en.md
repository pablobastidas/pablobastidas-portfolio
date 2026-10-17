---
lang: en
identity:
  name: Pablo Bastidas Garrido
  location: Santiago, Chile
  email: pablobastidasgarrido@gmail.com
  githubUrl: https://github.com/pablobastidas
  linkedinUrl: https://www.linkedin.com/in/bastidaspablo/
seo:
  title: Pablo Bastidas | Backend Developer & Systems Integrator
  description: >-
    Professional portfolio of Pablo Bastidas, expert in .NET, Python, Softland ERP automation, and industrial
    systems integration.
profile:
  role: Software Engineer | Backend Developer (.NET & Python)
  tagline: Backend architecture, process automation, and critical systems integration.
  summary: >-
    Software Engineer with over 5 years of experience in the full development lifecycle. Specialist in
    modernizing legacy systems, ERP automation, and industrial IoT ecosystems integration. Certified
    Professional Python (PUC) with a current focus on scalable architectures and data science.
ui:
  nav:
    label: Main navigation
    projects: Work
    about: About
    contact: Contact
    languageLabel: ES
    languageAria: Read in Spanish
  skipToContent: Skip to content
  hero:
    intro: Pablo Bastidas / Software development
    headlineFirst: Solid backends.
    headlineSecond: Simpler processes.
    summary: >-
      I connect systems, automate tasks, and build applications. Software designed to solve the challenges of
      everyday work.
    projectsAction: Explore my work
    contactAction: Let's talk
  projects:
    heading: Software in use.
    description: Projects where ideas meet data, code, and people.
    otherHeading: More ideas put into practice
    featuredLabel: Featured project · Data and web applications
    visitAction: Visit project
    visitImageLabel: Visit
    imageAlt: Interface for
    newTabHint: new tab
  journey:
    eyebrow: Approach and experience
    headlineFirst: First, understand.
    headlineSecond: Then, build.
    description: >-
      I'm Pablo Bastidas, a software engineer in Santiago, Chile. I've worked in healthcare, industrial
      operations, and business systems, connecting technology with practical needs.
    linkedinAction: My LinkedIn profile
    experienceAction: Explore my professional experience
  strengths:
    heading: Where I can help
    areas:
      - title: Backend
        description: APIs, business logic, and databases. .NET, Python, and SQL.
      - title: Automation
        description: Reports, payments, and administrative processes that need less manual work.
      - title: Integrations
        description: Connected ERP systems, business tools, and industrial equipment.
  contact:
    eyebrow: The next step
    headlineFirst: Let's make
    headlineSecond: it work.
    description: A process to improve or an idea to build? Tell me what you're working on.
  footer:
    backToTop: Back to top
projects:
  - slug: patas-match
    name: Patas Match
    summary: >-
      Premium editorial full-stack web platform oriented towards responsible pet adoption, featuring
      geolocation and real-time chat.
    problem: >-
      The fragmentation of adoption portals and the lack of professional workflows that guarantee pet safety
      and legal data protection compliance.
    solution: >-
      Development of an architecture using Angular 18 (Signals), Django Rest Framework with PostGIS for
      proximity searches, a denormalized database for O(1) chats, and a Dockerized infrastructure.
    tech:
      - Angular 18
      - Django DRF
      - PostgreSQL
      - PostGIS
      - Redis
      - Docker
      - Tailwind CSS
    role: Full-Stack & DevOps Developer
    challenges:
      - Real-time chat optimization using Redis and O(1) message denormalization
      - Implementation of geographic proximity searches using PostGIS in production
      - Legal compliance workflows (Chilean Law 19,628) and secure account deletion (ARCO Rights)
    status: Active
    links:
      - label: View project
        href: https://patasmatch.vercel.app/
    featured: true
    cardDescription: A responsible adoption application with proximity search, real-time chat, and a full-stack architecture.
  - slug: mundial-48
    name: 2026 World Cup Prediction
    summary: >-
      Web platform to manage predictions (pools/quinielas) for the 2026 FIFA World Cup. Allows users to
      compete in private leagues predicting match results.
    problem: >-
      Need for a modern, scalable platform to manage predictions for the new FIFA format of 48 teams and 104
      matches.
    solution: >-
      Full-Stack development with a dynamic fixture engine, passwordless authentication (Supabase), and
      Just-in-Time provisioning.
    tech:
      - Next.js 15
      - React 19
      - FastAPI
      - PostgreSQL
      - Supabase
      - Tailwind CSS
    role: Full-Stack Developer
    challenges:
      - Optimization of N+1 database queries
      - Automatic JWT synchronization in the backend
      - Migration to Next.js 15 with App Router
    status: Active
    links:
      - label: View project
        href: https://prediccionmundial2026-frontend.vercel.app/
    featured: true
    cardDescription: >-
      A prediction platform for competing with friends, with private leagues, authentication, and a match
      engine for 48 teams.
  - slug: kawin-event-platform
    name: Kawin Ecosystem
    summary: >-
      Complete 3-tier architecture for the centralization and curation of massive events through smart
      scraping.
    problem: Fragmentation of event data across multiple sources.
    solution: ETL pipeline in Python + robust API in FastAPI + reactive frontend in Angular with advanced filtering.
    tech:
      - FastAPI
      - Angular
      - PostgreSQL
      - Python
      - Scraping
    role: Software Architect & Full-Stack Developer
    challenges:
      - Normalization of heterogeneous data structures
      - Real-time data synchronization
    status: Active
    links:
      - label: View project
        href: https://kawin-frontend.vercel.app/
    featured: true
    cardDescription: >-
      Brings events from different sources together on a map. I built the data pipeline, the API, and the web
      application connecting the entire experience.
experience:
  - id: personal-projects
    year: Present
    title: Web Architectures & Personal Projects Developer
    company: Independent Development
    description: >-
      Leading the development of the Kawin Ecosystem (3-tier architecture for events through massive scraping)
      and Motorsport Discovery (BI platform with Euclidean recommendation algorithms), using modern stacks
      like Angular 19 and FastAPI.
    tags:
      - Angular 19
      - FastAPI
      - Python
      - Scraping
      - BI
  - id: abenis-consultores
    year: 2024 - 2025
    title: Full-Stack Software Developer
    company: Abenis Consultores
    description: >-
      Development of critical modules for the SIGA document manager at Hospital Dr. Sótero del Río.
      Optimization of complex SQL queries in Oracle 11g and automation of administrative hospital workflows.
    tags:
      - VB.NET
      - Oracle 11g
      - GitLab CI/CD
      - jQuery
      - Bootstrap
  - id: infratec-spa
    year: 2023 - 2024
    title: IoT Software Developer
    company: Infratec Spa
    description: >-
      Integration of industrial IoT systems in C#, connecting weather stations and data acquisition equipment
      via Modbus protocol. Maintenance of the critical ITS SICAS system.
    tags:
      - C#
      - IoT
      - Modbus
      - SQL Server
      - Architecture
  - id: tu-complemento
    year: 2021 - 2023
    title: ERP & Automation Analyst Programmer
    company: Tu Complemento EIRL
    description: >-
      Tax and financial automation in Softland ERP. Design of automated payment workflows in Duemint with
      bidirectional synchronization and enterprise ecosystem migrations.
    tags:
      - ERP Softland
      - T-SQL
      - API Integration
      - Duemint
  - id: disecom-chile
    year: '2021'
    title: Analyst Programmer (Reverse Engineering)
    company: DISECOM CHILE
    description: >-
      Complete reverse engineering of a WMS system without source code. Recovery, stabilization, and creation
      of technical documentation from scratch through decompilation and advanced debugging.
    tags:
      - Reverse Engineering
      - WMS
      - Decompilation
      - Legacy
  - id: puc-chile
    year: '2020'
    title: Institutional ERP Analyst Programmer
    company: Pontificia Universidad Católica de Chile
    description: >-
      Development of ERP modules for the Faculties of Medicine and Biological Sciences. Implementation of
      responsive inventory files and execution of critical QA tests.
    tags:
      - ASP.NET
      - ERP
      - Responsive Design
      - QA
  - id: fahneu
    year: 2019 - 2020
    title: BI & Automation Analyst Programmer
    company: Fahneu
    description: >-
      Automation of management KPI reports integrating Softland ERP, Exchange, and SQL Server. Implementation
      of Web API maintainers and Kanban methodology in the IT area.
    tags:
      - BI
      - Web API
      - Kanban
      - Automation
  - id: early-career
    year: '2018'
    title: Web & SQL Developer
    company: BoxTI / VMICA
    description: >-
      Support and maintenance of C# MVC 5 applications. Information management in SQL Server 2014 and creation
      of REST APIs for academic platforms.
    tags:
      - C# MVC
      - SQL Server
      - API REST
---

<!-- Edit the frontmatter above to update this language version of the portfolio. -->
