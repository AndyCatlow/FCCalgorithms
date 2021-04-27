// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  let strArr = str
    .replace(/_/g, " ")
    .split(/\W+|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
  console.log(strArr);
  return strArr;
}

spinalCase("This Is Spinal Tap");
