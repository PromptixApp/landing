'use client';

import {
  MagicWand,
  Sparkle,
  SquaresFour,
  Palette,
  Textbox,
  Microphone,
  Keyboard,
} from '@phosphor-icons/react';
import { useEffect } from 'react';
import { useTranslation } from '@/lib/i18n';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import DownloadButton from './components/DownloadButton';
import HeroScene from './components/HeroScene';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import ApiBalanceSection from './components/ApiBalanceSection';
import GenerateFormMock from './components/GenerateFormMock';
import PromptAsAppDock from './components/PromptAsAppDock';
import UseCaseMock from './components/UseCaseMock';
import type { UseCaseKind } from './components/UseCaseMock';

const useCaseKinds: UseCaseKind[] = ['fix', 'translate', 'generate'];
const featureIcons = [MagicWand, Keyboard, Sparkle, Microphone];
const promptAsAppIcons = [SquaresFour, Textbox, Palette];

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView();
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="px-mesh px-mesh--hero">
        <SiteHeader />

        {/* Hero */}
        <section>
          <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-6 sm:pt-16">
            <h1 className="animate-fade-up max-w-4xl text-pretty text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl sm:leading-[1.15]">
              {t.header.title}
              <br />
              <span className="text-[var(--muted)]">
                {t.header.titleLine2} {t.header.subtitle}
              </span>
            </h1>
            <div className="animate-fade-up animate-delay-1 mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <DownloadButton label={t.header.downloadButton} />
              <p className="text-lg text-[var(--muted)]">
                {t.header.downloadHint}
              </p>
            </div>
          </div>

          <div className="relative mx-auto max-w-6xl px-4 pb-16 sm:px-6">
            <div className="animate-fade-in overflow-hidden rounded-2xl border-2 border-white/70 bg-[var(--surface)] shadow-[0_16px_48px_-12px_rgba(0,0,0,0.28),0_4px_16px_-4px_rgba(0,0,0,0.12)]">
              <HeroScene />
            </div>
          </div>
        </section>
      </div>

      <main>
        {/* Prompt as App */}
        <section
          id="prompt-as-app"
          className="px-mesh px-mesh--prompt-as-app scroll-mt-24"
        >
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <h2 className="text-pretty text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl sm:leading-[1.15]">
                  {t.promptAsApp.title}{' '}
                  <span className="text-[var(--muted)]">
                    {t.promptAsApp.description}
                  </span>
                </h2>
                <div className="mt-6">
                  <DownloadButton label={t.promptAsApp.downloadButton} />
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border-2 border-white/70 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.28),0_4px_16px_-4px_rgba(0,0,0,0.12)]">
                <PromptAsAppDock />
              </div>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {t.promptAsApp.items.map((item, index) => {
                const Icon = promptAsAppIcons[index];
                return (
                  <div key={item.title}>
                    <Icon className="size-6" weight="regular" />
                    <h3 className="mt-4 text-pretty text-xl font-semibold leading-[1.25] tracking-tight">
                      {item.title}
                      {item.soon && (
                        <span className="ml-2 align-middle rounded-full bg-[var(--surface)] px-2 py-0.5 text-xs font-medium text-[var(--muted)]">
                          Soon
                        </span>
                      )}
                      <span className="mt-1 block text-[var(--muted)]">
                        {item.description}
                      </span>
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="max-w-3xl text-pretty text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl sm:leading-[1.15]">
            {t.useCases.title}{' '}
            <span className="text-[var(--muted)]">{t.useCases.subtitle}</span>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.useCases.list.map((uc, index) => (
              <div key={uc.title} className="text-left">
                <div className="overflow-hidden rounded-2xl border-2 border-white/70 bg-[var(--surface)] shadow-[0_16px_48px_-12px_rgba(0,0,0,0.28),0_4px_16px_-4px_rgba(0,0,0,0.12)]">
                  <UseCaseMock
                    kind={useCaseKinds[index]}
                    before={uc.scene.before}
                    after={uc.scene.after}
                    placeholder={t.useCases.placeholder}
                    hintLabel={t.useCases.hotkeyHint}
                    delay={index * 180}
                  />
                </div>
                <h3 className="mt-4 text-pretty text-xl font-semibold leading-[1.25] tracking-tight">
                  {uc.title}
                  <span className="mt-1 block text-[var(--muted)]">
                    {uc.description}
                  </span>
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Feature */}
        <section className="border-y border-[var(--border)] bg-[var(--surface)]">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <p className="text-sm font-medium text-[var(--muted)]">
                  {t.feature.eyebrow}
                </p>
                <h2 className="mt-2 text-pretty text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl sm:leading-[1.15]">
                  {t.feature.title}{' '}
                  <span className="text-[var(--muted)]">
                    {t.feature.titleLine2}
                  </span>
                </h2>
              </div>
              <div className="overflow-hidden rounded-2xl border-2 border-white/70 bg-[var(--background)] shadow-[0_16px_48px_-12px_rgba(0,0,0,0.28),0_4px_16px_-4px_rgba(0,0,0,0.12)]">
                <GenerateFormMock />
              </div>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {t.feature.items.map((item, index) => {
                const Icon = featureIcons[index];
                return (
                  <div key={item.name}>
                    <Icon className="size-6" weight="regular" />
                    <h3 className="mt-4 text-pretty text-xl font-semibold leading-[1.25] tracking-tight">
                      {item.name}
                      <span className="mt-1 block text-[var(--muted)]">
                        {item.description}
                      </span>
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <ApiBalanceSection />
        <PricingSection />
        <FaqSection />

        {/* Bottom CTA */}
        <section className="mx-auto max-w-3xl px-4 pb-20 text-center sm:px-6">
          <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {t.cta.title}
          </h2>
          <div className="mt-6">
            <DownloadButton label={t.cta.downloadButton} />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
