import { config, collection, fields } from '@keystatic/core';

const isProd = import.meta.env.PROD;

export default config({
  storage: isProd
    ? {
        kind: 'github',
        repo: 'coCHELOice/lumen-arkhe',
        branch: 'main',
      }
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

        // Ruta pública que usas en Astro, ej: /images/hero/mi-articulo/hero.png
        image: fields.text({
          label: 'Imagen (ruta pública)',
          description: 'Ej: /images/hero/mi-articulo/hero.png',
        }),

        body: fields.markdoc({ label: 'Contenido' }),
      },
    }),
  },
});
