## Simple Pig Latin

Description:
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !'); // elloHay orldway !

- 解法一

```js
function pigIt(str) {
  const strArr = str.split(' ');
  const result = [];
  for (let word of strArr) {
    // 檢查是否是標點符號（不是字母或數字）
    if (/^[a-zA-Z]+$/.test(word)) {
      const first = word.slice(0, 1);
      const rest = word.slice(1);
      const add = 'ay';
      result.push(rest + first + add);
    } else {
      result.push(word);
    }
  }
  return result.join(' ');
}

pigIt('Pig latin is cool'); // -> 'igPay atinlay siay oolcay'
pigIt('This is my string'); // -> 'hisTay siay ymay tringsay'
pigIt('Hello world !'); // -> elloHay orldway !
```

<br/>

```js
/^[a-zA-Z]+$/.test(word);

// 說明，檢查 word 是否只包含英文字母（大寫或小寫），且不能有其他符號或空格。

/*

/.../	正則表達式的語法表示方式（用斜線包起來）
^	開頭錨點：表示「從字串的開頭」開始比對
[a-zA-Z]	字符集：表示一個英文字母，a-z 是小寫，A-Z 是大寫
+	表示「一個或多個」英文字母
$	結尾錨點：表示「到字串的結尾」結束比對
.test(word)	方法：將 word 字串丟進正則中進行測試，會回傳布林值（true / false）

*/
```
