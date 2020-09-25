const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(array, currentDepth = 1, maxFindDepth = 1) {
    maxFindDepth = Math.max(maxFindDepth, currentDepth);
    array.forEach(item => {
      if (Array.isArray(item)) {
        maxFindDepth = Math.max(maxFindDepth, this.calculateDepth(item, currentDepth + 1, maxFindDepth));
      }
    });
    return maxFindDepth;
  }
};