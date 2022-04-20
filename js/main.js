const hamburgerMenu = document.querySelector("#hamburger-menu");

const navLinks = document.querySelector(".nav-links");

const navLink = document.querySelectorAll(".nav-link");

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  })
);

const projects = document.querySelectorAll(".project");

// window.addEventListener("scroll", () => {
//   projects.forEach((p) => {
//     const rect = p.getBoundingClientRect();
//     if (rect.top < window.innerHeight) {
//       p.classList.add("show-project");
//     } else {
//       p.classList.remove("show-project");
//     }
//   });
// });

window.onload = () => window.scrollTo(0, 0);
