# 🧠 Pair Sum

_Find the indices of two unique elements in an array that sum up to a target._

## ✍️ Your Task

1. Read the problem and requirements carefully
2. Write your implementation in `src/main.mjs`
3. Test your solution with `npm run test`

## 📘 Description

You are given an array of numbers and a target sum.  
Your task is to return a tuple containing two **unique indices** whose corresponding elements sum to the given target.

You must return **the indices**, not the elements.

There is **exactly one pair** that adds up to the target.

## 📥 Input

- `numbers`: an array of integers (`2 <= numbers.length <= 10⁵`)
- `target`: an integer representing the target sum

## 📤 Output

- Returns a tuple/array of two indices `[i, j]` such that `numbers[i] + numbers[j] === target` and `i !== j`

## 🛠️ Instructions

1. Open the file `src/main.mjs` and implement the `pair_sum` function.
2. To verify your solution, run the tests in `test/main.test.js` using:

```bash
npm run test
```

✅ Do not modify the test file unless you're adding extra edge cases.

## 💡 Tips

- Try to solve it in **O(n)** time complexity using a single pass.

## 🧪 Run Tests

This repo uses [Vitest](https://vitest.dev/). To run tests locally:

```bash
npm install
npm run test
```

✅ Make sure your implementation is in `src/main.mjs` and your tests in `test/main.test.js`.
