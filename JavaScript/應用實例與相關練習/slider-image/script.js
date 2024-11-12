// 教學出處: https://www.youtube.com/watch?v=OTjmnF27ADk

document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  nextBtn.addEventListener('click', () => {
    let items = document.querySelectorAll('.item');
    console.log(items[0]);
    document.querySelector('.slide').appendChild(items[0]);
  });

  prevBtn.addEventListener('click', () => {
    let items = document.querySelectorAll('.item');
    // here the length of item = 6
    document.querySelector('.slide').prepend(items[items.length - 1]);
  });
});
