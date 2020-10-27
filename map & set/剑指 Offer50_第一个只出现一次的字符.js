/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  let map = new Map();
  for (let c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  // Map 是有序哈希，keys 按插入顺序
  for (let c of map.keys()) {
    if (map.get(c) === 1) return c;
  }
  return " ";
};
