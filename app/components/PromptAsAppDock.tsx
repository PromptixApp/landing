import type { ReactNode } from 'react';
import { assetPath } from '@/lib/paths';
import {
  SfListBullet,
  SfPencil,
  SfSparkles,
  SfTextformat,
  SfTranslate,
} from './sf-symbols';

const promptApps = [
  { id: 'translate', color: '#ff3b30', Icon: SfTranslate },
  { id: 'rewrite', color: '#c8f542', Icon: SfPencil },
  { id: 'improve', color: '#5ac8fa', Icon: SfSparkles },
  { id: 'grammar', color: '#bf5af2', Icon: SfTextformat },
  { id: 'summarize', color: '#ff2d55', Icon: SfListBullet },
];

function AppIcon({
  color,
  src,
  icon: Icon,
}: {
  color: string;
  src?: string;
  icon?: () => ReactNode;
}) {
  return (
    <div className="px-paa-icon" style={src ? undefined : { background: color }}>
      {src ? <img src={src} alt="" /> : Icon ? <Icon /> : null}
    </div>
  );
}

export default function PromptAsAppDock() {
  const strip = [...promptApps, ...promptApps];

  return (
    <div className="px-mac-desktop px-paa-scene" aria-hidden="true">
      <div className="px-paa-dock">
        <AppIcon color="#34c759" src={assetPath('/media/apps/messages.png')} />
        <div className="px-paa-slot">
          <div className="px-paa-stack">
            {strip.map((app, index) => (
              <AppIcon
                key={`${app.id}-${index}`}
                color={app.color}
                icon={app.Icon}
              />
            ))}
          </div>
        </div>
        <AppIcon color="#0a84ff" src={assetPath('/media/apps/app-store.png')} />
      </div>
    </div>
  );
}
