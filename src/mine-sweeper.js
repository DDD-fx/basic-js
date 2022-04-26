const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let arr = JSON.parse(JSON.stringify(matrix));       //глубокое копирование массива для изменения, чтобы исходный не изменился

  arr.map(el => {
    for (let i=0; i<el.length; i++){
      el[i] = 0;
    }
  });

  for (let i=0; i<matrix.length; i++){
    for (let j=0; j<matrix[i].length; j++){
      if (j>0 && matrix[i][j-1] === true){
        arr[i][j] +=1;
      }
      if (matrix[i][j+1] && matrix[i][j+1] === true){
        arr[i][j] +=1;
      }
      if (i>0 && j>0 && matrix[i-1][j-1] === true){
        arr[i][j] +=1;
      }
      if (i>0 && matrix[i-1][j] === true){
        arr[i][j] +=1
      }
      if (i>0 && matrix[i-1][j+1] === true){
        arr[i][j] +=1
      }
      if (i+1<matrix.length && matrix[i+1][j-1] === true){
        arr[i][j] +=1
      }
      if (i+1<matrix.length && matrix[i+1][j] === true){
        arr[i][j] +=1
      }
      if (i+1<matrix.length && matrix[i+1][j+1] === true){
        arr[i][j] +=1
      }
    }
  }
  return arr
}

module.exports = {
  minesweeper
};
