## 何謂物件取值？在什麼時機上會用到？點(.)和方括號([])取值的不同之處

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
