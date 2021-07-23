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


const takeUntil = function(array, callback) {
  let result = [];
  for (let value of array) {
    let condition = callback(value);
    if (!condition) {
      result.push(value);
    } else {
      break;
    }
  }

  return result;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === 'H');
console.log(results2);

console.log('---');

const data3 = [3,4,1,8,10];
const results3 = assertArraysEqual(takeUntil(data1, x => x > 4),data3);
console.log(results3);

console.log('---');

const data4 = ["I", "like", "to", "eat!"];
const results4 = assertArraysEqual(takeUntil(data2, x => x === '!'),data4);
console.log(results4);