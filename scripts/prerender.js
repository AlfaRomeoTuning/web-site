// Prerenders every route in build/sitemap.xml to build/<route>/index.html.
//
// Replaces react-snap, which sometimes saved /rnd/* pages before Helmet ran, so
// they shipped with the template's <title> and no description. Here each route
// is loaded in headless Chrome and saved only once Helmet has replaced the
// template title and added a description; a route that never gets there fails
// the build instead of shipping a bare page.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import { preview } from 'vite';

const rootDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const buildDir = path.join(rootDir, 'build');
const ROUTE_TIMEOUT_MS = 30_000;

const sitemap = fs.readFileSync(path.join(buildDir, 'sitemap.xml'), 'utf8');
const routes = [...sitemap.matchAll(/<loc>https?:\/\/[^/<]+([^<]*)<\/loc>/g)].map((m) => m[1] || '/');
if (routes.length === 0) {
    console.error('No routes found in build/sitemap.xml.');
    process.exit(1);
}

const template = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');
const templateTitle = template.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';

// Snapshots are written only after every route is rendered, so the preview
// server keeps answering each route with the untouched build/index.html.
const server = await preview({
    root: rootDir,
    logLevel: 'warn',
    preview: { port: 4173, strictPort: false, open: false },
});
const origin = server.resolvedUrls.local[0].replace(/\/$/, '');

const browser = await puppeteer.launch({
    // GitHub's Ubuntu 24.04 runners don't allow Chrome's user-namespace sandbox.
    args: process.platform === 'linux' ? ['--no-sandbox', '--disable-setuid-sandbox'] : [],
});

const snapshots = new Map();
const failures = [];

try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    const pageErrors = [];
    page.on('pageerror', (error) => pageErrors.push(error.message));

    for (const route of routes) {
        pageErrors.length = 0;
        try {
            await page.goto(origin + route, { waitUntil: 'networkidle0', timeout: ROUTE_TIMEOUT_MS });
            await page.waitForFunction(
                (defaultTitle) => {
                    const description = document.querySelector('meta[name="description"]');
                    return document.title
                        && document.title !== defaultTitle
                        && description
                        && description.content.trim() !== ''
                        && document.querySelector('#root > *');
                },
                { timeout: ROUTE_TIMEOUT_MS },
                templateTitle,
            );
            if (pageErrors.length > 0) {
                throw new Error(`page errors: ${pageErrors.join('; ')}`);
            }
            const html = await page.evaluate(
                () => `<!DOCTYPE html>\n${document.documentElement.outerHTML}\n`
            );
            snapshots.set(route, html);
            const title = await page.title();
            console.log(`${route} -> ${title}`);
        } catch (error) {
            failures.push(`${route}: ${error.message}`);
        }
    }
} finally {
    await browser.close();
    await new Promise((resolve) => server.httpServer.close(resolve));
}

if (failures.length > 0) {
    console.error(`Prerender failed for ${failures.length} of ${routes.length} routes:`);
    for (const failure of failures) console.error(`  ${failure}`);
    process.exit(1);
}

for (const [route, html] of snapshots) {
    const file = route === '/'
        ? path.join(buildDir, 'index.html')
        : path.join(buildDir, route, 'index.html');
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, html);
}

console.log(`Prerendered ${snapshots.size} routes.`);
