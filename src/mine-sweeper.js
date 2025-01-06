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
  const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

  const rows = matrix.length;
  const cols = matrix[0].length;
  const grid = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let x = 0; x < rows; x += 1) {
    for (let y = 0; y < cols; y += 1) {
      if (matrix[x][y]) {
        for (const [dx, dy] of directions) {
          const nx = x + dx;
          const ny = y + dy;
  
          if (nx >= 0 && nx < grid.length && ny >= 0 && ny < grid[0].length) {
            grid[nx][ny]++;
          }
        }
      }
    }
  }

  return grid;
}

module.exports = {
  minesweeper
};
