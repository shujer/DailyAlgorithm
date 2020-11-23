/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let tMap = new Map();
  for (let i = 0; i < t.length; i++) {
    if (tMap.has(t[i])) {
      tMap.set(t[i], tMap.get(t[i]) + 1);
    } else {
      tMap.set(t[i], 1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    let c = tMap.get(s[i]);
    if (!c) {
      return false;
    }
    tMap.set(s[i], c - 1);
  }
  return true;
};
