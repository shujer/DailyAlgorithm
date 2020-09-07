/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }
  let queue = [root],
    isLeft = true,
    level = [],
    rest = [],
    result = [];
  while (queue.length) {
    level = [];
    rest = [];
    while (queue.length) {
      let peek = queue.shift();
      if (peek) {
        level.push(peek.val);
        if (peek.left) {
          rest.push(peek.left);
        }
        if (peek.right) {
          rest.push(peek.right);
        }
      }
    }
    if (isLeft) {
      result.push(level);
    } else {
      result.push(level.reverse());
    }
    isLeft = !isLeft;
    queue.push(...rest);
  }
  return result;
};
