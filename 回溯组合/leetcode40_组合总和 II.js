/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let results = [];
  candidates = candidates.sort((a, b) => a - b);
  _combine([], 0, 0);
  return results;
  function _combine(result, sum, next) {
    if (sum === target) {
      results.push(result);
      return true;
    } else if (sum > target) {
      return false;
    }
    for (let i = next; i < candidates.length; i++) {
      //这里的关键是，怎样避免重复
      //往下每一层递归这种，相同的 candidate（结果数组中的位置） 只需要处理一次（candidates 中存在重复数字，可选）
      if (i > next && candidates[i] === candidates[i - 1]) continue;
      _combine([...result, candidates[i]], sum + candidates[i], i + 1);
    }
  }
};
/**
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8,
所求解集为:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
 */
