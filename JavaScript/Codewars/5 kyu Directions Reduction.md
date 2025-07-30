## 5 kyu Directions Reduction

Description:
Once upon a time, on a way through the old wild mountainous west,…
… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

How I crossed a mountainous desert the smart way.
The directions given to the man are, for example, the following (depending on the language):

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or
{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or
[North, South, South, East, West, North, West]
You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

["WEST"]
or
{ "WEST" }
or
[West]
Other examples:
In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

Task
Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

The Haskell version takes a list of directions with data Direction = North | East | West | South.
The Clojure version returns nil when the path is reduced to nothing.
The Rust version takes a slice of enum Direction {North, East, West, South}.
The OCaml version takes a list of type direction = | North | South | East | West.
See more examples in "Sample Tests:"
Notes
Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
if you want to translate, please ask before translating.

- 解法二

  ```js
  function dirReduc(arr) {
    const opposites = {
      NORTH: 'SOUTH',
      SOUTH: 'NORTH',
      EAST: 'WEST',
      WEST: 'EAST',
    };

    const stack = [];

    for (let dir of arr) {
      if (stack.length && opposites[dir] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(dir);
      }
    }

    return stack;
  }

  dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']); // -> ["WEST"]
  dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']); // -> ["NORTH", "WEST", "SOUTH", "EAST"]
  dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']); // -> []
  ```

- 解法一

  ```js
  function dirReduc(arr) {
    const numArr = arr.map((item) => {
      if (item === 'NORTH') {
        return 1;
      } else if (item === 'SOUTH') {
        return -1;
      } else if (item === 'EAST') {
        return 2;
      } else {
        return -2;
      }
    });

    let hasOffset = true;
    while (hasOffset) {
      hasOffset = false;
      for (let i = 1; i < numArr.length; i++) {
        if (numArr[i - 1] + numArr[i] === 0) {
          numArr.splice(i - 1, 2);
          hasOffset = true;
          break;
        }
      }
    }

    return numArr.map((item) => {
      if (item === 1) {
        return 'NORTH';
      } else if (item === -1) {
        return 'SOUTH';
      } else if (item === 2) {
        return 'EAST';
      } else {
        return 'WEST';
      }
    });
  }

  dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']); // -> ["WEST"]
  dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']); // -> ["NORTH", "WEST", "SOUTH", "EAST"]
  dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']); // -> []
  ```
