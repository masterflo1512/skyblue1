// let plusCounter = document.getElementById("plusBtn");
// let minusCounter = document.getElementById("minusBtn");
// let number = document.getElementById("number");
// let count = 0;

// plusCounter.addEventListener("click", function () {
//   count++;
//   number.innerHTML = count;
// });

// minusCounter.addEventListener("click", function () {
//   count--;
//   number.innerHTML = count;
// });

// ************************************************

// let inputext = document.getElementById("inputext");
// let plusCounter = document.getElementById("plusBtn");
// let minusCounter = document.getElementById("minusBtn");
// let number = document.getElementById("number");
// let count = 0;

// function getInputValue() {
//   let inputVal = document.getElementById("inputext").value;
// }
// plusCounter.addEventListener("click", function () {
//   count++;
//   inputext.innerHTML = count;
// });

// minusCounter.addEventListener("click", function () {
//   count--;
//   number.innerHTML = count;
// });

// *************************************************

// document.getElementById("plusBtn").addEventListener("click", () => {
//   let data = +document.getElementById("inputnumber").value;
//   document.getElementById("number").innerHTML += data;
// });

let plusCounter = document.getElementById("plusBtn");
let minusCounter = document.getElementById("minusBtn");
let number = document.getElementById("number");
let inputValue = document.getElementById("inputNumber");
let data = 0;

plusCounter.addEventListener("click", function () {
  let data = +inputValue.Value;
  numberResult.innerHTML = data;
});
