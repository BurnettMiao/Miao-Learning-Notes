**最佳解法**
```js
function twoSum(nums, target) {
   const map = new Map()
   for(let i = 0; i < nums.length; i++) {
     const complement = target - nums[i]
     if(map.has(complement)) {
       return [map.get(complement), i]
     } else {
       map.set(nums[i], i)
     }
   }
 }

twoSum(nums = [3,4,5,6], target = 7) // [0, 1]
twoSum(nums = [4,5,6], target = 10) // [0, 2]
twoSum(nums = [5,5], target = 10) // [0, 1]
```

**暴力破解法**
```js
function twoSum(nums, target) {
   for(let i = 0; i < nums.length; i++) {
     for(let j = i + 1; j < nums.length; j++ ) {
       if(nums[i] + nums[j] === target) {
         return [i, j]
       }
     }
   }
 }

twoSum(nums = [3,4,5,6], target = 7) // [0, 1]
twoSum(nums = [4,5,6], target = 10) // [0, 2]
twoSum(nums = [5,5], target = 10) // [0, 1]
```