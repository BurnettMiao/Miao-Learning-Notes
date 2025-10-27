## JavaScript 樹搜尋

DFS

```js
const apiTree = {
  name: 'root',
  children: [
    {
      name: 'users',
      children: [{ name: 'getUser' }, { name: 'updateUser' }],
    },
    {
      name: 'products',
      children: [{ name: 'listProducts' }, { name: 'createProduct' }],
    },
  ],
};

// 使用 DFS 找 createProduct
function findNode(root, targetName) {
  // 1. 【檢查當前】如果節點不存在，或者名字已經匹配目標，則返回。
  if (!root) return null;
  if (root.name === targetName) return root;
  // 2. 【深入】如果有子節點，則開始探索它們。
  if (root.children) {
    // 3. 【遞迴】對子節點進行「深度優先」的調用。
    for (let child of root.children) {
      const result = findNode(child, targetName);
      // 4. 【立即返回】一旦在任何子分支中找到結果，立即返回，停止探索其他分支。
      if (result) return result;
    }
  }
  // 5. 【回溯】如果當前節點及其所有子節點都找完了，但沒找到，則返回 null。
  //    這相當於告訴上一層（父節點）：這條路徑沒有目標。
  return null;
}

// 使用 DFS 找 createProduct
const result = findNode(apiTree, 'createProduct');
console.log(result);
```

BFS

```js
const apiTree = {
  name: 'root',
  children: [
    {
      name: 'users',
      children: [{ name: 'getUser' }, { name: 'updateUser' }],
    },
    {
      name: 'products',
      children: [{ name: 'listProducts' }, { name: 'createProduct' }],
    },
  ],
};

// 使用 BFS 找 createProduct
function findNode(root, targetName) {
  if (!root) return null;
  // 1. 初始化佇列（Queue）
  // JavaScript 中可以用陣列模擬佇列，使用 push() 模擬入隊，使用 shift() 模擬出隊
  const queue = [root];
  // 2. 迴圈搜索：當佇列不為空時
  while (queue.length > 0) {
    // 3. 出隊並檢查當前節點 (N)
    const node = queue.shift();
    // 4. 處理/檢查：是否為目標？
    if (node.name === targetName) return node;
    // 5. 鄰居/子節點入隊
    if (node.children) {
      // 將所有子節點（鄰居）加入佇列的尾部
      queue.push(...node.children);
    }
  }
  // 6. 遍歷完畢，未找到
  return null;
}

// 使用 BFS 找 createProduct
const result = findNode(apiTree, 'createProduct');
console.log(result);
```
