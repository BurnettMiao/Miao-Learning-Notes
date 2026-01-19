You will be given a number and you will need to return it as a string in [Expanded Form](https://www.mathsisfun.com/definitions/expanded-notation.html). For example:

```
   12 --> "10 + 2"
   45 --> "40 + 5"
70304 --> "70000 + 300 + 4"
```

NOTE: All numbers will be whole numbers greater than 0.

**方法二**
```js
function expandedForm(num) {
  const digits = num.toString().split('');
  const len = digits.length;
  
  return digits.map((d, i) => d * 10 ** (len - i - 1)).filter(n => n !== 0).join(' + ')
}

expandedForm(70304)
```

**方法一**

```js
function expandedForm(num) {
  // Your code here
  const finalArr = []
  const splitNum = num.toString().split('')
  for(let i = 0 ; i < splitNum.length; i++) {
    console.log(i)
    const zeros = splitNum.length - i - 1
    if(Number(splitNum[i]+'0'.repeat(zeros))> 0) {
      finalArr.push(splitNum[i]+'0'.repeat(zeros))
    }  
  }
  return finalArr.join(' + ')
}

expandedForm(70304)
```