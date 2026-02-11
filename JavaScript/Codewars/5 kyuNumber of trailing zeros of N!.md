Write a program that will calculate the number of trailing zeros in a factorial of a given number.

`N! = 1 * 2 * 3 * ... * N`

Be careful `1000!` has 2568 digits...

For more info, see: [http://mathworld.wolfram.com/Factorial.html](http://mathworld.wolfram.com/Factorial.html)

## Examples

|N|Product|N factorial|Trailing zeros|
|--:|---|--:|--:|
|`6`|`1*2*3*4*5*6`|`720`|`1`|
|`12`|`1*2*3*4*5*6*7*8*9*10*11*12`|`479001600`|`2`|

_Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros._

```js
function zeros (n) {
  // your code here  
  if(n < 0) return 0
  let count = 0
  while(n >= 5) {
    n = Math.floor(n/5)
    count += n
  }
  return count
}

zeros(0) // 1
zeros(5) // 1
zeros(6) // 1
zeros(30) // 7
```