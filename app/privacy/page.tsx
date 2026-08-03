'use client';

import { useTranslation } from '@/lib/i18n';
import LegalPage from '../components/LegalPage';

export default function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <LegalPage
      title={t.privacy.title}
      metaTitle={t.privacy.metaTitle}
      lastUpdated={t.privacy.lastUpdated}
      intro={t.privacy.intro}
      sections={t.privacy.sections}
    />
  );
}
