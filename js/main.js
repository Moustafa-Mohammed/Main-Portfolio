const hamburgerMenu = document.querySelector("#hamburger-menu");

const navLinks = document.querySelector(".nav-links");

const navLink = document.querySelectorAll(".nav-link");

console.log(navLink);

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  })
);
