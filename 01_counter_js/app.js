let counterDOM = document.querySelector("#counter");
let addBtnDOM = document.querySelector("#addBtn");


addBtnDOM.addEventListener("click", function () {
  let counterValue = Number(counterDOM.textContent);
  counterValue += 1; 
  counterDOM.textContent = counterValue;

  if (counterValue >= 10) {
    counterDOM.classList.add("red");
  }
 
});

