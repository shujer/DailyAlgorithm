/**
 * @description https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/
 * @param {string} s
 * @param {number} n
 * @return {string}
 */

// 解法一： 切片函数
var reverseLeftWords = function (s, n) {
  let prev = s.substr(0, n);
  let last = s.substr(n);
  return last + prev;
};

// 解法二：重新赋值
// 取余的骚操作
var reverseLeftWords = function (s, n) {
  let result = "";
  for (i = n; i < n + s.length; i++) {
    result += s.charAt(i % s.length);
  }
  return result;
};
