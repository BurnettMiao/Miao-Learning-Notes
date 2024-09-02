## DOM 的相關操作

- classList.contains() <br />
  在 JavaScript 中，你可以使用 classList.contains() 來檢查某个元素是否具有特定的 class 名稱。這個方法是 Element.classList 的一部分，用来操作元素的 class 屬性。element.classList.contains('myClass') 會返回一个布林值 (true 或 false)，表示元素是否包含 myClass 這個 class。

  ```javascript
  const element = document.querySelector('#myElement');

  // 檢查是否包含指定的 class
  if (element.classList.contains('myClass')) {
    console.log('Element contains the class "myClass"');
  } else {
    console.log('Element does not contain the class "myClass"');
  }
  ```

- className.includes() <br />

  ```html
  <div class="box highlight">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box special">Box 3</div>
  ```

  ```javascript
  // 獲取所有具有 class "box" 的元素
  const boxes = document.querySelectorAll('.box');

  // 遍歷每個元素，檢查 className 是否包含 'highlight'
  boxes.forEach((box) => {
    if (box.className.includes('highlight')) {
      console.log(`Element with class "${box.className}" contains 'highlight'`);
      // 例如，改變這個元素的文字顏色
      box.style.color = 'red';
    } else {
      console.log(
        `Element with class "${box.className}" does not contain 'highlight'`
      );
    }
  });
  ```
