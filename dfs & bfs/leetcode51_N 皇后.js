/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let queens = [];
  dfs([], [], []);
  return queens.map((queen) =>
    queen.map((i) => ".".repeat(i) + "Q" + ".".repeat(n - i - 1))
  );
  function dfs(queen, xy_diff, xy_add) {
    let y = queen.length;
    if (y === n) {
      queens.push(queen);
      return;
    }
    // 关键思路，在每一层检查满足的列
    for (let x = 0; x < n; x++) {
      if (
        queen.indexOf(x) >= 0 ||
        xy_diff.indexOf(x - y) >= 0 ||
        xy_add.indexOf(x + y) >= 0
      ) {
        continue;
      }
      dfs([...queen, x], [...xy_diff, x - y], [...xy_add, x + y]);
    }
  }
};
