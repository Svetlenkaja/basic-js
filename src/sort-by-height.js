const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const cloneArr = [...arr]; 
  const sortedHeights = arr.filter(item => item !== -1).sort((a, b) => a - b);
    
  let sortedIndex = 0;
  for (let i = 0; i < cloneArr.length; i += 1) {
    if (cloneArr[i] !== -1) {
      cloneArr[i] = sortedHeights[sortedIndex++];
    }
  }
  return cloneArr;
}

module.exports = {
  sortByHeight
};
