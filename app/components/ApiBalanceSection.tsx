'use client';

import {
  Lightning,
  GearSix,
  Clock,
  ArrowsClockwise,
} from '@phosphor-icons/react';
import { useTranslation } from '@/lib/i18n';
import { assetPath } from '@/lib/paths';
import PromptixIcon from './PromptixIcon';

const SERVICE_SPRITE_WIDTH = 722;
const SERVICE_SLOT = 128;

const services = [
  { name: 'OpenAI', offset: 0 },
  { name: 'Grok', offset: 198 },
  { name: 'DeepSeek', offset: 396 },
  { name: 'OpenRouter', offset: 594 },
] as const;

function ServiceIcon({
  offset,
  size,
  invert,
}: {
  offset: number;
  size: number;
  invert?: boolean;
}) {
  const sheet = (SERVICE_SPRITE_WIDTH / SERVICE_SLOT) * size;
  const shift = -(offset / SERVICE_SLOT) * size;

  return (
    <span
      aria-hidden="true"
      className="block shrink-0 overflow-hidden"
      style={{ width: size, height: size }}
    >
      <img
        src={assetPath('/services.svg')}
        alt=""
        draggable={false}
        width={sheet}
        height={size}
        className={invert ? 'invert' : undefined}
        style={{
          display: 'block',
          width: sheet,
          height: size,
          maxWidth: 'none',
          marginLeft: shift,
        }}
      />
    </span>
  );
}

function MenuDivider() {
  return <div className="px-mac-menu-divider" />;
}

function MenuItem({
  icon: Icon,
  label,
  disabled,
}: {
  icon?: typeof Lightning;
  label: string;
  disabled?: boolean;
}) {
  return (
    <div
      className={['px-mac-item', disabled ? 'px-mac-item--disabled' : '']
        .filter(Boolean)
        .join(' ')}
    >
      {Icon ? (
        <Icon className="size-[14px] shrink-0" weight="regular" />
      ) : (
        <span className="size-[14px] shrink-0" />
      )}
      <span>{label}</span>
    </div>
  );
}

function BalanceRow({
  offset,
  name,
  value,
}: {
  offset: number;
  name: string;
  value: string;
}) {
  return (
    <div className="px-mac-balance">
      <ServiceIcon offset={offset} size={14} invert />
      <span className="px-mac-balance-text">
        <span className="px-mac-balance-name">{name}</span>
        <span className="px-mac-balance-value">{value}</span>
      </span>
    </div>
  );
}

function MacMenuBarMock() {
  const { t } = useTranslation();
  const menu = t.apiBalance.menu;

  return (
    <div className="px-mac-desktop" aria-hidden="true">
      <div className="px-mac-menubar">
        <div className="px-mac-status-cluster">
          <div className="px-mac-status-anchor">
            <div className="px-mac-status-active">
              <PromptixIcon />
            </div>
            <div className="px-mac-menu">
              <MenuItem icon={Lightning} label={menu.openActions} />
              <MenuItem icon={GearSix} label={menu.settings} />
              <MenuItem icon={Clock} label={menu.latestResponse} disabled />
              <MenuDivider />
              <BalanceRow
                offset={services[2].offset}
                name={services[2].name}
                value="24,73 US$"
              />
              <BalanceRow
                offset={services[3].offset}
                name={services[3].name}
                value={`${menu.spent} 6,42 US$`}
              />
              <BalanceRow
                offset={services[0].offset}
                name={services[0].name}
                value={`${menu.spent} 17,84 US$`}
              />
              <MenuDivider />
              <MenuItem icon={ArrowsClockwise} label={menu.checkUpdates} />
              <MenuDivider />
              <MenuItem label={menu.quit} />
            </div>
          </div>
          <span className="px-mac-clock">Sat 8:41</span>
        </div>
      </div>
    </div>
  );
}

export default function ApiBalanceSection() {
  const { t } = useTranslation();

  return (
    <section className="px-mesh px-mesh--api-balance">
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-sm font-medium text-[var(--muted)]">
              {t.apiBalance.eyebrow}
            </p>
            <h2 className="mt-2 text-pretty text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl sm:leading-[1.15]">
              {t.apiBalance.title}{' '}
              <span className="text-[var(--muted)]">
                {t.apiBalance.description}
              </span>
            </h2>
            <img
              src={assetPath('/services.svg')}
              alt={services.map((s) => s.name).join(', ')}
              draggable={false}
              className="mt-8 h-8 w-auto select-none sm:h-10"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border-2 border-white/70 bg-[var(--background)] shadow-[0_16px_48px_-12px_rgba(0,0,0,0.28),0_4px_16px_-4px_rgba(0,0,0,0.12)]">
            <MacMenuBarMock />
          </div>
        </div>
      </div>
    </section>
  );
}
