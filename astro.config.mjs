import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://williams.science',
  integrations: [
    mdx(),
    sitemap(),
  ],
  // Output static HTML (same as Jekyll's output)
  output: 'static',
});
