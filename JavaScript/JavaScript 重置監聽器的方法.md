## JavaScript 重置監聽器的方法

這個問題可能是由於每次登錄時未正確清除先前的事件監聽器導致的。雖然你的程式碼試圖在添加新監聽器之前移除舊的監聽器，但因為每次傳遞給 removeEventListener 和 addEventListener 的函數引用都是新的匿名函數，所以 removeEventListener 無法有效移除之前添加的監聽器，導致事件監聽器累積。

以下是修改後的版本，確保每次添加和移除事件監聽器時使用相同的函數引用：

1. 將事件處理函數儲存在按鈕元素上：

可以將事件處理函數作為屬性儲存在按鈕元素上，這樣可以確保 removeEventListener 能夠正確引用並移除它。

2. 重新初始化按鈕事件監聽器：

每次登錄後重新初始化按鈕事件監聽器，確保移除先前的事件監聽器。

這是修改後的程式碼：

```javascript
const menuBtns = document.querySelectorAll('.menu-icon');
const leftDashboard = document.querySelector('.left-dashboard');

function handleClick(event, index) {
  menuBtns.forEach((item) => {
    item.classList.remove('active');
  });
  leftDashboard.classList.remove('active');
  event.currentTarget.classList.add('active');

  // 點擊左邊tab 重新 fetch data
  removeRightDashboard();
  const idMyChart = document.getElementById('myChart');
  if (index === 0) {
    fetchAiTalkData(aiTalkApi);
    const h1Text = 'AI 對話使用頻率';
    createRightDashboard(h1Text);
    reactiveBtns();
  } else if (index === 1) {
    fetchClientIntentsData(clientIntentsApi);
    const h1Text = '意圖分析';
    createRightDashboard(h1Text);
    reactiveBtns();
  } else if (index === 2) {
    fetchClientContactUsData(clientContactUsApi);
    const h1Text = '回覆統計';
    createRightDashboardContactUs(h1Text, index);
    findId();
  } else if (index === 3) {
    const h1Text = '客服滿意程度';
    createRightDashboardContactUs(h1Text, index);
  } else {
    const h1Text = 'test';
    createRightDashboard(h1Text);
  }
}

function initializeMenuButtons() {
  menuBtns.forEach((item, index) => {
    const clickHandler = (event) => handleClick(event, index);

    // 如果按鈕已經有事件處理函數，先移除它
    if (item.clickHandler) {
      item.removeEventListener('click', item.clickHandler);
    }

    // 添加新的事件處理函數
    item.addEventListener('click', clickHandler);

    // 將事件處理函數儲存到按鈕元素上
    item.clickHandler = clickHandler;
  });
}

// 初始載入時初始化按鈕事件監聽器
initializeMenuButtons();

// 每次登錄成功後重新初始化按鈕事件監聽器 (可忽略)
function onLoginSuccess() {
  initializeMenuButtons();
  // 其他登錄成功後的處理邏輯
}
```

**重要點解釋**

1. 儲存事件處理函數：

將事件處理函數儲存在按鈕元素的屬性 clickHandler 上，這樣可以在重新初始化時引用並移除它。

2. 重新初始化按鈕事件監聽器：

每次登錄成功後，調用 initializeMenuButtons 函數重新初始化按鈕事件監聽器，確保移除先前的監聽器並添加新的監聽器。

這樣可以確保每次登錄時不會累積多餘的事件監聽器，避免重複 fetch data 的問題。

```javascript
function initializeMenuButtons() {
  menuBtns.forEach((item, index) => {
    const clickHandler = (event) => handleClick(event, index);

    // 如果按鈕已經有事件處理函數，先移除它
    if (item.clickHandler) {
      item.removeEventListener('click', item.clickHandler);
    }

    // 添加新的事件處理函數
    item.addEventListener('click', clickHandler);

    // 將事件處理函數儲存到按鈕元素上
    item.clickHandler = clickHandler;
  });
}
```

**步驟解析**

1. 函數定義：
   initializeMenuButtons 是一個函數，用於初始化或重新初始化 .menu-icon 按鈕的點擊事件監聽器。

2. 迴圈遍歷按鈕：
   menuBtns.forEach((item, index) => { ... }); 這行程式碼遍歷所有帶有 .menu-icon 類別的按鈕（menuBtns 是之前使用 querySelectorAll 獲取的按鈕列表）。

3. 定義事件處理函數：
   const clickHandler = (event) => handleClick(event, index); 這行程式碼為每個按鈕定義了一個新的事件處理函數 clickHandler。這個函數會在按鈕被點擊時調用，並會將事件對象和按鈕的索引傳遞給 handleClick 函數。

4. 移除現有的事件監聽器：
   if (item.clickHandler) { item.removeEventListener('click', item.clickHandler); } 這段程式碼檢查按鈕是否已經有事件處理函數 clickHandler，如果有，就使用 removeEventListener 將其移除。這樣可以確保之前的事件處理函數不會累積，避免重複觸發。

5. 添加新的事件監聽器：
   item.addEventListener('click', clickHandler); 這行程式碼將新的 clickHandler 添加為按鈕的點擊事件監聽器。

6. 儲存事件處理函數：
   item.clickHandler = clickHandler; 這行程式碼將新添加的 clickHandler 儲存到按鈕的屬性 clickHandler 上，以便將來可以使用 removeEventListener 正確移除它。

**為什麼這樣做**
這種方法確保每次初始化按鈕事件監聽器時，不會累積重複的事件處理函數。每次重新初始化時，舊的事件處理函數會被移除，然後再添加新的事件處理函數。這樣可以避免在多次登錄或多次調用 initializeMenuButtons 後出現多次觸發 fetch 或其他操作的問題。

**總結**
這段程式碼的目的是管理 .menu-icon 按鈕的點擊事件監聽器，確保不會累積重複的事件監聽器，並且每次初始化或重新初始化時都能正確添加和移除事件監聽器。
