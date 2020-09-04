/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  const MAX_Y = matrix.length;
  const MAX_X = matrix[0].length;
  const isReachable = (point) => {
    /**
     * 坑！这里当时我用了 && 操作符，结果计算超时
     * 在判断条件时应该考虑到计算优化，用 || 操作符，第一个条件不满足即可得到答案
     */
    return !(
      point[0] < 0 ||
      point[0] >= MAX_X ||
      point[1] < 0 ||
      point[1] >= MAX_Y
    );
  };
  let queue = [],
    distance = 0;
  function bfs(point) {
    if (matrix[point[1]][point[0]] === 0) {
      return 0;
    }
    queue = [point];
    distance = 0;
    outer: while (queue.length) {
      let rest = [];
      while (queue.length) {
        let peek = queue.shift();
        let x = peek[0];
        let y = peek[1];
        if (matrix[y][x] === 0) {
          break outer;
        }
        if (isReachable([x - 1, y])) {
          rest.push([x - 1, y]);
        }
        if (isReachable([x, y - 1])) {
          rest.push([x, y - 1]);
        }
        if (isReachable([x + 1, y])) {
          rest.push([x + 1, y]);
        }
        if (isReachable([x, y + 1])) {
          rest.push([x, y + 1]);
        }
      }
      distance++;
      queue.push(...rest);
    }
    return distance;
  }
  return matrix.map((row, y) => row.map((col, x) => bfs([x, y])));
};
