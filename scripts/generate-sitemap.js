// scripts/generate-sitemap.js
const fs = require('fs');
const path = require('path');

// Импортируем данные моделей
const rndModelsPath = path.join(__dirname, '../src/components/rnd/rndModels.js');
let rndModels;

try {
    // Читаем файл и извлекаем данные
    const fileContent = fs.readFileSync(rndModelsPath, 'utf8');
    // Создаем временный модуль для извлечения данных
    const module = { exports: {} };
    eval(fileContent.replace('export default', 'module.exports ='));
    rndModels = module.exports;
} catch (error) {
    console.error('Error reading rndModels:', error);
    // Fallback - пустой массив
    rndModels = { models: [] };
}

// Load asset manifest from build directory
const manifestPath = path.join(__dirname, '../build/asset-manifest.json');
let assetManifest = null;

try {
    if (fs.existsSync(manifestPath)) {
        const manifestContent = fs.readFileSync(manifestPath, 'utf8');
        assetManifest = JSON.parse(manifestContent);
        console.log('✅ Loaded asset-manifest.json');
    } else {
        console.warn('⚠️ Warning: build/asset-manifest.json not found. Image sitemap will not include images. Run "npm run build" first.');
    }
} catch (error) {
    console.error('Error reading asset-manifest.json:', error);
}

const baseUrl = 'https://alfatuning.app';
const today = new Date().toISOString().split('T')[0];

const urls = [
    { loc: '/', priority: '1.0', changefreq: 'daily' },
    { loc: '/rnd', priority: '0.9', changefreq: 'weekly' },
    { loc: '/partners', priority: '0.8', changefreq: 'weekly' },
    { loc: '/device', priority: '0.7', changefreq: 'weekly' }
];

// Helper to find image in manifest
function getHashedImagePath(baseFilename) {
    if (!assetManifest || !assetManifest.files) return null;

    // 1. Try exact/suffix match (case sensitive)
    let entry = Object.entries(assetManifest.files).find(([key, value]) => {
        // key often includes full path like "static/media/file.ext"
        return key === baseFilename || key.endsWith('/' + baseFilename) || key.endsWith(baseFilename);
    });

    // 2. Fallback: Try case-insensitive suffix match
    if (!entry) {
        entry = Object.entries(assetManifest.files).find(([key, value]) => {
            return key.toLowerCase().endsWith('/' + baseFilename.toLowerCase()) ||
                key.toLowerCase().endsWith(baseFilename.toLowerCase());
        });
    }

    return entry ? entry[1] : null;
}

// Добавляем все модели
if (rndModels.models && Array.isArray(rndModels.models)) {
    rndModels.models.forEach(model => {
        const slug = `${model.car[0]}-${model.part}`
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '');

        const pageUrl = {
            loc: `/rnd/${slug}`,
            priority: '0.8',
            changefreq: 'monthly',
            images: []
        };

        // Construct main image filename based on RnD.jsx logic
        const mainImageFilename = model.car[0].replace(/ /g, '') + model.part.replace(/ /g, '') + '.png';
        const mainImagePath = getHashedImagePath(mainImageFilename);

        if (mainImagePath) {
            pageUrl.images.push({
                loc: baseUrl + mainImagePath,
                title: `${model.part} for ${model.car.join(', ')}`,
                caption: model.description.replace(/<[^>]*>/g, '').trim() // Strip HTML
            });

            // Also check for child images (view 2, 3, etc.)
            if (model.childs && Array.isArray(model.childs)) {
                model.childs.forEach(childIndex => {
                    const childFilename = model.car[0].replace(/ /g, '') + model.part.replace(/ /g, '') + childIndex + '.png';
                    const childPath = getHashedImagePath(childFilename);
                    // Image search usually prefers the main one, but we can add all
                    if (childPath) {
                        pageUrl.images.push({
                            loc: baseUrl + childPath,
                            title: `${model.part} for ${model.car.join(', ')} - View ${childIndex}`,
                            caption: `Additional view: ${model.part} for ${model.car.join(', ')}`
                        });
                    }
                });
            }
        } else {
            console.warn(`⚠️ Warning: Image not found in manifest for ${model.part}: ${mainImageFilename}`);
        }

        urls.push(pageUrl);
    });
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map(url => {
    let xml = `    <url>
        <loc>${baseUrl}${url.loc}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>`;

    // Add images if present
    if (url.images && url.images.length > 0) {
        url.images.forEach(img => {
            xml += `
        <image:image>
            <image:loc>${img.loc}</image:loc>
            <image:title>${img.title}</image:title>
            <image:caption>${img.caption}</image:caption>
        </image:image>`;
        });
    }

    xml += `
    </url>`;
    return xml;
}).join('\n')}
</urlset>`;

// Создаем папку public если её нет
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

// Сохраняем sitemap
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('✅ Sitemap generated successfully!');
console.log(`📊 Total URLs: ${urls.length}`);
console.log(`📁 Location: public/sitemap.xml`);