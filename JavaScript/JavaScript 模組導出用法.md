#### 匯出單一模組寫法

helloWorld-module.js

```js
function greed() {
  return 'Hello World';
}

module.exports = greed;
```

run-helloWorld.js

```js
const greed = require('./helloWorld-module');

const result = greed();

console.log(result);
```

#### 匯出多個模組寫法

helloWorld-module.js

```js
function greed() {
  return 'Hello World';
}

function farewell() {
  return 'Goodbye World';
}

// 匯出多個模組
module.exports = { greed, farewell };
```

run-helloWorld.js

```js
const { greed, farewell } = require('./helloWorld-module');

console.log(greed());
console.log(farewell());
```
