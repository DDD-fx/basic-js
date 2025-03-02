const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let arr = [...str],
      result = [],
      value = 1;

  for (let i=0; i<=arr.length; i++){
    if (arr[i] === arr[i+1]){
      ++value;
    } else if(arr[i] !== arr[i+1] && value > 1){
      result.push(value, arr[i]);
      value = 1;
    } else {
      result.push(arr[i])
    }
  }
  return result.join("")
}

module.exports = {
  encodeLine
};
