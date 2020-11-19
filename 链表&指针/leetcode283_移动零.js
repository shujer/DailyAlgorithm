/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      let tmp = nums[j];
      nums[j] = nums[i];
      nums[i] = tmp;
      i++;
    }
  }
  return nums;
};
/**
 * 慢指针始终指向最靠前的 0，快指针每次前进一步，当遇到非0的数时，和最前面的数字交换
 * 快慢指针的思路：
 * 0 1 0 1 3 12
 * ^ ^ 
 * 1 0 0 1 3 12
 *   ^ ^ 
 * 1 0 0 1 3 12
 *   ^   ^
 * 1 1 0 0 3 12
 *     ^   ^
 * 1 1 3 0 0 12
 *       ^    ^
 * 1 1 3 12 0 0
 *          ^
 */