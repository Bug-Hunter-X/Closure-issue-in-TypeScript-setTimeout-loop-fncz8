function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    // Use an immediately invoked function expression (IIFE) to create a new scope for each iteration.
    (function (j) {
      setTimeout(() => {
        console.log(j);
      }, j * 1000);
    })(i);
  }
}

printNumbers2(10); // Prints 1 to 10 correctly

//Alternatively, using let in the loop ensures that each iteration has its own copy of i.
function printNumbers3(n: number): void {
  for (let i = 1; i <= n; i++) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
  }
}

printNumbers3(10); // Prints 1 to 10 correctly