type RedirectProps = {
  to: string;
};

/** Static-export-friendly redirect: meta refresh + canonical target + noscript link. */
export default function Redirect({ to }: RedirectProps) {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `location.replace(${JSON.stringify(to)})`,
        }}
      />
      <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4 text-sm text-[var(--muted)]">
        <p>
          Redirecting to{' '}
          <a href={to} className="underline">
            {to}
          </a>
          …
        </p>
      </main>
    </>
  );
}
