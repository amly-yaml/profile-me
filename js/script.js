const imgOne = "images/background1.png";
const imgTwo = "images/background8.jpg";
const imgThree = "images/background7.png";
const imgFour = "images/background4.png";
const imgFive = "images/background10.png";
const imgSix = "images/background2.png";
const imgSeven = "images/background3.png";
const imgEight = "images/background5.png";

var images = [
  imgOne,
  imgTwo,
  imgThree,
  imgFour,
  imgFive,
  imgSix,
  imgSeven,
  imgEight,
];

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
