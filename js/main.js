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

const oddProjects = document.querySelectorAll(".odd");
const evenProjects = document.querySelectorAll(".even");

window.addEventListener("scroll", () => {
  oddProjects.forEach((p) => {
    const rect = p.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      p.classList.add("animateLeft");
    }
  });
});
window.addEventListener("scroll", () => {
  evenProjects.forEach((p) => {
    const rect = p.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      p.classList.add("animateRight");
    }
  });
});

window.onload = () => window.scrollTo(0, 0);
