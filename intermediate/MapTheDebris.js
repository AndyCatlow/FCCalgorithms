// Map the Debris
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on Wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

// function orbitalPeriod(arr) {
//     const GM = 398600.4418;
//     const earthRadius = 6367.4447;
//     return arr;
//   }

//   orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

// function orbitalPeriod(arr) {
//   const GM = 398600.4418;
//   const earthRadius = 6367.4447;
//   const a = arr[0].avgAlt;

//   let t = Math.round(
//     2 * Math.PI * Math.sqrt(Math.pow(a + earthRadius, 3) / GM)
//   );

//   let opArr = [{ name: arr[0].name, orbitalPeriod: t }];

//   return opArr;
// }

// orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  let opArr = arr.map((item) => {
    let a = item.avgAlt;
    let t = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(a + earthRadius, 3) / GM)
    );
    return { name: item.name, orbitalPeriod: t };
  });

  console.log(opArr);
  return opArr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
