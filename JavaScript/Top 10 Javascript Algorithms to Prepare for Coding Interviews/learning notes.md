### Top 10 Javascript Algorithms to Prepare for Coding Interviews

[Top 10 Javascript Algorithms to Prepare for Coding Interviews](https://youtu.be/ufBbWIyKY2E?si=j0MnKvGNrHdJYiQ8)

**Palindrome**
解法三 使用 two point

```js
function palindrome(str) {
  str = str
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  let left = 0,
    right = str.length - 1;

  while (left < right) {
    if (str[right] !== str[left]) {
      return false;
    }
    right--;
    left++;
  }
  return true;
}

palindrome('kayak');
palindrome('madam');
palindrome('codingmoney');
```

解法二 使用.every()

```js
function palindrome(str) {
  str = str
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  console.log(str);

  return str.split('').every((char, index) => {
    console.log(index);
    return char === str[str.length - 1 - index];
  });
}

palindrome('kayak');
palindrome('madam');
palindrome('codingmoney');
```

解法一

```js
function palindrome(str) {
  const reverse = str.split('').reverse().join('');

  if (str === reverse) {
    console.log(true);
  } else {
    console.log(false);
  }
}

palindrome('kayak');
palindrome('madam');
palindrome('codingmoney');
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
