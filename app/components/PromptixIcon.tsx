import { assetPath } from '@/lib/paths';

export default function PromptixIcon({
  size = 14,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <img
      src={assetPath('/media/promptix-icon.png')}
      alt=""
      width={size}
      height={size}
      draggable={false}
      className={['px-app-icon', className].filter(Boolean).join(' ')}
    />
  );
}
