import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://lumenarkhe.com",

  integrations: [
    mdx(),
    react(),
    markdoc(),
    sitemap(),
    ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()]),
  ],

  adapter: vercel(),
});
