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
    sitemap({
      filter: (page) => !page.includes("/keystatic") && !page.includes("/print/"),
      serialize: (item) => {
        // Homepage
        if (item.url === "https://lumenarkhe.com/" || item.url === "https://lumenarkhe.com/en/") {
          return { ...item, priority: 1.0, changefreq: "weekly" };
        }
        // Articles
        if (item.url.includes("/articulos/")) {
          return { ...item, priority: 0.9, changefreq: "monthly" };
        }
        // Series, PDF, Newsletter
        if (item.url.includes("/series") || item.url.includes("/pdf") || item.url.includes("/newsletter")) {
          return { ...item, priority: 0.7, changefreq: "monthly" };
        }
        // About
        if (item.url.includes("/sobre")) {
          return { ...item, priority: 0.5, changefreq: "yearly" };
        }
        return { ...item, priority: 0.5 };
      },
    }),
    ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()]),
  ],

  adapter: vercel(),
});
