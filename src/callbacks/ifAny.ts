import { callAll } from './callAll';
import { isCondition } from '../assertions/isCondition';
import { Callback, Condition, Falsy } from '../types';

/*
 * Combines one or more conditions with one or more callbacks to create a single callbacks function that will invoke all callbacks if any conditions are true
 *
 * Usage:
 * onKeyDown={ifAny(isEnter, isSpace)(onClick, preventDefault)}
 */
export const ifAny = <T extends any[]>(
  ...conditions: Array<Condition<T> | Falsy>
) => (...callbacks: Array<Callback<T> | Falsy>) => (...args: T) => {
  const conditionsToCheck = conditions.filter(isCondition);
  if (
    conditionsToCheck.length &&
    conditionsToCheck.some(condition => condition(...args))
  ) {
    callAll(...callbacks)(...args);
  }
};
