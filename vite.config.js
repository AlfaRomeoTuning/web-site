import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        react(),
        // `import Logo from './logo.svg?react'` gives an inline SVG component, as CRA's SVGR did.
        // titleProp and ref match CRA's SVGR settings.
        svgr({ svgrOptions: { titleProp: true, ref: true } }),
    ],
    server: {
        port: 3000,
    },
    preview: {
        port: 4173,
    },
    build: {
        // ci.yml, deploy.yml and .docker/Dockerfile ship build/.
        outDir: 'build',
        // scripts/generate-sitemap.js reads build/.vite/manifest.json to find hashed image URLs.
        manifest: true,
    },
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './src/test/setup.js',
    },
});
