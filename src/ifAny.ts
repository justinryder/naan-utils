import { isFunction } from './isFunction';
import { callAll } from './callAll';

/*
 * Combines one or more conditions with one or more callbacks to create a single callback function that will invoke all callbacks if any conditions are true
 *
 * Usage:
 * onKeyDown={ifAny(isEnter, isSpace)(onClick, preventDefault)}
 */
export const ifAny = <T extends any[]>(...conditions: Array<unknown>) => (
  ...callbacks: Array<unknown>
) => (...args: T) => {
  const conditionsToCheck = conditions.filter(isFunction);
  if (
    conditionsToCheck.length &&
    conditionsToCheck.some(condition => condition(...args))
  ) {
    callAll(...callbacks)(...args);
  }
};
