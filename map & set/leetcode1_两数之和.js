/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let numMap = new Map([]);
  for (let i = 0; i < nums.length; i++) {
    let j = numMap.get(target - nums[i]);
    if (j !== undefined && j !== i) {
      return [i, j];
    } else {
      numMap.set(nums[i], i);
    }
  }
};
