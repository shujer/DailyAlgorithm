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

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
  let nodes = [];
  return dfs(root, 0);
  function dfs(root, level) {
    if (!root) return true;
    if (level % 2 === 0) {
      // 偶数-奇-递减
      if (root.val % 2 === 0 || (nodes[level] && nodes[level] >= root.val)) {
        return false;
      }
    } else {
      // 奇数-偶-递增
      if (root.val % 2 === 1 || (nodes[level] && nodes[level] <= root.val)) {
        return false;
      }
    }
    nodes[level] = root.val;
    return dfs(root.left, level + 1) && dfs(root.right, level + 1);
  }
};
