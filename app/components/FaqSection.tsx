'use client';

import { useState } from 'react';
import { useTranslation } from '@/lib/i18n';

export default function FaqSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h2 className="text-balance text-center text-3xl font-semibold tracking-tight sm:text-4xl">
        {t.faq.title}
      </h2>
      <div className="mt-10 divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {t.faq.items.map((item, index) => {
          const open = openIndex === index;
          return (
            <div key={item.question}>
              <button
                type="button"
                className="pressable flex w-full items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpenIndex(open ? null : index)}
                aria-expanded={open}
              >
                <span className="text-pretty text-base font-medium">
                  {item.question}
                </span>
                <span
                  className={[
                    'inline-block text-xl text-[var(--muted)] transition-transform duration-200 ease-[var(--ease-out)]',
                    'motion-reduce:transition-none',
                    open ? 'rotate-45' : 'rotate-0',
                  ].join(' ')}
                  aria-hidden
                >
                  +
                </span>
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
                      'pb-5 text-pretty text-sm leading-relaxed text-[var(--muted)] transition-opacity duration-200 ease-[var(--ease-out)]',
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
