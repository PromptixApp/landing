'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { en } from './translations/en';
import { ru } from './translations/ru';
import type { Translation, Locale } from './translations';

const translations = {
  en,
  ru,
};

interface I18nContextType {
  locale: Locale;
  t: Translation;
  setLocale: (locale: Locale) => void;
  availableLocales: Locale[];
  isLoaded: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation должен использоваться внутри I18nProvider');
  }
  return context;
}

const STORAGE_KEY = 'preferred_locale';

interface I18nProviderProps {
  children: ReactNode;
  initialLocale?: Locale;
}

export function I18nProvider({
  children,
  initialLocale = 'en',
}: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  // Pathname-driven locale from Providers (SSG + client navigations)
  useEffect(() => {
    setLocaleState(initialLocale);
    try {
      document.documentElement.lang = initialLocale;
    } catch {
      /* ignore */
    }
  }, [initialLocale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
    } catch {
      /* ignore */
    }
    try {
      document.documentElement.lang = newLocale;
    } catch {
      /* ignore */
    }
  };

  const value: I18nContextType = {
    locale,
    t: translations[locale],
    setLocale,
    availableLocales: ['en', 'ru'],
    // Locale is known from the URL on first paint (SSR + hydration)
    isLoaded: true,
  };

  return React.createElement(I18nContext.Provider, { value }, children);
}
