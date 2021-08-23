let plusCounter = document.getElementById("plusBtn");
let minusCounter = document.getElementById("minusBtn");
let number = document.getElementById("number");
let count = 0;

plusCounter.addEventListener("click", function () {
  count++;
  number.innerHTML = count;
});

minusCounter.addEventListener("click", function () {
  count--;
  number.innerHTML = count;
});

// *************************************************

// let count = 0;
// document.getElementById("value").textContent = count;

// function increase() {
//   count++;
//   document.getElementById("value").textContent = count;
// }
