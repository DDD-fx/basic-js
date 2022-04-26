const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(num) {
  let set = new Set(),
      arr = num.toString().split("");

  for (let i=0; i<arr.length; i++){
    let arrCopy = arr.slice();
    arrCopy.splice(i, 1);
    set.add(Number(arrCopy.join("")));
  }
  return Math.max(...Array.from(set))
}


module.exports = {
  deleteDigit
};
