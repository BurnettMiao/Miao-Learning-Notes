```js
function hasDuplicate(nums) {
  const newSet = new Set(nums)
  
  if(newSet.size < nums.length) {
    return true
  }
  
  return false
}

hasDuplicate([1, 2, 3, 3]) // true
hasDuplicate([1, 2, 3, 4]) // false
```