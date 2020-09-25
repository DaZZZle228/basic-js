const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let catsCounter = 0;
  array.forEach(array => array.forEach(
      arrayItem => {
        if (arrayItem === "^^") {
          catsCounter += 1;
        }
      }));
  return catsCounter;
};
