/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let results = [];
  gen(0, 0, n, "");
  return results;
  function gen(left_used, right_used, n, result) {
    if (left_used === n && right_used === n) {
      results.push(result);
    }
    if (left_used < n) {
      gen(left_used + 1, right_used, n, result + "(");
    }
    if (left_used > right_used && right_used < n) {
      gen(left_used, right_used + 1, n, result + ")");
    }
  }
};
