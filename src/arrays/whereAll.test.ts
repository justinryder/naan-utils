import { whereAll } from './whereAll';

describe('whereAll', () => {
  it('should not not change array if no conditions are passed', () => {
    const input = ['a', 'b', 'c'];
    const result = input.filter(whereAll());
    expect(result).toEqual(input);
  });

  it('should not invoke callbacks if only non-function conditions are passed', () => {
    const input = ['a', 'b', 'c'];
    const result = input.filter(whereAll(false, null, 0, '', undefined));
    expect(result).toEqual(input);
  });

  it('should return a subset of the arrays containing matches that satisfy all conditions', () => {
    const input = ['a', 'b', 'c'];
    const isAfterA = (x: string) => x > 'a';
    const isBeforeC = (x: string) => x < 'c';
    const result = input.filter(whereAll(isAfterA, isBeforeC));
    expect(result).toEqual(['b']);
  });

  it('should work with only 1 condition', () => {
    const input = ['a', 'b', 'c'];
    const isAfterA = (x: string) => x > 'a';
    const result = input.filter(whereAll(isAfterA));
    expect(result).toEqual(['b', 'c']);
  });
});
