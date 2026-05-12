**面試解法**
```js
function maxProfit(prices) {
  let minPrice = Infinity
  let maxProfit = 0
  
  for(let price of prices) {
    if(price < minPrice) {
      minPrice = price
    } else {
      maxProfit = Math.max(maxProfit, price - minPrice)
    }
  }
  
  return maxProfit
}

maxProfit([10,1,5,6,7,1]) // 6
maxProfit([10,8,7,5,2]) // 0
```

**暴力解法**
```js
function maxProfit(prices) {
  let max = 0
  let buy = 0
  let sell = 0 
  for(let i = 0; i < prices.length-1; i++) {
    for(let j = i + 1; j < prices.length; j++) {
      if(prices[j] - prices[i] > 0 && prices[j] - prices[i] > max) {
        max = prices[j] - prices[i]
        buy = prices[i]
        sell = prices[j]
      }
    }
  }
  
  if(max > 0) {
    return max
  }
  
  return 0
}

maxProfit([10,1,5,6,7,1]) // 6
maxProfit([10,8,7,5,2]) // 0
```