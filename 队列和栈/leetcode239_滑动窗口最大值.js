/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (nums.length < 2 || k <= 1) {
    return nums;
  }
  let dequeue = [];
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (i >= k && dequeue[0] <= i - k) {
      dequeue.shift();
    }
    while (dequeue.length && nums[dequeue[dequeue.length - 1]] <= nums[i]) {
      dequeue.pop();
    }
    dequeue.push(i);
    if (i >= k - 1) {
      ans.push(nums[dequeue[0]]);
    }
  }
  return ans;
};
