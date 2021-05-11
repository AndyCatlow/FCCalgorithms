// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  let strArr = str.split("");
  let pairs = [];
  console.log(strArr);
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "A") {
      pairs.push(["A", "T"]);
    }
    if (strArr[i] === "T") {
      pairs.push(["T", "A"]);
    }
    if (strArr[i] === "G") {
      pairs.push(["G", "C"]);
    }
    if (strArr[i] === "C") {
      pairs.push(["C", "G"]);
    }
  }
  console.log(pairs);
  return pairs;
}

pairElement("GCG");

function pairElement(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map((x) => [x, pairs[x]]);
}

//test here
pairElement("GCG");

// drguildo
// Dec '16
function pairElement(str) {
  var pairs = {
    A: ["A", "T"],
    T: ["T", "A"],
    C: ["C", "G"],
    G: ["G", "C"],
  };

  return str.split("").map(function (elem) {
    return pairs[elem];
  });
}
