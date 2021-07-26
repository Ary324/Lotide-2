const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log(middle([1,6]));
assertArraysEqual(middle([5,3,7]),[3]);
assertArraysEqual(middle([2,8,3,7]),[8,3]);


