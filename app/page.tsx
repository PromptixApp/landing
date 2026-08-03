'use client';

import Image from 'next/image';
import {
  TextAa,
  Translate,
  MagicWand,
  Key,
  Sparkle,
  PlugsConnected,
  SquaresFour,
  Palette,
  ListChecks,
} from '@phosphor-icons/react';
import { useTranslation } from '@/lib/i18n';
import { assetPath } from '@/lib/paths';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import DownloadButton from './components/DownloadButton';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';

const useCaseIcons = [TextAa, Translate, MagicWand];
const featureIcons = [Key, Sparkle, PlugsConnected];
const promptAsAppIcons = [SquaresFour, Palette, ListChecks];

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(244,244,245,0.9),_transparent_55%),linear-gradient(180deg,#ffffff_0%,#f4f4f5_45%,#ffffff_100%)]" />
          <div className="relative mx-auto max-w-4xl px-4 pb-10 pt-16 text-center sm:px-6 sm:pt-24">
            <h1 className="animate-fade-up text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
              {t.header.title}
              <br />
              {t.header.titleLine2}
            </h1>
            <p className="animate-fade-up animate-delay-1 mx-auto mt-6 max-w-2xl text-pretty text-lg text-[var(--muted)] sm:text-xl">
              {t.header.subtitle}
            </p>
            <div className="animate-fade-up animate-delay-2 mt-8 flex flex-col items-center gap-2">
              <DownloadButton label={t.header.downloadButton} />
              <p className="text-xs text-[var(--muted)]">
                {t.header.downloadHint}
              </p>
            </div>
          </div>

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
            <div className="animate-fade-in overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]">
              <video
                className="aspect-video w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster={assetPath('/media/web-best-poster.jpg')}
              >
                <source src={assetPath('/media/web-best.mp4')} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="relative mx-auto mt-12 max-w-3xl px-4 pb-16 text-center sm:px-6">
            <p className="text-sm text-[var(--muted)]">
              {t.header.compatibility}
            </p>
            <Image
              src={assetPath('/services.svg')}
              alt="AI services"
              width={672}
              height={102}
              className="mx-auto mt-4 h-auto w-full max-w-xl opacity-60"
            />
            <p className="mt-2 text-xs text-[var(--muted)]">
              {t.header.compatibilityNote}
            </p>
          </div>
        </section>

        {/* Use cases */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              {t.useCases.title}
            </h2>
            <p className="mt-4 text-pretty text-lg text-[var(--muted)]">
              {t.useCases.subtitle}
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.useCases.list.map((uc, index) => {
              const Icon = useCaseIcons[index];
              return (
                <div key={uc.title} className="text-left">
                  <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
                    <video
                      className="aspect-video w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={assetPath(uc.videoSrc)} type="video/mp4" />
                    </video>
                  </div>
                  <div className="mt-4 flex items-center gap-2.5">
                    <Icon className="size-5 shrink-0" weight="regular" />
                    <h3 className="text-xl font-semibold">{uc.title}</h3>
                  </div>
                  <p className="mt-2 text-pretty text-base text-[var(--muted)]">
                    {uc.description}
                  </p>
                </div>
              );
            })}
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
                <h2 className="mt-2 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  {t.feature.title}
                  <br />
                  {t.feature.titleLine2}
                </h2>
              </div>
              <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)]">
                <video
                  className="aspect-video w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={assetPath(t.feature.videoSrc)} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {t.feature.items.map((item, index) => {
                const Icon = featureIcons[index];
                return (
                  <div key={item.name}>
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-[var(--background)]">
                      <Icon className="size-6" weight="regular" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">{item.name}</h3>
                    <p className="mt-2 text-pretty text-base text-[var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Prompt as App */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <span className="inline-flex rounded-full bg-gradient-to-r from-[var(--badge-from)] via-[var(--badge-via)] to-[var(--badge-to)] px-3 py-1 text-xs font-medium italic text-white">
                {t.promptAsApp.badge}
              </span>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                {t.promptAsApp.title}
              </h2>
              <p className="mt-4 text-pretty text-lg text-[var(--muted)]">
                {t.promptAsApp.description}
              </p>
              <div className="mt-6">
                <DownloadButton label={t.promptAsApp.downloadButton} />
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
              <video
                className="aspect-video w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={assetPath(t.promptAsApp.videoSrc)} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {t.promptAsApp.items.map((item, index) => {
              const Icon = promptAsAppIcons[index];
              return (
                <div key={item.title}>
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[var(--surface)]">
                    <Icon className="size-6" weight="regular" />
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    {item.soon && (
                      <span className="rounded-full bg-[var(--surface)] px-2 py-0.5 text-xs text-[var(--muted)]">
                        Soon
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-pretty text-base text-[var(--muted)]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="border-y border-[var(--border)] bg-[var(--surface)]">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
            <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              {t.cta.title}
            </h2>
            <div className="mt-6">
              <DownloadButton label={t.cta.downloadButton} />
            </div>
          </div>
        </section>

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
