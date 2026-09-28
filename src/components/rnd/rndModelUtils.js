export function createModelSlug(model) {
    return `${model.car[0]}-${model.part}`
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

export function getModelImageBaseName(model) {
    return `${model.car[0].replace(/ /g, '')}${model.part.replace(/ /g, '')}`;
}

export function getModelFileName(model, suffix = '') {
    return `${getModelImageBaseName(model)}${suffix}.png`;
}
