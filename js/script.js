const imgOne = "images/background7.png";
const imgTwo = "images/background4.png";
const imgThree = "images/background10.png";
const imgFour = "images/background3.png";
const imgFive = "images/background5.png";

var images = [imgOne, imgTwo, imgThree, imgFour, imgFive];
var slider = setInterval(function () {
  document
    .getElementsByClassName("top-container")[0]
    .setAttribute("style", 'background-image: url("' + images[0] + '")');
  images.splice(images.length, 0, images[0]);
  images.splice(0, 1);
}, 3000);

$(function () {
  // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse("hide");
    }
  });
});
