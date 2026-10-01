// Language helpers. Spanish is the default and lives at the root (/, /contact, ...);
// English lives under /en/ (/en/, /en/contact, ...).
import { ui } from './ui';

export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

export function getLang(url: URL): Lang {
  return /^\/en(\/|$)/.test(url.pathname) ? 'en' : 'es';
}

/** Path without the language prefix: "/en/contact" -> "/contact". */
export function stripLang(path: string): string {
  return path.replace(/^\/en(?=\/|$)/, '') || '/';
}

/** Same page in the given language: localizePath("/contact", "en") -> "/en/contact". */
export function localizePath(path: string, lang: Lang): string {
  const clean = stripLang(path);
  if (lang === defaultLang) return clean;
  return clean === '/' ? `/${lang}/` : `/${lang}${clean}`;
}

export function useTranslations(url: URL) {
  const lang = getLang(url);
  return { lang, t: ui[lang], path: (p: string) => localizePath(p, lang) };
}

/** For getStaticPaths: one entry per language ({ lang: undefined } = Spanish at the root). */
export const langParams = [{ lang: undefined }, { lang: 'en' }];
