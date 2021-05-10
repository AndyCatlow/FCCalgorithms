function myReplace(str, before, after) {
  let result = str.search(before);
  console.log(result);
  console.log(str[result]);
  if (str[result].match(/[A-Z]/)) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    console.log("lower");
  }
  console.log(after);
  str.replace(before, after);
  console.log(str);
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
