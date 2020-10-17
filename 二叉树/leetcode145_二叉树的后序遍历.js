/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归写法
var postorderTraversal = function (root) {
  let results = [];
  traversal(root);
  return results;
  function traversal(root) {
    if (!root) {
      return;
    }
    traversal(root.left);
    traversal(root.right);
    results.push(root.val);
  }
};

// 非递归写法
var postorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  let results = [];
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    results.unshift(node.val);
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }

  return results;
};
