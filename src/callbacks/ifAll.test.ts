import { ifAll } from './ifAll';

const truthyCondition = () => true;
const falsyCondition = () => false;

describe('ifAll', () => {
  it('should not invoke callbacks if no conditions are passed', () => {
    const callback = jest.fn();
    const systemUnderTest = ifAll()(callback);
    systemUnderTest();
    expect(callback).not.toHaveBeenCalled();
  });

  it('should not invoke callbacks if only non-function conditions are passed', () => {
    const callback = jest.fn();
    const systemUnderTest = ifAll(false, null, 0, '', undefined)(callback);
    systemUnderTest();
    expect(callback).not.toHaveBeenCalled();
  });

  it('should ignore non-function conditions and callbacks without exploding', () => {
    const systemUnderTest = ifAll(
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
    const systemUnderTest = ifAll(truthyCondition)(callback);
    systemUnderTest();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should invoke callbacks if multiple truthy conditions are passed', () => {
    const callback = jest.fn();
    const systemUnderTest = ifAll(truthyCondition, truthyCondition)(callback);
    systemUnderTest();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not invoke callbacks if only a single falsy condition is passed', () => {
    const callback = jest.fn();
    const systemUnderTest = ifAll(falsyCondition)(callback);
    systemUnderTest();
    expect(callback).not.toHaveBeenCalled();
  });

  it('should not invoke callbacks if multiple falsy conditions are passed', () => {
    const callback = jest.fn();
    const systemUnderTest = ifAll(
      truthyCondition,
      falsyCondition,
      falsyCondition
    )(callback);
    systemUnderTest();
    expect(callback).not.toHaveBeenCalled();
  });

  it('should pass arguments to all conditions', () => {
    const callback = jest.fn();
    const condition1 = jest.fn(truthyCondition);
    const condition2 = jest.fn(truthyCondition);
    const args = ['arg1', 'arg2'];
    const systemUnderTest = ifAll<typeof args>(
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
    const systemUnderTest = ifAll<typeof args>(truthyCondition)(
      callback1,
      callback2
    );
    systemUnderTest(...args);
    expect(callback1).toHaveBeenCalledWith(...args);
    expect(callback2).toHaveBeenCalledWith(...args);
  });
});
