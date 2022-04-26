const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let map1 = new Map(),
      map2 = new Map(),
      counter = 0;

  let createMap = function(arr, map){
    return arr.forEach(key => {
      if (map.has(key)){
        map.set(key, map.get(key)+1)
      } else {
        map.set(key, 1)
      }
    })
  }
  createMap([...s1], map1);
  createMap([...s2], map2);

  for (let [key, value] of map1){
    if (map2.has(key)){
      counter += Math.min(value, map2.get(key))
    }
  }
  return counter
}

module.exports = {
  getCommonCharacterCount
};
