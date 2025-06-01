## Take a Ten Minutes Walk

Description:
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

- 解法三

```js
function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  const directionMap = new Map([
    ['n', 0],
    ['s', 0],
    ['e', 0],
    ['w', 0],
  ]);

  for (let dir of walk) {
    directionMap.set(dir, directionMap.get(dir) + 1);
  }

  return (
    directionMap.get('n') === directionMap.get('s') &&
    directionMap.get('e') === directionMap.get('w')
  );
}

isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']); // -> should return true'

isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']); // -> 'should return false'

isValidWalk(['w']); // -> 'should return false'

isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']); // -> 'should return false'
```

- 解法二

```js
function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  let north = 0;
  let east = 0;

  for (let dir of walk) {
    if (dir === 'n') north++;
    if (dir === 's') north--;
    if (dir === 'e') east++;
    if (dir === 'w') east--;
  }

  return north === 0 && east === 0;
}
```

- 解法一

```js
function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  const directionMap = {};

  for (let direction of walk) {
    directionMap[direction] = (directionMap[direction] || 0) + 1;
  }

  if (
    directionMap['n'] === directionMap['s'] &&
    directionMap['e'] === directionMap['w']
  )
    return true;

  return false;
}

isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']); // -> should return true'

isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']); // -> 'should return false'

isValidWalk(['w']); // -> 'should return false'

isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']); // -> 'should return false'
```
