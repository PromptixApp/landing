'use client';

import {
  ArrowsClockwise,
  ListBullets,
  MagicWand,
  TextAa,
  Translate,
} from '@phosphor-icons/react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from '@/lib/i18n';

const previewIcons = [Translate, ArrowsClockwise, MagicWand, TextAa, ListBullets];

const TYPE_MS = 42;
const START_DELAY_MS = 480;

function SparklesMark() {
  return (
    <svg
      className="px-gen-sparkles"
      viewBox="0 0 48 48"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 4.5c.55 6.4 3.1 10.5 9.5 11.5-6.4.55-9 4.7-9.5 11.5-.55-6.8-3.1-10.95-9.5-11.5 6.4-1 8.95-5.1 9.5-11.5Z" />
      <path d="M38.5 5c.32 3.35 1.65 5.45 5 6-3.35.32-4.68 2.65-5 6-.32-3.35-1.65-5.45-5-6 3.35-.55 4.68-2.65 5-6Z" />
      <path d="M10 31.5c.28 2.7 1.35 4.4 4.05 4.85-2.7.28-3.77 2.15-4.05 4.85-.28-2.7-1.35-4.4-4.05-4.85 2.7-.45 3.77-2.15 4.05-4.85Z" />
    </svg>
  );
}

export default function GenerateFormMock() {
  const { t } = useTranslation();
  const form = t.feature.form;
  const sample = form.sample;
  const sceneRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [typed, setTyped] = useState('');
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) {
      setTyped('');
      setTyping(false);
      return;
    }

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduceMotion) {
      setTyped(sample);
      setTyping(false);
      return;
    }

    let i = 0;
    let timeout = window.setTimeout(function tick() {
      i += 1;
      setTyped(sample.slice(0, i));
      const done = i >= sample.length;
      setTyping(!done);
      if (!done) {
        timeout = window.setTimeout(tick, TYPE_MS);
      }
    }, START_DELAY_MS);

    setTyped('');
    setTyping(false);

    return () => window.clearTimeout(timeout);
  }, [inView, sample]);

  return (
    <div ref={sceneRef} className="px-gen-scene" aria-hidden="true">
      <ul className="px-gen-list">
        {form.previewItems.map((label, index) => {
          const Icon = previewIcons[index] ?? MagicWand;
          return (
            <li key={label} className="px-gen-list-item">
              <Icon className="size-[15px] shrink-0" weight="fill" />
              <span>{label}</span>
            </li>
          );
        })}
      </ul>
      <div className="px-gen-scrim" />
      <div className="px-gen-sheet">
        <div className="px-gen-sheet-glow" />
        <div className="px-gen-sheet-body">
          <SparklesMark />
          <p className="px-gen-title">{form.title}</p>
          <p className="px-gen-subtitle">{form.subtitle}</p>
          <div className="px-gen-field">
            <span className="px-gen-typed">{typed}</span>
            <span className="px-gen-caret" data-steady={typing || undefined} />
          </div>
        </div>
        <div className="px-gen-actions">
          <button type="button" tabIndex={-1} className="px-gen-btn px-gen-btn--primary">
            {form.generate}
          </button>
          <button type="button" tabIndex={-1} className="px-gen-btn px-gen-btn--cancel">
            {form.cancel}
          </button>
        </div>
      </div>
    </div>
  );
}
