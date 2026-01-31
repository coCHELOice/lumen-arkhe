import { defineCollection, z } from "astro:content";

/**
 * Colección: artículos (Markdown)
 */
const articulos = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),

    // Bajada / descripción corta (para home + listados)
    deck: z.string().optional(),
    description: z.string().optional(),

    // Navegación por secciones
    section: z
      .enum(["Ensayos", "Entrevistas", "Reseñas", "Crónica"])
      .default("Ensayos"),

    // Etiquetas
    tag: z.string().optional(),
    temas: z.array(z.string()).default([]),

    // Créditos / control editorial
    author: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),

    // Imagen opcional (si quieres sobreescribir la inferida por slug)
    hero: z.string().optional(),
  }),
});

/**
 * Colección: issues (JSON)
 * OJO: al ser JSON, la fecha viene como string => usamos z.coerce.date()
 */
const issues = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    period: z.string().optional(),
    cover: z.string(),
        pdf: z.string().optional(),
    buyUrl: z.union([z.string().url(), z.literal("")]).optional(),
    articleSlugs: z.array(z.string()).default([]),
  }),
});

export const collections = {
  articulos,
  issues,
};

