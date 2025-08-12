## 5 kyu Rot13

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

- 解法二

```js
function rot13(message) {
  //your code here
  return message.replace(/[a-zA-Z]/g, (char) => {
    const base = char <= 'Z' ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
  });
}

rot13('test'); // -> "grfg"
rot13('Test'); // -> "Grfg"
```

- 解法一

```js
function rot13(message) {
  //your code here
  const upperCaseA = 'A'.charCodeAt(0);
  const upperCaseZ = 'Z'.charCodeAt(0);
  const lowerCaseA = 'a'.charCodeAt(0);
  const lowerCaseZ = 'z'.charCodeAt(0);
  let newLetter = '';

  console.log(upperCaseA, upperCaseZ);
  for (let char of message) {
    const charCode = char.charCodeAt(0);

    if (charCode >= upperCaseA && charCode <= upperCaseZ) {
      const charCodePlus = charCode + 13;
      if (charCodePlus > upperCaseZ) {
        const convertString = String.fromCharCode(
          charCodePlus - upperCaseZ + +upperCaseA - 1
        );
        newLetter += convertString;
      } else {
        newLetter += String.fromCharCode(charCodePlus);
      }
    } else if (charCode >= lowerCaseA && charCode <= lowerCaseZ) {
      const charCodePlus = charCode + 13;
      if (charCodePlus > lowerCaseZ) {
        const convertString = String.fromCharCode(
          charCodePlus - lowerCaseZ + lowerCaseA - 1
        );
        newLetter += convertString;
      } else {
        newLetter += String.fromCharCode(charCodePlus);
      }
    } else {
      newLetter += char;
    }
  }

  return newLetter;
}

rot13('test'); // -> "grfg"
rot13('Test'); // -> "Grfg"
```
