const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂🙂🙂Authentication Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙁🙁🙁Authentication Failed: ${actual} !== ${expected}`);
  }
};

 


const countOnly = function(allItems, itemsToCount) {
  
  let output = {};

  for (let key in itemsToCount) {
  
    if (itemsToCount[key] === true) {
      let count = 0;
      for (let item of allItems) {
        if (item === key) {
          count++;
        }
      }
      output[key] = count;
    }
  }

  return output;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);