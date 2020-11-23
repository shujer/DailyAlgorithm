/*
 * [173] 二叉搜索树迭代器
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  //关键思路，二叉搜索树的中序遍历时升序的
  let stack = [];
  traverse(root);
  function traverse(root) {
    if (!root) {
      return;
    }
    traverse(root.left);
    stack.unshift(root.val);
    traverse(root.right);
  }
  this.stack = stack;
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.stack.pop();
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

/**
 * 两种思路：
 * 1. 一开始根据二叉树，构建降序的数组
 * 2. 可中断的递归
 */

var BSTIterator = function (root) {
  //关键思路，二叉搜索树的中序遍历时升序的
  function* iterator() {
    if (!root) {
      return;
    }
    let stack = [];
    while (stack.length || root) {
      if (root) {
        stack.push(root);
        root = root.left;
      } else {
        root = stack.pop();
        yield root.val;
        root = root.right;
      }
    }
  }
  this.iterator = iterator();
  this.cursor = this.iterator.next();
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  let val = this.cursor.value;
  this.cursor = this.iterator.next();
  return val;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return !this.cursor.done;
};
