import { Condition } from '../types';

export const isCondition = <T extends any[]>(
  func: unknown
): func is Condition<T> => typeof func === 'function';
