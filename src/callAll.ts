import { isFunction } from './isFunction';

/*
 * Composes multiple callbacks into a single callback that will invoke them all with the same arguments.
 *
 * Usage:
 * onAdd={callAll(onAdd, onClose, close)}
 */
export const callAll = <T extends any[]>(...callbacks: Array<unknown>) => (
  ...args: T
) => callbacks.filter(isFunction).forEach(callback => callback(...args));
