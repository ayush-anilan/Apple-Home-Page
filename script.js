const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamBurger.addEventListener("click", () => {
  hamBurger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

function toggleDropdown() {
  var dropdown = document.querySelector(".col-heading");
  var colDetails = document.querySelector(".col-details");

  // Toggle the 'active' class on col-details
  colDetails.classList.toggle("active");

  // If dropdown is already displayed, hide it; otherwise, show it
  if (colDetails.classList.contains("active")) {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}
