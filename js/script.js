let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
document.addEventListener("DOMContentLoaded", function () {
  // Your code here
  menu.onclick = function () {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  };
});

// menu.classList.toggle('fa-times');
// navbar.classList.toggle('active');

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};
