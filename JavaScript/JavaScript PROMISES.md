## JavaScript PROMISES

1. callback hell

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

2. Promise (resolve)

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

3. Promise (resolve, reject)

```javascript
function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogwalked = true;
      if (dogwalked) {
        resolve('You walk the dog!');
      } else reject("You DIDN'T walk the dog!");
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
