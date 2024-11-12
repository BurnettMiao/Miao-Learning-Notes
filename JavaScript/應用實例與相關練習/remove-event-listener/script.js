window.onload = function () {
  // 多個按鈕使用 removeEventListener 的用法
  const btns = document.querySelectorAll('.btn');
  function handleClick(index) {
    console.log('btn was clicked!', index);
  }

  btns.forEach((btn, index) => {
    const eventHandler = function () {
      handleClick(index);
    };

    btn.addEventListener('click', eventHandler);

    setTimeout(() => {
      btn.removeEventListener('click', eventHandler);
      console.log('Event listener removed!');
    }, 5000);
  });
};
