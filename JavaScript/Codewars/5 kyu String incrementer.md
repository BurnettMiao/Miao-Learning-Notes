## 5 kyu String incrementer

Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

- 解法一

```js
function incrementString(strng) {
  // return incrementedString
  const match = strng.match(/^(.*?)(\d*)$/);
  const prefix = match[1];
  const number = match[2];

  if (number === '') {
    return prefix + '1';
  }

  let newNumber = String(Number(number) + 1).padStart(number.length, '0');

  return prefix + newNumber;
}

incrementString('foobar000'); // -> "foobar001"
incrementString('foobar999'); // -> "foobar1000"
incrementString('foobar00999'); // -> "foobar01000"
incrementString('foo'); // -> "foo1"
incrementString('fo99obar99'); // -> "fo99obar100"
```
