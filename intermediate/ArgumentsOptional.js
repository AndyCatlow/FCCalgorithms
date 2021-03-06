// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

// function addTogether() {
//   let args = Array.from(arguments);
//   let sum = args.reduce((a, b) => {
//     return a + b;
//   });
//   console.log(sum);
// }

// addTogether(2, 3);

// function addTogether() {
//   return Array.from(arguments).reduce((a, b) => {
//     return a + b;
//   });
// }

// function addTogether() {
//   if (typeof arguments[0] === "number" && typeof arguments[1] === "number") {
//     return arguments[0] + arguments[1];
//   } else {
//     return undefined;
//   }
// }

// addTogether(2, 4);

function addTogether(a, b) {
  if (Number.isFinite(a)) {
    if (!b) {
      return function (c) {
        if (Number.isFinite(c)) {
          return a + c;
        }
      };
    } else if (Number.isFinite(b)) {
      return a + b;
    }
  }
}

addTogether(2, 3);
