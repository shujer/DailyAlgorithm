/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function (nums, k) {
  if (nums.length < 2 || k === 1) return nums;
  let dequeue = [];
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    while (dequeue.length && nums[dequeue[dequeue.length - 1]] <= nums[i]) {
      dequeue.pop();
    }
    dequeue.push(i);
    if (dequeue[0] <= i - k) {
      dequeue.shift();
    }
    if (i + 1 >= k) {
      result.push(nums[dequeue[0]]);
    }
  }
  return result;
};

/**
 * 基本思路：通过一个双向队列，保存当前滑动窗口最大值升序的下标
 */