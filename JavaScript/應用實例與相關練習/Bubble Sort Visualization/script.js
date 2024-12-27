document.addEventListener('DOMContentLoaded', () => {
  const arrayContainer = document.getElementById('array-container');
  const sortBtn = document.querySelector('.start-sort-btn');

  // Create Random Array
  const array = Array.from({ length: 20 }, () => {
    return Math.floor(Math.random() * 100) + 1;
  });
  console.log(array);

  // Create bars for visualization
  function createBars() {
    // Clear previous bars
    arrayContainer.innerHTML = '';
    array.forEach((value) => {
      const bar = document.createElement('div');
      bar.className = 'bar';
      bar.style.height = `${value * 3}px`;
      arrayContainer.append(bar);
    });
  }

  // Delay function for visualization
  function delay(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  }

  // Bubble sort algorithm with visualization
  async function bubbleSort() {
    const bars = document.querySelectorAll('.bar');
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        // Highlight the bars being compared
        bars[j].classList.add('highlight');
        bars[j + 1].classList.add('highlight');

        if (array[j] > array[j + 1]) {
          // Swap the value in the array
          [array[j], array[j + 1]] = [array[j + 1], array[j]];

          // Swap the heights of bars
          bars[j].style.height = `${array[j] * 3}px`;
          bars[j + 1].style.height = `${array[j + 1] * 3}px`;
        }

        // wait for visualization
        await delay(100);

        // Remove heightlight
        bars[j].classList.remove('highlight');
        bars[j + 1].classList.remove('highlight');
      }
    }
  }

  function startBubbSort() {
    bubbleSort();
  }

  // Initial setup
  createBars();

  sortBtn.addEventListener('click', startBubbSort);
});
