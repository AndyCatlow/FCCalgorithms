// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  if (num === 0) {
    return (num = 0);
  } else {
    let fibnums = [1];

    // put fibnums into array up to value of num
    for (i = 1; i < num; i++) {
      // filter out even numbers

      //  sum remaining fibnums

      return num;
    }
  }
}

sumFibs(4);

function fib(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  console.log(arr);
  arr.filter();
}
fib(5);
