/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
  let freqs = new Array(26).fill(0);
  let count = 0;
  for (let ch of s) {
    freqs[ch.charCodeAt(0) % 97]++;
  }
  let set = new Set();
  for (let i = 0; i < 26; i++) {
    if (freqs[i] === 0) continue;
    // 减少到 freqs 中不存在
    while (set.has(freqs[i])) {
      freqs[i]--;
      count++;
    }
    if (freqs[i] !== 0) set.add(freqs[i]);
  }
  return count;
};
