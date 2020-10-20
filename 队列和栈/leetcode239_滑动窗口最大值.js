/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function (nums, k) {
  if (nums.length < 2 || k === 1) return nums;
  let dequeue = [],
    res = [];
  for (let i = 0; i < nums.length; i++) {
    // 如果队列里面保存过期的下标，要移除
    if (i >= k && dequeue[0] <= i - k) {
      dequeue.shift();
    }
    // 队列里面的值如果小于当前值，永无出头之日，移除
    while (dequeue.length && nums[dequeue[dequeue.length - 1]] <= x) {
      dequeue.pop();
    }
    // 每次新进来的数，一定要插入
    dequeue.push(i);
    // 队列头部始终存储最大值
    if (i >= k - 1) {
      res.push(nums[dequeue[0]]);
    }
  }
  return res;
};

/**
 * 基本思路：通过一个双向队列
 */
