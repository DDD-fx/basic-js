const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  chain: "",
  returnChain: "",
  linkNum: "",

  getLength() {
    return this.chain.slice(0, -2).split("~~").length
  },
  addLink(value) {
    if (value === undefined) value = "";
    this.linkNum = value;
    this.chain +=`( ${value} )~~`;
    return this
  },
  removeLink(position) {
    if (typeof position !== "number" || position <= 0 || position > parseInt(this.linkNum)) {
      this.chain = "";
      throw new Error ("You can't remove incorrect link!");
    } else{
      this.chain = this.chain.slice(0, -2).split("~~");
      this.chain.splice(position-1, 1);
      this.chain = this.chain.join("~~") + "~~"
    }
    return this
  },
  reverseChain() {
    if (this.chain.length === 0){
      this.chain = "";
    } else {
      this.chain = this.chain.split("~~").reverse().join("~~").slice(2) + "~~";
    }
    return this
  },
  finishChain() {
    this.returnChain = this.chain.slice(0, -2);
    this.chain = "";
    return this.returnChain
  }
};

module.exports = {
  chainMaker
};
