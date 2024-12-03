## JavaScript PROMISES

Promise = An Object that manages asynchronous operations. Wrap a Promise Object around {asynchronous code} "I promise to return a value". PENDING -> RESOLVED or REJECTED

```javascript
new Promise((resolve, reject) => {asynchronous code})
```

DO THESE CHORES IN ORDER

1. WALK THE DOG
2. CLEAN THE KITCHEN
3. TAKOUT THE TRASH

- callback hell

```javascript
function walkDog(callback) {
  setTimeout(() => {
    console.log('You walk the dog!');
    callback();
  }, 1500);
}

function cleanKitchen(callback) {
  setTimeout(() => {
    console.log('You clean the kitchen!');
    callback();
  }, 2500);
}

function takeOutTrash(callback) {
  setTimeout(() => {
    console.log('You take out the trash!');
    callback();
  }, 500);
}

walkDog(() => {
  cleanKitchen(() => {
    takeOutTrash(() => {
      console.log('You finish all the chores!');
    });
  });
});
```

- Promise (resolve)

```javascript
function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('You walk the dog!');
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('You clean the kitchen!');
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('You take out the trash!');
    }, 500);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log('You finish all the chores!');
  });
```

- Promise (resolve, reject)

```javascript
function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogwalked = true;
      if (dogwalked) {
        resolve('You walk the dog!');
      } else {
        reject("You DIDN'T walk the dog!");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;
      if (kitchenCleaned) {
        resolve('You clean the kitchen!');
      } else {
        reject("You DIDN'T clean the kitchen!");
      }
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = false;
      if (trashTakenOut) {
        resolve('You take out the trash!');
      } else {
        reject("You DIDN'T take out the trash!");
      }
    }, 500);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log('You finish all the chores!');
  })
  .catch((error) => console.error(error));
```

方法一: 實測 promise 寫法

```javascript
const nameArr = [];

const url = 'https://jsonplaceholder.typicode.com/users';

function promiseA(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('response was not ok!');
        } else {
          return res.json();
        }
      })
      .then((data) => {
        data.forEach((item) => {
          console.log(item.name);
          nameArr.push(item.name);
        });
        resolve(nameArr);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}

function promiseB() {
  console.log(nameArr);
}

promiseA(url)
  .then(() => {
    return promiseB();
  })
  .catch((value) => {
    console.log(value);
  });
```

方法一更優化的寫法

```javascript
const url = 'https://jsonplaceholder.typicode.com/users';

function promiseA(url) {
  // 返回 fetch 的 Promise
  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error('response was not ok.');
      }
      return res.json();
    })
    .then((data) => {
      // 返回名字陣列
      return data.map((item) => item.name);
    });
}

function promiseB(nameArr) {
  console.log('Names: ', nameArr);
}

promiseA(url)
  .then((nameArr) => {
    promiseB(nameArr);
  })
  .catch((error) => {
    console.log('Error: ', error);
  });
```

實測 async await 寫法

```javascript
const url = 'https://jsonplaceholder.typicode.com/users';

async function fetchNames(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('response was not ok!');
    }

    const data = await res.json();
    const nameArr = data.map((item) => {
      return item.name;
    });
    return nameArr;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function main() {
  try {
    const nameArr = await fetchNames(url);
    console.log(nameArr);
  } catch (error) {
    console.log(error);
  }
}

main();
```
