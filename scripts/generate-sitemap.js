// Writes build/sitemap.xml after `vite build`.
// Image URLs come from build/.vite/manifest.json, which maps each source file to its hashed output.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createModelSlug, getModelFileName } from '../src/components/rnd/rndModelUtils.js';

const rootDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const buildDir = path.join(rootDir, 'build');
const manifestDir = path.join(buildDir, '.vite');
const manifestPath = path.join(manifestDir, 'manifest.json');

const baseUrl = 'https://alfatuning.app';
const today = new Date().toISOString().split('T')[0];

const models = JSON.parse(
    fs.readFileSync(path.join(rootDir, 'src/components/rnd/rndModelsData.json'), 'utf8')
);

if (!fs.existsSync(manifestPath)) {
    console.error('build/.vite/manifest.json not found. Run "vite build" first.');
    process.exit(1);
}
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

// Only R&D images that the app imports are in the manifest; images under
// build.assetsInlineLimit are inlined as data URIs and have no URL.
function imageUrl(fileName) {
    const entry = manifest[`src/assets/rnd/${fileName}`];
    return entry ? `${baseUrl}/${entry.file}` : null;
}

const escapeXml = (value) =>
    value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');

const urls = [
    { loc: '/', priority: '1.0', changefreq: 'daily' },
    { loc: '/rnd', priority: '0.9', changefreq: 'weekly' },
    { loc: '/partners', priority: '0.8', changefreq: 'weekly' },
    { loc: '/device', priority: '0.7', changefreq: 'weekly' },
    { loc: '/mobilecda', priority: '0.7', changefreq: 'monthly' },
    { loc: '/mobilecda/privacy-policy', priority: '0.3', changefreq: 'yearly' },
];

for (const model of models) {
    const cars = model.car.join(', ');
    const page = {
        loc: `/rnd/${createModelSlug(model)}`,
        priority: '0.8',
        changefreq: 'monthly',
        images: [],
    };

    const mainImage = imageUrl(getModelFileName(model));
    if (mainImage) {
        page.images.push({
            loc: mainImage,
            title: `${model.part} for ${cars}`,
            caption: model.description.replace(/<[^>]*>/g, '').trim(),
        });
        for (const child of model.childs || []) {
            const childImage = imageUrl(getModelFileName(model, child));
            if (childImage) {
                page.images.push({
                    loc: childImage,
                    title: `${model.part} for ${cars} - View ${child}`,
                    caption: `Additional view: ${model.part} for ${cars}`,
                });
            }
        }
    } else {
        console.warn(`Warning: no image in the build for ${model.part}: ${getModelFileName(model)}`);
    }

    urls.push(page);
}

const entries = urls.map((url) => {
    const images = (url.images || []).map((img) => `
        <image:image>
            <image:loc>${escapeXml(img.loc)}</image:loc>
            <image:title>${escapeXml(img.title)}</image:title>
            <image:caption>${escapeXml(img.caption)}</image:caption>
        </image:image>`).join('');
    return `    <url>
        <loc>${baseUrl}${url.loc}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>${images}
    </url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), sitemap);

// Nothing after this step needs the manifest, and it shouldn't be served.
fs.rmSync(manifestDir, { recursive: true, force: true });

console.log(`Sitemap written to build/sitemap.xml with ${urls.length} URLs.`);
