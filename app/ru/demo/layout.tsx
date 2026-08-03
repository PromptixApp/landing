import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata('ru', 'demo');

export default function RuDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
