## JavaScript Object 物件相關

**Object.assign() 的作用**
Object.assign() 方法的語法是 Object.assign(target, ...sources)，它將一個或多個來源物件（sources）的屬性複製到目標物件（target）上。這會直接改變目標物件，而不會返回新的物件。最終的目標物件會包含來源物件的所有屬性，若屬性重複，來源物件的屬性會覆蓋目標物件的原有屬性。
Object.assign() 是淺拷貝，如果 source 中的屬性值是引用類型（如物件或陣列），則 target 中的屬性將引用同一個內部物件。

---

**基礎練習：新增、修改、讀取和刪除物件屬性**

```javascript
// ----- 使用 Dot Notation 讀取 Object -----
const obj = {};

// 1. 新增屬性
(obj.name = 'Alice'), (obj.age = 25);

console.log(obj);

// 2. 讀取屬性
console.log(obj.name);
console.log(obj.age);

// 3. 修改屬性
obj.age = 32;
console.log(obj.age);

// 4.刪除屬性
delete obj.age;
console.log(obj.age);

if (!obj.age) {
  console.log('obj沒有age這個key');
}

// ----- 使用 Bracket Notation 讀取 Object -----
const cityObj = {};

// 1. 新增屬性
cityObj['city'] = 'New York';
cityObj['country'] = 'USA';

console.log(cityObj);

// 2. 讀取屬性
console.log(cityObj['city']);
console.log(cityObj['country']);

// 3. 修改屬性
cityObj['city'] = 'Los Angeles';

console.log(cityObj['city']);

// 4. 刪除屬性
delete cityObj['country'];

console.log(cityObj);

// ----- 檢查屬性是否存在 -----
const personObj = { name: 'Alice', age: 25 };

// 使用 in 檢查屬性
console.log('name' in personObj); // Output: true
console.log('address' in personObj); // Output: false

// 使用 undefined 檢查
if (personObj.address === undefined) {
  console.log('Address does not exist');
}

// ----- 使用 Object.keys 和 Object.values 列出所有屬性 -----
const personInfo = { name: 'Alice', age: 25, city: 'New York' };

// 列出所有屬性名稱
console.log(Object.keys(personInfo)); // Output: ["name", "age", "city"]

// 列出所有屬性值
console.log(Object.values(personInfo)); // Output: ["Alice", 25, "New York"]

// ----- 使用函數來新增或刪除屬性 -----
const colorObj = { colorOne: 'red' };

// 函數: 新增屬性
function addProperty(obj, key, value) {
  obj[key] = value;
}

addProperty(colorObj, 'colorTwo', 'blue');
console.log(colorObj);

// 函數: 刪除屬性
function deleteProperty(obj, key) {
  delete obj[key];
}

deleteProperty(colorObj, 'colorTwo');
console.log(colorObj);

// ----- 條件新增和更新 -----
// 如果屬性不存在則新增屬性，如果屬性已存在則更新屬性。
const peopleObj = { name: 'Alice' };

function addOrUpdate(obj, key, value) {
  if (key in obj) {
    console.log(`${key} already exists. Update value`);
  } else {
    console.log(`Adding new property ${key}.`);
  }
  obj[key] = value;
}

addOrUpdate(peopleObj, 'name', 'Bob');
addOrUpdate(peopleObj, 'age', 30);

console.log(peopleObj);

// ----- 使用 for...in 迴圈遍歷物件，並列出每個屬性的名稱和值 -----
const newObj = { name: 'Alice', age: 25, city: 'New York' };

for (let key in newObj) {
  console.log(`${key}: ${newObj[key]}`);
}
```

---

#### 何謂物件取值？在什麼時機上會用到？點(.)和方括號([])取值的不同之處

[何謂物件取值？在什麼時機上會用到？點(.)和方括號([])取值的不同之處](https://hackmd.io/@peter77730/BkOHgKBUK?utm_source=preview-mode&utm_medium=rec)

1. 何謂物件取值？
   用大括號 { } 包覆起來的資料，就是物件，而物件可以記錄很多不同屬性的資料。而屬性與後面的值，中間用 ： 連結，每一個屬性中間用 , 分開即可。
   要將物件內的資料取出使用，就是物件取值。

2. 物件取值有兩種：
   用點'.'或是中括號'[ ]'：

```javascript
let aboutMe = {
  name: 'Peter Chen',
  height: 200,
  weight: 100,
  members: {
    mom: '老媽',
    pa: '老爸',
    bro: '老弟',
  },
};
console.log(aboutMe.name); // 'Peter Chen'
console.log(aboutMe['name']); // 'Peter Chen'
//undefined
```

3. 中括號'[ ]'的使用時機：
   - 可以以變數取值

```javascript
let aboutMe = {
  name: 'Peter Chen',
  height: 200,
  weight: 100,
  members: {
    mom: '老媽',
    pa: '老爸',
    bro: '老弟',
  },
};

let myName = 'name'; //設定變數myName

console.log(aboutMe.myName); // undefined
console.log(aboutMe[myName]); // 'Peter Chen'
```

- 屬性開頭是數字時

```javascript
let aboutMe = {
    name: 'Peter Chen',
    height: 200,
    weight: 100,
    123: '木頭人',//屬性開頭是數字
    members: {
        mom: '老媽',
        pa: '老爸',
        bro: '老弟'
    }
};
console.log(aboutMe.123); // 錯誤訊息發生
console.log(aboutMe['123']); // '木頭人'
```

- 可以新增特殊字元

```javascript
let aboutMe = {
  name: 'Peter Chen',
  height: 200,
  weight: 100,
  123: '木頭人', //屬性開頭是數字
  members: {
    mom: '老媽',
    pa: '老爸',
    bro: '老弟',
  },
};

aboutMe['$Money'] = '1000萬';

console.log(aboutMe);
/*
{
  '123': '木頭人',
  name: 'Peter Chen',
  height: 200,
  weight: 100,
  members: { mom: '老媽', pa: '老爸', bro: '老弟' },
  '$Money': '1000萬'
}
*/
```
