## Create Phone Number

Description:
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

- 解法二

```js
function createPhoneNumber(numbers) {
  const newArr = [];

  numbers.forEach((num, index) => {
    if (index === 0) newArr.push('(');
    if (index === 3) newArr.push(') ');
    if (index === 6) newArr.push('-');
    newArr.push(num);
  });

  return newArr.join('');
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
```

- 解法一

```js
function createPhoneNumber(numbers) {
  const areaCode = numbers.slice(0, 3).join('');
  const firstThree = numbers.slice(3, 6).join('');
  const lastFour = numbers.slice(6).join('');

  return `(${areaCode}) ${firstThree}-${lastFour}`;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
```
