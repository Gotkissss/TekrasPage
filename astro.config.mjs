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
  // Railway serves the site through a proxy: trust its forwarded host for these domains only,
  // so the contact form's same-origin check sees the public https URL.
  security: {
    allowedDomains: [
      { hostname: 'tekras.net', protocol: 'https' },
      { hostname: 'www.tekras.net', protocol: 'https' },
      { hostname: '*.up.railway.app', protocol: 'https' },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
