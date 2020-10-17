/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 暴力解法，此暴力非彼暴力，不能用内置函数
var strStr = function (haystack, needle) {
  if (needle === haystack) {
    return 0;
  }
  const N = haystack.length;
  const M = needle.length;
  let i = 0,
    j = 0;
  for (i = 0; i <= N - M; i++) {
    for (j = 0; j < M; j++) {
      if (needle[j] !== haystack[i + j]) {
        break;
      }
    }
    if (j === M) {
      return i;
    }
  }
  return -1;
};

// 高级解法，KMP 算法
