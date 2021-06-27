import { isCondition } from '../assertions/isCondition';
import { Condition, Falsy } from '../types';

// myArray.filter(whereAll(x => x.foo, x => x.bar))
// myArray.find(whereAll(x => x.foo, x => x.bar))
export const whereAll = <T extends any[]>(
  ...conditions: Array<Condition<T> | Falsy>
) => (...args: T) => {
  const conditionsToCheck = conditions.filter(isCondition);
  return (
    conditionsToCheck.length === 0 ||
    conditionsToCheck.every(condition => condition(...args))
  );
};
