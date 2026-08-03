'use client';

import { useTranslation } from '@/lib/i18n';
import LegalPage from '../components/LegalPage';

export default function PersonalDataPage() {
  const { t } = useTranslation();

  return (
    <LegalPage
      title={t.personalData.title}
      metaTitle={t.personalData.metaTitle}
      lastUpdated={t.personalData.lastUpdated}
      intro={t.personalData.intro}
      sections={t.personalData.sections}
    />
  );
}
