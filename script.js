//like button functionality

function like(likebtn) {
  if (likebtn.className == "fi fi-rs-heart") {
    likebtn.className = "fi fi-sr-heart";
  } else {
    likebtn.className = "fi fi-rs-heart";
  }
}
//

// slider button functionality

const buttonRight = document.getElementById("right-arrow-icon");
const buttonLeft = document.getElementById("left-arrow-icon");

buttonRight.onclick = function () {
  document.querySelector(".slider").scrollLeft += 250;
};
buttonLeft.onclick = function () {
  document.querySelector(".slider").scrollLeft -= 250;
};

//

// Menu button functionality

const hamburgerMenu = document.querySelector(".hamburger_menu");

const closeMenu = document.getElementById("close_menu");

const navigationBar = document.querySelector(".nav_links");

hamburgerMenu.onclick = function () {
  navigationBar.style.left = "0px";
};

closeMenu.onclick = function () {
  navigationBar.style.left = "-150%";
};

//
console.log(hamburgerMenu);
console.log(closeMenu);
console.log(navigationBar);
