function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(10); // Works fine

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

printNumbers2(10); // Prints 11 11 11 11 11 11 11 11 11 11 instead of 1 to 10