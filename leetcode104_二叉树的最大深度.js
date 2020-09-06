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
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let maxDepth = 1;
  dfs(root, 1);
  return maxDepth;
  function dfs(root, level) {
    if (!root) {
      return;
    }
    if (level > maxDepth) {
      maxDepth = level;
    }
    dfs(root.left, level + 1);
    dfs(root.right, level + 1);
  }
};

// 方法二：分治
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
