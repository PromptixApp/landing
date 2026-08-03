'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from '@/lib/i18n';
import { localePath } from '@/lib/paths';
import type { Locale } from '@/lib/translations';

const options: { locale: Locale; label: string }[] = [
  { locale: 'en', label: 'EN' },
  { locale: 'ru', label: 'RU' },
];

function stripLocalePrefix(pathname: string): string {
  if (pathname === '/ru' || pathname === '/ru/') return '/';
  if (pathname.startsWith('/ru/')) {
    const rest = pathname.slice(3);
    return rest.startsWith('/') ? rest : `/${rest}`;
  }
  return pathname || '/';
}

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useTranslation();
  const pathname = usePathname() || '/';
  const router = useRouter();

  return (
    <div
      role="group"
      aria-label={t.language.switch}
      className="inline-flex rounded-lg border border-[var(--border)] bg-[var(--background)] p-0.5"
    >
      {options.map((option) => {
        const active = locale === option.locale;
        return (
          <button
            key={option.locale}
            type="button"
            onClick={() => {
              const href = localePath(option.locale, stripLocalePrefix(pathname));
              setLocale(option.locale);
              router.push(href.endsWith('/') || href === '/' ? href : `${href}/`);
            }}
            aria-pressed={active}
            className={[
              'pressable rounded-md px-2.5 py-1 text-xs',
              'transition-[color,background-color,box-shadow,font-weight] duration-150 ease',
              'motion-reduce:transition-none',
              active
                ? 'bg-[var(--surface)] font-semibold text-[var(--foreground)] shadow-sm'
                : 'bg-transparent font-medium text-[var(--muted)] shadow-none hover:text-[var(--foreground)]',
            ].join(' ')}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
