'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n';
import { localePath } from '@/lib/paths';

export default function SiteFooter() {
  const { t, locale } = useTranslation();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <Image
              src="/logo-ycode.webp"
              alt="Promptix"
              width={120}
              height={28}
              className="h-7 w-auto"
            />
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--muted)]">
            <Link
              href={localePath(locale, '/pricing/')}
              className="hover:text-[var(--foreground)]"
            >
              {t.footer.pricing}
            </Link>
            <Link
              href={`${localePath(locale, '/')}#faq`}
              className="hover:text-[var(--foreground)]"
            >
              {t.footer.faq}
            </Link>
            <Link
              href={localePath(locale, '/terms/')}
              className="hover:text-[var(--foreground)]"
            >
              {t.footer.termsOfService}
            </Link>
            <Link
              href={localePath(locale, '/privacy/')}
              className="hover:text-[var(--foreground)]"
            >
              {t.footer.privacy}
            </Link>
            <a
              href="https://x.com/PromptixApp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--foreground)]"
            >
              X
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 border-t border-[var(--border)] pt-6 text-center text-xs text-[var(--muted)]">
          {locale === 'ru' && (
            <p>
              {t.footer.legal}{' '}
              <Link
                href={localePath(locale, '/personal-data/')}
                className="underline hover:text-[var(--foreground)]"
              >
                {t.footer.personalDataPolicy}
              </Link>
            </p>
          )}
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
