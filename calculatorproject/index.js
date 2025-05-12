let num1 = 1;
let num2 = 2;
let num1El = document.getElementById("num1-el");
let num2El = document.getElementById("num2-el");
let sumEL = document.getElementById("sum-el");
num1El.textContent = num1;
num2El.textContent = num2;
function Addition() {
  AddResult = num1 + num2;
  sumEL.textContent = AddResult;
  console.log(sumEL.textContent);
}
function Subtraction() {
  AddResult = num1 - num2;
  sumEL.textContent = AddResult;
}
function Multiplication() {
  AddResult = num1 * num2;
  sumEL.textContent = AddResult;
}
function Division() {
  AddResult = num1 / num2;
  sumEL.textContent = AddResult;
}
