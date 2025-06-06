## Greed is Good

Description:
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

Three 1's => 1000 points
Three 6's => 600 points
Three 5's => 500 points
Three 4's => 400 points
Three 3's => 300 points
Three 2's => 200 points
One 1 => 100 points
One 5 => 50 point
Each of 5 dice can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

```table
 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
```

Note: your solution must not modify the input array.

- 解法二

```js
function score(dice) {
  const count = {};
  let point = 0;

  // 計算每個數字出現次數
  for (let num of dice) {
    count[num] = (count[num] || 0) + 1;
  }

  // 處理三個一組的得分
  for (let i = 1; i <= 6; i++) {
    const c = count[i] || 0;
    if (c >= 3) {
      point += i === 1 ? 1000 : i * 100;
      count[i] -= 3;
    }
  }

  // 處理剩下的 1 和 5 的得分
  point += (count[1] || 0) * 100;
  point += (count[5] || 0) * 50;

  return point;
}

console.log(score([1, 1, 1, 5, 1])); // 1150
console.log(score([2, 3, 4, 6, 2])); // 0
console.log(score([3, 4, 5, 3, 3])); // 350
console.log(score([1, 5, 1, 2, 4])); // 250
```

- 解法一

```js
function score(dice) {
  const diceMap = {};
  let point = 0;

  for (let num of dice) {
    diceMap[num] = (diceMap[num] || 0) + 1;
  }

  for (let key in diceMap) {
    if (diceMap[key] >= 3) {
      if (key === '1') {
        point += 1000;
        diceMap[key] -= 3;
      } else {
        point += Number(key) * 100;
        diceMap[key] -= 3;
      }
    }
  }

  for (let key in diceMap) {
    if (key === '1') {
      point += diceMap[key] * 100;
    }

    if (key === '5') {
      point += diceMap[key] * 50;
    }
  }

  return point;
}

console.log(score([1, 1, 1, 5, 1])); // 1150
console.log(score([2, 3, 4, 6, 2])); // 0
console.log(score([3, 4, 5, 3, 3])); // 350
console.log(score([1, 5, 1, 2, 4])); // 250
```
