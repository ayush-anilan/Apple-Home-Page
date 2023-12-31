const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamBurger.addEventListener("click", () => {
  hamBurger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
