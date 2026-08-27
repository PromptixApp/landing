'use client';

import {
  CopySimple,
  Paperclip,
  PaperPlaneTilt,
  Sidebar,
  TextAa,
  Trash,
  X,
} from '@phosphor-icons/react';
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { useTranslation } from '@/lib/i18n';
import { assetPath } from '@/lib/paths';
import PromptixIcon from './PromptixIcon';
import { SfTextformat } from './sf-symbols';

const ACTIVE_INDEX = 3;
const APP_COLOR = '#bf5af2';

type FlyRect = { x: number; y: number; w: number; h: number };

type SceneState = {
  text: string;
  selected: boolean;
  barActive: boolean;
  overlay: boolean;
  activeIndex: number;
  recede: boolean;
  dock: boolean;
  fly: { from: FlyRect; to: FlyRect } | null;
  appWin: boolean;
};

const idle: Omit<SceneState, 'text'> = {
  selected: false,
  barActive: false,
  overlay: false,
  activeIndex: 0,
  recede: false,
  dock: false,
  fly: null,
  appWin: false,
};

function rectIn(scene: DOMRect, el: DOMRect): FlyRect {
  return {
    x: el.left - scene.left,
    y: el.top - scene.top,
    w: el.width,
    h: el.height,
  };
}

function DockGlyph({
  src,
  color,
  children,
}: {
  src?: string;
  color?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className="px-hero-dock-icon"
      style={src ? undefined : { background: color }}
    >
      {src ? <img src={src} alt="" /> : children}
    </div>
  );
}

export default function HeroScene({ paused = false }: { paused?: boolean }) {
  const { t } = useTranslation();
  const scene = t.heroScene;
  const sceneRef = useRef<HTMLDivElement>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [state, setState] = useState<SceneState>({
    ...idle,
    text: scene.before,
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
      { threshold: 0.35 },
    );
    io.observe(el);

    const box = el.getBoundingClientRect();
    if (box.bottom > 0 && box.top < window.innerHeight) {
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

    if (reduceMotion) {
      setState({
        ...idle,
        text: scene.before,
        selected: true,
        recede: true,
        dock: true,
        appWin: true,
      });
      return;
    }

    if (!inView || paused) {
      return;
    }

    let cancelled = false;
    let timeout = 0;
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timeout = window.setTimeout(resolve, ms);
      });
    const apply = (next: Partial<SceneState>) => {
      if (!cancelled) setState((prev) => ({ ...prev, ...next }));
    };

    async function play() {
      apply({
        ...idle,
        text: scene.before,
      });
      await wait(400);
      if (cancelled) return;
      apply({ selected: true });
      await wait(400);
      if (cancelled) return;
      apply({ barActive: true });
      await wait(160);
      if (cancelled) return;
      apply({ overlay: true, activeIndex: 0 });
      await wait(280);
      if (cancelled) return;
      apply({ activeIndex: 1 });
      await wait(180);
      if (cancelled) return;
      apply({ activeIndex: 2 });
      await wait(180);
      if (cancelled) return;
      apply({ activeIndex: ACTIVE_INDEX });
      await wait(400);
      if (cancelled) return;

      const root = sceneRef.current;
      const item = root?.querySelector('[data-hero-item][data-active]');
      const slot = slotRef.current;
      if (root && item && slot) {
        apply({
          fly: {
            from: rectIn(
              root.getBoundingClientRect(),
              item.getBoundingClientRect(),
            ),
            to: rectIn(
              root.getBoundingClientRect(),
              slot.getBoundingClientRect(),
            ),
          },
          overlay: false,
          recede: true,
          dock: true,
        });
      } else {
        apply({
          overlay: false,
          recede: true,
          dock: true,
        });
      }
      await wait(480);
      if (cancelled) return;
      apply({ appWin: true });
      await wait(1680);
      if (cancelled) return;
      apply({ appWin: false });
      await wait(200);
      if (cancelled) return;
      apply({
        recede: false,
        dock: false,
        fly: null,
        selected: false,
        barActive: false,
      });
      await wait(400);
    }

    async function loop() {
      while (!cancelled) {
        await play();
      }
    }

    void loop();

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
    };
  }, [inView, paused, scene.before]);

  const promptName = scene.prompts[ACTIVE_INDEX];
  const flyStyle = state.fly
    ? ({
        '--fx': `${state.fly.from.x}px`,
        '--fy': `${state.fly.from.y}px`,
        '--fw': `${state.fly.from.w}px`,
        '--fh': `${state.fly.from.h}px`,
        '--tx': `${state.fly.to.x}px`,
        '--ty': `${state.fly.to.y}px`,
        '--tw': `${state.fly.to.w}px`,
        '--th': `${state.fly.to.h}px`,
      } as CSSProperties)
    : undefined;

  return (
    <div ref={sceneRef} className="px-hero-scene" aria-hidden="true">
      <div className="px-hero-menubar">
        <div className="px-hero-status">
          <div className="px-hero-px-anchor">
            <span
              className="px-hero-px-mark"
              data-active={state.barActive || undefined}
            >
              <PromptixIcon />
            </span>
            <div
              className="px-hero-overlay"
              data-open={state.overlay || undefined}
            >
              <span className="px-hero-caret" />
              <div className="px-hero-head">
                <p className="px-hero-snippet">{scene.before}</p>
                <span className="px-hero-head-close">
                  <X className="size-[10px]" weight="bold" />
                </span>
              </div>
              <ul className="px-hero-list">
                {scene.prompts.map((label, index) => (
                  <li
                    key={label}
                    data-hero-item=""
                    className="px-hero-item"
                    data-active={
                      state.activeIndex === index ? true : undefined
                    }
                  >
                    <div className="px-hero-item-row">
                      <span className="px-hero-item-copy">
                        <span className="px-hero-item-name">{label}</span>
                        <span className="px-hero-item-model">
                          {scene.model}
                        </span>
                      </span>
                      <span className="px-hero-select">{scene.select}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="px-hero-nav">{scene.hint}</p>
            </div>
          </div>
          <span className="px-hero-clock">{scene.clock}</span>
        </div>
      </div>

      <div className="px-hero-mail" data-recede={state.recede || undefined}>
        <div className="px-hero-titlebar">
          <span className="px-hero-lights">
            <span data-c="close" />
            <span data-c="min" />
            <span data-c="zoom" />
          </span>
          <span className="px-hero-app">{scene.appName}</span>
        </div>
        <div className="px-hero-toolbar">
          <PaperPlaneTilt className="size-[15px]" weight="fill" />
          <Trash className="size-[15px]" weight="regular" />
          <Paperclip className="size-[15px]" weight="regular" />
          <TextAa className="size-[15px]" weight="regular" />
        </div>
        <div className="px-hero-meta">
          <div className="px-hero-row">
            <span>{scene.toLabel}</span>
            <span className="px-hero-chip">{scene.toValue}</span>
          </div>
          <div className="px-hero-row">
            <span>{scene.subjectLabel}</span>
            <span>{scene.subjectValue}</span>
          </div>
        </div>
        <div className="px-hero-body">
          <p className="px-hero-line">
            <span
              className="px-hero-text"
              data-selected={state.selected || undefined}
            >
              {state.text}
            </span>
          </p>
        </div>
      </div>

      <div className="px-hero-dock" data-open={state.dock || undefined}>
        <DockGlyph src={assetPath('/media/apps/messages.png')} />
        <div ref={slotRef} className="px-hero-dock-slot">
          {state.appWin && !state.fly ? (
            <DockGlyph color={APP_COLOR}>
              <SfTextformat />
            </DockGlyph>
          ) : null}
        </div>
        <DockGlyph src={assetPath('/media/apps/app-store.png')} />
      </div>

      {state.fly ? (
        <div
          className="px-hero-fly"
          style={flyStyle}
        >
          <div className="px-hero-fly-face px-hero-fly-face--row">
            <span className="px-hero-fly-name">{promptName}</span>
            <span className="px-hero-fly-model">{scene.model}</span>
          </div>
          <div className="px-hero-fly-face px-hero-fly-face--icon">
            <SfTextformat />
          </div>
        </div>
      ) : null}

      <div
        className="px-hero-appwin"
        data-open={state.appWin || undefined}
      >
        <div className="px-hero-appwin-bar">
          <span className="px-hero-appwin-bar-left">
            <span className="px-hero-lights">
              <span data-c="close" />
              <span data-c="min" />
              <span data-c="zoom" />
            </span>
            <span className="px-hero-appwin-sidebar">
              <Sidebar className="size-[15px]" weight="regular" />
            </span>
          </span>
          <span className="px-hero-appwin-title">{promptName}</span>
          <span className="px-hero-appwin-pin">
            <span className="px-hero-appwin-pin-mark" />
            {scene.appPin}
          </span>
        </div>
        <div className="px-hero-appwin-card">
          <p className="px-hero-appwin-input">
            <span className="px-hero-appwin-caret" />
            {scene.before}
          </p>
          <div className="px-hero-appwin-actions">
            <span className="px-hero-appwin-copy">
              <CopySimple className="size-[16px]" weight="regular" />
            </span>
            <span className="px-hero-appwin-run">
              <PaperPlaneTilt className="size-[13px]" weight="fill" />
              {scene.appRun}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
