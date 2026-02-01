import { config, fields, collection } from "@keystatic/core";

const isGithub = process.env.KEYSTATIC_STORAGE === "github";
const repo = process.env.KEYSTATIC_GITHUB_REPO;

if (isGithub && !repo) {
  throw new Error(
    "Keystatic GitHub mode activado pero falta KEYSTATIC_GITHUB_REPO (formato: OWNER/REPO)."
  );
}

export default config({
  storage: isGithub
    ? { kind: "github", repo: repo as string }
    : { kind: "local" },

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
            description:
              "Se genera desde el título. Solo minúsculas, números y guiones. Ej: la-ventanilla-y-el-algoritmo",
            validation: {
              pattern: {
                regex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
                message:
                  "Usa solo minúsculas, números y guiones (sin tildes ni símbolos).",
              },
            },
          },
        }),

        date: fields.date({
          label: "Fecha",
          validation: { isRequired: true },
        }),

        deck: fields.text({
          label: "Bajada (deck)",
          multiline: true,
        }),

        description: fields.text({
          label: "Descripción (fallback)",
          multiline: true,
        }),

        section: fields.select({
          label: "Sección",
          options: [
            { label: "Ensayos", value: "Ensayos" },
            { label: "Reseñas", value: "Reseñas" },
            { label: "Crónica", value: "Crónica" },
          ],
          defaultValue: "Ensayos",
        }),

        // RESEÑAS — ficha de la obra (opcionales)
        workTitle: fields.text({
          label: "Reseña — Obra: Título (opcional)",
        }),
        workAuthor: fields.text({
          label: "Reseña — Obra: Autor (opcional)",
        }),
        workYear: fields.text({
          label: "Reseña — Obra: Año (opcional)",
        }),
        workUrl: fields.url({
          label: "Reseña — Obra: Link (opcional)",
        }),

        // CRÓNICA — ficha del hecho (opcionales)
        chroniclePlace: fields.text({
          label: "Crónica — Lugar (opcional)",
        }),
        chronicleDate: fields.date({
          label: "Crónica — Fecha del hecho (opcional)",
        }),
        chronicleCase: fields.text({
          label: "Crónica — Caso / nota breve (opcional)",
          multiline: true,
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

