const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let catCount = 0;
    
  for (let i = 0; i < matrix.length; i += 1) {
    const row = matrix[i];
    
    for (let j = 0; j < row.length; j += 1) {
      if (row[j] === '^^') {
        catCount += 1;
      }
    }
  }
    return catCount;
}

module.exports = {
  countCats
};
