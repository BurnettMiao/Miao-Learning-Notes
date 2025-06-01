## JavaScript Map 的使用方法

```js
function wordFrequency(str) {
  const cleanStr = str
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(' ');

  const charMap = new Map();
  // 用 Map 記錄每個單字出現的次數
  for (let char of cleanStr) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  // 迭代 Map 的每一個 entry（[key, value]）
  for (let [word, count] of charMap) {
    console.log(`${word} 出現 ${count}次`);
  }
  // 只迭代 Map 的 keys（所有單字）
  for (let word of charMap.keys()) {
    console.log(word);
  }
  // 只迭代 Map 的 values（對應的次數）
  for (let count of charMap.values()) {
    console.log(count);
  }

  // 轉換 Map 的 keys 變成陣列（所有單字）
  console.log([...charMap.keys()]);

  // 轉換 Map 的 values 變成陣列（所有次數）
  console.log([...charMap.values()]);

  // 使用 get 讀取 'the' 的出現次數
  console.log(charMap.get('the'));

  // 使用 set 設定 'test' 的出現次數為 1
  charMap.set('test', 1);
  console.log(charMap);
}

wordFrequency('The quick brown fox jumps over the lazy dog the dog');
```
