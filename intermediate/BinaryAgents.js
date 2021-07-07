// Binary Agents
// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

// function binaryAgent(str) {
//   let binaryArray = str.split(" ");

//   let charArray = binaryArray.map((bin) =>
//     String.fromCharCode(parseInt(bin, 2))
//   );

//   console.log(charArray.join(""));
//   return str;
// }

function binaryAgent(str) {
  return str
    .split(" ")
    .map((bin) => String.fromCharCode(parseInt(bin, 2)))
    .join("");
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
