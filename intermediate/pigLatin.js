// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  let vowels = /[aeiou]/;
  let pigStr;
  if (str.search(vowels) === -1) {
    pigStr = str + "ay";
    console.log(pigStr);
    return pigStr;
  }
  if (str[0].match(vowels) !== null) {
    pigStr = str + "way";
    console.log(pigStr);
    return pigStr;
  }
  if (str[0].match(vowels) === null) {
    let strArr = str.split("");
    let move = (arr) => {
      if (arr[0].match(vowels) !== null) {
        return (pigStr = arr.join("") + "ay");
      }
      if (arr[0].match(vowels) === null) {
        let mover = arr.shift();
        arr.push(mover);
      }
      move(arr);
    };
    move(strArr);
  }
  console.log(pigStr);
}

translatePigLatin("rhythm");
