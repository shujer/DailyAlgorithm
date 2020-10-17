/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归写法
var inorderTraversal = function (root) {
  let results = [];
  traversal(root);
  return results;
  function traversal(root) {
    if (!root) {
      return;
    }
    traversal(root.left);
    results.push(root.val);
    traversal(root.right);
  }
};

// 非递归写法
var inorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  let stack = [];
  let results = [];
  while (stack.length || root) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      results.push(root.val);
      root = root.right;
    }
  }
  return results;
};
