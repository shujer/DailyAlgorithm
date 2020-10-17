/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let results = [];
  _combine([], 1);
  return results;
  function _combine(result, count) {
    if (result.length === k) {
      results.push(result);
      return;
    }
    // 这里关键是，保证从小到大排序，和 39 题比较，可以选择自身和不可以选择
    for (let i = count; i <= n; i++) {
      _combine([...result, i], i + 1);
    }
  }
};
