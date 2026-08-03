import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { RuI18n } from "./RuI18n";

export const metadata: Metadata = buildPageMetadata("ru", "home");

export default function RuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify("ru")}`,
        }}
      />
      <RuI18n>{children}</RuI18n>
    </>
  );
}
