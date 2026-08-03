'use client';

import { useTranslation } from '@/lib/i18n';
import LegalPage from '../components/LegalPage';

export default function TermsOfService() {
  const { t } = useTranslation();

  return (
    <LegalPage
      title={t.terms.title}
      metaTitle={t.terms.metaTitle}
      lastUpdated={t.terms.lastUpdated}
      intro={t.terms.content.intro}
      sections={t.terms.content.sections}
    />
  );
}
