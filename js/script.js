// const imgOne = "images/background3.png";
// const imgTwo = "images/background4.png";
// const imgThree = "images/background5.png";

// var images = [imgOne, imgTwo, imgThree];
// var slider = setInterval(function () {
//   document
//     .getElementsByClassName("top-container")[0]
//     .setAttribute("style", 'background-image: url("' + images[0] + '")');
//   images.splice(images.length, 0, images[0]);
//   images.splice(0, 1);
// }, 3000);

$(function () {
  // Same as document.addEventListener("DOMContentLoaded"...

  // // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  // $("#navbarToggle").blur(function (event) {
  //   var screenWidth = window.innerWidth;
  //   if (screenWidth < 768) {
  //     $("#collapsable-nav").collapse("hide");
  //   }
  // });

  const projectImages = document.querySelectorAll(".project-images");

  projectImages.forEach((image) => {
    const img = image.querySelector(".project-img");
    image.addEventListener("mouseover", () => {
      img.style.filter = "none"; // Remove filter on hover
    });
    image.addEventListener("mouseout", () => {
      img.style.filter = "grayscale(100%) contrast(1) brightness(90%)"; // Apply filter when not hovering
    });
  });

  const introHeight = document.querySelector(".top-intro").offsetHeight;
  const topButton = document.getElementById("top-button");
  const $topButton = $("#top-button");

  window.addEventListener(
    "scroll",
    function () {
      if (window.scrollY > introHeight) {
        $topButton.fadeIn();
      } else {
        $topButton.fadeOut();
      }
    },
    false
  );

  topButton.addEventListener("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});
