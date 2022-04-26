const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  if (typeof str !== "string"){
    str += ""
  }
  if (options.addition && typeof options.addition !== "string") {
    options.addition += ""
  } else if (options.addition === null || options.addition === false) {
    options.addition += ""
  }
  if (options.repeatTimes && !options.separator) {
    options.separator = "+"
  }
  if (options.additionRepeatTimes && !options.additionSeparator) {
    options.additionSeparator = "|"
  }

  let arr = [];
  let subarr = [];
  if (options.additionRepeatTimes && options.addition){
    for (let i=1; i<=options.additionRepeatTimes; i++){
      subarr.push(options.addition, options.additionSeparator)
    }
    subarr.pop()                //delete last separator
  } else if (options.addition){
    subarr.push(options.addition)
  }
  subarr = subarr.join("");

  if (options.repeatTimes){
    for (let i=1; i<=options.repeatTimes; i++){
      arr.push(str, subarr, options.separator)
    }
    arr.pop()
  } else{
    arr.push(str, options.addition)
  }
  return arr.join("")
}

module.exports = {
  repeater
};
