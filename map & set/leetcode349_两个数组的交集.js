/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let result = [];
  if (set1.size < set2.size) {
    let tmp = set2;
    set2 = set1;
    set1 = tmp;
  }
  for (let num of set2.values()) {
    if (set1.has(num)) {
      result.push(num);
    }
  }
  return result;
};
