import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata('en', 'pricing');

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
