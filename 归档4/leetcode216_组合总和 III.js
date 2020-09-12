/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let results = [];
  combine([], 0, 1);
  return results;
  function combine(result, sum, next) {
    if (result.length > k || sum > n) {
      return;
    }
    if (sum === n) {
      if (result.length === k) {
        results.push(result);
      }
      return;
    }
    for (let i = next; i <= 9; i++) {
      combine([...result, i], sum + i, i + 1);
    }
  }
};
