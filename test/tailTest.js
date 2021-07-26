const assert = require('chai').assert;
const tail = require('../tail');


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];


describe("#tail", () => {
  it("returns [Lighthouse,labs] for [Yo Yo, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });

  it("returns 3 for words.length", () => {
    assert.strictEqual(words.length, 3);
  });
});
