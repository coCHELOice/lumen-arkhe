import { defineCollection, z } from "astro:content";

const urlOrEmpty = z.union([z.string().url(), z.literal("")]);

const articulos = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),

    deck: z.string().optional(),
    description: z.string().optional(),

    // SOLO estas 3 (si aparece otra cosa en algún archivo viejo, cae a Ensayos)
    section: z.enum(["Ensayos", "Reseñas", "Crónica"]).catch("Ensayos"),

    tag: z.string().optional(),
    temas: z.array(z.string()).default([]),

    author: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),

    hero: z.string().optional(),

    // RESEÑAS (opcionales)
    workTitle: z.string().optional(),
    workAuthor: z.string().optional(),
    workYear: z.string().optional(),
    workUrl: urlOrEmpty.optional(),

    // CRÓNICA (opcionales)
    chroniclePlace: z.string().optional(),
    chronicleDate: z.string().optional(),
    chronicleCase: z.string().optional(),
  }),
});

const issues = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    period: z.string().optional(),
    cover: z.string(),
    pdf: z.string().optional(),
    buyUrl: urlOrEmpty.optional(),
    articleSlugs: z.array(z.string()).default([]),
  }),
});

const documentos = defineCollection({
  type: "data", // JSON
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    description: z.string().optional(),
    file: z.string(), // path al archivo
  }),
});

const settings = defineCollection({
  type: "data",
  schema: z.object({
    siteTitle: z.string(),
    siteDescription: z.string().optional(),
    twitterUrl: z.string().url().optional().or(z.literal("")),
    instagramUrl: z.string().url().optional().or(z.literal("")),
    substackUrl: z.string().url().optional().or(z.literal("")),
    newsletterTitle: z.string().optional(),
    newsletterText: z.string().optional(),
  }),
});

export const collections = {
  articulos,
  issues,
  documentos,
  settings,
};


