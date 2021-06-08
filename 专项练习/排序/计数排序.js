/**
 * 思路综述：
 * 1. 前提条件：数组中值的大小限定在一定的范围之内
 * 2. 额外申请一个和数组大小一致的空数组用于计数
 */

const tictok = require("../utils/tictok");
const data = require("../utils/data");

// 假设数组范围在 0 ~ 10
function countSort(data, maxValue) {
  let len = data.length;
  let countArr = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    countArr[data[i]]++;
  }
  let sortedIndex = 0;
  for (let i = 0; i < len; i++) {
    while (countArr[i] > 0) {
      data[sortedIndex++] = i;
      countArr[i]--;
    }
  }
  return data;
}

tictok(countSort, data.input);
