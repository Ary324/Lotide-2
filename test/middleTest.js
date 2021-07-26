const assert = require('chai').assert;
// const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

describe("#middle", () => {
  it("returns empty string for [1,6]", () => {
    assert.deepEqual(middle([1,6]), "");
  });
  
  it("returns 3 for [5,3,7]", () => {
    assert.deepEqual(middle([5,3,7]),[3]);
  });

  it("returns [8,3] for [2,8,3,7]", () => {
    assert.deepEqual(middle([2,8,3,7]),[8,3]);
  });
});


