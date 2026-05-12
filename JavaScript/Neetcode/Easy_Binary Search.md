```js
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while(left <= right) {
    const mid = left + Math.floor((right - left)/2);
    
    if(nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  
  return -1
}

search([-1,0,2,4,6,8], 4) // 3
search([-1,0,2,4,6,8], 3) // -1
```

