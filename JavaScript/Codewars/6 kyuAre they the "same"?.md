解法二：
```js
let array1 = [121, 144, 19, 161, 19, 144, 19, 11];
let array2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

function comp(array1, array2) {
  if(!array1 || !array2) return false
  
  const arr1 = array1.map((n) => n ** 2).sort((a, b) => a - b)
  console.log(arr1)
  
  const arr2 = array2.sort((a, b) => a - b)
  console.log(arr2)
  
  return arr1.every((num, i) => num === arr2[i])
}

comp(array1, array2)
```

解法ㄧ：
```js
let array1 = [121, 144, 19, 161, 19, 144, 19, 11];
let array2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

function comp(array1, array2){
  if(array1.length !== array2.length) return false
  
  const numObj = {}
  
  for(let i = 0; i < array1.length; i++) {
    const squared = array1[i] ** 2
    numObj[squared] = (numObj[squared] || 0) + 1
  }
  
  for(let i = 0; i < array2.length; i++) {
    if(numObj[array2[i]]) {
      numObj[array2[i]] = numObj[array2[i]] - 1
    } else {
      return false
    }
  }
  return true
}

comp(array1, array2)
```