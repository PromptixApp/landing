'use client';

import { useTranslation } from '@/lib/i18n';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import PricingSection from '../components/PricingSection';
import FaqSection from '../components/FaqSection';
import DownloadButton from '../components/DownloadButton';

export default function PricingPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader />
      <main>
        <PricingSection />
        <FaqSection />
        <section className="mx-auto max-w-3xl px-4 pb-20 text-center sm:px-6">
          <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {t.cta.title}
          </h2>
          <div className="mt-6">
            <DownloadButton label={t.cta.downloadButton} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
