```js
function loopSize(node) {
  let slow = node
  let fast = node
  
  while(true) {
    slow = slow.next
    fast = fast.next.next
    
    if(slow === fast) break;
  }
  
  let length = 1
  fast = fast.next
  while(slow !== fast) {
    fast = fast.next
    length++
  }
  
  return length
}

// 執行測試
console.log(loopSize(head)); // 應該輸出 12
```
