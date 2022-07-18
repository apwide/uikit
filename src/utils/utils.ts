export const chunk = (arr: any[], size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_v: any, i) => arr.slice(i * size, i * size + size));
export const isPromise = (p: any) => p && typeof p.then === 'function' && typeof p.catch === 'function';
