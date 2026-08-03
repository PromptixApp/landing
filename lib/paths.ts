import type { Locale } from './translations';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** Prefix public asset paths for GitHub Pages project deploys (`/landing`). */
export function assetPath(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export function localePath(locale: Locale, path: string = '/'): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'ru') {
    if (normalized === '/') return '/ru/';
    return `/ru${normalized}`;
  }
  return normalized === '/' ? '/' : normalized;
}
