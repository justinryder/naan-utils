import { callAll } from './callAll';

describe('callAll', () => {
  it('should invoke all callbacks with the same arguments', () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();
    const args = ['arg1', 'arg2'];
    const systemUnderTest = callAll(callback1, callback2);
    systemUnderTest(...args);
    expect(callback1).toHaveBeenCalledWith(...args);
    expect(callback2).toHaveBeenCalledWith(...args);
  });

  it('should ignore non-function callbacks without exploding', () => {
    const callback = jest.fn();
    const systemUnderTest = callAll(
      null,
      undefined,
      0,
      false,
      '',
      'asdf',
      callback
    );
    systemUnderTest();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
