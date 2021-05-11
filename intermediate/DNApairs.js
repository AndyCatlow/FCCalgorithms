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
