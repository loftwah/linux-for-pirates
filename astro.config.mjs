// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import rehypePrettyCode from 'rehype-pretty-code';

/**
 * @type {import('rehype-pretty-code').Options}
 */
const prettyCodeOptions = {
  theme: {
    light: 'github-light',
    dark: 'github-dark'
  },
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node) {
    // Add a class to highlighted lines
    node.properties.className = node.properties.className || [];
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedChars(node) {
    // Add a class to highlighted words/chars
    node.properties.className = ['word'];
  },
  // Keep backgrounds and code blocks intact
  keepBackground: true,
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
