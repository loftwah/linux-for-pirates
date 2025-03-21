// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import rehypePrettyCode from 'rehype-pretty-code';

/**
 * @type {import('rehype-pretty-code').Options}
 */
const prettyCodeOptions = {
  theme: 'one-dark-pro',
  keepBackground: true,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className = node.properties.className || [];
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedChars(node) {
    node.properties.className = ['word'];
  },
  grid: true
};

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
    syntaxHighlight: false, // Disable the built-in syntax highlighter
    rehypePlugins: [
      [rehypePrettyCode, prettyCodeOptions],
    ],
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
