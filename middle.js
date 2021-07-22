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

const middle = function(arr) {
  let arr2 = [];
  let mid = 0;
  //mid represents the index for the middle value/s
  //for the new array called arr2.
  if (arr.length <= 2) {
    return arr2;
  } else {
    if (arr.length % 2 === 0) {
      mid = (arr.length / 2) - 1;
      arr2.push(arr[mid]);
      mid = (arr.length / 2);
      arr2.push(arr[mid]);
      return arr2;
    } else {
      mid = Math.ceil((arr.length / 2) - 1);
      arr2.push(arr[mid]);
      return arr2;
    }
  }
};

console.log(middle([1,6]));
assertArraysEqual(middle([5,3,7]),[3]);
assertArraysEqual(middle([2,8,3,7]),[8,3]);


