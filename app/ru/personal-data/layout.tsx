import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata('ru', 'personalData');

export default function RuPersonalDataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
