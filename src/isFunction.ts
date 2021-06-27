export const isFunction = (func: unknown): func is Function =>
  typeof func === 'function';
