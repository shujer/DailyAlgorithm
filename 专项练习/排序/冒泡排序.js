/**
 * 思路综述:
 * 1. 假设对数组进行升序排序
 * 2. 从第一位开始每次比较相邻的两个元素，如果前一位大于后一位，则交换值并继续比较
 * 3. 一次循环之后，未排序数组的最后一个数归位（冒泡到正确的位置）
 * 4. 因此，每次循环都可以减少一位比较，直到没有需要比较的数据
 * 5. 如果数组是有序的，经过一次比较之后全部无需交换，那么整个数组已经是有序的，可以提前跳出循环
 *
 * 时间复杂度：
 * O(N^2)
 */

const tictok = require("../utils/tictok");
const data = require("../utils/data");
function bubbleSort(data) {
  let len = data.length;
  // 外循环控制比较的次数
  for (let i = 0; i < len; i++) {
    // 内循环控制比较的范围
    for (let j = 0; j < len - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        let tmp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = tmp;
      }
    }
  }
  return data;
}

function bubbleSettleSort(data) {
  let len = data.length;
  let flag = false;
  for (let i = 0; i < len; i++) {
    if (!flag) break;
    for (let j = 0; j < len - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        flag = true;
        let tmp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = tmp;
      }
    }
  }
  return data;
}

tictok(bubbleSort, data.input);
