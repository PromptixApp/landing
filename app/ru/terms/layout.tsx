import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata('ru', 'terms');

export default function RuTermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
