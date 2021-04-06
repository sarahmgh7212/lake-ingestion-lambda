type Types = { [key: string]: string };

export function namespacedTypes<T extends Types>(namespace: string, types: T): T {
    const nsTypes: Types = {};

    for (const key in types) {
        if (Object.prototype.hasOwnProperty.call(types, key)) {
            nsTypes[key] = `${namespace}/${types[key]}`;
        }
    }

    return nsTypes as T;
}