/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) {
    return [];
  }
  let queue = [root],
    level = undefined,
    result = [];
  while (queue.length) {
    level = undefined;
    rest = [];
    while (queue.length) {
      let peek = queue.shift();
      if (peek) {
        if (level === undefined) {
          level = peek.val;
        }
        if (peek.right) {
          rest.push(peek.right);
        }
        if (peek.left) {
          rest.push(peek.left);
        }
      }
    }
    result.push(level);
    queue.push(...rest);
  }
  return result;
};
