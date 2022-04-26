const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  if (domains == 0) return {};

  let map = new Map();
  let arr = domains.map( el => el.split(".").reverse() );

  arr.map(el => {
    for (let i=0; i<el.length; i++){
      el[i] = "." + el[i];
      if (i>0){
        el[i] = el[i-1] + el[i]
      }
    }
  })
  arr = arr.flat()

  arr.forEach(key => {
    if (map.has(key)){
      map.set(key, map.get(key) + 1)
    } else {
      map.set(key, 1)
    }
  })
  return Object.fromEntries(map)
}


module.exports = {
  getDNSStats
};
