/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) {
    return [];
  }
  let queue = [root];
  let result = [],
    level = [],
    tmp = [];
  while (queue.length) {
    level = [];
    tmp = [];
    while (queue.length) {
      let peek = queue.shift();
      if (peek) {
        level.push(peek.val);
        if (peek.left) {
          tmp.push(peek.left);
        }
        if (peek.right) {
          tmp.push(peek.right);
        }
      }
    }
    result.unshift(level);
    queue.push(...tmp);
  }
  return result;
};
