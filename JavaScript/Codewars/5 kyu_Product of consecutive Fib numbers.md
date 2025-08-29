## 5 kyu Product of consecutive Fib numbers

Description:
The Fibonacci numbers are the numbers in the following integer sequence (Fn): 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such that:

F
(
0
)
=
0
F
(
1
)
=
1
F
(
n
)
=
F
(
n
−
1
)

- F
  (
  n
  −
  2
  )
  F(0)=0
  F(1)=1
  F(n)=F(n−1)+F(n−2)
  Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying:

F
(
n
)
∗
F
(
n

- 1
  )
  =
  p
  r
  o
  d
  F(n)∗F(n+1)=prod
  Your function takes an integer (prod) and returns an array/tuple (check the function signature/sample tests for the return type in your language):

if F(n) _ F(n+1) = prod:
(F(n), F(n+1), true)
If you do not find two consecutive F(n) verifying F(n) _ F(n+1) = prod:
(F(n), F(n+1), false)
where F(n) is the smallest one such as F(n) _ F(n+1) > prod.
Examples:
714 ---> (21, 34, true)
--> since F(8) = 21, F(9) = 34 and 714 = 21 _ 34

800 ---> (34, 55, false)
--> since F(8) = 21, F(9) = 34, F(10) = 55 and 21 _ 34 < 800 < 34 _ 55

- 解法二

```js
function productFib(prod) {
  let n = 0;
  let nPlus = 1;
  while (n * nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }

  return [n, nPlus, n * nPlus === prod];
}

productFib(10); // -> [3, 5, false]
productFib(4895); // -> [55, 89, true]
productFib(5895); // -> [89, 144, false]
productFib(74049690); // -> [6765, 10946, true]
```

- 解法一

```js
function productFib(prod) {
  const result = [];
  const fibArr = [0, 1];
  for (let i = 2; i <= prod; i++) {
    const multiplication = fibArr[i - 1] * fibArr[i - 2];
    if (multiplication === prod) {
      result.push(fibArr[i - 2]);
      result.push(fibArr[i - 1]);
      result.push(true);
      return result;
    } else if (multiplication > prod) {
      result.push(fibArr[i - 2]);
      result.push(fibArr[i - 1]);
      result.push(false);
      return result;
    } else {
      fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
  }
}

productFib(10); // -> [3, 5, false]
productFib(4895); // -> [55, 89, true]
productFib(5895); // -> [89, 144, false]
productFib(74049690); // -> [6765, 10946, true]
```
