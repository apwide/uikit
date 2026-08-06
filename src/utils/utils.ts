export const chunk = <T>(arr: T[], size: number): T[][] =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size))
export const isPromise = (p: unknown): boolean =>
  !!p && typeof (p as Promise<unknown>).then === 'function' && typeof (p as Promise<unknown>).catch === 'function'
