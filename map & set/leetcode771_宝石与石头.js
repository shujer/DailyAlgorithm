/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let count = 0;
  let set = new Set();
  for (let k of J) {
    set.add(k);
  }
  for (let k of S) {
    if (set.has(k)) count++;
  }
  return count;
};
