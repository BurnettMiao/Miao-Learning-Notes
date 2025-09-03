document.addEventListener('DOMContentLoaded', () => {
  let offset = 0; // 目前已載入資料數量
  let limit = 10; // 每次載入筆數
  let loading = false; // 避免連續觸發

  async function getData() {
    if (loading) return;
    loading = true;

    const params = { _start: offset, _limit: limit };
    const query = new URLSearchParams(params).toString();
    console.log(query);

    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?${query}`
      );

      if (!res.ok) {
        // HTTP 狀態非 200~299
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      display(data);

      offset += data.length;

      if (data < limit) {
        console.log('已經拿到最後一筆資料了');
      }
    } catch (err) {
      console.error('載入資料失敗:', err);
    } finally {
      loading = false;
    }
  }

  function display(data) {
    const listContainer = document.querySelector('.list-container');

    for (let person of data) {
      const liElement = document.createElement('li');
      const nameElement = document.createElement('div');
      const messageElement = document.createElement('div');

      nameElement.textContent = `name: ${person.id}`;
      messageElement.textContent = `name: ${person.body}`;

      liElement.appendChild(nameElement);
      liElement.appendChild(messageElement);
      listContainer.appendChild(liElement);
    }
  }

  // 偵測滾動到底部
  document.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.body.scrollHeight;

    console.log(scrollTop, viewportHeight, fullHeight);

    if (scrollTop + viewportHeight >= fullHeight - 5) {
      console.log('已經滾動到底部');
      getData();
    }
  });

  // 初始載入
  getData();
});
