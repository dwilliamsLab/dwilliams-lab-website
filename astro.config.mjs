import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  site: 'https://williams.science',
  output: 'static',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [yaml()],
  },
});