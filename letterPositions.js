const eqArrays = function(arr1,arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1,arr2) === true) {
    console.log(`🙂🙂🙂Authentication Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🙁🙁🙁Authentication Failed: ${arr1} !== ${arr2}`);
  }
};

const arrayStorage = function(string,key) {
  let arr = [];
  let index = 0;
  for (let letter of string) {
    if (letter === key) {
      arr.push(index);
    }
    index++;
  }
  return arr;
};

const letterPositions = function(sentence) {
  const results = {};
  let elementString = sentence.split(' ').join('');
  for (let letter of elementString) {
    if (results[letter]) {
      continue;
    }
    results[letter] = arrayStorage(elementString, letter);
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);