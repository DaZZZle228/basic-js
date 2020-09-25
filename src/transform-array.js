const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  let resultingArray = [];
  if (!array.length) {
    return [];
  }
  if (!Array.isArray(array)) {
    throw new Error("It's not array!")
  }

  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "--discard-next": {
          i++;
        break;
      }
      case "--discard-prev": {
        if (array[i - 2] !== "--discard-next" && i !== 0) {
          resultingArray.pop();
        }
        break;
      }
      case "--double-next": {
        if (i < array.length - 1) {
          resultingArray.push(array[i + 1]);
        }
        break;
      }
      case "--double-prev": {
        if (array[i - 2] !== "--discard-next" && i !== 0) {
          resultingArray.push(array[i - 1]);
        }
        break;
      }
      default: {
        if (array[i] !== undefined) {
          resultingArray.push(array[i]);
        }
        break;
      }
    }
  }
  return resultingArray;
}