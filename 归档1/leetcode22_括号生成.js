/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let results = [];
  gen(0, 0, n, "");
  return results;
  function gen(left, right, n, result) {
    if (left === n && right === n) {
      results.push(result);
    }
    if (left < n) {
      gen(left + 1, right, n, result + "(");
    }
    if (left > right && right < n) {
      gen(left, right + 1, n, result + ")");
    }
  }
};
