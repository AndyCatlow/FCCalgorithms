// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
  let newArr = arr2.filter((item) => !arr1.includes(item));
  console.log(newArr);
  let anotherArr = arr1.filter((item) => !arr2.includes(item));

  let finalArr = [];

  if (newArr.length > 0) {
    newArr.forEach((item) => finalArr.push(item));
  }
  if (anotherArr.length > 0) {
    anotherArr.forEach((item) => finalArr.push(item));
    console.log(finalArr);
  }
  return finalArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
