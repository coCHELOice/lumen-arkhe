import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },

  collections: {
    articulos: collection({
      label: "Artículos",
      path: "src/content/articulos/*",
      format: { contentField: "content" },

      // Esto hace que Keystatic genere el slug del archivo desde el título,
      // y te muestra UN solo "Slug" (el del nombre del archivo).
      // ...
slugField: "title",

schema: {
  title: fields.slug({
    name: {
      label: "Título",
      validation: { isRequired: true },
    },
    slug: {
      label: "Slug (URL)",
      description:
        "Se genera desde el título. Solo minúsculas, números y guiones. Ej: la-ventanilla-y-el-algoritmo",
      validation: {
        pattern: {
          regex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
          message: "Usa solo minúsculas, números y guiones (sin tildes ni símbolos).",
        },
      },
    },
  }),
// ...


        date: fields.date({
          label: "Fecha",
          validation: { isRequired: true },
        }),

        // Tu bajada principal (lo que aparece bajo el título / en home)
        deck: fields.text({
          label: "Bajada (deck)",
          multiline: true,
        }),

        // Compatibilidad: si algún artículo viejo usa "description", no se rompe nada
        description: fields.text({
          label: "Descripción (fallback)",
          multiline: true,
        }),

        section: fields.select({
          label: "Sección",
          options: [
            { label: "Ensayos", value: "Ensayos" },
            { label: "Entrevistas", value: "Entrevistas" },
            { label: "Reseñas", value: "Reseñas" },
            { label: "Crónica", value: "Crónica" },
          ],
          defaultValue: "Ensayos",
        }),

        tag: fields.text({
          label: "Tag (opcional)",
        }),

        author: fields.text({
          label: "Autor (opcional)",
        }),

        featured: fields.checkbox({
          label: "Destacado (sale en el Hero)",
        }),

        hero: fields.image({
          label: "Hero (opcional)",
          directory: "public/images/hero",
          publicPath: "/images/hero",
        }),

        temas: fields.array(
          fields.text({
            label: "Tema",
          }),
          {
            label: "Temas (opcional)",
          }
        ),

        draft: fields.checkbox({
          label: "Borrador (no publicar)",
        }),

        content: fields.markdoc({
          label: "Contenido",
        }),
      },
    }),

    issues: collection({
      label: "Números (PDF)",
      path: "src/content/issues/*",
      format: { data: "json" },
      slugField: "period",

      schema: {
        title: fields.text({
          label: "Título",
          validation: { isRequired: true },
        }),

        date: fields.date({
          label: "Fecha",
          validation: { isRequired: true },
        }),

        period: fields.text({
          label: "Periodo (ej: 2026 (Ene–Jun))",
          validation: { isRequired: true },
        }),

        cover: fields.image({
          label: "Portada (cover)",
          directory: "public/images/issues",
          publicPath: "/images/issues",
        }),
        pdf: fields.file({
          label: "PDF (archivo)",
          directory: "public/issues",
          publicPath: "/issues",
        }),

        buyUrl: fields.url({
          label: "Link de compra (opcional)",
        }),

        articleSlugs: fields.array(
          fields.relationship({
            label: "Artículo",
            collection: "articulos",
          }),
          {
            label: "Artículos incluidos",
          }
        ),
      },
    }),
  },
});

