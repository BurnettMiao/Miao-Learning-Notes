```js
function primeFactors(n){
  let result = [];
  
  // 1. 處理質因數 2
  let count = 0
  while(n % 2 === 0) {
    count++
    n /= 2
  }
  
  // 如果 2 有出現
  if(count > 0) {
    result.push(count > 1 ? `(2**${count})` : `(2)`)
  }
  
  // 2. 處理奇數質因數
  let i = 3
  while(i * i <= n) {
    count = 0;
    
    // 持續除同一個質因數
    while(n % i === 0) {
      count++;
      n/=i
    }
    
    // 如果有出現這個質因數
    if(count > 0) {
      result.push(count > 1 ? `(${i}**${count})` : `(${i})`)
    }
    
    // 只檢查奇數
    i += 2
  }
  
  // 3. 最後剩下的質數
  if(n > 1) {
    result.push(`(${n})`)
  }
  
  return result.join('')
}

primeFactors(60)
```