'use client';

import { useState } from 'react';
import {
  AppWindow,
  GearSix,
  ShieldCheck,
  Key,
  PencilSimple,
  Cube,
  Gauge,
  LockSimple,
  CalendarBlank,
  ArrowsLeftRight,
  Plus,
} from '@phosphor-icons/react';
import { useTranslation } from '@/lib/i18n';

const faqIcons = [
  AppWindow,
  GearSix,
  ShieldCheck,
  Key,
  PencilSimple,
  Cube,
  Gauge,
  LockSimple,
  CalendarBlank,
  ArrowsLeftRight,
];

export default function FaqSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h2 className="text-balance text-center text-4xl font-semibold tracking-tight sm:text-5xl">
        {t.faq.title}
      </h2>
      <div className="mt-10 divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {t.faq.items.map((item, index) => {
          const open = openIndex === index;
          const Icon = faqIcons[index] ?? AppWindow;
          return (
            <div key={item.question}>
              <button
                type="button"
                className="pressable flex w-full items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpenIndex(open ? null : index)}
                aria-expanded={open}
              >
                <span className="flex min-w-0 items-center gap-3">
                  <Icon
                    className="size-5 shrink-0 text-[var(--muted)]"
                    weight="regular"
                  />
                  <span className="text-pretty text-lg font-medium">
                    {item.question}
                  </span>
                </span>
                <Plus
                  className={[
                    'size-5 shrink-0 text-[var(--muted)] transition-transform duration-200 ease-[var(--ease-out)]',
                    'motion-reduce:transition-none',
                    open ? 'rotate-45' : 'rotate-0',
                  ].join(' ')}
                  weight="bold"
                  aria-hidden
                />
              </button>
              <div
                className={[
                  'grid transition-[grid-template-rows] duration-200 ease-[var(--ease-out)]',
                  'motion-reduce:transition-none',
                  open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                ].join(' ')}
              >
                <div className="overflow-hidden">
                  <p
                    className={[
                      'pb-5 text-pretty text-base leading-relaxed text-[var(--muted)] transition-opacity duration-200 ease-[var(--ease-out)]',
                      'motion-reduce:transition-none',
                      open ? 'opacity-100' : 'opacity-0',
                    ].join(' ')}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
