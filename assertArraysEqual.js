const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1,arr2) === true) {
    console.log(`🙂🙂🙂Authentication Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🙁🙁🙁Authentication Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;