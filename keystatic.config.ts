import { config } from '@keystatic/core';

const isProd = import.meta.env.PROD;

export default config({
  storage: isProd
    ? {
        kind: 'github',
        // repo en formato "owner/name"
        repo: 'coCHELOice/lumen-arkhe',
        // Opcional: si quieres acotar ramas, usa branchPrefix
        // branchPrefix: 'keystatic/'
      }
    : { kind: 'local' },

  // ... aquí van tus collections/singletons tal como ya las tienes

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


