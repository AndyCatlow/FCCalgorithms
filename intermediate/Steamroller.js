// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  let flattened = [].concat(...arr);
  let flattened2 = [].concat(...flattened);
  let flattened3 = [].concat(...flattened2);
  return flattened3;
}

steamrollArray([1, [2], [3, [[4]]]]);
