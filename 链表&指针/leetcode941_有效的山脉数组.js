/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  const N = arr.length - 1;
  let i = 0,
    j = N;
  while (i < N - 1 && arr[i] < arr[i + 1]) {
    i++;
  }
  if (i === 0 || i === N) {
    return false;
  }
  while (j >= 1 && arr[j] < arr[j - 1]) {
    j--;
  }
  return i === j;
};
/**
 * 基本思路，双指针，判断两个点会不会相遇
 * 注意排除头尾的情况
 */
