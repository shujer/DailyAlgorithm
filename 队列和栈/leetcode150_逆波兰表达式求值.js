/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  let i = 0;
  while (i < tokens.length) {
    switch (tokens[i]) {
      case "+":
        stack.push(stack.pop() + stack.pop());
        break;
      case "-":
        stack.push(-stack.pop() + stack.pop());
        break;
      case "*":
        stack.push(stack.pop() * stack.pop());
        break;
      case "/":
        stack.push(~~((1 / stack.pop()) * stack.pop()));
        break;
      default:
        stack.push(+tokens[i]);
        break;
    }
    i++;
  }
  return stack.reduce((acc, cur) => acc + cur, 0);
};
// @lc code=end
