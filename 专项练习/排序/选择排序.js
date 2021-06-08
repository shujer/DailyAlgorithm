/**
 * 思路综述：
 * 1. 假设对数组进行升序排序
 * 2. 每次循环，从未排序中找到最小的数值，并归位
 * 3. 通过 minIndex 保留最小值的索引
 *
 * 时间复杂度：
 * O(N^2)
 */
const tictok = require("../utils/tictok");
const data = require("../utils/data");

function selectSort(data) {
  let minIndex = 0;
  let len = data.length;
  for (let i = 0; i < len; i++) {
    minIndex = i;
    for (j = i + 1; j < len; j++) {
      if (data[minIndex] > data[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let tmp = data[minIndex];
      data[minIndex] = data[i];
      data[i] = tmp;
    }
  }
  return data;
}

tictok(selectSort, data.input);
