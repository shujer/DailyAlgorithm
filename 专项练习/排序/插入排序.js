/**
 * 思路综述：
 * 1. 假设对数组进行升序排序
 * 2. 每次循环
 *    - 从未排序数组中取出第一位 A
 *    - 从后往前扫描已排序数组，直到找到大于 A 的元素停止
 *    - 将 A 插入到已排序数组中合适的位置
 */

const tictok = require("../utils/tictok");
const data = require("../utils/data");

function insertSort(data) {
  let len = data.length;
  let sortedIndex = 1;
  // 外循环 [sortedIndex, len) 未排序的数组
  while (sortedIndex < len) {
    let i = sortedIndex - 1;
    let target = data[sortedIndex];
    // 内循环 [0, sortedIndex) 已排序的数组
    while (i >= 0 && data[i] > target) {
      data[i + 1] = data[i];
      i--;
    }
    data[i + 1] = target;
    sortedIndex++;
  }
  return data;
}

tictok(insertSort, data.input);
