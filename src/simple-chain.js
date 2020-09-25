const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    let formattedValue = `( ${value} )`;
    this.chain.push(formattedValue);
    return this;
  },
  removeLink(position) {
    if (!position || !(Number.isInteger(position)) || position > this.chain.length || position < 0) {
      this.chain = []
      throw new Error()
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let resultingChain = this.chain.slice();
    this.chain = [];
    return resultingChain.join("~~");
  }
};

module.exports = chainMaker;
