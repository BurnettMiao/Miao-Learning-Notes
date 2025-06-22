## The Vowel Code

Description:
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

- 解法三 (使用 ?? 是「空值合併運算子」方式)

```js
function encode(string) {
  const encodeObj = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };

  return string
    .split('')
    .map((char) => encodeObj[char] ?? char)
    .join('');
}

function decode(string) {
  const decodeObj = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  return string
    .split('')
    .map((char) => decodeObj[char] ?? char)
    .join('');
}

encode('hello'); // -> 'h2ll4'
encode('How are you today?'); // -> 'H4w 1r2 y45 t4d1y?'
encode('This is an encoding test.'); // -> 'Th3s 3s 1n 2nc4d3ng t2st.'
decode('h2ll4'); // -> 'hello'
```

- 解法二

```js
function encode(string) {
  const vowelsObj = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };

  const result = [];
  for (let char of string) {
    if (vowelsObj.hasOwnProperty(char)) {
      result.push(vowelsObj[char]);
    } else {
      result.push(char);
    }
  }
  return result.join('');
}

function decode(string) {
  const vowelsObj = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  const result = [];
  for (char of string) {
    if (vowelsObj.hasOwnProperty(char)) {
      result.push(vowelsObj[char]);
    } else {
      result.push(char);
    }
  }
  return result.join('');
}

encode('hello'); // -> 'h2ll4'
encode('How are you today?'); // -> 'H4w 1r2 y45 t4d1y?'
encode('This is an encoding test.'); // -> 'Th3s 3s 1n 2nc4d3ng t2st.'
decode('h2ll4'); // -> 'hello'
```

- 解法一

```js
function encode(string) {
  const result = [];
  for (let char of string) {
    if (char === 'a') result.push('1');
    else if (char === 'e') result.push('2');
    else if (char === 'i') result.push('3');
    else if (char === 'o') result.push('4');
    else if (char === 'u') result.push('5');
    else result.push(char);
  }
  return result.join('');
}

function decode(string) {
  const result = [];
  for (let char of string) {
    if (char === '1') result.push('a');
    else if (char === '2') result.push('e');
    else if (char === '3') result.push('i');
    else if (char === '4') result.push('o');
    else if (char === '5') result.push('u');
    else result.push(char);
  }
  return result.join('');
}

encode('hello'); // -> 'h2ll4'
encode('How are you today?'); // -> 'H4w 1r2 y45 t4d1y?'
encode('This is an encoding test.'); // -> 'Th3s 3s 1n 2nc4d3ng t2st.'
decode('h2ll4'); // -> 'hello'
```
