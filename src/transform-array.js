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
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
      case '--discard-next':
        i += 1;
        break;
      case '--discard-prev':
        if (result.length > 0 && arr[i - 2] !== '--discard-next') {
            result.pop();
        }
        break;
      case '--double-next':
        if (i + 1 < arr.length && typeof arr[i + 1] !== 'string') {
            result.push(arr[i + 1], arr[i + 1]);
            i++;
        }
        break;
      case '--double-prev':
        if (result.length > 0 && arr[i - 2] !== '--discard-next') {
            result.push(result[result.length - 1]);
        }
        break;
      default:
        console.log(arr[i]);
        result.push(arr[i]);
        break;
    }
  }

  return result;
}

module.exports = {
  transform
};
