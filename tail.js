const tail = function(arr) {
  if (arr.length === 0) {
    return arr;
  } else if (arr.length === 1) {
    return "";
  } else {
    let updatedArray = arr.splice(0,1);
    return updatedArray;
  }
};

module.exports = tail;
