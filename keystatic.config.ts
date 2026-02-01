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
      slugField: 'title',
      path: 'src/content/articulos/*',
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        deck: fields.text({ label: 'Bajada', multiline: true }),
        date: fields.date({ label: 'Fecha' }),
        draft: fields.checkbox({ label: 'Borrador' }),

        // RECOMENDADO: guarda imágenes en /public (no en /src/assets)
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
