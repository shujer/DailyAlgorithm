/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.root = {};
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  for (let c of word) {
    if (!node[c]) {
      node[c] = {};
    }
    node = node[c];
  }
  if (!node.END) {
    node.END = true;
  }
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  function _search(word, root) {
    let node = root;
    for (let i = 0; i < word.length; i++) {
      let c = word[i];
      if (!node[c]) {
        if (c === ".") {
          for (let p in node) {
            if (!p || p === "END") continue;
            if (_search(word.slice(i + 1), node[p])) {
              return true;
            }
          }
        }
        return false;
      }
      node = node[c];
    }
    return node && !!node.END;
  }
  return _search(word, this.root);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
