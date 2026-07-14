```js
function pickPeaks(arr){
  const pos = [];
  const peaks = [];
  
  // 陣列長度小於 3 不可能有 peak
  if (arr.length < 3) return { pos, peaks };

  for (let i = 1; i < arr.length - 1; i++) {
    
    // 1. 先確認有上升（左邊比現在小）
    if (arr[i] > arr[i - 1]) {
      
      let j = i;
      
      // 2. 往右跳過整個 plateau（連續相同數字）
      while (j < arr.length - 1 && arr[j] === arr[j + 1]) {
        j++;
      }
      
      // 3. 跳完後如果下降，就是 peak
      // 注意：要用 i 來記錄位置和數值（plateau 的開頭）
      if (j < arr.length - 1 && arr[j] > arr[j + 1]) {
        pos.push(i);
        peaks.push(arr[i]);
      }
      
      // 4. 重要：跳過整個 plateau，避免重複檢查
      i = j;
    }
  }
  
  return { pos, peaks };
}

pickPeaks([1,2,3,6,4,1,2,3,2,1]) // {pos:[3,7], peaks:[6,3]}
pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]) // {pos:[3,7,10], peaks:[6,3,2]}
pickPeaks([2,1,3,1,2,2,2,2]) // {pos:[2], peaks:[3]}
pickPeaks([]) // {pos:[],peaks:[]}
```