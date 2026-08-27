'use client';

import { useState } from 'react';
import {
  Lightning,
  TextT,
  Key,
  Infinity as InfinityIcon,
  Sparkle,
  AppWindow,
} from '@phosphor-icons/react';
import { useTranslation } from '@/lib/i18n';
import DownloadButton from './DownloadButton';

type PricingSectionProps = {
  showHeading?: boolean;
};

type BillingPeriod = 'monthly' | 'yearly';

const freeFeatureIcons = [Lightning, TextT, AppWindow, Sparkle, Key];
const proFeatureIcons = [Lightning, InfinityIcon, AppWindow, Sparkle, Key];

export default function PricingSection({
  showHeading = true,
}: PricingSectionProps) {
  const { t } = useTranslation();
  const [period, setPeriod] = useState<BillingPeriod>('yearly');
  const yearly = period === 'yearly';

  return (
    <section id="pricing" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      {showHeading && (
        <div className="text-center">
          <h2 className="text-pretty text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl sm:leading-[1.15]">
            {t.plans.title}
          </h2>
          <p className="mt-4 text-lg text-[var(--muted)]">{t.plans.subtitle}</p>
        </div>
      )}

      <div className={showHeading ? 'mt-8 flex justify-center' : 'flex justify-center'}>
        <div
          role="group"
          aria-label={`${t.plans.monthly} / ${t.plans.yearly}`}
          className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] p-1"
        >
          <button
            type="button"
            className={`pressable rounded-full px-4 py-1.5 text-sm font-medium ${
              !yearly
                ? 'bg-white text-[var(--foreground)] shadow-[0_1px_4px_-1px_rgba(0,0,0,0.12)]'
                : 'text-[var(--muted)]'
            }`}
            aria-pressed={!yearly}
            onClick={() => setPeriod('monthly')}
          >
            {t.plans.monthly}
          </button>
          <button
            type="button"
            className={`pressable inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium ${
              yearly
                ? 'bg-white text-[var(--foreground)] shadow-[0_1px_4px_-1px_rgba(0,0,0,0.12)]'
                : 'text-[var(--muted)]'
            }`}
            aria-pressed={yearly}
            onClick={() => setPeriod('yearly')}
          >
            {t.plans.yearly}
            <span className="rounded-full bg-gradient-to-br from-[var(--badge-from)] via-[var(--badge-via)] to-[var(--badge-to)] px-2 py-0.5 text-[10px] font-medium text-white">
              {t.plans.saveBadge}
            </span>
          </button>
        </div>
      </div>

      <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2">
        {t.plans.packages.map((plan, index) => {
          const featured = index === 1;
          const featureIcons = featured ? proFeatureIcons : freeFeatureIcons;
          const price = yearly ? plan.yearlyPrice : plan.price;
          const pricePeriod = yearly ? plan.yearlyPeriod : plan.period;
          return (
            <div
              key={plan.name}
              className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                featured
                  ? 'border-[var(--foreground)] bg-[var(--foreground)] text-white'
                  : 'border-[var(--border)] bg-[var(--surface)]'
              }`}
            >
              {featured && (
                <span className="absolute -top-3 right-6 rounded-full bg-gradient-to-br from-[var(--badge-from)] via-[var(--badge-via)] to-[var(--badge-to)] px-3 py-1 text-xs font-medium text-white">
                  {t.plans.popular}
                </span>
              )}
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p
                className={`mt-1 text-sm ${featured ? 'text-white/70' : 'text-[var(--muted)]'}`}
              >
                {plan.description}
              </p>
              {featured && (
                <p className="mt-2 text-xs text-white/70">{t.plans.trial}</p>
              )}
              <div className="mt-6 flex flex-wrap items-baseline gap-2">
                <span className="text-5xl font-bold tracking-tight tabular-nums">
                  {price}
                </span>
                <span
                  className={`text-sm ${featured ? 'text-white/70' : 'text-[var(--muted)]'}`}
                >
                  {pricePeriod}
                </span>
                {featured && (
                  <span
                    className={`text-xs text-white/60 ${yearly ? '' : 'invisible'}`}
                    aria-hidden={!yearly}
                  >
                    · {t.plans.saveBadge}
                  </span>
                )}
              </div>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature, featureIndex) => {
                  const Icon = featureIcons[featureIndex] ?? Lightning;
                  return (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm"
                    >
                      <Icon
                        className={`mt-0.5 size-4 shrink-0 ${featured ? 'text-white' : 'text-[var(--foreground)]'}`}
                        weight="bold"
                      />
                      <span
                        className={`text-pretty ${
                          featured ? 'text-white/90' : 'text-[var(--muted)]'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-auto pt-8">
                <DownloadButton
                  label={plan.buttonTitle}
                  className={
                    featured
                      ? 'w-full bg-white text-black hover:opacity-90'
                      : 'w-full'
                  }
                />
              </div>
            </div>
          );
        })}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-pretty text-center text-sm text-[var(--muted)]">
        {t.plans.finePrint}
      </p>
    </section>
  );
}
