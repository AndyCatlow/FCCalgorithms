// Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  let missing;
  for (let i = 0; i < str.length - 1; i++) {
    // get unicode value of character, compare to next in list

    if (str.charCodeAt(i + 1) !== str.charCodeAt(i) + 1) {
      // return the missing unicode
      missing = str.charCodeAt(i) + 1;
    }
  }
  // convert the unicode back to a letter
  let missingChar = String.fromCharCode(missing);

  return missingChar;
}

fearNotLetter("abce");
