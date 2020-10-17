/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
  if (!root) {
    return true;
  }
  let queue = [root];
  let sign = 1;
  while (queue.length) {
    let level = [];
    let val = undefined;
    while (queue.length) {
      let node = queue.shift();
      if (node.val % 2 !== sign) {
        return false;
      }
      if (val && sign === 0 && val <= node.val) {
        return false;
      }
      if (val && sign === 1 && val >= node.val) {
        return false;
      }
      val = node.val;
      if (node.left) {
        level.push(node.left);
      }
      if (node.right) {
        level.push(node.right);
      }
    }
    queue.push(...level);
    sign = 1 - sign;
  }
  return true;
};
