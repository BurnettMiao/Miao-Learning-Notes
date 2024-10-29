## JavaScript ARRAYS of OBJECTS

[JavaScript 陣列處理常用方法](https://dylan237.github.io/array-methods.html)

Array of methods

```javascript
// ---------- splice methods ----------
// 在 JavaScript 中，splice() 是一個陣列方法，用來修改原陣列，可以新增、刪除或替換元素。

// 1. 刪除元素
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2); // 從索引 1 開始，刪除 2 個元素
console.log(arr); // 輸出: [1, 4, 5]

// 2. 插入元素
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, 'a', 'b'); // 在索引 2 插入 'a' 和 'b'，不刪除任何元素
console.log(arr); // 輸出: [1, 2, 'a', 'b', 3, 4, 5]

// 3. 替換元素
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, 'x', 'y'); // 從索引 1 開始，刪除 2 個元素，並插入 'x' 和 'y'
console.log(arr); // 輸出: [1, 'x', 'y', 4, 5]

// ---------- slice methods ----------
// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const newArr = fruits.slice(0, 3);
console.log(newArr);

// ---------- includes methods ----------
//

// ---------- sort methods ----------
//

// ---------- reduce methods ----------
//

// ---------- every methods ----------
//

// ---------- some methods ----------
//

// ---------- forEach methods ----------
//

// ---------- find methods ----------
//

// ---------- map methods ----------
//

// ---------- filter methods ----------
//
```

```javascript
const fruits = [
  { name: 'apple', color: 'red', calories: 95 },
  { name: 'orange', color: 'orange', calories: 45 },
  { name: 'banana', color: 'yellow', calories: 105 },
  { name: 'coconut', color: 'white', calories: 159 },
  { name: 'pineapple', color: 'yellow', calories: 37 },
];

// Access properties of a fruit object
console.log(fruits[0].calories);

// Add a new fruit object
fruits.push({ name: 'grapes', color: 'purple', calories: 62 });

// Remove the last fruit object
fruits.pop();

// Remove fruit objects by indices
fruits.splice(1, 2);

// ---------- forEach() ----------
fruits.forEach((fruit) => console.log(fruit));
fruits.forEach((fruit) => console.log(fruit.name));
fruits.forEach((fruit) => console.log(fruit.color));
fruits.forEach((fruit) => console.log(fruit.calories));

// ---------- map() ----------
const fruitNames = fruits.map((fruit) => fruit.name);
const fruitColors = fruits.map((fruit) => fruit.color);
const fruitCalories = fruits.map((fruit) => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

// ---------- filter() ----------
const yellowFruits = fruits.filter((fruit) => fruit.color === 'yellow');
const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);

// ---------- reduce() ----------
const maxFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
);

const minFruit = fruits.reduce((min, fruit) =>
  fruit.calories < min.calories ? fruit : min
);

console.log(maxFruit);
console.log(minFruit);

// ---------- sort() ----------
const orderItem = fruits.sort((fruitA, fruitB) => {
  return fruitA.calories > fruitB.calories ? 1 : -1;
});
console.log(orderItem);

const minToHigh = fruits.sort((a, b) => {
  return a.calories - b.calories;
});
console.log(minToHigh);

const highToMin = fruits.sort((a, b) => {
  return b.calories - a.calories;
});
console.log(highToMin);
```
