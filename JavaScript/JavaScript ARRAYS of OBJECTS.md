## JavaScript ARRAYS of OBJECTS

[JavaScript 陣列處理常用方法](https://dylan237.github.io/array-methods.html)

Array of methods

```javascript
const fruits = [
  { name: 'apple', color: 'red', calories: 95 },
  { name: 'orange', color: 'orange', calories: 45 },
  { name: 'banana', color: 'yellow', calories: 105 },
  { name: 'coconut', color: 'white', calories: 159 },
  { name: 'pineapple', color: 'yellow', calories: 37 },
];

// ---------- splice methods ----------
// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// remove elements
const spliceArr = fruits.splice(0, 2);
console.log(fruits);
console.log(spliceArr);

// add elements
const addFruit = { name: 'peach', color: 'pink', calories: 86 };
fruits.splice(1, 0, addFruit);
console.log(fruits);

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
