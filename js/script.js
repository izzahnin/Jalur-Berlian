const navbar = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 100) {
    navbar.classList.replace("nav-trans", "nav-color");
  } else if (window.scrollY <= 100) {
    navbar.classList.replace("nav-color", "nav-trans");
  }
});

const menuToggle = document.getElementById("toggle-button");
const naviList = document.getElementById("navi-list");

menuToggle.addEventListener("click", function () {
  naviList.classList.toggle("active");
});
