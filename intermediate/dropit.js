// Drop it
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {
  let dropArr = [];
  while (!func) {
    console.log("false");
    i++;
  }
  // console.log(arr)
  return arr;
}

dropElements([1, 2, 3], function (n) {
  return n < 3;
});

function dropElements2(arr, func) {
  return arr.slice(arr.find(func) ? arr.indexOf(arr.find(func)) : arr.length);
}

function dropElements3(arr, func) {
  var index = arr.map(func).indexOf(true);
  return index === -1 ? [] : arr.slice(index);
}
