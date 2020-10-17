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
var levelOrder = function (root) {
  if (!root) return [];
  let result = [];
  dfs(root, 0);
  return result;
  /**
   * 栈和队列只是实现 dfs 和 bfs 的一种解题思路
   * 并不是说 bfs 就不能用递归实现，用递归写法也可以更简洁
   */
  function dfs(node, level) {
    if (!node) return;
    if (result.length < level + 1) {
      result.push([]);
    }
    result[level].push(node.val);
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }
};
