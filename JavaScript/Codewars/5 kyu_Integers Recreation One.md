```js
function listSquared(m, n) {
  const result = [];
  
  // 外層迴圈：遍歷區間 [m, n] 中的每一個數字
  for (let i = m; i <= n; i++) {
    let sumSqDivs = 0; // 儲存當前數字 i 的因數平方和
    
    // 內層迴圈：只遍歷到 √i (用 j * j <= i 判斷)
    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) { // 如果 j 是因數
        sumSqDivs += j * j; // 累加較小因數的平方
        
        const pair = i / j; // 算出配對的較大因數
        if (pair !== j) {   // 確保兩因數不相等（避免如 6*6 重複計算）
          sumSqDivs += pair * pair; // 累加較大因數的平方
        }
      }
    }
    
    // 判斷因數平方和是否為「完全平方數」
    if (Number.isInteger(Math.sqrt(sumSqDivs))) {
      result.push([i, sumSqDivs]);
    }
  }
  
  return result;
}
 
listSquared(1, 250) // [[1, 1], [42, 2500], [246, 84100]])
listSquared(42, 250) // [[42, 2500], [246, 84100]])
listSquared(250, 500) // [[287, 84100]])
```

