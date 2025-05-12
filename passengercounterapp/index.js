// document.getElementById("count").innerText = 10;
// let count = 1;
// console.log(count);
// let myAge = 24;
// console.log(myAge);
// count = 3;
// count = count + 2;
// console.log(count);
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count");
count = 0;
function increment() {
  count = count + 1;

  countEl.textContent = count;
}

function save() {
  let coll = count + "-";
  saveEl.textContent += coll;
  console.log(saveEl.textContent);
  countEl.textContent = 0;
  count = 0;
  //   console.log(" its increment value in saved form is" + " " + count);
}

// function countdown() {
//   console.log(3);
//   console.log(7);
// }
// countdown();
// countdown();

// let lapsCompleted = 1;
// function incrementLapCount() {
//   lapsCompleted = lapsCompleted + 1;
//   console.log(lapsCompleted);
// }
// incrementLapCount();
// incrementLapCount();
let welcomeEl = document.getElementById("welcome-el");
let name = " Chilupuri Ganesh";
let greetings = "Hi, my name is ";
let myGreeting = greetings + name + "👋";
// console.log(myGreeting);
welcomeEl.innerText = myGreeting;

// Assignment Practice 1st
let firstName = "Chilupuri";
let lastName = "Ganesh";
let fullName = firstName + " " + lastName;
console.log(fullName);
// Create a function that logs "Hi there,Linda"
name = "linda";
greetings = "Hi there";
function promptGreetings() {
  console.log(greetings + " " + name);
}

promptGreetings();

//  challange - two functions for incrementing and decrementing
let myPoints = 3;
function add3points() {
  myPoints = myPoints + 3;
}
function removepoint() {
  myPoints = myPoints - 1;
}
add3points();
add3points();
add3points();
removepoint();
removepoint();
console.log(myPoints);
let errorMsg = document.getElementById("error");
// Rendering an error message
function purchasebutton() {
  errorMsg.textContent = "Something went wrong ,please try again later";
}
