// const increase = document.querySelector("#inc");
// const decrease = document.querySelector("#dec");
// const reset = document.querySelector("#res");
// const counter = document.querySelector("#count");

// let countValue = 0;

// increase.addEventListener("click", () => {
//   countValue++;
//   counter.textContent = countValue;
// });

// reset.addEventListener("click", () => {
//   countValue;
//   counter.textContent = 0;
// });

// decrease.addEventListener("click", () => {
//   if (countValue > 0) {
//     countValue--;
//   }
//   counter.textContent = countValue;
// });


//Alternative Method

const button = document.querySelectorAll("button");

const counter = document.querySelector("#count");
let countValue = 0;

function handleclick(e) {
  const button = e.target;
  if (button.id === "inc") {
    countValue++;
  }
  if (button.id === "res") {
    countValue = 0;
  }
  if (button.id === "dec") {
    if(countValue>0){
        countValue--;
    }
  }
counter.innerHTML = countValue;
}

button.forEach((button) => {
  button.addEventListener("click", handleclick);
});
