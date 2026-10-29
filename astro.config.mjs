import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import yaml from '@rollup/plugin-yaml';

const scrollReveal = {
  name: 'lomi-scroll-reveal',
  hooks: {
    'astro:config:setup': ({ injectScript }) => {
      injectScript('page-ssr', 'import "/src/styles/scroll-reveal.css";');
      injectScript('page', 'import "/src/scripts/scroll-reveal.js";');
    },
  },
};

export default defineConfig({
  site: 'https://williams.science',
  output: 'static',
  integrations: [mdx(), sitemap(), scrollReveal],
  vite: {
    plugins: [yaml()],
  },
});
