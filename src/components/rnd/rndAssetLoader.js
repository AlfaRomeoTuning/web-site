export function getRndImage(fileName) {
    try {
        const imageModule = require(`../../assets/rnd/${fileName}`);
        return typeof imageModule === 'string' ? imageModule : imageModule.default || null;
    } catch (error) {
        return null;
    }
}
