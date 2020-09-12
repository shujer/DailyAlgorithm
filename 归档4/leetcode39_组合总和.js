/**
 * 经典的搜索问题，选择放或者不放
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let results = [];
  candidates = candidates.sort((a, b) => a - b);
  _combine([], target, 0);
  return results;
  function _combine(result, rest, next) {
    if (rest === 0) {
      results.push(result);
      return true;
    } else if (rest < 0) {
      return false;
    }
    for (let i = next; i < candidates.length; i++) {
      _combine([...result, candidates[i]], rest - candidates[i], i);
    }
  }
};
