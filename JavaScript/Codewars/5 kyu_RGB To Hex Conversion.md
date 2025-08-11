## 5 kyu RGB To Hex Conversion

Description:
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0 --> "000000"
148, 0, 211 --> "9400D3"

- 解法二

```js
function rgb(r, g, b) {
  return [r, g, b]
    .map(clamp)
    .map((n) => n.toString(16))
    .map((val) => val.padStart(2, '0').toUpperCase())
    .join('');
}

function clamp(val) {
  return Math.max(0, Math.min(255, val));
}

rgb(255, 255, 255); // -> "FFFFFF"
rgb(255, 255, 300); // -> "FFFFFF"
rgb(0, 0, 0); // -> "000000"
rgb(148, 0, 211); // -> "9400D3"
```

- 解法一

```js
function rgb(r, g, b) {
  const arr = [];
  const rClamp = clamp(r);
  const gClamp = clamp(g);
  const bClamp = clamp(b);

  const rString = rClamp.toString(16);
  const gString = gClamp.toString(16);
  const bString = bClamp.toString(16);
  arr.push(conver(rString));
  arr.push(conver(gString));
  arr.push(conver(bString));

  return arr.join('');
}

function conver(val) {
  if (val.length < 2) {
    return val.padStart(2, '0').toUpperCase();
  }
  return val.toUpperCase();
}

function clamp(val) {
  if (val < 0) {
    return 0;
  } else if (val > 255) {
    return 255;
  } else {
    return val;
  }
}

rgb(255, 255, 255); // -> "FFFFFF"
rgb(255, 255, 300); // -> "FFFFFF"
rgb(0, 0, 0); // -> "000000"
rgb(148, 0, 211); // -> "9400D3"
```
