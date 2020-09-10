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
  let queue = [root];
  while (queue.length) {
    let node = queue.pop();
    results.push(node.val);
    if (node.right) {
      queue.push(node.right);
    }
    if (node.left) {
      queue.push(node.left);
    }
  }
  return results;
};
