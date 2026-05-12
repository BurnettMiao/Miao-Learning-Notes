The main idea is to count all the occurring characters in a string. If you have a string like `aba`, then the result should be `{'a': 2, 'b': 1}`.

What if the string is empty? Then the result should be empty object literal, `{}`.

```js
function count(string) {
  if(!string) return {}
  
  const obj = {}
  for(let char of string) {
    obj[char] = (obj[char] || 0) + 1
  }
  
  return obj
}

count('') // {}
count('a') //  {'a': 1}
count('ab') // {'a': 1, 'b': 1}
count('aba') // {'a': 2, 'b': 1}
count('ABC') // {'A': 1, 'B': 1, 'C': 1}
```