const removeFromArray = function() {
  let myArray = arguments[0];
  for (var i = 0; i < myArray.length+1; i++) {
    for (var j = 1; j < arguments.length; j++) {
      if (arguments[j] === myArray[i]) {
        myArray.splice(i, 1);
      }
    }
  }
  return myArray;
};
module.exports = removeFromArray;
