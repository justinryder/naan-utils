import { Callback, Falsy } from '../types';
import { isCallback } from '../assertions/isCallback';

/*
 * Composes multiple callbacks into a single callbacks that will invoke them all with the same arguments.
 *
 * Usage:
 * onAdd={callAll(onAdd, onClose, close)}
 */
export const callAll = <T extends any[]>(
  ...callbacks: Array<Callback<T> | Falsy>
) => (...args: T) =>
  callbacks.filter(isCallback).forEach(callback => callback(...args));
