// Preview deploy for GitHub Pages only (the real site runs on Railway at the domain root).
// GitHub Pages serves a project repo under /<repo>/, so after `npm run build` this script
// prefixes every root-relative URL in dist/client with that base path.
// Usage: BASE_PATH=/TekrasPage node scripts/gh-pages-base.mjs
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';

const base = (process.env.BASE_PATH || '').replace(/\/$/, '');
if (!base.startsWith('/')) throw new Error('Set BASE_PATH, e.g. BASE_PATH=/TekrasPage');
const root = 'dist/client';
const esc = base.replace(/\//g, '\\/');

// "/x" -> "/<base>/x", leaving "//cdn..." and already-prefixed paths alone.
const fix = (p) => (p.startsWith('/') && !p.startsWith('//') && !p.startsWith(base + '/') ? base + p : p);

function rewrite(text, ext) {
  // url(/fonts/...) in CSS and inline styles
  text = text.replace(/url\((['"]?)(\/[^'")]*)\1\)/g, (_, q, p) => `url(${q}${fix(p)}${q})`);
  if (ext !== '.html') return text;
  // href, src, action
  text = text.replace(/\b(href|src|action)="(\/[^"]*)"/g, (_, a, p) => `${a}="${fix(p)}"`);
  // srcset: comma-separated "url descriptor" entries
  text = text.replace(/\bsrcset="([^"]*)"/g, (_, v) => `srcset="${v.split(',').map((e) => e.trim().replace(/^\S+/, fix)).join(', ')}"`);
  // 404 page: language check on location.pathname and the English "home" link
  text = text.replace(/\/\^\\\/en\(\\\/\|\$\)\//g, `/^${esc}\\/en(\\/|$)/`);
  text = text.replace(/"home":"\/en\/"/g, `"home":"${base}/en/"`);
  return text;
}

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (['.html', '.css'].includes(extname(file))) {
      const before = await readFile(file, 'utf8');
      const after = rewrite(before, extname(file));
      if (after !== before) await writeFile(file, after);
    }
  }
}

await walk(root);
await writeFile(join(root, '.nojekyll'), ''); // serve the _astro/ folder as-is
console.log(`Prefixed URLs in ${root} with ${base}`);
