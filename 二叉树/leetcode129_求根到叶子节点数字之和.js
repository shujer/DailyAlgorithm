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
var sumNumbers = function (root) {
  return dfs(root, 0);
  function dfs(root, num) {
    if (!root) {
      return 0;
    }
    let val = num * 10 + root.val;
    if (!root.left && !root.right) {
      return val;
    }
    return dfs(root.left, val) + dfs(root.right, val);
  }
};
