import { ifAny } from './ifAny';

const truthyCondition = () => true;
const falsyCondition = () => false;

describe('ifAny', () => {
  it('should not invoke callbacks if no conditions are passed', () => {
    const callback = jest.fn();
    const systemUnderTest = ifAny()(callback);
    systemUnderTest();
    expect(callback).not.toHaveBeenCalled();
  });

  it('should not invoke callbacks if only non-function conditions are passed', () => {
    const callback = jest.fn();
    const systemUnderTest = ifAny(false, null, 0, '', undefined)(callback);
    systemUnderTest();
    expect(callback).not.toHaveBeenCalled();
  });

  it('should ignore non-function conditions and callbacks without exploding', () => {
    const systemUnderTest = ifAny(
      false,
      null,
      0,
      '',
      undefined,
      // @ts-ignore
      'asdf',
      truthyCondition
    )(
      false,
      null,
      0,
      '',
      undefined,
      // @ts-ignore
      'asdf'
    );
    systemUnderTest();
    // Should not throw an exception
    expect(true).toBe(true);
  });

  it('should invoke callbacks if only a single truthy condition is passed', () => {
    const callback = jest.fn();
    const systemUnderTest = ifAny(truthyCondition)(callback);
    systemUnderTest();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should invoke callbacks if multiple truthy conditions are passed', () => {
    const callback = jest.fn();
    const systemUnderTest = ifAny(truthyCondition, truthyCondition)(callback);
    systemUnderTest();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not invoke callbacks if only a single falsy condition is passed', () => {
    const callback = jest.fn();
    const systemUnderTest = ifAny(falsyCondition)(callback);
    systemUnderTest();
    expect(callback).not.toHaveBeenCalled();
  });

  it('should invoke callbacks if multiple falsy conditions are passed with a truthy condition', () => {
    const callback = jest.fn();
    const systemUnderTest = ifAny(
      falsyCondition,
      truthyCondition,
      falsyCondition
    )(callback);
    systemUnderTest();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should pass arguments to all conditions until a truthy condition is met', () => {
    const callback = jest.fn();
    const condition1 = jest.fn(falsyCondition);
    const condition2 = jest.fn(truthyCondition);
    const args = ['arg1', 'arg2'];
    const systemUnderTest = ifAny<typeof args>(
      condition1,
      condition2
    )(callback);
    systemUnderTest(...args);
    expect(condition1).toHaveBeenCalledWith(...args);
    expect(condition2).toHaveBeenCalledWith(...args);
  });

  it('should pass arguments to all callbacks', () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();
    const args = ['arg1', 'arg2'];
    const systemUnderTest = ifAny<typeof args>(truthyCondition)(
      callback1,
      callback2
    );
    systemUnderTest(...args);
    expect(callback1).toHaveBeenCalledWith(...args);
    expect(callback2).toHaveBeenCalledWith(...args);
  });
});
