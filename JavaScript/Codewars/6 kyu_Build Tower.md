## 6 kyu Build Tower

Description:
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "\*" character.

For example, a tower with 3 floors looks like this:

[
" * ",
" *** ",
"*****"
]
And a tower with 6 floors looks like this:

[
" * ",
" *** ",
" ***** ",
" ******* ",
" ********* ",
"***********"
]

- 解法一

```js
function towerBuilder(nFloors) {
  for (let i = 0; i < nFloors; i++) {
    const stars = '*'.repeat(2 * i + 1);
    const spaces = ' '.repeat(nFloors - i - 1);
    const line = spaces + stars + spaces;
    console.log(line);
  }
}

towerBuilder(3);
towerBuilder(2);
```
