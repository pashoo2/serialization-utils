import {stringify} from './utils';

describe('serialization utils', () => {
  it.each(['test value', '1', ''])(
    'Should return string itself for a string value "%s"',
    testValue => {
      const expectedValue = testValue;
      expect(stringify(testValue)).toBe(expectedValue);
    }
  );
  it.each([0, 1, NaN, 1.111, 1e-4])(
    'Should return a number stringified for a numeric value',
    testValue => {
      const expectedValue = String(testValue);
      expect(stringify(testValue)).toBe(expectedValue);
    }
  );
  it('Should stringify object into a string and sort it keys before', () => {
    const testValue = {
      a: 'a',
      c: {
        z: 'z',
        d: 'd',
      },
      b: 'b',
      3: 3,
      1: 1,
    };
    const expectedValue = JSON.stringify({
      a: 'a',
      b: 'b',
      c: {
        d: 'd',
        z: 'z',
      },
      1: 1,
      3: 3,
    });
    expect(stringify(testValue)).toBe(expectedValue);
  });
  it('Should stringify array into a string and stringify nested object', () => {
    const testValue = [
      1,
      {
        a: 'a',
        c: {
          z: 'z',
          d: 'd',
        },
        b: 'b',
        3: 3,
        1: 1,
      },
      0,
      2,
    ];
    const expectedValue = JSON.stringify([
      1,
      {
        a: 'a',
        b: 'b',
        c: {
          d: 'd',
          z: 'z',
        },
        1: 1,
        3: 3,
      },
      0,
      2,
    ]);
    expect(stringify(testValue)).toBe(expectedValue);
  });
});
