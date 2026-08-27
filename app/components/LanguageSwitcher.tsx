'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { CaretDown, Check } from '@phosphor-icons/react';
import { useTranslation } from '@/lib/i18n';
import { localePath } from '@/lib/paths';
import type { Locale } from '@/lib/translations';

const options: { locale: Locale; labelKey: 'english' | 'russian' }[] = [
  { locale: 'en', labelKey: 'english' },
  { locale: 'ru', labelKey: 'russian' },
];

function stripLocalePrefix(pathname: string): string {
  if (pathname === '/ru' || pathname === '/ru/') return '/';
  if (pathname.startsWith('/ru/')) {
    const rest = pathname.slice(3);
    return rest.startsWith('/') ? rest : `/${rest}`;
  }
  return pathname || '/';
}

export default function LanguageSwitcher({
  variant = 'dropdown',
}: {
  variant?: 'dropdown' | 'ghost';
}) {
  const { locale, setLocale, t } = useTranslation();
  const pathname = usePathname() || '/';
  const router = useRouter();
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [rendered, setRendered] = useState(false);
  const [visible, setVisible] = useState(false);

  const selectLocale = (next: Locale) => {
    const href = localePath(next, stripLocalePrefix(pathname));
    setLocale(next);
    router.push(href.endsWith('/') || href === '/' ? href : `${href}/`);
    setOpen(false);
  };

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let rafId: number | undefined;

    if (open) {
      setRendered(true);
      rafId = requestAnimationFrame(() => {
        rafId = requestAnimationFrame(() => {
          setVisible(true);
        });
      });
    } else {
      setVisible(false);
      timeoutId = setTimeout(() => {
        setRendered(false);
      }, 180);
    }

    return () => {
      if (rafId !== undefined) cancelAnimationFrame(rafId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  if (variant === 'ghost') {
    return (
      <div
        role="group"
        aria-label={t.language.switch}
        className="flex w-full rounded-lg bg-black/[0.04] p-0.5"
      >
        {options.map((option) => {
          const active = locale === option.locale;
          return (
            <button
              key={option.locale}
              type="button"
              onClick={() => selectLocale(option.locale)}
              aria-pressed={active}
              className={[
                'pressable flex-1 rounded-md px-2.5 py-1 text-xs',
                'transition-[color,background-color,box-shadow,font-weight] duration-150 ease',
                'motion-reduce:transition-none',
                active
                  ? 'bg-white/80 font-semibold text-[var(--foreground)] shadow-sm'
                  : 'bg-transparent font-medium text-[var(--muted)] shadow-none hover:text-[var(--foreground)]',
              ].join(' ')}
            >
              {option.locale.toUpperCase()}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className="pressable inline-flex items-center gap-1 text-[var(--foreground)]"
        aria-label={t.language.switch}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        {t.language.current}
        <CaretDown
          className={[
            'size-3.5',
            'transition-transform duration-150 ease-[var(--ease-out)]',
            'motion-reduce:transition-none',
            open ? 'rotate-180' : '',
          ].join(' ')}
          weight="bold"
        />
      </button>

      {rendered && (
        <div
          id={menuId}
          role="menu"
          aria-label={t.language.switch}
          data-visible={visible ? '' : undefined}
          className="px-lang-menu"
        >
          {options.map((option) => {
            const active = locale === option.locale;
            return (
              <button
                key={option.locale}
                type="button"
                role="menuitem"
                aria-current={active ? 'true' : undefined}
                onClick={() => selectLocale(option.locale)}
                className="px-lang-menu-item"
              >
                <span>{t.language[option.labelKey]}</span>
                {active && <Check className="size-3.5" weight="bold" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
