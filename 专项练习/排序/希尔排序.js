/**
 * 思路综述：
 * 1. 希尔排序（递减增量排序法）是插入排序的一个优化版本
 * 2. 先将数组分割成多个待排序的子序列，分别进行排序，最后进行插入排序，可以较少交换和插入
 */

const tictok = require("../utils/tictok");
const data = require("../utils/data");

function shellSort(data) {
  let len = data.length;
  let gap = Math.floor(len / 2);
  for (; gap > 0; gap = Math.floor(gap / 2)) {
    let sortedIndex = gap;
    while (sortedIndex < len) {
      let i = sortedIndex - gap;
      let target = data[sortedIndex];
      while (i >= 0 && data[i] > target) {
        data[i + gap] = data[i];
        i -= gap;
      }
      data[i + gap] = target;
      sortedIndex += gap;
    }
  }
  return data;
}

tictok(shellSort, data.input);
