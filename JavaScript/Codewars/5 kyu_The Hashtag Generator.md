## 5 kyu The Hashtag Generator

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata" => "#HelloThereThanksForTryingMyKata"
" Hello World " => "#HelloWorld"
"" => false

- 解法二

```js
function generateHashtag(str) {
  if (!str || !str.trim()) return false;
  const hashtag =
    '#' +
    str
      .trim()
      .split(/\s+/)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join('');
  return hashtag.length > 140 ? false : hashtag;
}

generateHashtag(' Hello there thanks for trying my Kata'); // -> "#HelloThereThanksForTryingMyKata"
generateHashtag('    Hello     World   '); // ->"#HelloWorld"
generateHashtag(''); // -> false
```

- 解法一

```js
function generateHashtag(str) {
  if (str.length === 0 || str.trim().length === 0) return false;

  const strArr = str.trim().replace(/\s+/g, ' ').split(' ');

  const upperArr = strArr.map((char) => {
    return char.charAt(0).toUpperCase() + char.slice(1);
  });
  upperArr.unshift('#');

  if (upperArr.join('').length > 140) return false;
  return upperArr.join('');
}

generateHashtag(' Hello there thanks for trying my Kata'); // -> "#HelloThereThanksForTryingMyKata"
generateHashtag('    Hello     World   '); // ->"#HelloWorld"
generateHashtag(''); // -> false
```
