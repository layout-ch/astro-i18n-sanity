import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import i18n from "@astrolicious/i18n";
import { sanityIntegration } from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel(),

  integrations: [
    i18n({
      defaultLocale: "fr",
      locales: ["fr", "de", "en"],
      strategy: 'prefix',
      sitemap: true,
    }),
    sanityIntegration({
      projectId: "t9cmnozc",
      dataset: "production",
      useCdn: false,
      studioBasePath: "/admin"
    }),
    react()
  ]
});