## JavaScript Class

Class => (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor function

ex. static keyword, encapsulation, inheritance

```javascript
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
}

const salesTax = 0.05;

const product1 = new Product('Shirt', 19.99);
const product2 = new Product('Pants', 20.5);
const product3 = new Product('Underwear', 100.0);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);
```

---

```js
// 步驟 1：建立「貓」的建構函式 (定義屬性)
// Cat 建構函式
function Cat(name, color) {
  console.log('一隻新的貓咪誕生了！');

  // `this` 指向即將被建立出來的新貓咪物件
  // 將傳入的名字和顏色，設定成這隻貓咪自己的屬性
  this.name = name;
  this.color = color;
  // 每隻貓咪出生時，都有 50 點體力
  this.energy = 50;
}

// 步驟 2：在原型上新增「共用技能」(定義方法)
// 在 Cat 的原型上新增一個 meow (叫) 的方法
Cat.prototype.meow = function () {
  console.log(this.name + ' 說：喵嗚～');
};

// 在 Cat 的原型上新增一個 eat (吃飯) 的方法
Cat.prototype.eat = function () {
  console.log(this.name + ' 正在吃飯，看起來津津有味！');
  this.energy = this.energy + 20;
  console.log(this.name + ' 的體力恢復了！目前體力：' + this.energy);
};

// 新增一個玩耍的方法，玩耍會消耗體力
Cat.prototype.play = function () {
  if (this.energy >= 10) {
    console.log(this.name + ' 開心的追著雷射筆跑！');
    this.energy = this.energy - 10; // 玩耍會消耗 10 點體力
    console.log(this.name + ' 玩累了。剩下體力：' + this.energy);
  } else {
    console.log(this.name + ' 玩累了，只想躺著不動。');
  }
};

// 步驟 3：實際建立 (實例化) 幾隻貓
// 建立第一隻貓
const mimi = new Cat('咪咪', '橘色');
// 建立第二隻貓
const blackie = new Cat('小黑', '黑色');
console.log('----------');

// 步驟 4：與貓咪們互動
// 讓咪咪叫
mimi.meow();

// 讓小黑叫
blackie.meow();
console.log('----------');

// 讓咪咪去玩
mimi.play();

// 查看現在的體力，只有咪咪的體力下降了，小黑不受影響
console.log(mimi.name + ' 的體力：' + mimi.energy);
console.log(blackie.name + ' 的體力：' + blackie.energy);
console.log('----------');

// 讓咪咪吃飯補充體力
mimi.eat();
```

---

class 語法版本

```js
// 使用 class 關鍵字來定義一個類別
class Cat {
  // constructor 是 class 的 的「建構函式」，名稱是固定的
  // 當 new Cat() 被呼叫時，它會自動執行
  constructor(name, color) {
    console.log('一隻新的貓咪誕生了！（from class）');

    // 屬性的定義方式完全相同，使用this
    this.name = name;
    this.color = color;
    this.energy = 50;
  }

  // 方法（技能）直接寫在 class 內部
  // 不需要寫 Cat.prototype，也不需要 function 關鍵字
  meow() {
    // `this` 的用法也完全相同，指向呼叫它的實例
    console.log(this.name + ' 說：喵嗚～');
  }

  eat() {
    console.log(this.name + ' 正在吃飯，看起來津津有味！');
    this.energy = this.energy + 20;
    console.log(this.name + ' 的體力恢復了！目前體力：' + this.energy);
  }

  play() {
    if (this.energy >= 10) {
      console.log(this.name + ' 開心的追著雷射筆跑！');
      this.energy = this.energy - 10;
      console.log(this.name + ' 玩累了。剩下體力：' + this.energy);
    } else {
      console.log(this.name + ' 累壞了，只想躺著不動。');
    }
  }
}

// 建立實例的方式不變
const mimi = new Cat('咪咪', '橘色');
const blackie = new Cat('小黑', '黑色');
console.log('----------');
// 呼叫方法的方式也不變
mimi.meow();
blackie.play();
mimi.eat();
```
