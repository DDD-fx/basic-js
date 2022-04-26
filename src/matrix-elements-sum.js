const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let arr = [].concat(matrix[0]);                     //[0, 1, 1, 2]

  for (let i=1; i<matrix.length; i++){                        //i - row number; j - column number
    for (let j=0; j<matrix[i].length; j++){
      if (matrix[i][j] + matrix[i-1][j] !== matrix[i][j]){            //if current el[i] + upper el[i] === current el[i] => upper el[i]===0 => no push
        arr.push(matrix[i][j])
      }
    }
  }
  return arr.reduce((sum, cur) => sum+cur)
}

module.exports = {
  getMatrixElementsSum
};
