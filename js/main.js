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
              INFORMATION SYSTEM PAGE start 
====================================================================   */
// <!-- ======= 	BITCAMP GEO DATA SECTION  ========  -->
document
  .querySelector(".geo-data-logo-img")
  .addEventListener("click", function () {
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
