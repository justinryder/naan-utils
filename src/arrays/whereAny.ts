import { isCondition } from '../assertions/isCondition';
import { Condition, Falsy } from '../types';

// myArray.filter(whereAny(x => x.foo, x => x.bar))
export const whereAny = <T extends any[]>(
  ...conditions: Array<Condition<T> | Falsy>
) => (...args: T) => {
  const conditionsToCheck = conditions.filter(isCondition);
  return (
    conditionsToCheck.length === 0 ||
    conditionsToCheck.some(condition => condition(...args))
  );
};
