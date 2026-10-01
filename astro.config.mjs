// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

// Pages are prerendered to static HTML; only /api/contact runs on the server.
export default defineConfig({
  site: 'https://tekras.net',
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  server: { host: true },
  vite: {
    plugins: [tailwindcss()],
  },
});
