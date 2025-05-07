### Top 10 Javascript Algorithms to Prepare for Coding Interviews

[Top 10 Javascript Algorithms to Prepare for Coding Interviews](https://youtu.be/ufBbWIyKY2E?si=j0MnKvGNrHdJYiQ8)

<details>
<summary>Click to toggle contents of `code`</summary>

```
CODE!
```

</details>

<br/>

**Anagrams**
解法二

```js
function cleanStr(str) {
  return str.toLowerCase().replace(/[\W]/g, '').split('').sort().join('');
}

function anagrams(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB);
}

anagrams('RAIL! SAFETY!', 'fairy tales');
```

解法一

```js
function charMap(str) {
  const charmap = {};
  str = str.toLowerCase().replace(/[\W]/g, '');
  for (let char of str) {
    charmap[char] = ++charmap[char] || 1;
  }
  return charmap;
}

function anagrams(stringA, stringB) {
  // Step 1: Build char map for stringA
  const charmapA = charMap(stringA);

  // Setp 2: Build char map for stringB
  const charmapB = charMap(stringB);

  // Step 3: Compare each character in the both char maps
  if (Object.keys(charmapA).length !== Object.keys(charmapA).length)
    return false;
  for (let key in charmapA) {
    if (charmapA[key] !== charmapB[key]) return false;
  }

  return true;
}

anagrams('RAIL! SAFETY!', 'fairy tales');
```

<br/>

**Title Case**
解法三

```js
function capitalize(str) {
  const words = str.split(' ');
  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
}

capitalize('this is mukhtar from coding money');
```

解法二

```js
function capitalize(str) {
  const words = str.split(' ');
  const result = [];

  for (let word of words) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }

  return result.join(' ');
}

capitalize('this is mukhtar from coding money');
```

解法一 (自己想)

```js
function capitalize(str) {
  const result = [];
  str = str.split(' ');
  for (let letter of str) {
    const newLetter = letter.split('');
    newLetter[0] = newLetter[0].toUpperCase();
    result.push(newLetter.join(''));
  }
  return result.join(' ');
}

capitalize('this is mukhtar from coding money');
```

<br/>

**Array Chunking**

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

<br/>

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

<br/>

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
