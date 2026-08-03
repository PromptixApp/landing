import type { Metadata } from 'next';
import { buildRedirectMetadata } from '@/lib/seo';

export const metadata: Metadata = buildRedirectMetadata('/privacy/');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
