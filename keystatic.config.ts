import { config, fields, collection } from '@keystatic/core';

const isProd = import.meta.env.PROD;

export default config({
  storage: isProd
    ? {
        kind: 'github',
        repo: 'coCHELOice/lumen-arkhe',
      }
    : { kind: 'local' },

  ui: {
    brand: { name: 'Lumen Arkhé' },
    navigation: {
      Contenido: ['articulos'],
    },
  },

  collections: {
    articulos: collection({
      label: 'Artículos',

      // Tus archivos reales viven aquí:
      path: 'src/content/articulos/*',

      // IMPORTANTE: el slug real está en el frontmatter como "slug:"
      slugField: 'slug',

      // IMPORTANTE: Keystatic leerá frontmatter YAML + cuerpo como contenido
      format: { data: 'yaml', contentField: 'body' },

      entryLayout: 'content',
      columns: ['date', 'draft', 'featured'],

      // Preview estable (string, no función)
      previewUrl: '/articulos/{slug}',

      schema: {
        slug: fields.text({
          label: 'Slug (URL)',
          description:
            'Debe coincidir con el nombre del archivo. Ej: burocracia-minima',
          validation: { isRequired: true },
        }),

        title: fields.text({
          label: 'Título',
          validation: { isRequired: true },
        }),

        deck: fields.text({
          label: 'Bajada',
          multiline: true,
        }),

        date: fields.date({
          label: 'Fecha',
          validation: { isRequired: true },
        }),

        featured: fields.checkbox({
          label: 'Destacado (sale en el Hero)',
        }),

        draft: fields.checkbox({
          label: 'Borrador (no publicar)',
        }),

        image: fields.image({
          label: 'Imagen',
          directory: 'public/assets/articulos',
          publicPath: '/assets/articulos/',
        }),

        body: fields.markdoc({
          label: 'Contenido',
          options: {
            image: {
              directory: 'public/assets/articulos',
              publicPath: '/assets/articulos/',
            },
          },
        }),
      },
    }),
  },
});

