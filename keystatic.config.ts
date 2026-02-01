import { config, fields, collection } from "@keystatic/core";

const isServer = typeof process !== "undefined" && process?.env;
const storage =
  isServer && process.env.KEYSTATIC_STORAGE === "github" &&
  process.env.KEYSTATIC_GITHUB_REPO
    ? {
        kind: "github",
        repo: process.env.KEYSTATIC_GITHUB_REPO,
      }
    : {
        kind: "local",
      };

export default config({
  storage,

  collections: {
    articulos: collection({
      label: "Artículos",
      path: "src/content/articulos/*",
      format: { contentField: "content" },

      slugField: "title",

      schema: {
        title: fields.slug({
          name: {
            label: "Título",
            validation: { isRequired: true },
          },
          slug: {
            label: "Slug (URL)",
            validation: {
              pattern: {
                regex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
                message:
                  "Solo minúsculas, números y guiones. Ej: la-ventanilla-y-el-algoritmo",
              },
            },
          },
        }),
        date: fields.date({ label: "Fecha", validation: { isRequired: true } }),
        deck: fields.text({ label: "Bajada", multiline: true }),
        description: fields.text({ label: "Descripción", multiline: true }),
        section: fields.select({
          label: "Sección",
          options: [
            { label: "Ensayos", value: "Ensayos" },
            { label: "Reseñas", value: "Reseñas" },
            { label: "Crónica", value: "Crónica" },
          ],
          defaultValue: "Ensayos",
        }),
        workTitle: fields.text({ label: "Reseña — Obra: Título" }),
        workAuthor: fields.text({ label: "Reseña — Obra: Autor" }),
        workYear: fields.text({ label: "Reseña — Obra: Año" }),
        workUrl: fields.url({ label: "Reseña — Obra: Link" }),
        chroniclePlace: fields.text({ label: "Crónica — Lugar" }),
        chronicleDate: fields.date({ label: "Crónica — Fecha" }),
        chronicleCase: fields.text({
          label: "Crónica — Caso",
          multiline: true,
        }),
        tag: fields.text({ label: "Tag" }),
        author: fields.text({ label: "Autor" }),
        featured: fields.checkbox({ label: "Destacado" }),
        hero: fields.image({
          label: "Hero",
          directory: "public/images/hero",
          publicPath: "/images/hero",
        }),
        temas: fields.array(fields.text({ label: "Tema" }), {
          label: "Temas",
        }),
        draft: fields.checkbox({ label: "Borrador (no publicar)" }),
        content: fields.markdoc({ label: "Contenido" }),
      },
    }),

    issues: collection({
      label: "Números PDF",
      path: "src/content/issues/*",
      format: { data: "json" },
      slugField: "period",

      schema: {
        title: fields.text({ label: "Título", validation: { isRequired: true } }),
        date: fields.date({ label: "Fecha", validation: { isRequired: true } }),
        period: fields.text({ label: "Periodo", validation: { isRequired: true } }),
        cover: fields.image({
          label: "Portada",
          directory: "public/images/issues",
          publicPath: "/images/issues",
        }),
        pdf: fields.file({
          label: "PDF",
          directory: "public/issues",
          publicPath: "/issues",
        }),
        buyUrl: fields.url({ label: "Link de compra" }),
        articleSlugs: fields.array(
          fields.relationship({
            label: "Artículo",
            collection: "articulos",
          }),
          {
            label: "Artículos",
          }
        ),
      },
    }),
  },
});


