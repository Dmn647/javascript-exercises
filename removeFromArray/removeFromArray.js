const removeFromArray = function(...args) {
  let myArray = args[0];
  let newArray = [];
  myArray.forEach(item => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};
module.exports = removeFromArray;
