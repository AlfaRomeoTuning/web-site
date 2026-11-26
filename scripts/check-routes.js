// Checks HTTP status codes of the built site served by the Caddy container.
//
//   node scripts/check-routes.js [base-url]   (default http://localhost:8080)
//
// - Every route in build/sitemap.xml answers 200 with its own <title> and a
//   meta description, and not the not-found page.
// - Unknown paths, including unknown /rnd/<slug>, answer 404 with build/404.html.
// - /product answers 301 to /device; www.alfatuning.app answers 301 to the apex.
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const buildDir = path.join(rootDir, 'build');
const base = new URL(process.argv[2] || 'http://localhost:8080');

const sitemap = fs.readFileSync(path.join(buildDir, 'sitemap.xml'), 'utf8');
const sitemapRoutes = [...sitemap.matchAll(/<loc>https?:\/\/[^/<]+([^<]*)<\/loc>/g)].map((m) => m[1] || '/');
const notFoundTitle = titleOf(fs.readFileSync(path.join(buildDir, '404.html'), 'utf8'));

const unknownRoutes = ['/no-such-page', '/no-such-page/', '/rnd/no-such-part', '/rnd/no-such-part/extra', '/device/extra'];

// node:http rather than fetch, so redirects aren't followed and the Host header can be set.
function get(route, headers = {}) {
    return new Promise((resolve, reject) => {
        const req = http.get(new URL(route, base), { headers }, (res) => {
            let body = '';
            res.setEncoding('utf8');
            res.on('data', (chunk) => { body += chunk; });
            res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body }));
        });
        req.on('error', reject);
    });
}

function titleOf(html) {
    return html.match(/<title[^>]*>([^<]*)<\/title>/)?.[1].trim() ?? '';
}

function descriptionOf(html) {
    return html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/)?.[1].trim() ?? '';
}

const failures = [];
const fail = (route, message) => failures.push(`${route}: ${message}`);
const titles = new Map();

for (const route of sitemapRoutes) {
    const res = await get(route);
    const title = titleOf(res.body);
    if (res.status !== 200) fail(route, `expected 200, got ${res.status}`);
    else if (!title || title === notFoundTitle) fail(route, `has the not-found or no title: "${title}"`);
    else if (!descriptionOf(res.body)) fail(route, 'has no meta description');
    if (titles.has(title)) fail(route, `same title as ${titles.get(title)}: "${title}"`);
    titles.set(title, route);
}

for (const route of unknownRoutes) {
    const res = await get(route);
    if (res.status !== 404) fail(route, `expected 404, got ${res.status}`);
    else if (titleOf(res.body) !== notFoundTitle) fail(route, `expected the not-found page, got "${titleOf(res.body)}"`);
    else if (!/<meta[^>]*name="robots"[^>]*noindex/.test(res.body)) fail(route, 'not-found page has no robots noindex');
}

const redirects = [
    { route: '/product', location: '/device' },
    { route: '/product/', location: '/device' },
    { route: '/rnd?x=1', headers: { host: 'www.alfatuning.app' }, location: 'https://alfatuning.app/rnd?x=1' },
];
for (const { route, headers, location } of redirects) {
    const res = await get(route, headers);
    const label = headers?.host ? `${headers.host}${route}` : route;
    if (res.status !== 301 || res.headers.location !== location) {
        fail(label, `expected 301 to ${location}, got ${res.status} ${res.headers.location ?? ''}`.trim());
    }
}

const total = sitemapRoutes.length + unknownRoutes.length + redirects.length;
if (failures.length > 0) {
    console.error(`${failures.length} route check(s) failed against ${base.origin}:`);
    for (const failure of failures) console.error(`  ${failure}`);
    process.exit(1);
}
console.log(`${total} route checks passed against ${base.origin}: ${sitemapRoutes.length} sitemap routes 200, ${unknownRoutes.length} unknown routes 404, ${redirects.length} redirects 301.`);
