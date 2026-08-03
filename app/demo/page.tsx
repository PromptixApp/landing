'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle,
  RocketLaunch,
  Package,
  Translate,
  MagicWand,
} from '@phosphor-icons/react';
import { useTranslation } from '@/lib/i18n';
import { localePath } from '@/lib/paths';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ClientOnly from '../components/ClientOnly';

export default function Demo() {
  const { t, locale } = useTranslation();
  const [inputText, setInputText] = useState('');

  const setupItems = [
    {
      icon: Package,
      ...t.demo.setup.installed,
    },
    {
      icon: RocketLaunch,
      ...t.demo.setup.running,
    },
    {
      icon: CheckCircle,
      ...t.demo.setup.permissions,
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <ClientOnly>
          <Link
            href={localePath(locale, '/')}
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
          >
            <ArrowLeft className="size-4" weight="bold" />
            {t.demo.backToHome}
          </Link>
        </ClientOnly>

        <h1 className="mt-8 text-4xl font-semibold tracking-tight">
          {t.demo.title}
        </h1>
        <p className="mt-3 text-[var(--muted)]">{t.demo.intro}</p>

        <div className="mt-10 grid gap-4">
          {setupItems.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <item.icon className="mt-0.5 size-6 shrink-0" weight="regular" />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-3xl font-semibold tracking-tight">
          {t.demo.useCasesTitle}
        </h2>

        <div className="mt-8 space-y-10">
          <section>
            <div className="flex items-center gap-2.5">
              <Translate className="size-5 shrink-0" weight="regular" />
              <h3 className="text-xl font-semibold">
                {t.demo.translation.title}
              </h3>
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">
              {t.demo.translation.instruction}
            </p>
            <p className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 text-lg">
              {t.demo.translation.sample}
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2.5">
              <MagicWand className="size-5 shrink-0" weight="regular" />
              <h3 className="text-xl font-semibold">{t.demo.generate.title}</h3>
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">
              {t.demo.generate.instruction}
            </p>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={t.demo.generate.placeholder}
              className="mt-4 min-h-28 w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 text-base outline-none focus:border-[var(--foreground)]"
            />
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
