// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://linuxforpirates.deanlofts.xyz',
  base: '/',
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
  outDir: './dist',
  publicDir: './public',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
