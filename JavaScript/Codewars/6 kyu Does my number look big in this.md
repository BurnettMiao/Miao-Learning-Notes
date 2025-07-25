## 6 kyu Does my number look big in this?

A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

- 解法二

```js
function narcissistic(value) {
  const digits = value.toString().split('');
  const power = digits.length;
  const sum = digits.reduce(
    (total, num) => total + Math.pow(Number(num), power),
    0
  );
  return sum === value;
}

narcissistic(7); // -> true
narcissistic(153); // -> true
narcissistic(122); // -> false
narcissistic(487); // -> false
```

- 解法一

```js
function narcissistic(value) {
  const numArr = value.toString().split('');
  let sum = 0;
  sum = numArr.reduce((sum, num) => {
    return sum + Math.pow(Number(num), numArr.length);
  }, 0);
  if (value === sum) return true;
  return false;
}

narcissistic(7); // -> true
narcissistic(153); // -> true
narcissistic(122); // -> false
narcissistic(487); // -> false
```
