/**
 * @param {string[]} strs
 * @return {string}
 */
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
