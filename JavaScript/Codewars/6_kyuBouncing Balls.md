```js
function bouncingBall(h,  bounce,  window) {
  // your code here
  if(h <= 0 || window >= h || bounce <=0 || bounce >=1 ) return -1
  
  let count = 1
  while(h * bounce > window) {
    count+=2
    h = h* bounce
  }
  
  return count
}

bouncingBall(3.0, 0.66, 1.5) // 3
bouncingBall(30.0, 0.66, 1.5) // 15
bouncingBall(3.0, 1.0, 1.5) // -1
```