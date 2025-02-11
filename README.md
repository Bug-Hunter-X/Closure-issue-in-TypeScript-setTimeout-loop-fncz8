# TypeScript setTimeout Loop Closure Issue

This repository demonstrates a common issue encountered when using `setTimeout` within a loop in TypeScript (and JavaScript).

The problem arises because of how closures work in JavaScript.  The `setTimeout` callback function doesn't capture the value of `i` at the time of its creation; instead, it captures a reference to `i`. By the time the `setTimeout` callbacks finally execute, the loop has already completed, and `i` holds its final value.

The `bug.ts` file shows the problematic code, and `bugSolution.ts` provides a solution.

## How to Reproduce

1. Clone this repository.
2. Run `tsc bug.ts` to compile the TypeScript code.
3. Run `node bug.js` to see the unexpected output.
4. Run `tsc bugSolution.ts` to compile the corrected code.
5. Run `node bugSolution.js` to see the correct output.

## Solutions

The solution involves creating a new scope for each iteration of the loop, ensuring that each callback function captures its own unique value of `i`.