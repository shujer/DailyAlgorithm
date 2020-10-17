/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let strs = path.split("/");
  let stack = [];
  for (let i = 0; i < strs.length; i++) {
    if (strs[i] === "..") {
      stack.length && stack.pop();
    } else if (strs[i] !== "." && strs[i]) {
      stack.push(strs[i]);
    }
  }
  return "/".concat(stack.join("/"));
};
