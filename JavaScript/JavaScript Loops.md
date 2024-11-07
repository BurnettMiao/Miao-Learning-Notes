## JavaScript Loops

for：適合已知迭代次數的情況。
while：適合不確定迭代次數，但要根據條件進行的迴圈。
do...while：至少執行一次的迴圈。
for...in：用來遍歷物件的屬性（不推薦用於陣列）。
for...of：用來遍歷可迭代對象的值（推薦用於陣列、字串、Map、Set 等）。
break 和 continue：控制迴圈流。

## for loop

```javascript
for (let i = 0; i < 5; i++) {
  console.log('Hello', i);
}
```

## for of loop

用於 array

```javascript
const months = ['Jan', 'March', 'April', 'June'];

const months = ['Jan', 'March', 'April', 'June'];
for (mon of months) {
  console.log(mon);
}

// log 出 'Jan' 'March' 'April' 'June'
```

## for in loop

常用於 object (array 也可以用)

```javascript
const user = { firstName: 'John', lastName: 'Doe' };
for (key in user) {
  console.log(user[key]);
}
```

## while loop

```javascript
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

當 i === 5 時 break 停止執行

```javascript
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
  if (i === 5) break;
}

// 0 1 2 3 4
```

當 i === 5 時 跳過 5 並繼續執行

```javascript
let i = 0;
while (i < 10) {
  i++;
  if (i === 5) continue;
  console.log(i);
}

// 1 2 3 4 6 7 8 9 10
```

## do while loop

與 while loop 相似，但至少會執行一次

```javascript
let i = 0;
do {
  i++;
  if (i === 5) continue;
  console.log(i);
} while (i < 0);

// 1
```
