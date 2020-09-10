/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const len = digits.length;
  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  let results = [];
  dfs("", digits);
  return results;
  function dfs(result, digits) {
    if (result.length === len) {
      results.push(result);
    }
    if (!digits.length) {
      return;
    }
    let chars = map[digits[0]];
    for (let char of chars) {
      dfs(result + char, digits.slice(1));
    }
  }
};
/**
 * 输入："23"
 *输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */
