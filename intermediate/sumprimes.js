// Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

// function sumPrimes(num) {
//   let primes = [];
//   let odd = [];
//   for (let i = 1; i <= num; i++) {
//     if (i === 2) {
//       primes.push(i);
//     } else if (num % i !== 0) {
//       primes.push(i);
//     }
//   }
//   for (let i = 0; i < odd.length; i++) {}
//   return primes;
//   // return primes.reduce((a,b) => {return a + b});
// }

// console.log(sumPrimes(13));

function sumPrimes(num) {
  let primes = [];

  for (let i = 0; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  function isPrime(num) {
    if (num < 2) return false;

    /**
     * An integer is prime if it is not divisible by any prime less than or equal to its square root
     **/

    var q = Math.floor(Math.sqrt(num));

    for (var i = 2; i <= q; i++) {
      if (num % i == 0) {
        return false;
      }
    }

    return true;
  }

  return primes.reduce((a, b) => {
    return a + b;
  });
}

sumPrimes(977);
