## 6 kyuIs a number prime?

Description:
Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.

Example
is*prime(1) /* false _/
is_prime(2) /_ true _/
is_prime(-1) /_ false \_/

- 解法一

```js
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

isPrime(0); // -> false
isPrime(1); // -> false
isPrime(2); // -> true
isPrime(73); //-> true
isPrime(75); //-> false
isPrime(-1); //-> false
```
