const increase = document.querySelector("#inc");
const decrease = document.querySelector("#dec");
const reset = document.querySelector("#res");
const counter = document.querySelector("#count");

let countValue = 0;

increase.addEventListener("click", () => {
  countValue++;
  counter.textContent = countValue;
});

reset.addEventListener("click", () => {
  countValue;
  counter.textContent = 0;
});

decrease.addEventListener("click", () => {
  if (countValue > 0) {
    countValue--;
  }
  counter.textContent = countValue;
});


