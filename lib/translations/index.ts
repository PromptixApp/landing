export { en } from './en';
export { ru } from './ru';
export type { Translation } from './en';

export const translations = {
  en: () => import('./en').then(m => m.en),
  ru: () => import('./ru').then(m => m.ru),
};

export const supportedLocales = ['en', 'ru'] as const;
export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = 'en'; 