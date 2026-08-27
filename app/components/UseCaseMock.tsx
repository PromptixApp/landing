'use client';

import { useEffect, useRef, useState } from 'react';

export type UseCaseKind = 'fix' | 'translate' | 'generate';

type SceneState = {
  text: string;
  incoming: string | null;
  selected: boolean;
  hint: boolean;
  swapping: boolean;
  settle: boolean;
  caret: boolean;
  typing: boolean;
};

const idle: SceneState = {
  text: '',
  incoming: null,
  selected: false,
  hint: false,
  swapping: false,
  settle: false,
  caret: false,
  typing: false,
};

function ClipIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21.44 11.05 12.25 20.24a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 1 1-2.83-2.83l8.49-8.48"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SmileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M8.6 14.15s1.4 1.85 3.4 1.85 3.4-1.85 3.4-1.85"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="9.15" cy="10.1" r="0.95" fill="currentColor" />
      <circle cx="14.85" cy="10.1" r="0.95" fill="currentColor" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3.2 20.55 21.1 12 3.2 3.45l-.15 6.55L14.4 12 3.05 13.95z" />
    </svg>
  );
}

export default function UseCaseMock({
  kind,
  before,
  after,
  placeholder,
  hintLabel,
  delay = 0,
}: {
  kind: UseCaseKind;
  before: string;
  after: string;
  placeholder: string;
  hintLabel: string;
  delay?: number;
}) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [scene, setScene] = useState<SceneState>({
    ...idle,
    text: before,
  });

  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;

    let leaveTimer = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.clearTimeout(leaveTimer);
          setInView(true);
          return;
        }
        leaveTimer = window.setTimeout(() => setInView(false), 240);
      },
      { threshold: 0.2 },
    );
    io.observe(el);

    const rect = el.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      setInView(true);
    }

    return () => {
      window.clearTimeout(leaveTimer);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (!inView) {
      return;
    }

    if (reduceMotion) {
      setScene({ ...idle, text: after });
      return;
    }

    let cancelled = false;
    let timeout = 0;
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timeout = window.setTimeout(resolve, ms);
      });
    const apply = (next: Partial<SceneState>) => {
      if (!cancelled) setScene((prev) => ({ ...prev, ...next }));
    };

    async function selectThenHint() {
      apply({
        selected: false,
        hint: false,
        swapping: false,
        settle: false,
        incoming: null,
        caret: false,
        typing: false,
      });
      await wait(520);
      if (cancelled) return;
      apply({ selected: true });
      await wait(520);
      if (cancelled) return;
      apply({ hint: true });
      await wait(980);
    }

    async function crossfadeTo(next: string, caret: boolean) {
      apply({ incoming: next, selected: false, settle: false });
      await wait(40);
      if (cancelled) return;
      apply({ swapping: true });
      await wait(360);
      if (cancelled) return;
      apply({
        text: next,
        incoming: null,
        swapping: false,
        settle: true,
        caret,
      });
      await wait(48);
      if (cancelled) return;
      apply({ settle: false });
      await wait(240);
      if (cancelled) return;
      apply({ hint: false });
    }

    async function playSwap(caretAfter: boolean) {
      await selectThenHint();
      if (cancelled) return;
      await crossfadeTo(after, caretAfter);
      if (cancelled) return;
      await wait(1900);
      if (cancelled) return;
      apply({ caret: false, hint: false });
      await wait(180);
      if (cancelled) return;
      if (kind === 'generate') {
        apply({
          text: before,
          incoming: null,
          swapping: false,
          settle: true,
          caret: false,
          selected: false,
        });
        await wait(48);
        if (cancelled) return;
        apply({ settle: false });
      } else {
        await crossfadeTo(before, false);
        if (cancelled) return;
      }
      await wait(520);
    }

    async function loop() {
      await wait(delay);
      while (!cancelled) {
        await playSwap(kind !== 'fix');
      }
    }

    void loop();

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
    };
  }, [after, before, delay, inView, kind]);

  const empty = scene.text.length === 0 && scene.incoming == null;
  const shown = empty ? placeholder : scene.text;

  return (
    <div
      ref={sceneRef}
      className="px-uc-scene"
      data-kind={kind}
      aria-hidden="true"
    >
      <div className="px-uc-window">
        <div className="px-uc-body">
          <span
            className="px-uc-hint"
            data-visible={scene.hint || undefined}
          >
            {hintLabel}
          </span>
        </div>
        <div className="px-uc-bar">
          <span className="px-uc-icon">
            <ClipIcon />
          </span>
          <div className="px-uc-field">
            <div
              className="px-uc-stack"
              data-swap={scene.swapping || undefined}
              data-settle={scene.settle || undefined}
            >
              <span
                className="px-uc-text"
                data-layer="from"
                data-selected={scene.selected || undefined}
                data-placeholder={empty || undefined}
              >
                {shown}
                {scene.caret && !scene.incoming ? (
                  <span
                    className="px-uc-caret"
                    data-steady={scene.typing || undefined}
                  />
                ) : null}
              </span>
              {scene.incoming != null ? (
                <span className="px-uc-text" data-layer="to">
                  {scene.incoming}
                </span>
              ) : null}
            </div>
          </div>
          <span className="px-uc-icon">
            <SmileIcon />
          </span>
          <span className="px-uc-icon px-uc-send">
            <SendIcon />
          </span>
        </div>
      </div>
    </div>
  );
}
