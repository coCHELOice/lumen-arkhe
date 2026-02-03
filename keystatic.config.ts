import { config, collection, fields } from "@keystatic/core";
import { markdoc } from "@keystatic/core/content-components";

const SECTION_OPTIONS = [
  { label: "Ensayos", value: "Ensayos" },
  { label: "Reseñas", value: "Reseñas" },
  { label: "Crónica", value: "Crónica" },
  { label: "Editorial", value: "Editorial" },
] as const;

const TAG_OPTIONS = [
  { label: "filosofia", value: "filosofia" },
  { label: "historia", value: "historia" },
  { label: "politica", value: "politica" },
  { label: "burocracia", value: "burocracia" },
  { label: "tecnica", value: "tecnica" },
  { label: "chile", value: "chile" },
  { label: "mundo", value: "mundo" },
] as const;

export default config({
  storage: import.meta.env.DEV
    ? { kind: "local" }
    : { kind: "github", repo: "coCHELOice/lumen-arkhe", branch: "main" },

  ui: {
    brand: { name: "Lumen Arkhé" },
    navigation: {
      Contenido: ["articulos"],
    },
  },

  collections: {
    articulos: collection({
      label: "Artículos",
      path: "src/content/articulos/*",
      slugField: "slug",
      columns: ["title", "date", "section", "draft", "featured"],
      previewUrl: ({ slug }) => `/preview/articulos/${slug}`,

      schema: {
        title: fields.text({
          label: "Título",
          validation: { isRequired: true },
        }),

        slug: fields.text({
          label: "Slug",
          description: "Debe coincidir con la URL: /articulos/<slug>",
          validation: { isRequired: true },
        }),

        date: fields.date({
          label: "Fecha",
          validation: { isRequired: true },
        }),

        section: fields.select({
          label: "Sección",
          options: SECTION_OPTIONS,
          defaultValue: "Ensayos",
        }),

        deck: fields.text({
          label: "Deck (bajada)",
          multiline: true,
        }),

        description: fields.text({
          label: "Descripción",
          multiline: true,
        }),

        tag: fields.select({
          label: "Tag",
          options: TAG_OPTIONS,
          defaultValue: "burocracia",
        }),

        temas: fields.array(
          fields.text({ label: "Tema" }),
          {
            label: "Temas",
            itemLabel: (props) => props.value || "Tema",
          }
        ),

        author: fields.text({
          label: "Autor",
          defaultValue: "Gregorio Augusto Burdiles",
        }),

        # Reseñas (opcionales)
        workTitle: fields.text({ label: "Obra / Título (reseña)" }),
        workAuthor: fields.text({ label: "Obra / Autor (reseña)" }),
        workYear: fields.text({ label: "Obra / Año (reseña)" }),
        referenceUrl: fields.text({ label: "Referencia / URL (reseña)" }),

        featured: fields.checkbox({
          label: "Destacado",
          defaultValue: false,
        }),

        draft: fields.checkbox({
          label: "Borrador",
          defaultValue: true,
        }),

        body: fields.markdoc({
          label: "Cuerpo",
          components: markdoc(),
        }),
      },
    }),
  },
});