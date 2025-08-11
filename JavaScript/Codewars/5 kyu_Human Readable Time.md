## Human Readable Time

Description:
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

- 解法二

```js
function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    secs.toString().padStart(0, '0'),
  ].join(':');
}

// humanReadable(0); // -> '00:00:00'
// humanReadable(59); // -> '00:00:59'
// humanReadable(60); // -> '00:01:00'
// humanReadable(90); // -> '00:01:30'
// humanReadable(3599); // -> '00:59:59'
// humanReadable(3600); // -> '01:00:00'
humanReadable(45296); // -> '12:34:56'
// humanReadable(86399); // -> '23:59:59'
// humanReadable(86400); // -> '24:00:00'
// humanReadable(359999); // -> '99:59:59'
```

- 解法一

```js
function humanReadable(seconds) {
  const timeArr = [];
  const result = [];
  const finalSeconds = timeArr.unshift(seconds % 60);
  const finalMinutes = timeArr.unshift(Math.floor((seconds % 3600) / 60));
  const finalHours = timeArr.unshift(Math.floor(seconds / 3600));
  for (let key of timeArr.keys()) {
    const timeStr = timeArr[key].toString();
    if (timeStr.length === 1) {
      result.push('0' + timeStr);
    } else {
      result.push(timeStr);
    }
  }
  return result.join(':');
}

// humanReadable(0); // -> '00:00:00'
// humanReadable(59); // -> '00:00:59'
// humanReadable(60); // -> '00:01:00'
// humanReadable(90); // -> '00:01:30'
// humanReadable(3599); // -> '00:59:59'
// humanReadable(3600); // -> '01:00:00'
humanReadable(45296); // -> '12:34:56'
// humanReadable(86399); // -> '23:59:59'
// humanReadable(86400); // -> '24:00:00'
// humanReadable(359999); // -> '99:59:59'
```
