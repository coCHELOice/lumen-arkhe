import { defineConfig } from '@keystatic/core';
import { github, localStorage } from '@keystatic/core/storage';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  storage: isProd
    ? github({
        repo: process.env.KEYSTATIC_GITHUB_REPO!,
        contentPath: 'content',
        auth: {
          appSlug: process.env.PUBLIC_KEYSTATIC_GITHUB_APP_SLUG!,
          clientId: process.env.KEYSTATIC_GITHUB_CLIENT_ID!,
          clientSecret: process.env.KEYSTATIC_GITHUB_CLIENT_SECRET!,
        },
      })
    : localStorage(),
  // ... tu config de collections, etc.
});
