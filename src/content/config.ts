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

export const collections = {
  articulos,
  issues,
};


