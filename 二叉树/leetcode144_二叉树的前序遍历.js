/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归解法
var preorderTraversal = function (root) {
  let results = [];
  traversal(root);
  return results;
  function traversal(root) {
    if (!root) {
      return;
    }
    results.push(root.val);
    traversal(root.left);
    traversal(root.right);
  }
};
// 非递归解法
var preorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  let results = [];
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    results.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return results;
};
