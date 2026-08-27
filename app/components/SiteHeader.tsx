'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useId, useState, type MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { List, X } from '@phosphor-icons/react';
import { useTranslation } from '@/lib/i18n';
import { assetPath, localePath } from '@/lib/paths';
import LanguageSwitcher from './LanguageSwitcher';
import ClientOnly from './ClientOnly';

function scrollHomeHash(
  event: MouseEvent<HTMLAnchorElement>,
  home: string,
  hash: string,
) {
  const path = window.location.pathname;
  const onHome = path === home || `${path}/` === home;
  if (!onHome) return;
  event.preventDefault();
  document.getElementById(hash.slice(1))?.scrollIntoView();
  window.history.replaceState(null, '', `${home}${hash}`);
}

export default function SiteHeader() {
  const { t, locale } = useTranslation();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [rendered, setRendered] = useState(false);
  const [panelVisible, setPanelVisible] = useState(false);
  const menuId = useId();
  const home = localePath(locale, '/');
  const pricing = localePath(locale, '/pricing/');
  const promptAsApp = `${home}#prompt-as-app`;
  const faq = `${home}#faq`;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let rafId: number | undefined;

    if (open) {
      setRendered(true);
      rafId = requestAnimationFrame(() => {
        rafId = requestAnimationFrame(() => {
          setPanelVisible(true);
        });
      });
    } else {
      setPanelVisible(false);
      timeoutId = setTimeout(() => {
        setRendered(false);
      }, 220);
    }

    return () => {
      if (rafId !== undefined) cancelAnimationFrame(rafId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const menu =
    mounted && rendered
      ? createPortal(
          <>
            <div
              className="px-nav-scrim"
              onClick={() => setOpen(false)}
            />
            <nav
              id={menuId}
              data-visible={panelVisible ? '' : undefined}
              className="px-nav-menu"
            >
              <Link
                href={promptAsApp}
                onClick={(event) => {
                  setOpen(false);
                  scrollHomeHash(event, home, '#prompt-as-app');
                }}
                className="px-nav-menu-item"
              >
                {t.nav.promptAsApp}
              </Link>
              <Link
                href={pricing}
                onClick={() => setOpen(false)}
                className="px-nav-menu-item"
              >
                {t.nav.pricing}
              </Link>
              <Link
                href={faq}
                onClick={(event) => {
                  setOpen(false);
                  scrollHomeHash(event, home, '#faq');
                }}
                className="px-nav-menu-item"
              >
                {t.nav.faq}
              </Link>
              <div className="px-nav-menu-item px-nav-menu-lang">
                <ClientOnly>
                  <LanguageSwitcher variant="ghost" />
                </ClientOnly>
              </div>
            </nav>
          </>,
          document.body,
        )
      : null;

  return (
    <header className={['relative bg-transparent', open ? 'z-[62]' : ''].filter(Boolean).join(' ')}>
      <div className="relative z-50 mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href={home} className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src={assetPath('/logo.svg')}
            alt="Promptix"
            width={125}
            height={28}
            priority
            className="h-7 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-base font-medium tracking-tight text-[var(--foreground)] md:flex">
          <Link
            href={promptAsApp}
            onClick={(event) => scrollHomeHash(event, home, '#prompt-as-app')}
            className="px-nav-link pressable"
          >
            {t.nav.promptAsApp}
          </Link>
          <Link href={pricing} className="px-nav-link pressable">
            {t.nav.pricing}
          </Link>
          <Link
            href={faq}
            onClick={(event) => scrollHomeHash(event, home, '#faq')}
            className="px-nav-link pressable"
          >
            {t.nav.faq}
          </Link>
          <ClientOnly>
            <LanguageSwitcher />
          </ClientOnly>
        </nav>

        <button
          type="button"
          className="pressable -mr-1 flex size-10 items-center justify-center rounded-full md:hidden"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="size-6" weight="regular" />
          ) : (
            <List className="size-6" weight="regular" />
          )}
        </button>
      </div>
      {menu}
    </header>
  );
}
