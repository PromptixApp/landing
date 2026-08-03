'use client';

import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useTranslation } from '@/lib/i18n';
import { localePath } from '@/lib/paths';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import ClientOnly from './ClientOnly';

type Section = {
  title: string;
  content: string;
};

type LegalPageProps = {
  title: string;
  metaTitle: string;
  lastUpdated: string;
  intro?: string;
  sections: Section[];
};

export default function LegalPage({
  title,
  lastUpdated,
  intro,
  sections,
}: LegalPageProps) {
  const { t, locale } = useTranslation();

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <ClientOnly>
          <Link
            href={localePath(locale, '/')}
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
          >
            <ArrowLeftIcon className="size-4" />
            {t.terms.backToHome}
          </Link>
        </ClientOnly>

        <h1 className="mt-8 text-4xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-3 text-sm text-[var(--muted)]">{lastUpdated}</p>
        {intro && (
          <p className="mt-8 text-base leading-relaxed text-[var(--muted)]">
            {intro}
          </p>
        )}

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
