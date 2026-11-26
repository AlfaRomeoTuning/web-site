# Alfa Tuning web site

The site at https://alfatuning.app: React 19, React Router 8 and React-Bootstrap, built with Vite.

## Scripts

- `npm start` runs the dev server at http://localhost:3000.
- `npm test` runs the Vitest suite once; `npm run test:watch` re-runs on changes.
- `npm run build` writes the production site to `build/` in three steps:
  1. `vite build` bundles the app.
  2. `scripts/generate-sitemap.js` writes `build/sitemap.xml`, with R&D image URLs taken from Vite's manifest.
  3. `scripts/prerender.js` opens every sitemap route in headless Chrome (Puppeteer) and saves `build/<route>/index.html` once the page has its own `<title>` and meta description. A route that doesn't get them fails the build.
- `npm run preview` serves `build/` locally.

## Deploy

CI (`.github/workflows/ci.yml`) runs `npm ci`, `npm test` and `npm run build` on pull requests. A push to `main` runs the same job and then deploys the tested `build/` to Cloud Run as a Caddy image (`.docker/`). Caddy serves `<route>/index.html` for prerendered routes and falls back to `index.html` for everything else.
