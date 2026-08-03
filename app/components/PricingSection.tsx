'use client';

import {
  Lightning,
  TextT,
  Key,
  Infinity as InfinityIcon,
  Sparkle,
} from '@phosphor-icons/react';
import { useTranslation } from '@/lib/i18n';
import DownloadButton from './DownloadButton';

type PricingSectionProps = {
  showHeading?: boolean;
};

const freeFeatureIcons = [Lightning, TextT, Key];
const proFeatureIcons = [Lightning, InfinityIcon, Sparkle];

export default function PricingSection({
  showHeading = true,
}: PricingSectionProps) {
  const { t } = useTranslation();

  return (
    <section id="pricing" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      {showHeading && (
        <div className="text-center">
          <p className="text-sm font-medium text-[var(--muted)]">
            {t.nav.pricing}
          </p>
          <h2 className="mt-2 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {t.plans.title}
          </h2>
          <p className="mt-4 text-pretty text-lg text-[var(--muted)]">
            {t.plans.subtitle}
          </p>
        </div>
      )}

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {t.plans.packages.map((plan, index) => {
          const featured = index === 1;
          const featureIcons = featured ? proFeatureIcons : freeFeatureIcons;
          return (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 ${
                featured
                  ? 'border-[var(--foreground)] bg-[var(--foreground)] text-white'
                  : 'border-[var(--border)] bg-[var(--surface)]'
              }`}
            >
              {featured && (
                <span className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-[var(--badge-from)] via-[var(--badge-via)] to-[var(--badge-to)] px-3 py-1 text-xs font-medium text-white">
                  {t.plans.popular}
                </span>
              )}
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p
                className={`mt-1 text-sm ${featured ? 'text-white/70' : 'text-[var(--muted)]'}`}
              >
                {plan.description}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                <span
                  className={`text-sm ${featured ? 'text-white/70' : 'text-[var(--muted)]'}`}
                >
                  {plan.period}
                </span>
              </div>
              <ul className="mt-8 space-y-3">
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
              <div className="mt-8">
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
    </section>
  );
}
