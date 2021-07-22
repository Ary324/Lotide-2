const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂🙂🙂Authentication Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙁🙁🙁Authentication Failed: ${actual} !== ${expected}`);
  }
};//not used yet.



const countLetters = function(string) {

  let letters = {};
  let count = 1;

  // removes all the spaces within the string
  let elementString = string.split(' ').join('');
  for (let letter of  elementString) {
    if (letters[letter]) {
      count ++;
    }
    letters[letter] = count;
  }
  return letters;

};

console.log(countLetters("LHL"));