'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { I18nProvider } from '@/lib/i18n';
import type { Locale } from '@/lib/translations';
import CookieConsent from './CookieConsent';

function localeFromPath(pathname: string | null): Locale {
  if (!pathname) return 'en';
  return pathname === '/ru' || pathname.startsWith('/ru/') ? 'ru' : 'en';
}

export default function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);

  return (
    <I18nProvider initialLocale={locale}>
      {children}
      <CookieConsent />
    </I18nProvider>
  );
}
