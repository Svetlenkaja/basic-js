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
  const defaults = {
    repeatTimes: 1,
    separator: '+',
    addition: '',
    additionRepeatTimes: 1,
    additionSeparator: '|'
  };

  const settings = { ...defaults, ...options };

  if (typeof str !== 'string') str = String(str);
  if (settings.addition && typeof settings.addition !== 'string') settings.addition = String(settings.addition);

  let additionStr = '';
  for (let i = 0; i < settings.additionRepeatTimes; i++) {
      additionStr += settings.addition + (i < settings.additionRepeatTimes - 1 ? settings.additionSeparator : '');
  }

  let result = '';
  for (let j = 0; j < settings.repeatTimes; j++) {
      result += str + additionStr + (j < settings.repeatTimes - 1 ? settings.separator : '');
  }

  return result;
}

module.exports = {
  repeater
};
