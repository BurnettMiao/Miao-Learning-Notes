## 6 kyuHighest Scoring Word

Description:
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

- 解法三

  ```js
  function high(str) {
    const words = str.split(' ');
    const scores = words.map((word) =>
      word.split('').reduce((sum, ch) => sum + (ch.charCodeAt(0) - 96), 0)
    );
    const maxIndex = scores.indexOf(Math.max(...scores));
    return words[maxIndex];
  }

  high('man i need a taxi up to ubud'); // -> 'taxi'
  //high('what time are we climbing up the volcano'); // -> 'volcano'
  //high('take me to semynak'); // -> 'semynak'
  //high('aa b'); // -> 'aa'
  //high('b aa'); // -> 'b'
  //high('bb d'); // -> 'bb'
  //high('d bb'); // -> 'd'
  //high('aaa b'); // -> 'aaa'
  ```

- 解法二

  ```js
  function high(str) {
    const wordsArr = str.split(' ');
    const numArr = wordsArr.map((word) => {
      const letterNum = word.split('').map((letter) => {
        return letter.charCodeAt(0) - 96;
      });

      return letterNum.reduce((sum, num) => {
        return sum + num;
      }, 0);
    });
    console.log(numArr);
    let max = 0;
    let index = 0;
    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] - max > 0) {
        max = numArr[i];
        index = i;
      }
    }

    return wordsArr[index];
  }

  high('man i need a taxi up to ubud'); // -> 'taxi'
  //high('what time are we climbing up the volcano'); // -> 'volcano'
  //high('take me to semynak'); // -> 'semynak'
  //high('aa b'); // -> 'aa'
  //high('b aa'); // -> 'b'
  //high('bb d'); // -> 'bb'
  //high('d bb'); // -> 'd'
  //high('aaa b'); // -> 'aaa'
  ```

- 解法一

  ```js
  function high(str) {
    const strArr = str.split(' ');

    const numArr = strArr.map((item) => {
      const splitLetter = item.split('');
      let num = 0;
      for (let i = 0; i < splitLetter.length; i++) {
        num += splitLetter[i].charCodeAt(0) - 96;
      }
      return num;
    });

    let maxNum = 0;
    let maxNumIndex = 0;

    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] - maxNum > 0) {
        maxNum = numArr[i];
        maxNumIndex = i;
      }
    }

    return strArr[maxNumIndex];
  }

  high('man i need a taxi up to ubud'); // -> 'taxi'
  high('what time are we climbing up the volcano'); // -> 'volcano'
  high('take me to semynak'); // -> 'semynak'
  high('aa b'); // -> 'aa'
  high('b aa'); // -> 'b'
  high('bb d'); // -> 'bb'
  high('d bb'); // -> 'd'
  high('aaa b'); // -> 'aaa'
  ```
