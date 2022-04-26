const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
let subarr = (arr) => arr.some(el => Array.isArray(el))

class DepthCalculator {

  calculateDepth(arr) {
    let depth = 1;

    if (subarr(arr)){
      let newArr = arr.flat();
      return depth + this.calculateDepth(newArr)
    }
    return depth
  }
}

module.exports = {
  DepthCalculator
};
