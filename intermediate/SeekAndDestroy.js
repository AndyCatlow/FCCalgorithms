// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

function destroyer(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arguments.length; j++) {
      if (arr[i] === arguments[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter((item) => item !== null);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
