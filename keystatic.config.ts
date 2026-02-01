import { config, fields, collection } from '@keystatic/core';

const {
  KEYSTATIC_STORAGE,
  KEYSTATIC_GITHUB_REPO,
} = process.env;

const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL === '1';
const isGithubStorage = KEYSTATIC_STORAGE === 'github' && KEYSTATIC_GITHUB_REPO;

const storage = isProduction
  ? (
      isGithubStorage
        ? {
            kind: 'github',
            repo: KEYSTATIC_GITHUB_REPO!,
          }
        : (() => {
            throw new Error('❌ Production mode: KEYSTATIC_STORAGE=github y/o KEYSTATIC_GITHUB_REPO están mal configurados o vacíos.');
          })()
    )
  : { kind: 'local' };

export default config({
  storage,

  collections: {
    articulos: collection({
      label: 'Artículos',
      path: 'src/content/articulos/*',
      format: { contentField: 'content' },
      slugField: 'title',
      schema: {
        title: fields.slug({
          name: { label: 'Título', validation: { isRequired: true } },
          slug: {
            label: 'Slug (URL)',
            validation: {
              pattern: {
                regex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
                message: 'Usa solo minúsculas, números y guiones (ej: algo-sin-espacios)',
              },
            },
          },
        }),
        date: fields.date({ label: 'Fecha', validation: { isRequired: true } }),
        deck: fields.text({ label: 'Bajada', multiline: true }),
        draft: fields.checkbox({ label: 'Borrador' }),
        section: fields.select({
          label: 'Sección',
          options: [
            { label: 'Ensayos', value: 'Ensayos' },
            { label: 'Reseñas', value: 'Reseñas' },
            { label: 'Crónica', value: 'Crónica' },
          ],
        }),
        hero: fields.image({
          label: 'Imagen principal',
          directory: 'public/images/hero',
          publicPath: '/images/hero',
        }),
        content: fields.markdoc({ label: 'Contenido' }),
      },
    }),
  },
});

