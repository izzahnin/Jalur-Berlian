const navbar = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 100) {
    navbar.classList.replace("nav-trans", "nav-color");
  } else if (window.scrollY <= 100) {
    navbar.classList.replace("nav-color", "nav-trans");
  }
});
