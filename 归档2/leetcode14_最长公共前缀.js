/**
 * @param {string[]} strs
 * @return {string}
 */

// 构建字典树法，可扩展性高，但这道题可以有更简单的玩法
var longestCommonPrefix = function (strs) {
  let len = strs.length;
  if (!strs.length) {
    return "";
  }
  strs = strs.sort((a, b) => a.length - b.length);
  let root = {};
  let maxWord = "";
  for (let i = 0; i < len; i++) {
    let str = strs[i];
    let node = root;
    for (let j = 0; j < str.length; j++) {
      let c = str[j];
      if (!node[c]) {
        if (i === 0) {
          node[c] = {};
        } else {
          // 剪枝，前缀不匹配的不继续加入字典树
          break;
        }
      }
      if (!node.count) {
        node.count = 0;
      }
      node.count++;
      if (i === len - 1 && node.count === len) {
        maxWord = str.slice(0, j + 1);
      }
      node = node[c];
    }
  }
  return maxWord;
};

// 解法2
var longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return "";
  }
  let len = strs[0].length;
  let result = strs[0].slice(0, len);
  let i = 1,
    j = 0;
  while (i < strs.length) {
    j = 0;
    len = Math.min(strs[i].length, result.length);
    while (j < len) {
      if (strs[i][j] !== result[j]) {
        break;
      }
      j++;
    }
    i++;
    result = result.slice(0, j);
  }

  return result;
};
