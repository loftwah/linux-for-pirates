// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/linux-for-pirates',
  vite: {
    plugins: [tailwind()],
  },
  build: {
    assets: 'assets',
  },
  markdown: {
    syntaxHighlight: 'prism',
  },
  legacy: {
    collections: true
  },
});
