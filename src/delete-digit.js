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
function deleteDigit(n) {
  const numAsString = n.toString();
    
  const results = [];
  
  for (let i = 0; i < numAsString.length; i++) {
    const newNumber = numAsString.slice(0, i) + numAsString.slice(i + 1);
    
    results.push(parseInt(newNumber));
  }
  
  return Math.max(...results);
}

module.exports = {
  deleteDigit
};
