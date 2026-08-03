import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata('en', 'demo');

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
