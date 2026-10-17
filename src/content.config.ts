import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projectSchema = z.object({
  slug: z.string(),
  name: z.string(),
  summary: z.string(),
  cardDescription: z.string(),
  problem: z.string(),
  solution: z.string(),
  tech: z.array(z.string()),
  role: z.string(),
  challenges: z.array(z.string()),
  status: z.string(),
  links: z.array(z.object({ label: z.string(), href: z.string().url() })),
  featured: z.boolean(),
});

const experienceSchema = z.object({
  id: z.string(),
  year: z.string(),
  title: z.string(),
  company: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
});

const siteSchema = z.object({
  lang: z.enum(["es", "en"]),
  identity: z.object({
    name: z.string(),
    location: z.string(),
    email: z.string().email(),
    githubUrl: z.string().url(),
    linkedinUrl: z.string().url(),
  }),
  seo: z.object({ title: z.string(), description: z.string() }),
  profile: z.object({ role: z.string(), tagline: z.string(), summary: z.string() }),
  ui: z.object({
    nav: z.object({
      label: z.string(), projects: z.string(), about: z.string(), contact: z.string(),
      languageLabel: z.string(), languageAria: z.string(),
    }),
    skipToContent: z.string(),
    hero: z.object({
      intro: z.string(), headlineFirst: z.string(), headlineSecond: z.string(),
      summary: z.string(), projectsAction: z.string(), contactAction: z.string(),
    }),
    projects: z.object({
      heading: z.string(), description: z.string(), otherHeading: z.string(),
      featuredLabel: z.string(), visitAction: z.string(), visitImageLabel: z.string(),
      imageAlt: z.string(), newTabHint: z.string(),
    }),
    journey: z.object({
      eyebrow: z.string(), headlineFirst: z.string(), headlineSecond: z.string(),
      description: z.string(), linkedinAction: z.string(), experienceAction: z.string(),
    }),
    strengths: z.object({ heading: z.string(), areas: z.array(z.object({ title: z.string(), description: z.string() })) }),
    contact: z.object({
      eyebrow: z.string(), headlineFirst: z.string(), headlineSecond: z.string(), description: z.string(),
    }),
    footer: z.object({ backToTop: z.string() }),
  }),
  projects: z.array(projectSchema),
  experience: z.array(experienceSchema),
});

const site = defineCollection({
  loader: glob({ pattern: "site.*.md", base: "./src/content" }),
  schema: siteSchema,
});

export const collections = { site };
