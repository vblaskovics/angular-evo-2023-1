let counterDOM = document.querySelector("#counter");
let addBtnDOM = document.querySelector("#addBtn");


addBtnDOM.addEventListener("click", function () {
  counterDOM.textContent = Number(counterDOM.textContent) + 1;
});

