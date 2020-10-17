/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false;
  let stack = [];
  let map = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  for (let c of s) {
    if (map.has(c)) {
      stack.push(c);
    } else {
      if (!stack.length || c !== map.get(stack.pop())) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
