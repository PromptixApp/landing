import type { Metadata } from 'next';
import { en } from './translations/en';
import { ru } from './translations/ru';
import type { Locale } from './translations';

const SITE = 'https://promptix.app';

type PageKey =
  | 'home'
  | 'pricing'
  | 'demo'
  | 'terms'
  | 'privacy'
  | 'personalData';

const PATHS: Record<PageKey, { en: string; ru: string }> = {
  home: { en: '/', ru: '/ru/' },
  pricing: { en: '/pricing/', ru: '/ru/pricing/' },
  demo: { en: '/demo/', ru: '/ru/demo/' },
  terms: { en: '/terms/', ru: '/ru/terms/' },
  privacy: { en: '/privacy/', ru: '/ru/privacy/' },
  personalData: { en: '/personal-data/', ru: '/ru/personal-data/' },
};

function t(locale: Locale) {
  return locale === 'ru' ? ru : en;
}

function copy(locale: Locale, page: PageKey): { title: string; description: string } {
  const dict = t(locale);
  switch (page) {
    case 'home':
      return { title: dict.meta.title, description: dict.meta.description };
    case 'pricing':
      return {
        title: dict.pricingPage.metaTitle,
        description: dict.pricingPage.metaDescription,
      };
    case 'demo':
      return {
        title: dict.demo.metaTitle,
        description: dict.demo.metaDescription,
      };
    case 'terms':
      return {
        title: dict.terms.metaTitle,
        description: dict.terms.metaDescription,
      };
    case 'privacy':
      return {
        title: dict.privacy.metaTitle,
        description: dict.privacy.metaDescription,
      };
    case 'personalData':
      return {
        title: dict.personalData.metaTitle,
        description: dict.personalData.metaDescription,
      };
  }
}

export function buildPageMetadata(locale: Locale, page: PageKey): Metadata {
  const { title, description } = copy(locale, page);
  const paths = PATHS[page];
  const canonical = locale === 'ru' ? paths.ru : paths.en;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: paths.en,
        ru: paths.ru,
        'x-default': paths.en,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Promptix',
      type: 'website',
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
      images: [
        {
          url: '/og.jpg',
          width: 1200,
          height: 630,
          alt: 'Promptix',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og.jpg'],
    },
  };
}

export function buildRedirectMetadata(canonicalPath: string): Metadata {
  const canonical = canonicalPath.startsWith('http')
    ? canonicalPath
    : `${SITE}${canonicalPath}`;

  return {
    title: 'Redirecting…',
    robots: { index: false, follow: true },
    alternates: { canonical },
  };
}
