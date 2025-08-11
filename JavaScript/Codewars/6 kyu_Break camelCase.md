## 6 kyu Break camelCase

Description:
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing" => "camel Casing"
"identifier" => "identifier"
"" => ""

- 解法二

```js
function solution(string) {
  return string.replace(/([A-Z])/g, ' $1');
}

solution('camelCasing'); // -> "camel Casing"
solution('identifier'); // -> "identifier"
solution(''); // -> ""
```

- 解法一

  ```js
  function solution(string) {
    if (string.length === 0) return '';

    const newStr = [];
    for (let letter of string.split('')) {
      if (letter.match(/[A-Z]/)) {
        newStr.push(' ');
        newStr.push(letter);
      } else {
        newStr.push(letter);
      }
    }
    return newStr.join('');
  }

  solution('camelCasing'); // -> "camel Casing"
  solution('identifier'); // -> "identifier"
  solution(''); // -> ""
  ```
