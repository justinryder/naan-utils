import { isFunction } from './isFunction';
import { callAll } from './callAll';

/*
 * Combines one or more conditions with one or more callbacks to create a single callback function that will invoke all callbacks if all conditions are true
 *
 * Usage:
 * onKeyDown={ifAll(isCtrl, isZ)(onUndo, preventDefault)}
 */
export const ifAll = <T extends any[]>(...conditions: Array<unknown>) => (
  ...callbacks: Array<unknown>
) => (...args: T) => {
  const conditionsToCheck = conditions.filter(isFunction);
  if (
    conditionsToCheck.length &&
    conditionsToCheck.every(condition => condition(...args))
  ) {
    callAll(...callbacks)(...args);
  }
};
