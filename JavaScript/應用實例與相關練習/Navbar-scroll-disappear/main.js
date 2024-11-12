document.addEventListener('DOMContentLoaded', () => {
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
});
