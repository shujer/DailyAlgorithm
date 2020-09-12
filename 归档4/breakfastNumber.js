/**
 * 小扣在秋日市集选择了一家早餐摊位，一维整型数组 staple 中记录了每种主食的价格，一维整型数组 drinks 中记录了每种饮料的价格。
 * 小扣的计划选择一份主食和一款饮料，且花费不超过 x 元。请返回小扣共有多少种购买方案。
 * 注意：答案需要以 1e9 + 7 (1000000007) 为底取模，如：计算初始结果为：1000000008，请返回 1
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/2vYnGI
 */
// 死于超时，累了！！

/**
 * @param {number[]} staple
 * @param {number[]} drinks
 * @param {number} x
 * @return {number}
 */
var breakfastNumber = function (staple, drinks, x) {
  let result = 0;
  let j = drinks.length - 1;
  const MOD = 1000000007;
  staple = staple.sort((a, b) => a - b);
  drinks = drinks.sort((a, b) => a - b);
  for (let i = 0; i < staple.length; i++) {
    // 关键！排序，从大到小找到不满足的，下次循环无需再比较一次
    while (j >= 0 && drinks[j] + staple[i] > x) {
      j--;
    }
    result = (result + j + 1) % MOD;
  }
  return result;
};
