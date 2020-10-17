/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  if (!board.length || !words.length) {
    return [];
  }
  // 构建字典树
  let trie = {};
  for (let word of words) {
    let node = trie;
    for (let ch of word) {
      if (!node[ch]) {
        node[ch] = {};
      }
      node = node[ch];
    }
    node.is_end = word;
  }
  let results = new Set();
  const m = board.length;
  const n = board[0].length;

  // 多源搜索
  const isVisited = Symbol("visited");
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (trie[board[y][x]]) {
        _findWords(x, y, board, trie);
      }
    }
  }
  return [...results];
  // 回溯搜索
  function _findWords(x, y, visited, node) {
    if (node.is_end) {
      // eat, eate, 不可中断，区别于79
      results.add(node.is_end);
    }
    if (x < 0 || x >= n || y < 0 || y >= m) {
      return false;
    }
    let char = visited[y][x];
    if (char === isVisited || !node[char]) {
      return false;
    }
    visited[y][x] = isVisited;
    _findWords(x - 1, y, visited, node[char]);
    _findWords(x, y - 1, visited, node[char]);
    _findWords(x + 1, y, visited, node[char]);
    _findWords(x, y + 1, visited, node[char]);
    visited[y][x] = char;
  }
};
