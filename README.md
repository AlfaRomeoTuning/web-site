# Alfa Tuning web site

The site at https://alfatuning.app: React 19, React Router 8 and React-Bootstrap, built with Vite.

## Scripts

- `npm start` runs the dev server at http://localhost:3000.
- `npm test` runs the Vitest suite once; `npm run test:watch` re-runs on changes.
- `npm run build` writes the production site to `build/` in three steps:
  1. `vite build` bundles the app.
  2. `scripts/generate-sitemap.js` writes `build/sitemap.xml`, with R&D image URLs taken from Vite's manifest.
  3. `scripts/prerender.js` opens every sitemap route in headless Chrome (Puppeteer) and saves `build/<route>/index.html` once the page has its own `<title>` and meta description. A route that doesn't get them fails the build. The not-found screen (`/404`) is saved as `build/404.html`.
- `npm run preview` serves `build/` locally.
- `npm run check-routes -- <url>` checks the Caddy container serving `build/`: every sitemap route answers 200 with its own title, unknown URLs answer 404 with `build/404.html`, and `/product` and `www.alfatuning.app` answer 301.

## Deploy

CI (`.github/workflows/ci.yml`) runs `npm ci`, `npm test` and `npm run build` on pull requests. A push to `main` runs the same job and then deploys the tested `build/` to Cloud Run as a Caddy image (`.docker/`). Caddy serves files and `<route>/index.html` for prerendered routes, redirects `/product` to `/device`, and answers any other path with 404 and `build/404.html`. CI builds that image and runs `npm run check-routes` against it before the build is uploaded.
