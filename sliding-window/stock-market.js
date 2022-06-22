// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

var maxProfit = function (prices) {
  //need to hunt a min value

  let left = 0;
  let maxProfit = 0;
  let money = 0;
  let maxNum = -1;
  let right;

  for (right = 1; right < prices.length; right++) {
    if (prices[right] > maxNum) {
      maxNum = prices[right];
    }
    if (prices[right] < prices[left] || right === prices.length - 1) {
      maxProfit = maxNum - prices[left];
      if (maxProfit > money) {
        money = maxProfit;
      }
      maxNum = 0;
    }
    while (prices[right] < prices[left]) {
      left++;
    }
  }

  return money;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
