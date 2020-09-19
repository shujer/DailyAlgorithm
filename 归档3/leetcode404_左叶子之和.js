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
var sumOfLeftLeaves = function (root) {
  if (!root) {
    return 0;
  }
  let stack = [root];
  let sum = 0;
  while (stack.length) {
    let node = stack.pop();
    if (node.left) {
      stack.push(node.left);
      if (!node.left.left && !node.left.right) {
        sum += node.left.val;
      }
    }
    if (node.right) {
      stack.push(node.right);
    }
  }
  return sum;
};

// 递归写法
var sumOfLeftLeaves = function (root) {
  if (!root) {
    return 0;
  }
  let sum = 0;
  traverse(root);
  return sum;
  function traverse(node) {
    if (node.left) {
      if (!node.left.left && !node.left.right) {
        sum += node.left.val;
      }
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
  }
};
