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

DFS 進階應用

```js
const api = [
  {
    menuNo: 100,
    menuName: '學習中心',
    subMenuItems: [
      {
        menuNo: 101,
        menuName: '入門指南',
        subMenuItems: [
          {
            menuNo: 201,
            menuName: '基礎訓練 第一週',
            courseList: [
              {
                id: 'L001',
                courseTitle: '平台導覽與基本操作',
                hasExam: false,
                duration: '00:15:00',
              },
              {
                id: 'L002',
                courseTitle: '資料管理入門',
                hasExam: true,
                duration: '00:25:00',
              },
            ],
          },
          {
            menuNo: 202,
            menuName: '基礎訓練 第二週',
            courseList: [
              {
                id: 'L003',
                courseTitle: '溝通技巧：有效提問與回應',
                hasExam: true,
                duration: '00:30:00',
              },
              {
                id: 'L004',
                courseTitle: '目標設定與追蹤方法',
                hasExam: false,
                duration: '00:20:00',
              },
            ],
          },
        ],
      },
      {
        menuNo: 102,
        menuName: '進階學院',
        courseList: [
          {
            id: 'L005',
            courseTitle: '時間管理與會議優化',
            hasExam: true,
            duration: '00:45:00',
          },
          {
            id: 'L006',
            courseTitle: '團隊激勵與績效對談',
            hasExam: true,
            duration: '00:40:00',
          },
          {
            id: 'L007',
            courseTitle: '專案規劃與風險評估',
            hasExam: false,
            duration: '00:35:00',
          },
        ],
      },
    ],
  },
  {
    menuNo: 200,
    menuName: '技能工坊',
    subMenuItems: [
      {
        menuNo: 301,
        menuName: '數位工具',
        courseList: [
          {
            id: 'S001',
            courseTitle: '雲端協作平台實務',
            hasExam: true,
          },
          {
            id: 'S002',
            courseTitle: '資料視覺化入門',
            hasExam: false,
          },
        ],
      },
    ],
  },
];

// 1. 找課程："時間管理與會議優化"
function findNode(root, targetName) {
  if (!root) return null;
  if (Array.isArray(root)) {
    for (let item of root) {
      const result = findNode(item, targetName);
      if (result) return result;
    }
    return null;
  }
  // 檢查 menuName 或 courseTitle
  if (root.menuName === targetName || root.courseTitle === targetName) {
    return root;
  }
  // 遞迴子目錄
  if (root.subMenuItems) {
    for (let child of root.subMenuItems) {
      const result = findNode(child, targetName);
      if (result) return result;
    }
  }
  // 遞迴課程列表
  if (root.courseList) {
    for (let course of root.courseList) {
      const result = findNode(course, targetName);
      if (result) return result;
    }
  }

  return null;
}

findNode(api, '時間管理與會議優化');
console.log('-----+++++-----+++++-----');

// 2. 找目錄："進階學院"
findNode(api, '進階學院');
console.log('-----+++++-----+++++-----');

// 找 ID："S001"
function findNodeById(root, targetId) {
  if (!root) return null;
  if (Array.isArray(root)) {
    for (let item of root) {
      const result = findNodeById(item, targetId);
      if (result) return result;
    }
    return null;
  }

  if (root.id === targetId) return root;

  if (root.subMenuItems) {
    for (let child of root.subMenuItems) {
      const result = findNodeById(child, targetId);
      if (result) return result;
    }
  }

  if (root.courseList) {
    for (let course of root.courseList) {
      const result = findNodeById(course, targetId);
      if (result) return result;
    }
  }

  return null;
}
findNodeById(api, 'S001');
console.log('-----+++++-----+++++-----');

// 找出所有 hasExam: true 的課程
function findAllWithExam(root, result = []) {
  if (!root) result;
  if (Array.isArray(root)) {
    for (let item of root) {
      findAllWithExam(item, result);
    }
    result;
  }

  if (root.courseList) {
    for (let course of root.courseList) {
      if (course.hasExam) {
        result.push(course);
      }
    }
  }

  if (root.subMenuItems) {
    for (let child of root.subMenuItems) {
      findAllWithExam(child, result);
    }
  }

  return result;
}
findAllWithExam(api);
console.log('-----+++++-----+++++-----');

// 找出路徑："溝通技巧：有效提問與回應"
// 預期輸出: ["學習中心", "入門指南", "基礎訓練 第二週", "溝通技巧：有效提問與回應"]
function findPathTo(root, targetName, path = []) {
  if (!root) return null;
  if (Array.isArray(root)) {
    for (let item of root) {
      const result = findPathTo(item, targetName, path);
      if (result) return result;
    }
    return null;
  }

  // 加入當前節點名稱
  const currentName = root.menuName || root.courseTitle || '';
  path.push(currentName);

  if (currentName === targetName) {
    return path;
  }

  if (root.subMenuItems) {
    for (let child of root.subMenuItems) {
      const result = findPathTo(child, targetName, [...path]); // 複製 path
      if (result) return result;
    }
  }

  if (root.courseList) {
    for (let course of root.courseList) {
      const result = findPathTo(course, targetName, [...path]);
      if (result) return result;
    }
  }

  return null;
}
findPathTo(api, '溝通技巧：有效提問與回應');
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
