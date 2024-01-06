// @ts-ignore
import { expect, test } from 'vitest';
import filterLimit from './index';

const input = [1, 2, '3', 4, '5', 6, '7', '8', 9];

test('filters and limits the array based on the predicate', () => {
  const result = filterLimit(input, 3, (value): value is number => {
    return typeof value === 'number';
  });
  expect(result).toStrictEqual([1, 2, 4]);
});

test('handles end edge values properly', () => {
  const result = filterLimit(input, 2, (value) => typeof value === 'number' && value >= 9);
  expect(result).toStrictEqual([9]);
});

test('returns an empty array when limit is 0', () => {
  const result = filterLimit(input, 0, () => true);
  expect(result).toStrictEqual([]);
});

test('returns an empty array when limit < 0', () => {
  const result = filterLimit(input, -5, () => true);
  expect(result).toStrictEqual([]);
});

test('handles an empty array', () => {
  const emptyArray: number[] = [];
  const result = filterLimit(emptyArray, 2, () => true);
  expect(result).toStrictEqual([]);
});

test('uses thisArg when calling a predicate', () => {
  const LIMIT = 4;
  const result = filterLimit(
    input,
    LIMIT,
    function () {
      return this === 'test';
    },
    'test',
  );

  expect(result).toStrictEqual(input.slice(0, LIMIT));
});

test('passes index to predicate', () => {
  const result = filterLimit(input, 2, (_, index) => index === 2 || index === 3);
  expect(result).toStrictEqual(['3', 4]);
});

test('passes input array to predicate', () => {
  const LIMIT = 3;
  const result = filterLimit(input, LIMIT, (value, index, array) => {
    return array[index] === value;
  });
  expect(result).toStrictEqual(input.slice(0, LIMIT));
});
