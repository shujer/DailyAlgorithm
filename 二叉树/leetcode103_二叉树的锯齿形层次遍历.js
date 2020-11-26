/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 迭代写法
var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }
  let queue = [root],
    isLeft = true,
    result = [];
  while (queue.length) {
    let level = [];
    let rest = [];
    while (queue.length) {
      let peek = queue.shift();
      if (peek) {
        level.push(peek.val);
        if (peek.left) {
          rest.push(peek.left);
        }
        if (peek.right) {
          rest.push(peek.right);
        }
      }
    }
    if (isLeft) {
      result.push(level);
    } else {
      result.push(level.reverse());
    }
    isLeft = !isLeft;
    queue.push(...rest);
  }
  return result;
};

// 递归写法
var zigzagLevelOrder = function (root) {
  let result = [];
  traverse(root, 0);
  return result;
  function traverse(root, level) {
    if (!root) {
      return;
    }
    if (!result[level]) {
      result.push([]);
    }
    if (level % 2 === 0) {
      result[level].push(root.val);
    } else {
      result[level].unshift(root.val);
    }
    traverse(root.left, level + 1);
    traverse(root.right, level + 1);
  }
};
