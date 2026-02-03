import { config, fields, collection } from '@keystatic/core';

const isProd = process.env.NODE_ENV === 'production';

export default config({
  // Dev: edita archivos locales
  // Prod: edita en GitHub (requiere variables KEYSTATIC_* en el host)
  storage: isProd
    ? { kind: 'github', repo: 'coCHELOice/lumen-arkhe' }
    : { kind: 'local' },

  ui: {
    brand: { name: 'Lumen Arkhé' },
    // Menú simple: lo mismo que maneja el sitio
    navigation: {
      Contenido: ['articulos', 'issues'],
    },
  },

  collections: {
    articulos: collection({
      label: 'Artículos',
      path: 'src/content/articulos/*',
      // Importante: nuestros archivos son .mdoc con frontmatter + cuerpo
      format: { contentField: 'content' },

      // El slug real del sitio es el nombre de archivo (Astro usa entry.slug),
      // y Keystatic lo controla con este campo:
      slugField: 'slug',

      previewUrl: '/preview/articulos/{slug}',

      schema: {
        title: fields.text({
          label: 'Título',
          validation: { isRequired: true },
        }),

        slug: fields.text({
          label: 'Slug (URL)',
          validation: { isRequired: true },
        }),

        date: fields.date({
          label: 'Fecha',
          validation: { isRequired: true },
        }),

        deck: fields.text({
          label: 'Bajada (deck)',
          multiline: true,
        }),

        description: fields.text({
          label: 'Descripción corta (fallback)',
          multiline: true,
        }),

        section: fields.select({
          label: 'Sección',
          defaultValue: 'Ensayos',
          options: [
            { label: 'Ensayos', value: 'Ensayos' },
            { label: 'Reseñas', value: 'Reseñas' },
            { label: 'Crónica', value: 'Crónica' },
          ],
        }),

        tag: fields.text({ label: 'Tag / Serie' }),

        temas: fields.array(fields.text({ label: 'Tema' }), {
          label: 'Temas',
          itemLabel: (props) => props.value || 'tema',
        }),

        author: fields.text({ label: 'Autor' }),

        featured: fields.checkbox({
          label: 'Destacar en Home',
          defaultValue: false,
        }),

        draft: fields.checkbox({
          label: 'Borrador',
          defaultValue: false,
        }),

        // ✅ Imagen Hero: sube directamente
        hero: fields.image({
          label: 'Imagen (Hero/Home)',
          directory: 'public/images/articulos',
          publicPath: '/images/articulos/',
        }),

        // Reseñas (opcionales)
        workTitle: fields.text({ label: 'Reseña: obra / título' }),
        workAuthor: fields.text({ label: 'Reseña: autor' }),
        workYear: fields.text({ label: 'Reseña: año (texto libre)' }),
        workUrl: fields.url({ label: 'Reseña: URL (opcional)' }),

        // Crónica (opcionales)
        chroniclePlace: fields.text({ label: 'Crónica: lugar' }),
        chronicleDate: fields.text({ label: 'Crónica: fecha' }),
        chronicleCase: fields.text({ label: 'Crónica: caso' }),

        content: fields.markdoc({
          label: 'Contenido',
        }),
      },
    }),

    // “Issues” / PDFs (tu Archivo PDF)
    issues: collection({
      label: 'Archivo PDF',
      path: 'src/content/issues/*',
      format: { data: 'json' },
      slugField: 'slug',

      schema: {
        title: fields.text({
          label: 'Título',
          validation: { isRequired: true },
        }),

        slug: fields.text({
          label: 'Slug (ID)',
          validation: { isRequired: true },
        }),

        date: fields.date({
          label: 'Fecha',
          validation: { isRequired: true },
        }),

        period: fields.text({ label: 'Periodo (opcional)' }),

        // ✅ MODO SEGURO: portada como ruta/URL
        // Ej: /images/issues/portada.jpg
        cover: fields.text({
          label: 'Portada — ruta o URL (ej: /images/issues/portada.jpg)',
        }),

        // ✅ MODO SEGURO: PDF como ruta/URL
        // Ej: /issues/atomo-11.pdf
        pdf: fields.text({
          label: 'PDF (opcional) — ruta o URL (ej: /issues/atomo-11.pdf)',
        }),

        buyUrl: fields.url({ label: 'Link compra (opcional)' }),

        articleSlugs: fields.array(fields.text({ label: 'Slug de artículo' }), {
          label: 'Artículos incluidos (slugs)',
        }),
      },
    }),
  },
});
