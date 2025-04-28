### Top 10 Javascript Algorithms to Prepare for Coding Interviews

**Palindrome**

```js

```

<br/>

**Reverse String & Integers**

```js
function reverseInt(int) {
  const reverseNum = Math.abs(int).toString().split('').reverse().join('');
  const result = parseInt(reverseNum) * Math.sign(int);
  console.log(result);
}

reverseInt(-12);
```

```js
function reverse(str) {
  const reverseStr = str.split('').reverse().join('');

  console.log(reverseStr);
}

reverse('CodingMoney');
```
