import { callAll } from './callAll';
import { isCondition } from '../assertions/isCondition';
import { Callback, Condition, Falsy } from '../types';

/*
 * Combines one or more conditions with one or more callbacks to create a single callbacks function that will invoke all callbacks if all conditions are true
 *
 * Usage:
 * onKeyDown={ifAll(isCtrl, isZ)(onUndo, preventDefault)}
 */
export const ifAll = <T extends any[]>(
  ...conditions: Array<Condition<T> | Falsy>
) => (...callbacks: Array<Callback<T> | Falsy>) => (...args: T) => {
  const conditionsToCheck = conditions.filter(isCondition);
  if (
    conditionsToCheck.length &&
    conditionsToCheck.every(condition => condition(...args))
  ) {
    callAll(...callbacks)(...args);
  }
};
