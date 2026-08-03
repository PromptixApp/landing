import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata('ru', 'privacy');

export default function RuPrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
