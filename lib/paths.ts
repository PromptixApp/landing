import type { Locale } from './translations';

export function localePath(locale: Locale, path: string = '/'): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'ru') {
    if (normalized === '/') return '/ru/';
    return `/ru${normalized}`;
  }
  return normalized === '/' ? '/' : normalized;
}
