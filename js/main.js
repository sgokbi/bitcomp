"use strict";

// ==== NAVBAR ====
const navBar = document.querySelector(".navbar-nav");

// const toggleButton = document.querySelector(".navbar-toggler");
const hideBar = document.querySelector(".hide-bar");
const showBar = document.querySelector(".show-bar");

showBar.addEventListener("click", function () {
  console.log("click1");
  hideBar.style.display = "block";
  showBar.style.display = "none";
  //   hideBar.classList.add("hide-bar-clicked");
});

hideBar.addEventListener("click", function () {
  hideBar.style.display = "none";
  showBar.style.display = "block";
});

// ////////// CONTACT SECTION

// const plusCircle = document.querySelector(".plus-circle");
// const minusCircle = document.querySelector(".minus-circle");
// console.log(plusCircle);
// const hiddenAnswerBox = document.querySelector(".hidden-answer-box");

// plusCircle.addEventListener("click", function () {
//   console.log("click");
//   hiddenAnswerBox.style.display = "block";
// });

document.querySelector(".FINCSC-img").addEventListener("click", function () {
  console.log("click");
});
