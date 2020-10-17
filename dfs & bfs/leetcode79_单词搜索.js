/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (!board.length || !word) {
    return false;
  }
  const max_y = board.length;
  const max_x = board[0].length;
  let visited = Array(max_y)
    .fill(0)
    .map((_) => Array(max_x).fill(false));
  for (let y = 0; y < max_y; y++) {
    for (let x = 0; x < max_x; x++) {
      if (board[y][x] === word[0]) {
        // 多源 dfs
        let isExist = search("", [x, y], visited);
        if (isExist) {
          return true;
        }
      }
    }
  }
  return false;
  function search(str, point, visited) {
    if (str === word) {
      return true;
    }
    let [x, y] = point;
    if (x < 0 || x >= max_x || y < 0 || y >= max_y || visited[y][x] === true) {
      return false;
    }
    let step = board[y][x];
    if (step !== word[str.length]) {
      return false;
    }
    visited[y][x] = true;
    let isExist =
      search(str + step, [x - 1, y], visited) ||
      search(str + step, [x, y - 1], visited) ||
      search(str + step, [x + 1, y], visited) ||
      search(str + step, [x, y + 1], visited);
    //关键步骤，失败回溯
    visited[y][x] = isExist;
    return isExist;
  }
};
