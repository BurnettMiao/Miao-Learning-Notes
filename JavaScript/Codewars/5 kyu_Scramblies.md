## 5 kyu Scramblies

Description:
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

- 解法一

  ```js
  function scramble(str1, str2) {
    const str1Obj = {};
    for (let char of str1) {
      str1Obj[char] = (str1Obj[char] || 0) + 1;
    }

    for (let char of str2) {
      if (str1Obj[char]) {
        str1Obj[char] = str1Obj[char] - 1;
      } else {
        return false;
      }
    }

    return true;
  }

  scramble('rkqodlw', 'world'); // -> True
  scramble('cedewaraaossoqqyt', 'codewars'); // -> True
  scramble('katas', 'steak'); // -> False
  ```
