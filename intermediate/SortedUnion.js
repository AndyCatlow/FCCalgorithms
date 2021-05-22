// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

function uniteUnique(arr) {
  let input = Array.from(arguments);
  console.log(input);
  let unique = [];
  let dupes = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (unique.includes(input[i][j])) {
        dupes.push(input[i][j]);
      } else {
        unique.push(input[i][j]);
      }
    }
  }
  console.log(unique);

  return unique;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//          spread arguments        spread new array from Set function
const uniteUnique = (...arr) => [...new Set(arr.flat())];
// Set returns an object of unique values. It checks for uniqueness before passing each value on on.
