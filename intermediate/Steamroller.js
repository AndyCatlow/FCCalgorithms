// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

// function steamrollArray1(arr) {
//   let flattened = [].concat(...arr);
//   let flattened2 = [].concat(...flattened);
//   let flattened3 = [].concat(...flattened2);
//   return flattened3;
// }
// does not flatten more then one level deep
// function steamrollArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let flattened = [];
//     if (Array.isArray(arr[i])) {
//       flattened = flattened.concat(...arr);
//       console.log(flattened);
//     }
//   }
// }

const steamrollArray = (arr) => {
  let flattened = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flattened.push(...steamrollArray(element));
    } else {
      flattened.push(element);
    }
  });
  return flattened;
};

steamrollArray([1, [2], [3, [[4]]]]);
