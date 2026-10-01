# tekras-web

Code version of [tekras.net](https://tekras.net), migrated from Framer. Built with [Astro](https://astro.build) + Tailwind CSS, served by Node on Railway.

## Structure

| Path | What it is |
| --- | --- |
| `src/data/site.ts` | **All editable content**: phone, email, address, hero words, and the 4 services (titles, dates, texts). |
| `src/pages/` | Pages: `index` (home), `contact`, `404`, `services/[slug]` (one template for all services). |
| `src/pages/api/contact.ts` | Contact form endpoint — emails submissions to `ventas@tekras.com`. |
| `src/components/` | Header, footer, hero animation, service card, profile card. |
| `src/styles/global.css` | Fonts, brand colors, shared effects. |
| `public/` | Images, logos, fonts (all self-hosted, no dependency on Framer). |

To add a service: add an entry to `services` in `src/data/site.ts` and put its image in `public/images/`. The home grid, detail page and "‹ previous" links update automatically.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build && npm start   # production build
```

## Deploy on Railway

1. Create a project in Railway → **Deploy from GitHub repo** (or run `railway up` from this folder with the Railway CLI).
2. Railway detects Node automatically: build `npm run build`, start `npm start`. No extra config needed; the server reads Railway's `PORT`.
3. In the service **Variables**, set the contact-form variables from `.env.example` (see below).
4. In **Settings → Networking**, add the custom domain `tekras.net` (and `www.tekras.net`) and create the DNS records Railway shows at your domain registrar. Remove the Framer domain connection first.

### Contact form email

Railway blocks outbound SMTP on Free/Hobby plans, so the recommended option is **Resend** (free tier: 3,000 emails/month):

1. Create an account at resend.com, add and verify the domain `tekras.net` (DNS records).
2. Create an API key and set in Railway: `RESEND_API_KEY`, `CONTACT_FROM=Tekras Web <no-reply@tekras.net>`, `CONTACT_TO=ventas@tekras.com`.

Alternatively, on Railway Pro you can use SMTP (e.g. Microsoft 365) with `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`.

Until one of these is configured, the form shows a friendly error and suggests emailing ventas@tekras.com directly.
