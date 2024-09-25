document.addEventListener("DOMContentLoaded", () => {
  const counterValue = document.getElementById("counter-value");
  const incrementBtn = document.getElementById("increment-btn");
  const decrementBtn = document.getElementById("decrement-btn");
  const resetBtn = document.getElementById("reset-btn");

  let count = 0;
  incrementBtn.addEventListener("click", () => {
    count++;
    updateCounter();
  });

  decrementBtn.addEventListener("click", () => {
    count--;
    updateCounter();
  });

  resetBtn.addEventListener("click", () => {
    count = 0;
    updateCounter();
  });

  const updateCounter = () => {
    counterValue.textContent = count;
  };
});
