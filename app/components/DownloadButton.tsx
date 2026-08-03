'use client';

import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

declare global {
  interface Window {
    twq?: (
      command: string,
      eventName: string,
      parameters?: Record<string, unknown>
    ) => void;
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

const DOWNLOAD_URL = 'https://download.promptix.app';

type DownloadButtonProps = {
  label: string;
  className?: string;
  showIcon?: boolean;
};

export default function DownloadButton({
  label,
  className = '',
  showIcon = true,
}: DownloadButtonProps) {
  return (
    <a
      href={DOWNLOAD_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`pressable inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[var(--accent-text)] hover:opacity-90 ${className}`}
      onClick={(e) => {
        e.preventDefault();
        if (typeof window === 'undefined') return;
        if (window.twq) {
          window.twq('event', 'tw-qcagk-qcagn', {});
        }
        if (window.gtag_report_conversion) {
          window.gtag_report_conversion(DOWNLOAD_URL);
          return;
        }
        window.location.href = DOWNLOAD_URL;
      }}
    >
      {showIcon && <ArrowDownTrayIcon className="size-4" />}
      {label}
    </a>
  );
}
