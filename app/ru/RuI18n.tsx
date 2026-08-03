'use client';

import type { ReactNode } from 'react';
import { I18nProvider } from '@/lib/i18n';

/** Forces Russian strings in SSG HTML for all /ru/* routes. */
export function RuI18n({ children }: { children: ReactNode }) {
  return <I18nProvider initialLocale="ru">{children}</I18nProvider>;
}
