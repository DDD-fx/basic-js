const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  if (!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let result = JSON.parse(JSON.stringify(arr));

  for (let i=0; i<=result.length; i++){
    if (i === 0 && (result[i] === "--discard-prev" || result[i] === "--double-prev")){
      result.splice(i, 1);
      //If there is no element next to the control sequence to which it can be applied in
      // the initial array, or this element was !!!previously deleted, it does nothing.
    } else if (arr[i] === "--discard-next" && (result[i] === "--double-prev" || result[i] === "--discard-prev")){
      result.splice(i, 1);
    } else if (i === arr.length-1 && result[i] === "--double-next"){
      result.splice(i, 1);
    } else {
      switch (result[i]){
        case("--discard-next"):
          result.splice(i, 2);
          i = i-1;
          break;
        case("--discard-prev"):
          result.splice(i-1, 2);
          i = i-1;
          break;
        case("--double-prev"):
          result.splice(i, 1, result[i-1]);
          break;
        case("--double-next"):
          result.splice(i, 1, result[i+1]);
          break;
      }
    }
  }
  return result
}

module.exports = {
  transform
};
