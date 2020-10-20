/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let lastOp = "+";
  let num = 0;
  let vals = [];
  for (let i = 0; i <= s.length; i++) {
    if (s[i] === " ") continue;
    if (s[i] >= 0 && s[i] <= 9) {
      num = num * 10 + parseInt(s[i]);
      continue;
    }
    if (lastOp === "+") {
      vals.push(num);
    } else if (lastOp === "-") {
      vals.push(-num);
    } else if (lastOp === "*") {
      vals.push(vals.pop() * num);
    } else if (lastOp === "/") {
      vals.push(~~(vals.pop() / num));
    }
    lastOp = s[i];
    num = 0;
  }
  return vals.reduce((sum, n) => sum + n, 0);
};
calculate("3+2*2");
