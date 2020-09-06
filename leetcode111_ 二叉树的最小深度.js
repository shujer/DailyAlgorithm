/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  let queue = [root],
    level = 1;
  outer: while (queue.length) {
    let rest = [];
    while (queue.length) {
      let peek = queue.shift();
      if (!peek.left && !peek.right) {
        break outer;
      }
      if (peek.left) {
        rest.push(peek.left);
      }
      if (peek.right) {
        rest.push(peek.right);
      }
    }
    queue.push(...rest);
    level++;
  }
  return level;
};

// 方法二：分治，注意这里是如何进行剪枝的
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  if (!root.left) return 1 + minDepth(root.right);
  if (!root.right) return 1 + minDepth(root.left);
  return 1 + Math.min(minDepth(root.right), minDepth(root.left));
};
