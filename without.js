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





const without = function(content, takeOut) {
  let newArr = content;
  for (let i = 0; i < content.length; i++) {
    for (let j = 0; j < takeOut.length; j++) {
      if (takeOut[j] === content[i]) {
        newArr.splice(i, 1);
      }
    }
  }
  console.log(newArr);
  return newArr;
};


console.log(assertArraysEqual([1, 3, 3], [4, 2, 6]));
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);