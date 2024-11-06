#### Navbar 滾動頁面時消失

HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Sandbox</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="./styles.css" />
  </head>

  <body>
    <nav>This is navbar</nav>
    <section>
      <h3>This section area</h3>
      <button>Button</button>
    </section>

    <script src="./main.js"></script>
  </body>
</html>
```

CSS

```css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

nav {
  position: fixed;
  padding-block: 0.75rem;
  background-color: bisque;
  color: black;
  text-align: center;
  width: 100%;
  opacity: 1;
  transition: opacity 0.4s ease-in-out;
}

nav.hidden {
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
}

section {
  background-color: beige;
  display: grid;
  place-content: center;
  width: 100%;
  height: 900px;
}

button {
  margin-top: 1rem;
  border: none;
  cursor: pointer;
  padding-inline: 0.25rem;
  padding-block: 0.75rem;
  border-radius: 16px;
  background-color: brown;
  color: white;
  transition: 0.8s;
}

button:hover {
  background-color: cadetblue;
}
```

JavaScript

```js
const navbar = document.querySelector('nav');
const navWidth = navbar.offsetWidth;
const navHeight = navbar.offsetHeight;
const disappear = 50;

console.log(`Navbar 寬度: ${navWidth}，高度: ${navHeight}`);

window.addEventListener('scroll', () => {
  const scrollPixel = window.scrollY;
  console.log(`捲軸捲動高度: ${scrollPixel}`);

  if (scrollPixel > disappear) {
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
  }
});
```
