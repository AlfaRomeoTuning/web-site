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

const baseUrl = 'https://alfatuning.app';
const today = new Date().toISOString().split('T')[0];

const urls = [
    { loc: '/', priority: '1.0', changefreq: 'daily' },
    { loc: '/rnd', priority: '0.9', changefreq: 'weekly' },
    { loc: '/partners', priority: '0.8', changefreq: 'weekly' },
    { loc: '/device', priority: '0.7', changefreq: 'weekly' }
];

// Добавляем все модели
if (rndModels.models && Array.isArray(rndModels.models)) {
    rndModels.models.forEach(model => {
        const slug = `${model.carcar[0]}-${model.part}`
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '');
        
        urls.push({
            loc: `/rnd/${slug}`,
            priority: '0.8',
            changefreq: 'monthly'
        });
    });
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `    <url>
        <loc>${baseUrl}${url.loc}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>
    </url>`).join('\n')}
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