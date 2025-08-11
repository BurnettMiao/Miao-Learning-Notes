## Convert string to camel case

Description:
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

- 解法二

```js
function toCamelCase(str) {
  if (str.length === 0) return '';
  const words = str.split(/[-_]/);
  return words
    .map((word, index) => {
      if (index === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
}

toCamelCase(''); // -> '',

toCamelCase('the-stealth-warrior'); // -> "theStealthWarrior"

toCamelCase('The_Stealth_Warrior'); // -> "TheStealthWarrior"

toCamelCase('The_Stealth-Warrior'); // -> "TheStealthWarrior"
```

- 解法一

```js
function toCamelCase(str) {
  if (str.length === 0) return '';
  const result = [];
  const letterArr = str.replace(/[^a-zA-Z]/g, ' ').split(' ');
  result.push(letterArr[0]);
  for (let i = 1; i < letterArr.length; i++) {
    result.push(letterArr[i].charAt(0).toUpperCase() + letterArr[i].slice(1));
  }
  return result.join('');
}

toCamelCase(''); // -> '',

toCamelCase('the-stealth-warrior'); // -> "theStealthWarrior"

toCamelCase('The_Stealth_Warrior'); // -> "TheStealthWarrior"

toCamelCase('The_Stealth-Warrior'); // -> "TheStealthWarrior"
```
