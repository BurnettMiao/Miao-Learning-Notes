## JavaScript Algorithms and Data Structures

[JavaScript Algorithms and Data Structures](https://www.youtube.com/playlist?list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP)

---

**Time complexity** - Amount of time taken by an algorithm to run, as a function of input size.
**Space Complexity** - Amount of memory taken by an algorithm to run, as a fucntion of input size.

**How to represent complexity?**
Asymptotic notations

- Mathematical tools to represent time and space complexity
  1. Big-O Notation (O-notation) - Worst case complexity
  2. Omega Notation (Ω-notation) - Best case complexity
  3. Theta Notation (Θ-notation) - Average case complexity

---

**Fibonacci sequence**
影片解答 (不包含 0, 1 的情況)

```javascript
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
```

更好解答(以包含 0, 1 情況)

```javascript
function sequence(n) {
  if (n <= 0) {
    return [];
  }

  const arr = [0, 1];

  for (let i = 2; i < n; i++) {
    const newNum = arr[i - 1] + arr[i - 2];
    arr.push(newNum);
  }

  return arr.slice(0, n);
}

const fibonacci = sequence(4);
console.log(fibonacci);
```

---

**Factorial of a number**
