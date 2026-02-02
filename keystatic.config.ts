import { config, fields, collection } from '@keystatic/core';

const isProd = import.meta.env.PROD;

export default config({
  storage: isProd
    ? {
        kind: 'github',
        // repo en formato "owner/name"
        repo: 'coCHELOice/lumen-arkhe',
        // opcional, si quieres limitar ramas que Keystatic maneja:
        // branchPrefix: 'keystatic/',
      }
    : { kind: 'local' },

  collections: {
    articulos: collection({
      label: 'Artículos',
      slugField: 'slug',
      format: { data: 'yaml', contentField: 'body' },
      entryLayout: 'content',
      columns: ['date','draft'],
      previewUrl: '/articulos/{slug}',
      path: 'src/content/articulos/*',
      schema: {
        slug: fields.text({ label: 'Slug', validation: { isRequired: true } }),
        title: fields.text({ label: 'Título', validation: { isRequired: true } }),
        deck: fields.text({ label: 'Bajada', multiline: true }),
        date: fields.date({ label: 'Fecha' }),
        draft: fields.checkbox({ label: 'Borrador' }),

        // RECOMENDADO: guarda imágenes en /public (no en /src/assets)
        image: fields.image({
          label: 'Imagen',
          directory: 'public/images/articulos',
          publicPath: '/images/articulos',
        }),

        body: fields.markdoc({
          label: 'Contenido',
          options: {
            image: {
              directory: 'public/images/articulos',
              publicPath: '/images/articulos',
            },
          },
        }),
      },
    }),
  },
});
