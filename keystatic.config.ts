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
      path: 'src/content/articulos/*',

      // Guardar frontmatter YAML + cuerpo Markdoc en el mismo archivo
      format: { data: 'yaml', contentField: 'content' },

      // El nombre del archivo (y el slug interno de Keystatic) será el valor de este campo
      slugField: 'slug',

      entryLayout: 'content',
      columns: ['date', 'section', 'draft', 'featured'],
      previewUrl: '/articulos/{slug}',

      schema: {
        title: fields.text({
          label: 'Título',
          validation: { isRequired: true },
        }),

        slug: fields.text({
          label: 'Slug (URL)',
          description: 'Minúsculas, números y guiones. Ej: la-ventanilla-y-el-algoritmo',
          validation: {
            isRequired: true,
            pattern: {
              regex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
              message: 'Usa solo minúsculas, números y guiones (sin tildes ni símbolos).',
            },
          },
        }),

        deck: fields.text({
          label: 'Bajada (deck)',
          multiline: true,
        }),

        description: fields.text({
          label: 'Descripción',
          multiline: true,
        }),

        date: fields.date({
          label: 'Fecha',
          validation: { isRequired: true },
        }),

        section: fields.select({
          label: 'Sección',
          options: [
            { label: 'Ensayos', value: 'Ensayos' },
            { label: 'Reseñas', value: 'Reseñas' },
            { label: 'Crónica', value: 'Crónica' },
          ],
          defaultValue: 'Ensayos',
        }),

        tag: fields.text({ label: 'Tag (opcional)' }),
        author: fields.text({ label: 'Autor (opcional)' }),

        temas: fields.array(fields.text({ label: 'Tema' }), {
          label: 'Temas (opcional)',
        }),

        featured: fields.checkbox({ label: 'Destacado (sale en el Hero)' }),
        draft: fields.checkbox({ label: 'Borrador (no publicar)' }),

        image: fields.image({
          label: 'Imagen',
          directory: 'public/assets/articulos',
          publicPath: '/assets/articulos/',
        }),

        hero: fields.image({
          label: 'Hero (opcional)',
          directory: 'public/assets/hero',
          publicPath: '/assets/hero/',
        }),

        content: fields.markdoc({
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
