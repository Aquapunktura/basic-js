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
  let result = matrix.map((row) => row.map(() => 0));
  const rows = matrix.length;
  const cols = matrix[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      for (let iOffset = -1; iOffset <= 1; iOffset++) {
        for (let jOffset = -1; jOffset <= 1; jOffset++) {
          if (iOffset === 0 && jOffset === 0) continue;
          const iNeighbor = i + iOffset;
          const jNeighbor = j + jOffset;
          if (iNeighbor >= 0 && iNeighbor < rows && jNeighbor >= 0 && jNeighbor < cols) {
            if (matrix[iNeighbor][jNeighbor]) {
              result[i][j]++;
            }
          }
        }
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
