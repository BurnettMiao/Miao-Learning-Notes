## 5 kyu Pete, the baker

Description:
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

- 解法二

```js
function cakes(recipe, available) {
  return Math.min(
    ...Object.keys(recipe).map((key) =>
      Math.floor((available[key] || 0) / recipe[key])
    )
  );
}

// must return 2
cakes(
  { flour: 500, sugar: 200, eggs: 1 },
  { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
);
// must return 0
cakes(
  { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
  { sugar: 500, flour: 2000, milk: 2000 }
);
```

- 解法一

```js
function cakes(recipe, available) {
  const countNum = [];

  for (let key in recipe) {
    if (!available[key]) return 0;
    countNum.push(Math.floor(available[key] / recipe[key]));
  }

  return Math.min(...countNum);
}

// must return 2
cakes(
  { flour: 500, sugar: 200, eggs: 1 },
  { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
);
// must return 0
cakes(
  { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
  { sugar: 500, flour: 2000, milk: 2000 }
);
```

---

**解題紀錄**

- 建立一個空白陣列，接著 for in loop 把 recipe 裡面的 key 找出來，如果 available 裡面其中有一個 key 沒有值的話表示無法做出食物 return 0，如果有的話就可以把 available / recipe 之後的數字放進之前的空白陣列，再使用 ...展開運算子且加入 Math.min() 找出最小值即可
- 學到 Object.keys 可以把物件轉成 key 陣列
- 學到 ... 展開運算子可以把陣列打散給 Math.min

**使用到 function**
Object.keys(), map(), Math.floor(), Math.min(), ...（展開運算子）, for in loop
