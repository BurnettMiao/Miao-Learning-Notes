#### margin-inline 與 padding-inline 相關

**傳統的 margin 限制**
在 CSS 的早期，我們使用 margin-top, margin-right, margin-bottom, margin-left 這些屬性來設定元素的邊界。這種方式在簡單的布局中非常直觀，但當遇到複雜的布局，尤其是涉及到不同書寫方向（例如：從右到左）或不同布局方向（例如：垂直書寫）時，就會顯得有些笨拙。

**邏輯屬性的誕生：margin-inline 與 margin-block**
為了更好地應對這些複雜的情況，CSS 引入了 邏輯屬性 的概念。其中，margin-inline 和 margin-block 就是兩個重要的邏輯屬性，它們能夠根據元素的書寫模式、行內方向和文本朝向等屬性，自動調整邊距。

- margin-inline: 控制元素在 行內方向 上的邊距。簡單來說，就是控制元素在文字行中左右兩側的邊距。
- margin-block: 控制元素在 塊級方向 上的邊距。也就是控制元素在上下方向上的邊距。

padding-inline 與 margin-inline 非常相似，它們都是 CSS 的邏輯屬性，用於根據元素的書寫模式來設定元素的內邊距。

```html
<div class="container">
  <div class="border1">
    <div class="inside"></div>
  </div>
  <div class="border2">
    <div class="inside"></div>
  </div>
  <div class="border3">
    <div class="inside"></div>
  </div>
</div>
```

```css
.container {
  display: flex;
  border: 1px gray solid;
  padding-inline: 20px;
  padding-block: 30px;
}
.border1 {
  border: 1px solid black;
  width: 400px;
  height: 400px;
  background: black;
}
.border2 {
  border: 1px solid black;
  width: 400px;
  height: 400px;
  background: blue;
  margin-inline: 10px;
}
.border3 {
  border: 1px solid black;
  width: 400px;
  height: 400px;
  background: red;
}
```
