/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let [l, r] = newInterval;
  let ans = [],
    i = 0;
  while (i < intervals.length && intervals[i][1] < l) {
    ans.push(intervals[i++]);
  }
  while (i < intervals.length && intervals[i][0] <= r) {
    l = Math.min(intervals[i][0], l);
    r = Math.max(intervals[i][1], r);
    i++;
  }
  ans.push([l, r]);
  while (i < intervals.length) {
    ans.push(intervals[i]);
    i++;
  }
  return ans;
};
/**
 * https://leetcode-cn.com/problems/insert-interval/solution/bi-xu-miao-dong-li-kou-qu-jian-ti-mu-zhong-die-qu-/
 * 1. 插入左边不相交
 * 2. 计算交集、插入
 * 3. 插入右边不相交
 */