### Top 10 Javascript Algorithms to Prepare for Coding Interviews

[Top 10 Javascript Algorithms to Prepare for Coding Interviews](https://youtu.be/ufBbWIyKY2E?si=j0MnKvGNrHdJYiQ8)

**chunk**

```js
function chunk(array, size) {
  const result = [];
  let index = 0;

  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index += size;
  }

  return result;
}

chunk([1, 2, 3, 4, 5, 6, 7], 2);
```

**Max Char**
解法二

```js
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char] = charMap[char] + 1;
    } else {
      charMap[char] = 1;
    }
  }

  for (const key in charMap) {
    // console.log(key, value)
    if (charMap[key] > max) {
      max = charMap[key];
      maxChar = key;
    }
  }
  return maxChar;
}

maxChar('abcccccd');
```

解法一

```js
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char] = charMap[char] + 1;
    } else {
      charMap[char] = 1;
    }
  }

  for (const [key, value] of Object.entries(charMap)) {
    // console.log(key, value)
    if (value > max) {
      max = value;
      maxChar = key;
    }
  }
  return maxChar;
}

maxChar('abcccccd');
```

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
