"use strict";

// ==== NAVBAR ====
const navBar = document.querySelector(".navbar-nav");
console.log(navBar);
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
