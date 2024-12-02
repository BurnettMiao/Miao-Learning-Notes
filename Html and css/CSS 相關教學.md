#### CSS 相關教學

[CSS-TRICKS](https://css-tricks.com/guides/)
[CSS Grid Layout Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
[CSS Flexbox Layout Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

視覺化 CSS 坐標系
假設一個容器內有一個元素，容器的左上角是 (0, 0)，如下圖：

```lua
  (0, 0) ---------------------------> X 軸（右方向為正）
   |
   |
   |
   ↓
 Y 軸（下方向為正）

```

定位邏輯：

- container 是參考框，左上角 (0, 0)。
- element 的 top: 50px 表示距離容器頂部 50px 向下。
- element 的 left: 100px 表示距離容器左側 100px 向右。

---
