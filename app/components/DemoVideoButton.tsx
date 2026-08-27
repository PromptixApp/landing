'use client';

import { Play, X } from '@phosphor-icons/react';
import { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from '@/lib/i18n';
import { assetPath } from '@/lib/paths';

type DemoVideoButtonProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function DemoVideoButton({
  open,
  onOpenChange,
}: DemoVideoButtonProps) {
  const { t } = useTranslation();
  const titleId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);
  const [rendered, setRendered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let rafId: number | undefined;

    if (open) {
      setRendered(true);
      rafId = requestAnimationFrame(() => {
        setVisible(true);
      });
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        if (rafId !== undefined) cancelAnimationFrame(rafId);
        document.body.style.overflow = prev;
      };
    }

    setVisible(false);
    videoRef.current?.pause();
    timeoutId = setTimeout(() => {
      setRendered(false);
    }, 200);

    return () => {
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, [open]);

  useEffect(() => {
    if (!visible) return;
    closeRef.current?.focus();
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      void video.play().catch(() => {
        /* controls remain */
      });
    }
  }, [visible]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onOpenChange(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onOpenChange]);

  const wasOpen = useRef(false);

  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      return;
    }
    if (!rendered && wasOpen.current) {
      wasOpen.current = false;
      triggerRef.current?.focus();
    }
  }, [open, rendered]);

  const dialog =
    mounted && rendered
      ? createPortal(
          <div
            className={[
              'px-demo-scrim',
              visible ? 'px-demo-scrim--open' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => onOpenChange(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className={[
                'px-demo-panel',
                visible ? 'px-demo-panel--open' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={(event) => event.stopPropagation()}
            >
              <h2 id={titleId} className="sr-only">
                {t.header.demoAria}
              </h2>
              <button
                ref={closeRef}
                type="button"
                className="px-demo-close pressable"
                aria-label={t.header.demoClose}
                onClick={() => onOpenChange(false)}
              >
                <X className="size-4" weight="bold" />
              </button>
              <video
                ref={videoRef}
                className="px-demo-video"
                controls
                playsInline
                poster={assetPath('/media/web-best-poster.jpg')}
              >
                <source
                  src={assetPath('/media/web-best.mp4')}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="pressable inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-medium text-[var(--foreground)] shadow-[0_2px_10px_-2px_rgba(0,0,0,0.08)] hover:opacity-90"
        onClick={() => onOpenChange(true)}
      >
        <Play className="size-4" weight="fill" />
        {t.nav.demo}
      </button>
      {dialog}
    </>
  );
}
