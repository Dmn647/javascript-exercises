const reverseString = function(strng) {
  let result = "";
  for (let i = strng.length - 1; i >= 0; i--) {
    result += strng[i];
  }
  return result;
};

module.exports = reverseString;
