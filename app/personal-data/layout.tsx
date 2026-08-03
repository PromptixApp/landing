import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata('en', 'personalData');

export default function PersonalDataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
