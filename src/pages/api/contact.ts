// Contact form endpoint. Runs on the server (not prerendered) and emails the submission.
//
// Delivery, in order of preference (configure with environment variables):
//   1. Resend HTTP API  -> RESEND_API_KEY (+ CONTACT_FROM on a domain verified in Resend)
//   2. SMTP             -> SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS (Railway only allows SMTP on Pro plans)
// CONTACT_TO sets the recipient (defaults to ventas@tekras.com).
import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import { ui } from '../../i18n/ui';
import { services } from '../../data/site';

export const prerender = false;

const env = (k: string) => process.env[k]?.trim() || undefined;
const TO = () => env('CONTACT_TO') ?? 'ventas@tekras.com';
const FROM = () => env('CONTACT_FROM') ?? 'Tekras Web <no-reply@tekras.net>';

// Basic per-IP rate limit: 5 submissions per 10 minutes.
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const json = (status: number, body: object) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return json(400, { error: ui.es.api.invalid });
  }
  const get = (k: string) => String(data.get(k) ?? '').trim().slice(0, 5000);
  const msg = ui[get('lang') === 'en' ? 'en' : 'es'].api;

  // Honeypot filled in: pretend success so bots don't retry.
  if (get('website') || get('fax')) return json(200, { ok: true });

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || clientAddress || 'unknown';
  if (rateLimited(ip)) return json(429, { error: msg.tooMany });

  // Service values -> readable names (Spanish, since the email goes to the Tekras team)
  const serviceNames: Record<string, string> = {
    ...Object.fromEntries(services.map((s) => [s.slug, s.title.es])),
    ...Object.fromEntries(ui.es.contact.extraServices.map((x) => [x.value, x.label])),
  };
  const picked = data
    .getAll('services')
    .map((v) => String(v))
    .filter((v) => v in serviceNames)
    .map((v) => serviceNames[v]);

  const form = {
    name: get('name'),
    company: get('company'),
    email: get('email'),
    phone: get('phone'),
    size: get('size'),
    message: get('message'),
  };
  if (!form.name || !form.company || !picked.length || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    return json(400, { error: msg.required });
  }

  const rows: [string, string][] = [
    ['Nombre', form.name],
    ['Empresa', form.company],
    ['Correo', form.email],
    ['Teléfono', form.phone || '—'],
    ['Servicios de interés', picked.join(', ')],
    ['Tamaño de la organización', form.size || '—'],
    ['Mensaje', form.message || '—'],
    ['Idioma del sitio', get('lang') === 'en' ? 'English' : 'Español'],
  ];
  const subject = `Nueva solicitud web: ${picked.join(', ')} — ${form.company}`.replace(/[\r\n]+/g, ' ');
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n');
  const html = `<table cellpadding="6" style="font-family:sans-serif;font-size:14px">${rows
    .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escapeHtml(v).replace(/\n/g, '<br>')}</td></tr>`)
    .join('')}</table>`;

  try {
    if (env('RESEND_API_KEY')) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${env('RESEND_API_KEY')}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: FROM(), to: TO().split(','), reply_to: form.email, subject, text, html }),
      });
      if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
    } else if (env('SMTP_HOST')) {
      const port = Number(env('SMTP_PORT') ?? 587);
      const transport = nodemailer.createTransport({
        host: env('SMTP_HOST'),
        port,
        secure: port === 465,
        auth: env('SMTP_USER') ? { user: env('SMTP_USER'), pass: env('SMTP_PASS') } : undefined,
      });
      await transport.sendMail({ from: FROM(), to: TO(), replyTo: form.email, subject, text, html });
    } else {
      console.error('[contact] No email provider configured (set RESEND_API_KEY or SMTP_HOST). Submission:\n' + text);
      return json(503, { error: msg.notConfigured });
    }
  } catch (err) {
    console.error('[contact] Failed to send email:', err);
    return json(502, { error: msg.failed });
  }

  return json(200, { ok: true });
};
