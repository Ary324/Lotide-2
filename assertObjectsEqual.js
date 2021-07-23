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


const eqObjects = function(object1, object2) {
  
  let sort1 = Object.keys(object1).sort();
  let sort2 = Object.keys(object2).sort();
 
  if (eqArrays(sort1,sort2)) {
    for (let key in object1) {
      if (Array.isArray(object1[key])) {
        let same = eqArrays(object1[key], object2[key]);
        if (same !== true) {
          return false;
        } else {
          continue;
        }
      }
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🙂🙂🙂Authentication Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🙁🙁🙁Authentication Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);