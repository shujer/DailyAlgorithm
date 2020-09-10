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
  let queue = [];
  let results = [];
  while (queue.length || root) {
    if (root) {
      queue.push(root);
      root = root.left;
    } else {
      root = queue.pop();
      results.push(root.val);
      root = root.right;
    }
  }
  return results;
};
