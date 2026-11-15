// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: set to the real domain (also update src/lib/site.ts and public/robots.txt)
  site: 'https://example.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
