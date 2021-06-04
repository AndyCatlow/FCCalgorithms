// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  if (num < 2) {
    return num;
  }
  let fibArr = fib(num);
  // console.log(fibArr)

  function checkSize(fibNum) {
    return fibNum <= num && fibNum % 2 != 0;
  }

  let fibOdd = fibArr.filter(checkSize);
  // console.log(fibOdd)

  //   return sum(fibOdd);
  // use reduce instead of sum function
  return fibOdd.reduce((a, b) => {
    return a + b;
  });
}

sumFibs(75025);

function fib(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
}

// function sum(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }
