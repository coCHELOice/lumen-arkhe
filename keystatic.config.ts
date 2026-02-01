import { config, fields, collection } from '@keystatic/core';

const repo = 'coCHELOice/lumen-arkhe';

export default config({
  storage: import.meta.env.PROD
    ? { kind: 'github', repo }
    : { kind: 'local' },

  collections: {
    articulos: collection({
      label: 'Artículos',
      path: 'src/content/articulos/*',
      slugField: 'title',
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        deck: fields.text({ label: 'Bajada', multiline: true }),
        date: fields.date({ label: 'Fecha' }),
        draft: fields.checkbox({ label: 'Borrador' }),
        image: fields.image({
          label: 'Imagen',
          directory: 'src/assets/articulos',
          publicPath: '/src/assets/articulos',
        }),
        body: fields.markdoc({
          label: 'Contenido',
          options: { image: { directory: 'src/assets/articulos', publicPath: '/src/assets/articulos' } },
        }),
      },
    }),
  },
});
