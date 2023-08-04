import { sumNumbers } from '../src/index';

describe('testing index file', () => {
  test('empty string should result in zero', () => {
    expect(sumNumbers('')).toBe(0);
  });

  test('sum integers ', () => {
    expect(sumNumbers('2, 2')).toBe(4);
  });

  test('only sum numbers smaller than 1000', () => {
    expect(sumNumbers('1001, 1004, 1000, 1')).toBe(1001);
  });

  test('sum with decimals ignores decimal part', () => {
    expect(sumNumbers('2.4, 2.5')).toBe(4);
  });

  test('sum negative numbers throws error ', () => {
    expect(() => sumNumbers('2, -2')).toThrow(RangeError);
  });

  test('ignore not numeric elements ', () => {
    expect(sumNumbers('2, a, #,1, &, , ')).toBe(3);
  });
});
