'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from '@/lib/i18n';
import { localePath } from '@/lib/paths';
import LanguageSwitcher from './LanguageSwitcher';
import ClientOnly from './ClientOnly';

export default function SiteHeader() {
  const { t, locale } = useTranslation();
  const [open, setOpen] = useState(false);
  const [rendered, setRendered] = useState(false);
  const [panelVisible, setPanelVisible] = useState(false);
  const home = localePath(locale, '/');
  const pricing = localePath(locale, '/pricing/');

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let rafId: number | undefined;

    if (open) {
      setRendered(true);
      rafId = requestAnimationFrame(() => {
        setPanelVisible(true);
      });
    } else {
      setPanelVisible(false);
      timeoutId = setTimeout(() => {
        setRendered(false);
      }, 200);
    }

    return () => {
      if (rafId !== undefined) cancelAnimationFrame(rafId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, [open]);

  return (
    <header className="bg-[var(--background)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href={home} className="flex items-center gap-2.5">
          <Image
            src="/logo-ycode.webp"
            alt="Promptix"
            width={140}
            height={32}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
          <Link href={pricing} className="hover:text-[var(--foreground)]">
            {t.nav.pricing}
          </Link>
          <Link
            href={`${localePath(locale, '/')}#faq`}
            className="hover:text-[var(--foreground)]"
          >
            {t.nav.faq}
          </Link>
          <ClientOnly>
            <LanguageSwitcher />
          </ClientOnly>
        </nav>

        <button
          type="button"
          className="pressable md:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <XMarkIcon className="size-6" />
          ) : (
            <Bars3Icon className="size-6" />
          )}
        </button>
      </div>

      {rendered && (
        <div
          className={[
            'border-t border-[var(--border)] px-4 py-4 md:hidden',
            'transition-[opacity,transform] duration-200 ease-[var(--ease-out)]',
            'motion-reduce:transition-[opacity] motion-reduce:duration-150 motion-reduce:transform-none',
            panelVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-1 pointer-events-none',
          ].join(' ')}
        >
          <div className="flex flex-col gap-3 text-sm">
            <Link
              href={pricing}
              onClick={() => setOpen(false)}
              className="text-[var(--muted)]"
            >
              {t.nav.pricing}
            </Link>
            <Link
              href={`${localePath(locale, '/')}#faq`}
              onClick={() => setOpen(false)}
              className="text-[var(--muted)]"
            >
              {t.nav.faq}
            </Link>
            <ClientOnly>
              <LanguageSwitcher />
            </ClientOnly>
          </div>
        </div>
      )}
    </header>
  );
}
