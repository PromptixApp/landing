# Promptix Landing

Marketing site for [Promptix](https://promptix.app) — AI prompts in any app, via a global hotkey.

Built with [Next.js](https://next.js.org) (static export) and deployed to GitHub Pages.

## Stack

- Next.js 15 (App Router, `output: 'export'`)
- React 19
- TypeScript
- Tailwind CSS
- EN / RU i18n

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static output goes to `_static/` (see `next.config.ts`).

## Deploy

Push to `main` / `master` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) and publishes to GitHub Pages. Custom domain: `promptix.app` (`public/CNAME`).

## Project layout

```
app/           # pages & UI components
lib/           # i18n, SEO helpers, path helpers
public/        # static assets, media, robots/sitemap
```

## License

Proprietary. All rights reserved.
