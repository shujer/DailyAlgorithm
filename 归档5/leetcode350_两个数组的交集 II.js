/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  let hashMap = {};
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    let key = nums1[i];
    if (hashMap[key]) {
      hashMap[key]++;
    } else {
      hashMap[key] = 1;
    }
  }
  for (let j = 0; j < nums2.length; j++) {
    let key = nums2[j];
    if (hashMap[key]) {
      hashMap[key]--;
      result.push(key);
    }
  }
  return result;
};

/**
 * 基于官方题解的思路
 * 1. 首先构建一个数组的统计表 hasMap
 * 2. 遍历另一个数组，如果数字在 hasMap 中，加入结果集，统计减一
 */