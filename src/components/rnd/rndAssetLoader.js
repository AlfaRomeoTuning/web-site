// Every R&D image, keyed by file name, as the URL Vite emits for it.
const rndImages = Object.fromEntries(
    Object.entries(
        import.meta.glob('../../assets/rnd/*.png', { eager: true, import: 'default' })
    ).map(([path, url]) => [path.slice(path.lastIndexOf('/') + 1), url])
);

export function getRndImage(fileName) {
    return rndImages[fileName] || null;
}
