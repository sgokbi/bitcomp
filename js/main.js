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

/* ====================================================================
       FORESTA PAGE start 
====================================================================   */
const bbb = document.querySelector(".all-systems-tools");
console.log(bbb);
const buttons = document.querySelectorAll(".button");
console.log(buttons);
const contents = document.querySelectorAll(".content");
console.log(contents);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    console.log(buttons[i]);
    console.log(contents[i]);

    for (const content of contents) {
      content.classList.remove("active");
      contents[i].classList.add("active");
    }

    for (const btn of buttons) {
      btn.classList.remove("active");
      buttons[i].classList.add("active");
    }
  });
}

/* ====================================================================
              INFORMATION SYSTEM PAGE start 
====================================================================   */
// <!-- ======= 	BITCAMP GEO DATA SECTION  ========  -->
const geoData = document.querySelector(".geo-data-logo-img");
console.log(geoData);
console.log("cccc");

geoData.addEventListener("click", function () {
  window.location.href =
    "https://bitcomp.com/wp-content/uploads/2018/11/geodata.jpg";
});

const leafPoint = document.querySelector("#leaf-point-logo");
leafPoint.addEventListener("click", () => {
  window.location.href = "https://www.leafpoint.fi/";
});

const WoodApp = document.querySelector("#woodsApp-logo");
WoodApp.addEventListener("click", () => {
  window.location.href = "https://bitcomp.com/fi/woodsapp/";
});

const foresta = document.querySelector("#foresta-logo");
foresta.addEventListener("click", () => {
  window.location.href = "foresta.html";
});
