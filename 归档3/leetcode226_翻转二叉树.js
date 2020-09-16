/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root;
  let left = root.left;
  root.left = root.right;
  root.right = left;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

/**
 * 本质还是考察怎么遍历一颗树
 * 只要交换每个左右节点
 */
var invertTree = function (root) {
  if (!root) return root;
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    let left = node.left;
    node.left = node.right;
    node.right = left;
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return root;
};
