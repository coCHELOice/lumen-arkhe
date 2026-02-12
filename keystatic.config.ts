import { config, fields, collection, singleton } from '@keystatic/core';

const isProd = process.env.NODE_ENV === 'production';

export default config({
  // Dev: edita archivos locales
  // Prod: edita en GitHub (requiere variables KEYSTATIC_* en el host)
  storage: isProd
    ? { kind: 'github', repo: 'coCHELOice/lumen-arkhe' }
    : { kind: 'local' },

  ui: {
    brand: { name: 'Lumen Arkhé' },
    // Menú simple
    navigation: {
      'Sitio': ['settings'],
      'Contenido': ['articulos', 'issues', 'documentos'],
    },
  },

  singletons: {
    settings: singleton({
      label: 'Configuración Global',
      path: 'src/content/settings/global',
      format: { data: 'json' },
      schema: {
        // Identidad / SEO
        siteTitle: fields.text({ label: 'Nombre del Sitio', validation: { isRequired: true } }),
        siteDescription: fields.text({ label: 'Descripción SEO (Global)', multiline: true }),

        // Redes Sociales
        twitterUrl: fields.text({ label: 'Twitter URL' }), // text permite vacíos más fácil que url a veces
        instagramUrl: fields.text({ label: 'Instagram URL' }),
        substackUrl: fields.text({ label: 'Substack URL' }),

        // Newsletter Banner
        newsletterTitle: fields.text({ label: 'Newsletter: Título' }),
        newsletterText: fields.text({ label: 'Newsletter: Texto', multiline: true }),
      },
    }),
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

        // ✅ Imagen de portada: subida directa
        cover: fields.image({
          label: 'Portada del número',
          directory: 'public/images/issues',
          publicPath: '/images/issues/',
          validation: { isRequired: false },
        }),

        // ✅ Archivo PDF: subida directa
        pdf: fields.file({
          label: 'Archivo PDF (opcional)',
          directory: 'public/pdfs',
          publicPath: '/pdfs/',
          validation: { isRequired: false },
        }),

        buyUrl: fields.url({ label: 'Link compra / impreso (opcional)' }),

        description: fields.text({
          label: 'Descripción corta',
          multiline: true,
        }),

        articleSlugs: fields.array(fields.text({ label: 'Slug de artículo' }), {
          label: 'Artículos incluidos (slugs)',
        }),
      },
    }),

    // Colección de Documentos Adicionales (Papers, Informes, etc.)
    documentos: collection({
      label: 'Otros Documentos',
      path: 'src/content/documentos/*',
      format: { data: 'json' },
      slugField: 'slug',
      schema: {
        title: fields.text({ label: 'Título', validation: { isRequired: true } }),
        slug: fields.text({ label: 'Slug', validation: { isRequired: true } }),
        date: fields.date({ label: 'Fecha', validation: { isRequired: true } }),
        author: fields.text({ label: 'Autor / Entidad (opcional)' }),
        description: fields.text({ label: 'Descripción', multiline: true }),
        file: fields.file({
          label: 'Archivo PDF',
          directory: 'public/docs',
          publicPath: '/docs/',
          validation: { isRequired: true },
        }),
      },
    }),
  },
});
