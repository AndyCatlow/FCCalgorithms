// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  let strArr = str.split(/^([a-b])([A-Z])/);
  // let spinal = str.replace(/([A-Z])/g, "-").toLowerCase();
  console.log(strArr);
}

spinalCase("This Is Spinal Tap");
