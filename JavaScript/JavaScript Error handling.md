#### JavaScript Error handling

<!--
try {}
catch {}
finally {}
 -->

```javascript
document.addEventListener('DOMContentLoaded', () => {
  try {
    const dividend = Number(window.prompt('Enter a dividend: '));
    const divisor = Number(window.prompt('Enter a divisor: '));

    if (divisor == 0) {
      // 自己定義的錯誤
      throw new Error("You can't divide by zero");
    }

    if (isNaN(dividend) || isNaN(divisor)) {
      // 自己定義的錯誤
      throw new Error('Value must be a number');
    }

    const result = dividend / divisor;
    // 系統本身會帶出的錯誤，正確應該是 console.log()
    console.lag(result);
  } catch (error) {
    console.error(error);
  }

  console.log('You have reached the end!!');
});
```

```javascript
document.addEventListener('DOMContentLoaded', () => {
  try {
    // console.lag('Hello');
    console.log('Hello');
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
  } catch (error) {
    console.error(error);
  } finally {
    // CLOSE FILES
    // CLOSE CONNECTION
    // RELEASE RESOURCES
    console.log('This always executes');
  }

  console.log('You have reached the end!!');
});
```
