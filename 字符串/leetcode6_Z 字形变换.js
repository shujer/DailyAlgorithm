/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
/**
 * 方法一：按行排序
 * 思路：通过从左向右迭代字符串，我们可以轻松地确定字符位于 Z 字形图案中的哪一行。
 * 算法：从左到右迭代 ss，将每个字符添加到合适的行。可以使用当前行和当前方向这两个变量对合适的行进行跟踪。
 * 只有当我们向上移动到最上面的行或向下移动到最下面的行时，当前方向才会发生改变。
 * 作者：LeetCode
 * 链接：https://leetcode-cn.com/problems/zigzag-conversion/solution/z-zi-xing-bian-huan-by-leetcode/
 */
var convert = function (s, numRows) {
  if (numRows === 0 || !s) {
    return s;
  }
  let curRow = 0;
  let goDown = false;
  let rows = [];
  for (let c of s) {
    if (!rows[curRow]) {
      rows.push("");
    }
    rows[curRow] += c;
    if (curRow === 0 || curRow === numRows - 1) goDown = !goDown;
    curRow += goDown ? 1 : -1;
  }
  return rows.join("");
};
