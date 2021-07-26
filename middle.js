
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

module.exports = middle;


