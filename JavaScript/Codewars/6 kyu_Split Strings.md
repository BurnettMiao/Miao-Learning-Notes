## 6 kyu Split Strings

Description:
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('\_').

Examples:

- 'abc' => ['ab', 'c_']
- 'abcdef' => ['ab', 'cd', 'ef']

- 解法二

```js
function solution(str) {
  const result = [];
  let index = 0;
  if (str.length === 0) return [];
  const newStr = str.split('');
  if (newStr.length % 2 !== 0) newStr.push('_');
  const strJoin = newStr.join('');
  while (index < strJoin.length) {
    result.push(strJoin.slice(index, index + 2));
    index += 2;
  }
  return result;
}

solution('abcdef'); // -> ["ab", "cd", "ef"]
solution('abcdefg'); //-> ["ab", "cd", "ef", "g_"]
solution(''); // -> []
```

- 解法一

```js
function solution(str) {
  const result = [];
  let index = 0;
  if (str.length === 0) return [];
  const newStr = str.split('');
  if (newStr.length % 2 !== 0) newStr.push('_');
  const strJoin = newStr.join('');
  while (index < strJoin.length) {
    result.push(strJoin.slice(index, index + 2));
    index += 2;
  }
  return result;
}

solution('abcdef'); // -> ["ab", "cd", "ef"]
solution('abcdefg'); //-> ["ab", "cd", "ef", "g_"]
solution(''); // -> []
```
