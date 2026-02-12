```js
function isPalindrome(s) {
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g,'')
  const reversed = cleaned.split('').reverse().join('')
  return cleaned === reversed
}

isPalindrome("Was it a car or a cat I saw?") // true
isPalindrome("tab a cat") // false
```