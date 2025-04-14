import { it, expect } from 'vitest';

import { pairSum } from './main.mjs';

// Basic test
it('returns indices of elements that sum to the target', () => {
  expect(pairSum([3, 2, 5, 4, 1], 8).sort()).toEqual([1, 2]);
});

// First and last
it('returns indices when first and last elements are the answer', () => {
  expect(pairSum([4, 3, 6, 2, 5], 9).sort()).toEqual([0, 4]);
});

// Duplicates in values but not indices
it('handles repeated numbers correctly', () => {
  expect(pairSum([5, 5, 1], 10).sort()).toEqual([0, 1]);
});

// Negative numbers
it('works with negative numbers', () => {
  expect(pairSum([-4, 5, 10, 3, -2], 1).sort()).toEqual([0, 4]);
});

// Large input with early match
it('returns early match in long array', () => {
  const input = Array(10000).fill(1);
  input[123] = 99;
  input[9876] = 101;
  expect(pairSum(input, 200).sort()).toEqual([123, 9876]);
});
